const app = require('./app')

test('allocation', () => {
  const distro = {
    bob: 0.1123,
    alice: 0.3345
  }

  const allocation = app.calculateRealmAllocation(distro, 1000)

  const expected = {
    bob: 1000 * 0.1123,
    alice: 1000 * 0.3345
  }

  expect(allocation).toEqual(expected)
})

test('merge', () => {
  const distroA = {
    bob: 100,
    alice: 1
  }

  const distroB = {
    bob: 50,
    tom: 9
  }

  const distroC = {
    peter: 13,
    mark: 3
  }

  const merged = app.mergeAllocations([distroA, distroB, distroC])

  const expected = {
    bob: 150,
    alice: 1,
    tom: 9,
    peter: 13,
    mark: 3
  }

  expect(merged).toEqual(expected)
})
