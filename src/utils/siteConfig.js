const helpers = require('./helpers')
const environment = process.env.NODE_ENV
const liveProductionUrl = `https://resetapi.fitwomensweekly.com`
const liveDevelopmentUrl = `https://fww-reset-api-development.firebaseapp.com/`
const localDevelopmentUrl = `http://localhost:5000`

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
      environment === 'development' ? localDevelopmentUrl : liveDevelopmentUrl
    }`
  }
}
