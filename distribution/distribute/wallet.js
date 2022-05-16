import * as fs from 'fs'
import { Address, Account, UserSecretKey, UserSigner } from '@elrondnetwork/erdjs'

export const LoadWallet = async () => {
  const keystore = await fs.promises.readFile('wallet/cenarion_distro.json', { encoding: 'utf8' })
  const jsonContents = JSON.parse(keystore)
  const pemContents = await fs.promises.readFile('wallet/cenarion_distro.pem', { encoding: 'utf8' })
  const pemKey = UserSecretKey.fromPem(pemContents)

  return new Wallet(
    new Address(jsonContents.address),
    pemKey.hex(),
    jsonContents,
    pemContents)
}

class Wallet {
  constructor (address, secretKeyHex, keyFileObject, pemFileText) {
    this.address = address
    this.secretKeyHex = secretKeyHex
    this.secretKey = Buffer.from(secretKeyHex, 'hex')
    this.signer = new UserSigner(UserSecretKey.fromString(secretKeyHex))
    this.keyFileObject = keyFileObject
    this.pemFileText = pemFileText
    this.account = new Account(this.address)
  }

  getAddress () {
    return this.address
  }
}
