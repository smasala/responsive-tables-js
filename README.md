Responsive Table JS
===================

Responsive Tables JS is a simple and fast method for making any table responsive

Browser Support
---------------

All modern browsers. Tested in:
* FF
* Chrome
* IOS Safari
* IE9+ (see usage)

Usage
------

* jQuery is required - tested with 2.x (should work with previous versions too)
* Just insert the js script, css stylesheet and add the class **responsive** to your table.
* The table must have **th** tags to work
* For chrome/ios: <!DOCTYPE html> is required!
* For IE9: please make sure that the html tag has the class ie9 (below for instructions)

**Example:**

Include:

    <link rel="stylesheet" href="responsivetables.css" />
    <script src="responsivetables.js"></script>
 
Table:

    <table class="responsive">
    <tr >
        <th>
            Title 1
        </th>
        <th>
            Title 2
        </th>
    </tr>
    <tr>
        <td >
            Row 1
        </td>
        <td >
            Row 1
        </td>
    </tr>
    </table>

IE9 CSS Class

    <!--[if IE 9 ]>
        <html class="ie9">
    <![endif]-->
    <!--[if !IE]>-->
        <html>
    <!--<![endif]-->

Contribution
------------

Sure! Just send me your pull requests :)

[Demo]
----

Licence
-------

MIT

[Demo]:http://smasala.github.io/responsive-tables-js/demo.html
