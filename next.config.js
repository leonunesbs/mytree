const withPWA = require("next-pwa");

module.exports = {
  future: {
    webpack5: true,
  },
};


module.exports = withPWA({
  pwa: {
    dest: "public",
    disable: process.env.NODE_ENV === "development",
    register: true,
    cacheOnFrontEndNav: true,
  },
});
