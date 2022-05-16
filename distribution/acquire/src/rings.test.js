const rings = require('./rings')
const api = require('./util/api')

jest.mock('./util/api')

test('rings combined', async () => {
  api.get = jest.fn(() => {
    return {
      data:
      {
        owner: 'erd1npyy8qydk2awwln54zlk3tn093xk45k0dzfvcc44ry7f5s79esvqs4w0l3',
        identifier: 'ring'
      }
    }
  }).mockImplementationOnce(() => {
    return {
      data:
    {
      owner: 'bob',
      identifier: 'ring1'
    }
    }
  }).mockImplementationOnce(() => {
    return {
      data:
    {
      owner: 'bob',
      identifier: 'ring2'
    }
    }
  })

  const ringHolders = await rings.getHolders()

  const expected = {
    bob: ['ring1', 'ring2']
  }

  expect(ringHolders).toEqual(expected)
})

test('distribution', () => {
  const holders = {
    bob: ['ring1', 'ring2'],
    alice: ['ring9']
  }

  const distro = rings.calculateDistribution(holders)

  const expected = {
    distro: {
      bob: 2 / 19,
      alice: 1 / 19
    },
    remainder: 16 / 19
  }

  expect(distro).toEqual(expected)
})
