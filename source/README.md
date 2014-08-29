# TO BE ORGANIZED/CLEANED:



[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

```bash
# First:
$ cd purely-packery/source/

# Next, install:
$ npm install
# ... or update Grunt dependencies:
$ npm update

# Update Bower packages:
$ grunt plugins
# ... or:
$ npm run plugins

# Watch:
$ grunt watch
# ... or:
$ npm run watch

# Development build:
$ grunt
# ... or:
$ grunt dev
# ... or:
$ npm run dev

# Production build:
$ grunt prod
# ... or:
$ npm run prod
```

**Note:** If [Grunt](http://gruntjs.com/) isn’t installed globally, then roll with the `$ npm ...` commands.




# Development

Assuming you already have [Grunt.js](http://gruntjs.com/) installed …

**Note:** The Grunt [command line interface](https://github.com/gruntjs/grunt-cli) gets installed locally, so you can skip `$ npm install -g grunt-cli` if you use the `$ npm run` commands.

1. Clone repository to your local machine:

 ```bash
 $ git clone https://github.com/mhulse/grunt-js-boiler.git
 ```

1. Install Grunt's command line interface (CLI) globally:

 ```bash
 $ npm install -g grunt-cli
 ```

1. Next, `cd` to `grunt-js-boiler/build/` and install project dependencies:

 ```bash
 $ cd grunt-js-boiler/build/
 $ npm install
 ```

1. Now simply run `grunt` to generate build versions into `worf/`:

 ```bash
 $ grunt
 ```

1. **Optional:** Run `$ grunt watch` to automatically regenerate build files when you modify `source/files/jquery.worf.js` or anything in `demo/`.







### Setup dependencies:

Navigate to the local repo’s `build/` directory:

```bash
$ cd jquery-megakrill/build/
```

Install Grunt tasks:

```bash
$ npm install
```

### Preview:

Test the development build:

```bash
$ grunt
# … or:
$ grunt default
# … or:
$ npm run grunt
```

Visit the demo page:

<http://localhost/grunt-html-boiler/dev/>

**Note:** The above URL will depend upon your local development environment; for previewing my projects I use [XAMPP](http://www.apachefriends.org/index.html).

### Edit:

At this point, you can modify any of the files, especially the ones found in the `build/files/` directory.

To make life easier while developing, run:

```bash
$ grunt watch
# … or:
$ npm run watch
```

… the `watch` command will run a development build any time these directories/file(s) change:

```text
build/Gruntfile.js
build/files/jquery.megakrill.js
build/files/jquery.megakrill.css
```

### Bumping the version:

When a build is ready for a version bump ...

1. Update `version` key value in `source/package.json`.
1. Update `version` key value in `bower.json`.
1. Build: `$ grunt`.
1. Update the [changelog](#changelog) and [release history](#release-history) in the [README.md](https://github.com/mhulse/megakrill/blob/gh-pages/README.md) (if copy/pasting, don't forget to update the date and version numbers).
1. Push changes to GitHub.
1. Visit the [releases page](https://github.com/mhulse/megakrill/releases) and click "[Draft a new release](https://github.com/mhulse/megakrill/releases/new)".
1. Type the new version number in the "Tag version" field (e.g., `v1.2.1`).
1. Click "Publish release".

**Note:** MegaKrill uses [Semantic Versioning](http://semver.org/).

### Update:

When finished, push your changes back to GitHub and submit a pull request …
