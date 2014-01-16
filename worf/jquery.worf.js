/**
 * Worf!
 * Nice Legs... for a human.
 *
 * @author Micky Hulse
 * @link http://mky.io
 * @docs https://github.com/mhulse/grunt-boiler
 * @copyright Copyright (c) 2014 Micky Hulse.
 * @license Released under the Apache License, Version 2.0.
 * @version 1.0.0
 * @date 2014/01/15
 */

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

(function($, window, document, undefined) {
	
	/**
	 * Function-level strict mode syntax.
	 *
	 * @see rgne.ws/XcZgn8
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
	 * @see rgne.ws/12p2bvl
	 */
	
	var console = window.console || { log : $.noop, warn : $.noop },
	
	//----------------------------------
	
	/**
	 * The plugin namespace.
	 */
	
	NS = 'worf',
	
	//--------------------------------------------------------------------------
	//
	// Defaults and settings:
	//
	//--------------------------------------------------------------------------
	
	defaults = {
		
		foo : 'There is no honor',
		bar : 'in attacking the weak.',
		// ... add more defaults here.
		
		onInit      : $.noop, // Callback on plugin initialization; "this" is the context of the current element.
		onAfterInit : $.noop  // Callback after plugin initialization; IBID.
		
	}, // defaults
	
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
	
	methods = {
		
		/**
		 * Init constructor.
		 *
		 * @type { function }
		 * @param { object } opts Options object literal.
		 * @this { object.jquery }
		 * @return { object.jquery } Returns target object(s) for chaining purposes.
		 */
		
		init : function(options) {
			
			//----------------------------------
			// Loop & return each this:
			//----------------------------------
			
			return this.each(function() {
				
				//----------------------------------
				// Declare/initialize:
				//----------------------------------
				
				var $this = $(this),        // Target object.
				    data  = $this.data(NS), // Namespace instance data.
				    settings;
				
				//----------------------------------
				// Data?
				//----------------------------------
				
				if ( ! data) {
					
					//----------------------------------
					// Initialize:
					//----------------------------------
					
					settings = $.extend(true, {}, defaults, options, $this.data(NS + 'Options')); // Recursively merge defaults, options and HTML5 `data-` attribute options.
					
					//----------------------------------
					// Namespaced instance data:
					//----------------------------------
					
					$this.data(NS, {
						
						init     : false,
						settings : settings,
						target   : $this
						
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
					
					console.warn('jQuery.' + NS, 'thinks it\'s already initialized on', this);
					
					//return this; // Needed?
					
				}
				
			});
			
		}, // init
		
		//----------------------------------
		
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
				// Declare/initialize:
				//----------------------------------
				
				var $this = $(this),
				    data  = $this.data(NS);
				
				//----------------------------------
				// Data?
				//----------------------------------
				
				if (data) {
					
					// Remove setups here.
					
					//----------------------------------
					// Namespaced instance data:
					//----------------------------------
					
					$this.removeData(NS); // Move along. Nothing to see here.
					
				}
				
			});
			
		} // destroy
		
	}, // methods
	
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
	 * @this { object.jquery }
	 */
	
	_main = function(data) {
		
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
			// Yup!
			//----------------------------------
			
			data.init = true; // Data initialization flag.
			
			//----------------------------------
			// Callback:
			//----------------------------------
			
			data.settings.onInit.call(data.target);
			
			// Do stuff here ... For example:
			
			data.target
				.css('color', 'red');
			
			console.log(data.settings.foo, data.settings.bar);
			
			//----------------------------------
			// Callback:
			//----------------------------------
			
			data.settings.onAfterInit.call(data.target);
			
		}
		
	}; // _main
	
	//--------------------------------------------------------------------------
	//
	// Method calling logic:
	//
	//--------------------------------------------------------------------------
	
	/**
	 * Boilerplate plugin logic.
	 *
	 * @constructor
	 * @see rgne.ws/OvKpPc
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
			
			$.error('jQuery.' + NS + ' thinks that ' + method + ' doesn\'t exist');
			
		}
		
	}; // $.fn[NS]
	
}(jQuery, window, document));
