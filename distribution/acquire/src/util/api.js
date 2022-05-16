const axios = require('axios').default

const get = async (uri) => {
  const resp = await axios.get(uri)
  return resp
}

module.exports = {
  get
}
