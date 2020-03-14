const helpers = require('./helpers')
const environment = process.env.NODE_ENV
const localDevelopmentUrl = process.env.REACT_APP_LOCAL_URL
const liveApiUrl = process.env.REACT_APP_API_URL

module.exports = {
  breakPoints: {
    mobile: helpers.getRems(600),
    tablet: helpers.getRems(960),
    ipadPro: helpers.getRems(1100),
    laptop: helpers.getRems(1450),
    ultraWide: helpers.getRems(1460)
  },
  api: {
    baseUrl: `${
      environment === 'development' ? localDevelopmentUrl : liveApiUrl
    }`
  }
}

// `${
//   environment === 'development'
//     ? localDevelopmentUrl
//     : deployEnvironment === 'staging'
//     ? liveDevApiUrl
//     : liveProdApiUrl
// }`
