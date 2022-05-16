import * as fs from 'fs'
import { LoadWallet } from './wallet.js'
import { GasLimit, Balance, TransactionPayload, EsdtHelpers, Address, ProxyProvider, NetworkConfig, Transaction } from '@elrondnetwork/erdjs'

const main = async () => {
  // use 'acquire' module to generate the list
  const distroFile = await fs.promises.readFile('distribution.json', { encoding: 'utf8' })
  const distro = JSON.parse(distroFile)

  const myWallet = await LoadWallet()

  const provider = new ProxyProvider('https://gateway.elrond.com', { timeout: 5000 })
  await NetworkConfig.getDefault().sync(provider)

  await myWallet.account.sync(provider)

  for (const address in distro) {
    // give an exact fraction of realm (2 decimal places as an int), e.g. 1.2345 REALM = 123
    const realmFixed = Math.floor((distro[address].toFixed(2) * 100))
    // REALM 18 decimals; take off two for the above addition
    const realmDecimals = '0000000000000000'
    // combine to make final balance amount
    const realm = realmFixed + realmDecimals
  
    const esdtFields = EsdtHelpers.getTxFieldsForEsdtTransfer(toHex('REALM-8ead17'), realm)
  
    const tx = new Transaction({
      value: Balance.Zero(),
      receiver: new Address(address),
      sender: myWallet.getAddress(),
      data: new TransactionPayload(esdtFields.data),
      gasLimit: new GasLimit(esdtFields.gasLimit)
    })
  
    tx.setNonce(myWallet.account.getNonceThenIncrement())
  
    await myWallet.signer.sign(tx)
    await tx.send(provider)
    await tx.awaitExecuted(provider)

    // log
    console.log('Success: ' + address + ' sent ' + distro[address].toFixed(2))
    await fs.promises.appendFile('distro.log', address + ' sent ' + distro[address].toFixed(2) + '\n')
  }
}

const toHex = (string) => {
  return Buffer.from(string, 'utf8').toString('hex')
}

main()
