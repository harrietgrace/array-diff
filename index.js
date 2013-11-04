var filter = require('filter');


/**
 * Expose 'Mod'
 */

module.exports = function(arr, ex){
	return filter(arr, function(val){
    return !~ex.indexOf(val);
	});
};