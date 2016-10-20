

let smoothScrollWebSites =  require('smoothscroll-for-websites')

module.exports = {
    install(Vue, options = { name: 'smoothScrollWebsites' }) {
      Object.defineProperty(Vue.prototype, '$SmoothScrollWebSites', {
          get: function () {
              return smoothScrollWebSites;
          }
      });
      Object.defineProperty(Vue.prototype, '$SmoothScrollWebSitesOptions', {
          get: function () {
              return window.SmoothScrollOptions;
          },
          set: function (value) {
              window.SmoothScrollOptions = value;
          }
      });
    }
}
