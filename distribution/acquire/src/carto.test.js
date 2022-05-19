const carto = require('./carto')

test('distribution', () => {
  const holders = {
    bob: 3.5,
    alice: 0.5
  }

  const distro = carto.calculateDistribution(holders)

  const expected = {
    distro: {
      bob: 3.5 / 27,
      alice: 0.5 / 27
    },
    remainder: 23 / 27
  }

  expect(distro).toEqual(expected)
})
