const rings = require('./src/rings')
const stores = require('./src/stores')
const carto = require('./src/carto')
const fs = require('fs')

const run = async (realm) => {
  // these could be less than 19, so divert rest of funds to faction wallet
  // holders is array of ring IDs
  const ringHolders = await rings.getHolders()

  // holders is number of stores held
  const storeHolders = await stores.getHolders()

  // holders is amount of EGLD comitted (out of 27)
  const cartoHolders = await carto.getHolders()

  // calculate all of our weighted distributions
  const ringWeighted = rings.calculateDistribution(ringHolders)
  const storeWeighted = stores.calculateDistribution(storeHolders)
  const cartoWeighted = carto.calculateDistribution(cartoHolders)

  const ringAllocation = calculateRealmAllocation(ringWeighted.distro, realm * 0.1)
  const storeAllocation = calculateRealmAllocation(storeWeighted.distro, realm * 0.195)
  const cartoAllocation = calculateRealmAllocation(cartoWeighted.distro, realm * 0.105)

  const allocations = mergeAllocations([ringAllocation, storeAllocation, cartoAllocation])

  let totalAllocated = 0
  for (const allocation in allocations) {
    totalAllocated += allocations[allocation]
  }

  console.log(`Total ${(totalAllocated * 100/realm).toFixed(2)}% allocation, ${totalAllocated.toFixed(2)} of ${realm} REALM...`)

  fs.writeFileSync('distribution.json', JSON.stringify(allocations, null, 2))
}

const calculateRealmAllocation = (distro, realm) => {
  const allocation = {}

  for (const address in distro) {
    allocation[address] = distro[address] * realm
  }

  return allocation
}

const mergeAllocations = (allocations) => {
  const merged = {}

  for (let i = 0; i < allocations.length; i++) {
    for (const allocation in allocations[i]) {
      if (allocation in merged) {
        merged[allocation] += allocations[i][allocation]
      } else {
        merged[allocation] = allocations[i][allocation]
      }
    }
  }

  return merged
}

module.exports = {
  run,
  calculateRealmAllocation,
  mergeAllocations
}
