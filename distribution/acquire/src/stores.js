const getHolders = async () => {
  const holders = {
    erd1g79c8xdhx8tllz3dfvzurdrywpe75qyv0l0axecywpufqql9e86sz322s5: 2,
    erd1pfs8xwfaypzyc8sm3dyufxamawhj7se68zdpw5njw9ppwgz7qfdqept4zn: 1,
    erd14vlkclg8pthhcjgaj84ejunpnff50q42ezcvantkapcjafkx5vtq5gd2xw: 2,
    erd1el4h5tk0pzxnnewr6hzevqjs8h27xu8uqxyn52fumf00c4end6fq3j4ft2: 2,
    erd10c0pfr5g5c7hd0arnechczhgetwad8ah6896gum0f8pw2lzdsfcqsx7e2z: 1,
    erd10l83xdeagzdx2jrhnad4za25mpwjsd8vmk4k8qn96lj6e5xfd0wqx96ane: 1,
    erd1z4xjt3dnlz5nyt8vsp5r68ftmstfepldc4r3yv9rfyknyn872psstnrh3f: 1,
    erd1z0dtxrxm0mcvnfumn39hv99hwmsslugjhpyyd8mww9ps43zc400qk49542: 1,
    erd16wq3dksrqhgs3h8k7xvsjz6newwft2sfnqfkw047kcuktwnfzs2qd2knvl: 3,
    erd1f25nxfn68eslmp2hz956g3nlq39uqzktxlhmcjx5zvqnk50cjagqwj7ddj: 1,
    erd1s2489xc52r0d0rr256f0tgyx2mhkjzgxgk4czny5lk4lrehce6yqyufxj2: 1,
    erd18cul26nuuvfn63ts7fyul3updx977mcpxxqtq2383ch72ulprrdquz3dz4: 1,
    erd1ywmzcy98pj7h99z553lmnfc7wvjufmjypwg6h5ltgfvcj3n8vavswnerra: 1,
    erd1urnrxzwq3n66rvs2rgzvux40fyckz5csmtdsguwmfctuyjnh50asdr0ju0: 1,
    erd1lgegrdtsm08cykzpg9tg6shy4r2pz8vh9lpqjupt6unqwk6828es5u9xw2: 1,
    erd1m06ejwzm5exdt3fuasyjt5jqae4r68ad257ge8d20wnajkhsaqxqwxgjrs: 1,
    erd1e7dn3a0lhgmm7877ds0qpdtxgrrar8ttcp2vhzz8ux4h2az5nsmqdxx30x: 2,
    erd1q3yfrdhvl38qlx9gqrtfs0cufmqlnz0ytzsq2a5ul6ltwvugz8uqx2nn30: 1,
    erd1m6elshwy4sn3ejtt6l5s94m5mugu2flu5pfz3d8u8wyn48fe72qqr3h7fx: 1,
    erd1gusvmk76yynmjdgp8fppt34hyuhtkly5m2dnj7vqf80ml3t7z7esz4pplu: 1,
    erd1mg3u5fm0d4rquxpr7hxt096507ze4j4xpngfuweynewc9cphgy8q4y972q: 1,
    erd1ynraa8gnx9zzfcjvmzfh074fsgcrddgfg3qqlj7n3cygc8zhnc0sly4eyc: 1,
    erd12xun43zaej6kdh6eh0u9kku36x5wyzw4yqm74q52flep40wjxlhs3jyhjt: 1,
    erd1mhnca82w33zf9a87qw8yja5n390dc72va6xvycdjznkkl9269r3qfdg8ts: 1
  }

  return holders
}

const calculateDistribution = (holders) => {
  // max allocation 50 stores
  const totalStores = 50

  const distro = {}
  let remainder = totalStores

  for (const holder in holders) {
    distro[holder] = holders[holder] / totalStores
    remainder -= holders[holder]
  }

  return { distro: distro, remainder: remainder / totalStores }
}

module.exports = {
  getHolders,
  calculateDistribution
}
