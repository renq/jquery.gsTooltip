jquery.gsTooltip
================

This plugin is simple, I know that. But sometimes you don't need Swiss Army Knife, but just a simple thing.
This plugins shows tooltips and that's all it can do.

Example 1
---------

###### HTML:
```html
<span class="tool-tip" title="Example tooltip message!">
	Move your mouse here!
</span>
```

###### JavaScript:
```javascript
$('.tool-tip').gsToolTip();
```


Example 2
---------

###### HTML:
```html
<span class="tool-tip2 text-error" data-tooltip="This example shows you that text in tooltip can be much longer than just single line!">
	Move your mouse here!
</span>
```

###### JavaScript:
```javascript
$('.tool-tip2').gsToolTip({
	width: 300,
	top: 60,
	left: -100,
	cursor: 'move',
	attribute: 'data-tooltip'
});
```

Example 3
---------

###### HTML:
```html
<span class="tooltips text-error" data-tooltip="This example shows you that text in tooltip can be much longer than just single line!">
	Did you know you can move mouse cursor here?
</span>
```

###### CSS:
```css
.my-tooltip {
	background: none repeat scroll 0 0 #E8E8E8;
	border: 1px solid #998899;
	border-radius: 0 19px 0 20px;
	display: none;
	font-size: 14px;
	opacity: 0.95;
	padding: 10px;
	position: absolute;
	z-index: 100;
}

.my-tooltip .header {
	color: #DD2D2A;
	display: block;
	font-size: 1.2em;
	font-weight: bold;
	padding: 5px;
}

.my-tooltip .text {
	color: black;
	padding: 5px;
	text-align: left;
}
```

###### JavaScript:
```javascript
$('.tooltips').gsToolTip({
	attribute: 'data-tooltip',
	cursor: 'help',
	width: 200,
	top: -30,
	left: -30,
	tooltipClass: 'my-tooltip',
	tooltipTextClass: 'text',
	onCreate: function(tooltipElement, tooltipConfig) {
		/*
		 * You can add some elements or completly rewrite tooltip HTML! 
		 */
		var $t = $(tooltipElement);
		$t.prepend('&lt;div class="header"&gt;Did you know?&lt;/div&gt;');
	}
});
```



