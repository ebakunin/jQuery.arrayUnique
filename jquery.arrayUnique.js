/**
 * An extension of jQuery.unique() that also handle strings and integers.
 *
 * @author   Paul Irish
 * @editor   Eric Christenson
 * @date     23 February, 2010
 * @edit     15 August, 2012
 * @license  GNU GPL (http://www.gnu.org/licenses/gpl.html)
 */
(function ($) {
    var result;
    $.arrayUnique = function (arr) {
        if (arr.length > 0 && !!arr[0].nodeType) {
            result = $.unique.apply(this, arguments);
        } else {
            // reduce the array to contain no dupes via grep/inArray
            result = $.grep(arr, function (v, k) {
                return $.inArray(v, arr) === k;
            });
        }
		return result;
    };
})(jQuery);