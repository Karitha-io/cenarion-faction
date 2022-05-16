const api = require('./util/api')

const getHolders = async () => {
  const rings = {}

  const blacklist = [
    'erd1npyy8qydk2awwln54zlk3tn093xk45k0dzfvcc44ry7f5s79esvqs4w0l3', // xarek mint wallet
    'erd1qqqqqqqqqqqqqpgqjw0glp0mud67c46slx0m85gyt4ckssulkagqt4asqa', // lannuvar
    'erd1qqqqqqqqqqqqqpgqpnj8u3jjvpvq7rq4vsjv3w7gdgzc5778kagqh7lvmc', // kalu'ak
    'erd1qqqqqqqqqqqqqpgq57l7mg5e7mw6m2lctd87au568nkdu9kpkagqxe6rgm', // cenarion
    'erd1qqqqqqqqqqqqqpgqnxs3jup9qj34hthmnxrarmhh69674en6kagqpzs99w', // hodir
    'erd1qqqqqqqqqqqqqpgqyun8mha8xerfypl3vdx2k2wgu233ca9lkagq9xak9g' // iron light
  ]

  for (let i = 1; i < 20; i++) {
    const resp = await api.get('https://api.elrond.com/nfts/CENBANDS-322fe2-' + i.toString(16).padStart(2, '0'))

    if (blacklist.includes(resp.data.owner)) { continue }

    if (resp.data.owner in rings) {
      rings[resp.data.owner].push(resp.data.identifier)
    } else {
      rings[resp.data.owner] = [resp.data.identifier]
    }
  }

  return rings
}

const calculateDistribution = (holders) => {
  // there should be 19 rings, so if not fully utilised still allocate correct amount
  const totalRings = 19

  const distro = {}
  let remainder = totalRings

  for (const holder in holders) {
    distro[holder] = holders[holder].length / totalRings
    remainder -= holders[holder].length
  }

  return { distro: distro, remainder: remainder / totalRings }
}

module.exports = {
  getHolders,
  calculateDistribution
}
