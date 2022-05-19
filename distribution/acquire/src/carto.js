const getHolders = async () => {
  const holders = {
    erd18cul26nuuvfn63ts7fyul3updx977mcpxxqtq2383ch72ulprrdquz3dz4: 0.5,
    erd1vdd9044vpt3wq0wtr4aa02kvqkmn3y4nqr3x7tuvda5uv5kya8ms359c36: 3,
    erd1qmm3uzhqwgqgdt0uqn8d6zwfu3apje72g8zu3hkq2lcep403094qy4hly2: 0.25,
    erd1l50pgy07chfn4xu29pu92chard7g3k02zzfhvweu2z0t86h47ptqn72lj7: 0.5,
    erd1lgegrdtsm08cykzpg9tg6shy4r2pz8vh9lpqjupt6unqwk6828es5u9xw2: 0.5,
    erd1x52y2fjvjg4rjlpptp8f836gde304evvyhcxujhzfyqvz0wgnkasah3u2h: 1,
    erd1ywmzcy98pj7h99z553lmnfc7wvjufmjypwg6h5ltgfvcj3n8vavswnerra: 1,
    erd1k2malfrcupwva52txd272v8n2afdupumrvuhdrmmjwnpen96t72sfcpnlp: 0.5,
    erd1k9led4tglzs8v6zlxj5ejp8kuldzjflxgqxc3g7zgutuxz6cz55s99d2y6: 1,
    erd1f25nxfn68eslmp2hz956g3nlq39uqzktxlhmcjx5zvqnk50cjagqwj7ddj: 0.5,
    erd1w5u2fc80tye6v4au70cfetnpj0wgkznm4v7uwqkdgwxpqwl7zqaq26vzn5: 0.25,
    erd10l83xdeagzdx2jrhnad4za25mpwjsd8vmk4k8qn96lj6e5xfd0wqx96ane: 2.75,
    erd13uz9t2336w0v2apm5h0rk625sxgf5twfuhkqly5ug9adsdaayd3qnv3mgy: 0.5,
    erd19f5fvygqtuppfjd9k4uupdahdgjp0m4jrmzh6e0y5srtmm0e2plqm5k5ym: 0.25,
    erd14vlkclg8pthhcjgaj84ejunpnff50q42ezcvantkapcjafkx5vtq5gd2xw: 1,
    erd10nmpfav6l6fcr9c85zpelxefvs5xrm5ypsytyhzmekp4l4v8afkskwp790: 0.5,
    erd1c3jstmgrlcjvufllef3gmll44k9v6xp45uql3aklvhmqm3ehh42qdreyxv: 1,
    erd1g79c8xdhx8tllz3dfvzurdrywpe75qyv0l0axecywpufqql9e86sz322s5: 0.5,
    erd1jxm9yg3n5sxwtwk7fy9vg2s6exqclazunngy8vzwgkzgtjaed9usndlypa: 0.25,
    erd1e7dn3a0lhgmm7877ds0qpdtxgrrar8ttcp2vhzz8ux4h2az5nsmqdxx30x: 0.5,
    erd16wq3dksrqhgs3h8k7xvsjz6newwft2sfnqfkw047kcuktwnfzs2qd2knvl: 1,
    erd1ve8w7z6edk9paswleychparyjvmlkuu96g0zvamz3vyh099mxygq5lq63s: 0.5,
    erd1z4xjt3dnlz5nyt8vsp5r68ftmstfepldc4r3yv9rfyknyn872psstnrh3f: 2,
    erd1lz84pcvp3j5v65vumcr2v2ttql4kgqv94p5s0m28wgkkvkupdpgq4rvh85: 1,
    erd10c0pfr5g5c7hd0arnechczhgetwad8ah6896gum0f8pw2lzdsfcqsx7e2z: 1,
    erd15csgedxz7x2fcarjhru8hsxfvrdm5ceerk7kxrrqddwsxsuqw8mq864z57: 1,
    erd1gusvmk76yynmjdgp8fppt34hyuhtkly5m2dnj7vqf80ml3t7z7esz4pplu: 1,
    erd1el4h5tk0pzxnnewr6hzevqjs8h27xu8uqxyn52fumf00c4end6fq3j4ft2: 0.5,
    erd1pfs8xwfaypzyc8sm3dyufxamawhj7se68zdpw5njw9ppwgz7qfdqept4zn: 0.25,
    erd1s2489xc52r0d0rr256f0tgyx2mhkjzgxgk4czny5lk4lrehce6yqyufxj2: 1,
    erd1khefy0zp0vh9fa5q83hzpr7mlt0udmuafd0y95nggu4yzp29sluqccrqnq: 0.5,
    erd16z0afxklkhfds799qhased7cqe0rjzsuqdahjpur2uuerwrmy0zq3lyvst: 1
  }

  return holders
}

const calculateDistribution = (holders) => {
  // carto cost 27 EGLD
  const totalCost = 27

  const distro = {}
  let remainder = totalCost

  for (const holder in holders) {
    distro[holder] = holders[holder] / totalCost
    remainder -= holders[holder]
  }

  return { distro: distro, remainder: remainder / totalCost }
}

module.exports = {
  getHolders,
  calculateDistribution
}
