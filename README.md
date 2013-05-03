# Grunt Boiler.

### A starting point for [Grunt.js](http://gruntjs.com/) projects/repositories.

---

#### ABOUT

* The example source file, `build/src/jquery.worf.js`, is meant to illustrate how one might use [Grunt](http://gruntjs.com/) to build a jQuery plugin.
* Build-generated versions of the above source file can be found in the `worf/` folder:
    * `jquery.worf.js`: Original source file with an added [banner comment](http://gruntjs.com/getting-started#an-example-gruntfile).
    * `jquery.worf.min.js`: Uglified/minified version with an added "short" banner comment.
* An example demo file, `index.html`, can be found in the `demo` folder; this file links to `worf/jquery.worf.min.js` and is meant to illustrate how one might setup a demo page for their plugin code.

**Note:** My local development workflow consists of [Sublime Text 2](http://www.sublimetext.com/) with the [ST2 Live Reload plugin](https://github.com/dz0ny/LiveReload-sublimetext2), [Firefox](http://www.mozilla.org/en-US/firefox/new/) with the [Live Reload browser extension](http://feedback.livereload.com/knowledgebase/articles/86242) installed and [XAMPP](http://www.apachefriends.org/en/xampp.html) as my Apache server with the demo folder loaded in Firefox via a spoofed URI of `git.local/...` (details here: [Mac](https://github.com/registerguard/registerguard.github.com/wiki/XAMPP%3A-Mac)/[Windows](https://github.com/registerguard/registerguard.github.com/wiki/XAMPP%3A-Windows)).

---

#### BUILD

1. **Mac user?** Install [Homebrew](http://mxcl.github.io/homebrew/) and then run `$ brew install node` (sorry [MacPorts](http://www.macports.org/) users, you're on your own).  
**Windows user?** [Install Node](http://nodejs.org/download/).  
**Tips?** [Brew Node NPM Grunt tips](https://github.com/registerguard/registerguard.github.com/wiki/Brew-Node-NPM-Grunt-tips)

1. Clone repository to your local machine:  
```bash
$ git clone https://github.com/registerguard/grunt-boiler.git
```

1. Install Grunt's command line interface (CLI) globally:  
```bash
$ npm install -g grunt-cli
```

1. Go inside `grunt-boiler/build` folder and install project dependencies:  
```bash
$ cd grunt-boiler/build
$ npm install
```

1. Now simply run `grunt` to generate build versions into the `/worf` folder:  
```bash
$ grunt
```

1. **Optional:** Run `$ grunt watch` to automatically regenerate build files when you change files in `build/src/` or `demo/` folders.

1. **Bonus:** Install the [LiveReload](http://feedback.livereload.com/knowledgebase/articles/86242) browser plugin to automatically reload your demo page when Grunt regenerates a new build (I'm using [Sublime Text 2](http://www.sublimetext.com/) and [LiveReload for Sublime Text 2](https://github.com/dz0ny/LiveReload-sublimetext2)).

---

#### DEMO

[![qr code](http://chart.apis.google.com/chart?cht=qr&chl=https://github.com/registerguard/repo/&chs=240x240)](http://registerguard.github.io/grunt-boiler/demo/)

(Scan QR code with phone and/or click to [view the latest demo](http://registerguard.github.io/grunt-boiler/demo/).)

---

#### LEGAL

Copyright &copy; 2013 [Micky Hulse](http://hulse.me)/[The Register-Guard](http://registerguard.com)

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this work except in compliance with the License. You may obtain a copy of the License in the LICENSE file, or at:

[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
