# [Grunt.js](http://gruntjs.com/) boiler.

### Starting point for Grunt.js projects/repositories.

---

#### ABOUT

* Source files are located in the `build` folder.
* Demo files can be found in the `demo` folder.
* Final versions of the source files can be found in the `boiler` folder.

---

#### COMPILE

1. Copy repository:  
```bash
$ git clone https://github.com/registerguard/grunt-boiler.git
```
2. Install grunt globally (if you haven't yet):  
```bash
$ npm install -g grunt-cli
```
3. Go inside `grunt-boiler/worf/build` folder and install Node dependencies:  
```bash
$ cd grunt-boiler/worf/build && npm install
```
4. Make sure you that you have grunt installed by testing:
```bash
grunt -version
```
5) Now simply run `grunt` to generate JS and CSS in folder `worf`:  
```bash
$ grunt
```
6. Optionally, run `grunt watch` to automatically regenerate build files when you change files in `src/`.
7. **Bonus:** Install the [LiveReload](http://livereload.com) browser plugin to automatically reload your demo page when Grunt regenerates a new build.
---

#### DEMO

[![qr code](http://chart.apis.google.com/chart?cht=qr&chl=https://github.com/registerguard/repo/&chs=240x240)](http://registerguard.github.com/grunt-boiler/demo/)

(Scan QR code with phone and/or click to [view the latest demo](http://registerguard.github.com/grunt-boiler/demo/).)

---

#### LEGAL

Copyright &copy; 2013 [Micky Hulse](http://hulse.me)/[The Register-Guard](http://registerguard.com)

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this work except in compliance with the License. You may obtain a copy of the License in the LICENSE file, or at:

[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
