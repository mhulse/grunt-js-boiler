# Grunt Boiler.

**A starting point for [Grunt.js](http://gruntjs.com/) projects/repositories.**

---

## About

* The example source file, `build/src/jquery.worf.js`, is meant to illustrate how one might use [Grunt](http://gruntjs.com/) to build a jQuery plugin.
* Build-generated versions, of the above source file, can be found in `worf/`:
	* `jquery.worf.js`: Original source file with an added [banner comment](http://gruntjs.com/getting-started#an-example-gruntfile).
	* `jquery.worf.min.js`: Uglified/minified version with an added "short" banner comment.
* An example demo file, `index.html`, can be found in `demo/`; this file links to `worf/jquery.worf.min.js` and is meant to illustrate how one might setup a [demo page](http://mhulse.github.io/grunt-boiler/demo/) for their plugin code.

## Build

1. **Mac user?** Install [Homebrew](http://mxcl.github.io/homebrew/) and then run `$ brew install node` (sorry [MacPorts](http://www.macports.org/) users, you're on your own).  
**Windows user?** [Install Node](http://nodejs.org/download/).  
**Tips?** [Brew Node NPM Grunt tips](https://github.com/registerguard/registerguard.github.com/wiki/Brew-Node-NPM-Grunt-tips)

1. Clone repository to your local machine:

 ```bash
 $ git clone https://github.com/mhulse/grunt-boiler.git
 ```

1. Install Grunt's command line interface (CLI) globally:

 ```bash
 $ npm install -g grunt-cli
 ```

1. Next, `cd` to `grunt-boiler/build/` and install project dependencies:

 ```bash
 $ cd grunt-boiler/build/
 $ npm install
 ```

1. Now simply run `grunt` to generate build versions into `worf/`:

 ```bash
 $ grunt
 ```

1. **Optional:** Run `$ grunt watch` to automatically regenerate build files when you modify `build/src/jquery.worf.js` or anything in `demo/`.

## Demo

[![qr code](http://chart.apis.google.com/chart?cht=qr&chl=https://github.com/mhulse/grunt-boiler/&chs=240x240)](http://mhulse.github.io/grunt-boiler/demo/)

---

#### LEGAL

Copyright &copy; 2013 [Micky Hulse](http://mhulse.com)

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this work except in compliance with the License. You may obtain a copy of the License in the LICENSE file, or at:

[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
