const helpers = require('./helpers')
const environment = process.env.NODE_ENV
const liveProductionUrl = process.env.REACT_APP_PROD_API_URL
const localDevelopmentUrl = process.env.REACT_APP_PROD_DEV_URL

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
      environment === 'development' ? localDevelopmentUrl : liveProductionUrl
    }`
  }
}
