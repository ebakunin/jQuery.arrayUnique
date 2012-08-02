jQuery.arrayUnique()
====================

A version of jQuery.unique() that also handles strings and integers. jQuery.arrayUnique() is useful because jQuery.unique() only works with DOM objects.

jQuery.arrayUnique() is an implementation of Paul Irish's extension of jQuery.unique(). It is published with his permission.<br />
Reference: http://paulirish.com/2010/duck-punching-with-jquery/

jQuery.arrayUnique() is freely available according to the GNU General Public License (http://www.gnu.org/licenses/gpl.html).


**Example:**
<pre>
var foo = [1,2,'three',2,'three',5];
var bar = [];

bar = $.arrayUnique(foo);
// bar now contains [1,2,5,'three'];
</pre>