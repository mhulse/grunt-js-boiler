> **Grunt JS Boiler**  
> A starting point for [Grunt.js](http://gruntjs.com/) **JavaScript** projects/repositories (see also: [Grunt HTML Boiler](https://github.com/mhulse/grunt-html-boiler)).

> * The example source file, `source/files/jquery.worf.js`, is meant to illustrate how one might use [Grunt](http://gruntjs.com/) to build a jQuery plugin.
> * Build-generated versions, of the above example source file, can be found in [`worf/`](worf/):
> 	* [`jquery.worf.js`](https://raw.github.com/mhulse/grunt-js-boiler/gh-pages/worf/jquery.worf.js): Original source file with an added [banner comment](http://gruntjs.com/getting-started#an-example-gruntfile).
> 	* [`jquery.worf.min.js`](https://raw.github.com/mhulse/grunt-js-boiler/gh-pages/worf/jquery.worf.min.js): Uglified/minified version with an added “short” banner comment.
> * An example demo file, [`index.html`](https://raw.githubusercontent.com/mhulse/grunt-js-boiler/gh-pages/demo/index.html), can be found in `demo/`; this file links to `worf/jquery.worf.min.js` and is meant to illustrate how one might setup a [demo page](http://mhulse.github.io/grunt-js-boiler/demo/) for their JavaScript/jQuery plugin.

> The following text is boilerplate verbiage, for use in real-world projects/repositories, worded to match this repo’s code and general structure.

---

# jQuery Worf

![Lieutenant Commander Worf](worf.png)

<a href="http://gruntjs.com/" title="Built with Grunt"><img src="https://cdn.gruntjs.com/builtwith.png" alt="Built with Grunt" align="right"></a>

**Nice legs, for a human.**

## About

In case you didn’t notice, I really like Star Trek … And yes, normally I’d put something more useful here.

### Inspired by:

* [Nerds](http://en.wikipedia.org/wiki/Nerd)
* [Dorks](http://en.wikipedia.org/wiki/Dork)
* [Geeks](http://en.wikipedia.org/wiki/Geek)

## Demonstration

| Click or scan: |
| -------------- |
| [![qr code](http://chart.apis.google.com/chart?cht=qr&chl=https://github.com/mhulse/grunt-js-boiler/&chs=240x240)](http://mhulse.github.io/grunt-js-boiler/demo/) |

**Note:** Resize the demo page‘s browser window to see the plugin(s) in action (Firefox 15+ users, check out [Responsive Design View](https://developer.mozilla.org/en-US/docs/Tools/Responsive_Design_View)).

**Source:** [`jquery.worf.js`](https://raw.github.com/mhulse/grunt-js-boiler/gh-pages/worf/jquery.worf.js) | [`jquery.worf.min.js`](https://raw.github.com/mhulse/grunt-js-boiler/gh-pages/worf/jquery.worf.min.js)

## Installation

1. Download as a [`zip`](https://github.com/mhulse/grunt-js-boiler/archive/gh-pages.zip).
1. Clone it: `$ git clone https://github.com/mhulse/grunt-js-boiler.git`.
1. Fork it and clone: `$ git clone git@github.com:USERNAME/grunt-js-boiler.git`.
1. Just grab the relevant [JS](https://raw.github.com/mhulse/grunt-js-boiler/gh-pages/worf/jquery.worf.js) ([uglified](https://raw.github.com/mhulse/grunt-js-boiler/gh-pages/worf/jquery.worf.min.js)) and CSS (see “[Styling](#styling)” notes below) files.
1. Using [Bower](http://bower.io/): `$ bower install https://github.com/mhulse/grunt-js-boiler.git`.

## Usage

Setting up Worf is simple …

### Markup:

The basic markup should consist of text wrapped with an `<h1>` tag:

```html
<h1>Nice Legs... for a human.</h1>
```

**Note:** If you forget to include text, the plugin will not function.

### Styling:

There are no CSS requirements.

The markup can be styled as you see fit; check out the [demo page](http://mhulse.github.io/grunt-js-boiler/demo/) for a complete working example.

### JavaScript:

Put [jQuery](http://jquery.com/) on your page:

```html
<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
```

… and link to the plugin:

```html
<script src="jquery.worf.min.js"></script>
```

Finally, instantiate the plugin:

```html
<script>
	$(document).ready(function() {
		$('h1').worf()
	});
</script>
```

Here’s a complete example with all the available options:

```js
$('h1').worf({
	classOn         : 'worf_on',
	foo             : 'There is no honor',
	bar             : 'in attacking the weak.',
	wrapper         : 'div',
	onInit          : function(data) { console.log(this, data) },
	onAfterInit     : function(data) { console.log(this, data) },
	onBeforeWrapper : function(data) { console.log(this, data) },
	onAfterWrapper  : function(data) { console.log(this, data) }
});
```

… where:

Option | Description | Default
:-- | :-- | :--
`classOn` | Class applied when plugin initialized. | `'worf_on'`
`foo` | A string that gets output to the console. | `'There is no honor'`
`bar` | IBID | `'in attacking the weak.'`
`wrapper` | HTML element tag name use to wrap target element. | `'div'`
`onInit` | Callback on plugin initialization; "this" is the context of the current element. | `$.noop`
`onAfterInit` | Callback after plugin initialization; IBID. | `$.noop`
`onBeforeWrapper` | Callback before target element wrapped with `<div>`. | `$.noop`
`onAfterWrapper` | Callback after target element wrapped with `<div>`. | `$.noop`

### Advanced:

1. All options can be overidden via an [HTML5 data attribute](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_data_attributes) named `data-worf-options`; the value of this attribute **must** be valid [JSON](http://json.org/) syntax.

 For example:

 ```html
<h1 data-worf-options='{ "foo" : "Compared to Klingons,", "bar" : "humans are fragile creatures." }'>Nice Legs... for a human.</h1>
```

 **Note** the nesting order of the single (`'`) and double (`"`) quotes.

1. All options may be defined before plugin initialization, like: `$.fn.worf.defaults.XXX = 'foo';` (where `XXX` is name of option).

[Check out the demo page](http://mhulse.github.io/grunt-js-boiler/demo/) for a working example of the aforementioned features.

## Development

For information on how to build Worf from the original source code, visit: [`source/README.md`](source/README.md).

## Links

### Related repositories:

1. [Mr. Bigglesworth](https://github.com/mhulse/jquery-bigglesworth)
1. [jQuery Harmonia](https://github.com/mhulse/jquery-harmonia)
1. [jQuery Kerplop!](https://github.com/mhulse/jquery-kerplop)

### In the wild:

This code was originally developed for [Foo Bar](http://foobar.com).

## Other boilerplate …

… generic `README.md` verbiage can be [found here](https://github.com/mhulse/gh-boiler).

---

#### LEGAL

Copyright © 2013-2014 [Micky Hulse](http://mky.io)

Licensed under the Apache License, Version 2.0 (the “License”); you may not use this work except in compliance with the License. You may obtain a copy of the License in the LICENSE file, or at:

[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an “AS IS” BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

<img src="https://github.global.ssl.fastly.net/images/icons/emoji/octocat.png">
