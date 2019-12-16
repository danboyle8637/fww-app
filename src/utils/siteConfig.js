const helpers = require('./helpers')
const environment = process.env.NODE_ENV

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
      environment === 'development'
        ? `http://localhost:5000`
        : 'https://resetapi.fitwomensweekly.com'
    }`
  }
}
