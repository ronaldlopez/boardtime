/**
 * BoardtimeController
 *
 * @description :: Server-side logic for managing boardtimes
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	boardtime: function (req, res) {
	    return res.view({
	    	layout:'boardtime'
	    });
	}
};

