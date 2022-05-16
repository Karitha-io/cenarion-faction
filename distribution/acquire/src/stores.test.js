const stores = require('./stores')

test('distribution', () => {
  const holders = {
    bob: 1,
    alice: 2
  }

  const distro = stores.calculateDistribution(holders)

  const expected = {
    distro: {
      bob: 1 / 50,
      alice: 2 / 50
    },
    remainder: 47 / 50
  }

  expect(distro).toEqual(expected)
})
