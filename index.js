var filter = require('array-filter');
var index = require('indexof');

/**
 * Return difference between two arrays.
 * @param {Array} arr
 * @param {Array} ex array to exclude
 * @return {Array}
 * @api public
 */

module.exports = function(arr, ex){
	return filter(arr, function(val){
    return !~index(ex, val);
	});
};