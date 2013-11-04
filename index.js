var filter = require('filter');
var index = require('indexof');

/**
 * Expose 'Mod'
 */

module.exports = function(arr, ex){
	return filter(arr, function(val){
    return !~index(ex, val);
	});
};