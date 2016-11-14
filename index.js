import smooth from "smoothscroll-for-websites"
export default {
    name: "vueSmoothScrollWebsites",
    install : function(Vue) {
        Object.defineProperty(Vue.prototype, "$SmoothScrollWebSites", {
            get: function() {
                return smooth;
            }
        })
        Object.defineProperty(Vue.prototype, "$SmoothScrollWebSitesOptions", {
            get: function() {
                return window.SmoothScrollOptions;
            },
            set: function(value) {
                window.SmoothScrollOptions = value;
            }
        })
    }
}
