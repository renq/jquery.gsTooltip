/**
 * jQuery GSToolTip plugin
 *  
 * @author Michał Lipek (michal@lipek.net)
 * @version 0.10
 * 
 * Copyright (c) 2013 Michał Lipek 
 * My job:
 * http://www.goldensubmarine.com/
 * 
 * Licensed under the MIT license, like jQuery ;)
 * http://docs.jquery.com/License 
 */

(function($) {
	 
	$.fn.gsToolTip = function(settings) {
		
		var config = $.extend({}, $.fn.gsToolTip.defaults);
		if (settings) {
			config = $.extend(config, settings);
		}
		
		var $toolTip = _createToolTip(config);
		if (typeof(config.onCreate) == 'function') {
			config.onCreate.call(this, $toolTip, config);
		}
	 
		return this.each(function() {
			var $element = $(this);
			if ($element.attr(config.attribute).length) {
				$element
					.data('gsToolTip', $element.attr(config.attribute))
					.removeAttr(config.attribute)
					.css('cursor', config.cursor)
					.mouseenter(function() {
						console.log($toolTip.find());
						$toolTip.find('.'+config.tooltipTextClass).text($(this).data('gsToolTip'));
						$toolTip.css({width: config.width+'px'}).show();
					})
					.mousemove(function(e) {
							$toolTip.css({
								left: (e.pageX+config.left)+'px',
								top: (e.pageY+config.top-$toolTip.height())+'px'
							});
						})
					.mouseout(function() {
						$toolTip.hide();
					});
			}
		});
		
		function _createToolTip(config) {
			var $tooltip = $('<div>')
				.addClass(config.tooltipClass)
				.append(
						$('<div>').addClass(config.tooltipTextClass)
				);
			$tooltip.appendTo($('body'));
			return $tooltip; 
		};
	};
	
	
	$.fn.gsToolTip.defaults = {
		attribute: 'title',
		cursor: 'help',
		width: 150,
		top: -10,
		left: -30,
		tooltipClass: 'gs-tooltip-box',
		tooltipTextClass: 'gs-tooltip-text',
		onCreate: undefined
	};
	 
})(jQuery);
