/**
*  jQuery Autocomplete Categorized
*  (c) 2017 Ipan Ardian
*
*  Enables users to quickly find and select from a categoized pre-populated list of values as they type, leveraging searching and filtering.
*  For details, see the web site: https://github.com/ipanardian/jquery-autocomplete-categorized
*  The MIT License
*/

(function (factory) {
	if (typeof define === 'function' && define.amd) {
		define(['jquery'], factory)
	} 
	else if (typeof module === 'object' && module.exports) {
		module.exports = function(root, jQuery) {
			if (jQuery === undefined) {
				if ( typeof window !== 'undefined' ) {
					jQuery = require('jquery')
				}
				else {
					jQuery = require('jquery')(root)
				}
			}
			factory(jQuery)
			return jQuery
		}
	} 
	else {
		factory(jQuery)
	}
}(function($) {
	'use strict'
    
    $.widget("ardian.autocompleteCategorized", $.ui.autocomplete, {
		options: {
            item: {
                value,
                category
            },
			focus: function(event, ui) {
		        $(this).val(ui.item[this.options.item.value])
		    	return false
			},
			select: function(event, ui) {
				$(this).val(ui.item[this.options.item.value]).data('item', ui.item)
				return false
			}
		},
		_create: function() {
        	this._super()
        	this.widget().menu("option", "items", "> :not(.ui-autocomplete-category)")
      	},
      	_renderMenu: function(ul, items) {
        	var that = this,
          	currentCategory = ""
        	$.each( items, function(index, item) {
          		var li
          		if (item[that.options.item.category] != currentCategory) {
            		ul.append("<li class='ui-autocomplete-category'>" + item[that.options.item.category] + "</li>")
                    currentCategory = item[that.options.item.category]
		          }
	          	li = that._renderItemData(ul, item)
	          	if (item[that.options.item.category]) {
	            	li.attr("aria-label", item[that.options.item.category] + " : " + item[that.options.item.value])
	          	}
	    	})
		},
		_renderItem: function(ul, item) {
			return $( "<li>" )	.attr("data-value", this.options.item.value)
							    .append(this.options.item.value)
							    .appendTo(ul)
		},
    })
}))