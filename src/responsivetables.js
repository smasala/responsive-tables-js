/*!
 * @author Steven Masala [me@smasala.com]
 * Github: https://github.com/smasala/responsive-tables-js
 * @license MIT https://tldrlegal.com/license/mit-license
 * Responsive Tables
 * @version 1.0.6
 *
 * usage: give any table you want to work responsively, the CSS class "responsive".
 */

( function( root, factory ) {
    "use strict";
    
    if ( typeof define === "function" && define.amd ) {
        define( [ "jquery" ], function( $ ) {
            return factory( root, root.document, $ );
        } );
    } else {
        return factory( root, root.document, root.jQuery );
    }

} )( this, function( window, document, $ ) {
    "use strict";
    
    if ( window.responsiveTables ) {
        console.error( "window.responsiveTables is already defined globally", window.responsiveTables );
        return;
    }

    var responsiveTables = {

        version: "1.0.6",

        titleTpl: function( data ) {
            return "<span data-type='responsive'>" + data + "</span>";
        },

        /**
         * @method init
         * @param selector {String} optional - pass if you wish to update tables that do not meet the selector: table.responsive
         * @param force {Boolean} [default=false] - optional - set true to reiterate over previous converted tables
         */
        init: function( selector, force ) {
            var me = this,
                tables = $( selector ? selector : "table.responsive" ),
                table, ths, th, trs, tds, td, text, it; //for later

            if ( tables.length > 0 ) {

                for ( var i = 0, l = tables.length; i < l; i++ ) {
                    //iterate over each table
                    table = $( tables[ i ] );
                    if ( table.attr( "data-type" ) && !force ) {
                        //ignore this table
                        continue;
                    }
                    table.attr( "data-type", "responsive" );
                    //get all the table header for the give table
                    trs = table.find( "> thead > tr, > tbody > tr, > tr" );
                    ths = trs.find( "> th" );
                    //iterate over all trs
                    for ( var ii = 0, ll = trs.length; ii < ll; ii++ ) {
                        //find tds and iterate
                        tds = $( trs[ ii ] ).find( "> td" );
                        for ( var iii = 0, lll = tds.length; iii < lll; iii++ ) {
                            //for each td - find the correct heading
                            th = ths[ iii ];
                            it = $( tds[ iii ] );
                            //get the text content
                            text = th.textContent || th.innerText || "";
                            if ( force ) {
                                it.find( "span[data-type='responsive']" ).remove();
                            }
                            //prepend td with the correct template
                            td = it.prepend( me.titleTpl( text ) );
                        }
                    }
                }
            }
        }

    };
    
    //define globally
    window.responsiveTables = responsiveTables;
    return responsiveTables;
} );
