// @AngularClass
/*
 * When testing with webpack and ES6, we have to do some extra
 * things get testing to work right. Because we are gonna write test
 * in ES6 to, we have to compile those as well. That's handled in
 * karma.conf.js with the karma-webpack plugin. This is the entry
 * file for webpack test. Just like webpack will create a bundle.js
 * file for our client, when we run test, it well compile and bundle them
 * all here! Crazy huh. So we need to do some setup
*/
Error.stackTraceLimit = Infinity;
// require('phantomjs-polyfill');
// require('es6-promise');
// require('es6-shim');
// require('es7-reflect-metadata');


// Prefer CoreJS over the polyfills above
require('core-js');

require('zone.js/dist/zone.js');
require('zone.js/dist/long-stack-trace-zone.js');
require('zone.js/dist/jasmine-patch.js');

// RxJS
require('rxjs/Rx');

var testing = require('angular2/testing');
var browser = require('angular2/platform/testing/browser');

testing.setBaseTestProviders(
  browser.TEST_BROWSER_PLATFORM_PROVIDERS,
  browser.TEST_BROWSER_APPLICATION_PROVIDERS);

Object.assign(global, testing);

window.__karma__ && require('./karma-require');
