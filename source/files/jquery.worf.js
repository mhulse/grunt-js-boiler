/* jshint -W083, unused: vars */

//----------------------------------

// Notes to self:
//console.profile('profile foo');
// ... code here ...
//console.profileEnd('profile foo');
// ... or:
// console.time('timing foo');
// ... code here ...
// console.timeEnd('timing foo');

//----------------------------------

(function($, window, undefined) {
	
	/**
	 * Function-level strict mode syntax.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
	 */
	
	'use strict';
	
	//--------------------------------------------------------------------------
	//
	// Local "globals":
	//
	//--------------------------------------------------------------------------
	
	/**
	 * Javascript console.
	 *
	 * @see http://www.paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
	 */
	
	var console = window.console || { log : $.noop, warn : $.noop };
	
	//----------------------------------
	
	/**
	 * The plugin namespace.
	 */
	
	var NS = 'worf';
	
	//--------------------------------------------------------------------------
	//
	// Defaults/settings:
	//
	//--------------------------------------------------------------------------
	
	/**
	 * Public defaults.
	 *
	 * @type { object }
	 */
	
	var defaults = {
		
		classOn : NS + '_on',               // Class applied when plugin initialized.
		foo     : 'There is no honor',      // A string that gets output to the console.
		bar     : 'in attacking the weak.', // IBID.
		
		// ... add more defaults here.
		
		// Callbacks:
		onInit          : $.noop, // Callback on plugin initialization; "this" is the context of the current element.
		onAfterInit     : $.noop, // Callback after plugin initialization; IBID.
		onBeforeWrapper : $.noop, // Callback before target element wrapped with `<div>`.
		onAfterWrapper  : $.noop  // Callback after target element wrapped with `<div>`.
		
	}; // defaults
	
	//--------------------------------------------------------------------------
	//
	// Public methods:
	//
	//--------------------------------------------------------------------------
	
	/**
	 * Methods object.
	 *
	 * @type { object }
	 */
	
	var methods = {
		
		/**
		 * Init constructor.
		 *
		 * @type { function }
		 * @param { object } options Options object literal.
		 * @this { object.jquery }
		 * @return { object.jquery } Returns target object(s) for chaining purposes.
		 */
		
		init : function(options) {
			
			//----------------------------------
			// Loop & return each this:
			//----------------------------------
			
			return this.each(function() {
				
				//----------------------------------
				// Declare, hoist and initialize:
				//----------------------------------
				
				var $this = $(this);       // Target object.
				var data = $this.data(NS); // Namespace instance data.
				var settings;              // Settings object.
				
				//----------------------------------
				// Data?
				//----------------------------------
				
				if ( ! data) {
					
					//----------------------------------
					// Initialize:
					//----------------------------------
					
					settings = $.extend(true, {}, defaults, $.fn[NS].defaults, options, $this.data(NS + 'Options')); // Recursively merge defaults, options and HTML5 `data-` attribute options.
					
					//----------------------------------
					// Namespaced instance data:
					//----------------------------------
					
					$this.data(NS, {
						
						init     : false,    // Plugin initialization flag.
						settings : settings, // Merged plugin settings.
						target   : $this     // Target element plugin has been initialized on.
						
					});
					
					//----------------------------------
					// Easy access:
					//----------------------------------
					
					data = $this.data(NS);
					
				}
				
				//----------------------------------
				// Data initialization check:
				//----------------------------------
				
				if ( ! data.init) {
					
					//----------------------------------
					// Call main:
					//----------------------------------
					
					_main.call($this, data);
					
				} else {
					
					//----------------------------------
					// Ouch!
					//----------------------------------
					
					console.warn('jQuery.%s thinks it\'s already initialized on %o.', NS, this);
					
				}
				
			});
			
		}, // init
		
		/**
		 * Removes plugin from element.
		 *
		 * @type { function }
		 * @this { object.jquery }
		 * @return { object.jquery } Returns target object(s) for chaining purposes.
		 */
		
		destroy : function() {
			
			//----------------------------------
			// Loop & return each this:
			//----------------------------------
			
			return this.each(function() {
				
				//----------------------------------
				// Declare, hoist and initialize:
				//----------------------------------
				
				var $this = $(this);
				var data = $this.data(NS);
				
				//----------------------------------
				// Data?
				//----------------------------------
				
				if (data) {
					
					//----------------------------------
					// Wrapped `<div>`?
					//----------------------------------
					
					if (data.target.parent().is('div')) {
						
						//----------------------------------
						// Yup. Remove:
						//----------------------------------
						
						data.target.unwrap();
						
					}
					
					//----------------------------------
					// Everything else:
					//----------------------------------
					
					data.target // ... hot chaining action -->
					
					//----------------------------------
					// Namespaced instance data:
					//----------------------------------
					
					.removeData(NS) // -->
					
					//
					//
					// Remove other setups here.
					//
					//
					
					//----------------------------------
					// Remove class:
					//----------------------------------
					
					.removeClass(data.settings.classOn); // Destroyed!
					
				}
				
			});
			
		} // destroy
		
	}; // methods
	
	//--------------------------------------------------------------------------
	//
	// Private methods:
	//
	//--------------------------------------------------------------------------
	
	/**
	 * Called after plugin initialization.
	 *
	 * @private
	 * @type { function }
	 * @param { object } data Parent data object literal.
	 * @this { object.jquery }
	 */
	
	var _main = function(data) {
		
		//----------------------------------
		// Plugin initialization flag:
		//----------------------------------
		
		data.init = true;
		
		//----------------------------------
		// Callback:
		//----------------------------------
		
		data.settings.onInit.call(data.target, data);
		
		//----------------------------------
		// Target exists & contains text?
		//----------------------------------
		
		if (data.target.length && ( ! _isEmpty(data.target))) {
			
			// Do stuff here ... For example, this:
			
			data.target.addClass(data.settings.classOn);
			
			// ... or this:
			
			console.log(data.settings.foo, data.settings.bar);
			
			// or even this:
			
			$.fn[NS].wrapper.call(data.target, data);
			
		} else {
			
			//----------------------------------
			// Problemos:
			//----------------------------------
			
			console.warn('jQuery.%s thinks there\'s a problem with your markup.', NS);
			
		}
		
		//----------------------------------
		// Callback:
		//----------------------------------
		
		data.settings.onAfterInit.call(data.target, data);
		
	}; // _main
	
	/**
	 * Returns boolean true if element is empty.
	 *
	 * @param { object.jquery } $el
	 * @return { boolean }
	 */
	
	function _isEmpty($el) {
		
		return ( ! $.trim($el.html()));
		
	} // isEmpty()
	
	//--------------------------------------------------------------------------
	//
	// Method calling logic:
	//
	//--------------------------------------------------------------------------
	
	/**
	 * Boilerplate plugin logic.
	 *
	 * @constructor
	 * @see http://learn.jquery.com/plugins/
	 * @type { function }
	 * @param { string } method String method identifier.
	 * @return { method } Calls plugin method with supplied params.
	 */
	
	$.fn[NS] = function(method) {
		
		if (methods[method]) {
			
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
			
		} else if ((typeof method == 'object') || ( ! method)) {
			
			return methods.init.apply(this, arguments);
			
		} else {
			
			$.error('jQuery.%s thinks that %s doesn\'t exist', NS, method);
			
		}
		
	}; // $.fn[NS]
	
	//--------------------------------------------------------------------------
	//
	// Public access to secondary functions:
	// @see http://www.learningjquery.com/2007/10/a-plugin-development-pattern/
	// @see http://stackoverflow.com/questions/11286312/superfish-plugin-fn-extend-how-does-this-code-work
	//
	//--------------------------------------------------------------------------
	
	/**
	 * Wraps target with a `<div>`.
	 *
	 * @type { function }
	 * @this { object.jquery }
	 * @param { object } data Parent data object literal.
	 * @return { object.jquery } Returns target object(s) for chaining purposes.
	 */
	
	$.fn[NS].wrapper = function(data) {
		
		//----------------------------------
		// Loop & return each this:
		//----------------------------------
		
		return this.each(function() {
			
			//----------------------------------
			// Data?
			//----------------------------------
			
			if (typeof data == 'undefined') {
				
				//----------------------------------
				// Attempt to determine data:
				//----------------------------------
				
				data = this.data(NS);
				
			}
			
			//----------------------------------
			// Data?
			//----------------------------------
			
			if (data) {
				
				//----------------------------------
				// Callback:
				//----------------------------------
				
				data.settings.onBeforeWrapper.call(data.target, data);
				
				//----------------------------------
				// Wrap target with div:
				//----------------------------------
				
				data.target.wrap('<div />');
				
				//----------------------------------
				// Callback:
				//----------------------------------
				
				data.settings.onAfterWrapper.call(data.target, data);
				
			}
			
		});
		
	}; // $.fn[NS].wrapper
	
	//--------------------------------------------------------------------------
	//
	// Default settings:
	//
	//--------------------------------------------------------------------------
	
	/**
	 * Public defaults.
	 *
	 * Example (before instantiation):
	 *
	 * $.fn.worf.defaults.classOn = 'foo';
	 *
	 * @see http://stackoverflow.com/questions/11306375/plugin-authoring-how-to-allow-myplugin-defaults-key-value
	 *
	 * @type { object }
	 */
	
	$.fn[NS].defaults = defaults;
	
}(jQuery, window)); // Booyah!

