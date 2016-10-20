# vue-smoothscroll-websites

> it&#x27;s a vuejs version of smoothscroll-websites Based on https://github.com/galambalazs/smoothscroll-for-websites
> Smooth scrolling experience for websites.

## How to Use

``` bash
# install dependencies
npm install vue-smoothscroll-websites
```
then in the js file , you can use with router or others
``` javascript
var vueSmoothScrollWebsites = require('vue-smoothscroll-websites');
Vue.use(vueSmoothScrollWebsites);

```
```javascript
new App({
  created:function(){
    this.$SmoothScrollWebSitesOptions = { keyboardSupport: false } 
    this.$SmoothScrollWebSites({ stepSize: 20 });
  }
})

```
more apis , you can refer to https://github.com/galambalazs/smoothscroll-for-websites/wiki
