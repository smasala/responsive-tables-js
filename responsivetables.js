/*
* Author: Steven Masala
* Twitter: @StevenMasala
* Github: https://github.com/smasala/responsive-tables-js
* Licence: MIT https://tldrlegal.com/license/mit-license
* Responsive Tables
* version: 0.1
*
* usage: give any table you want to work responsively the CSS class "responsive".
*/

window.responsiveTables = new (function(window, document, $){
		
		var me = this;
		
		me.version = "0.1";
		
		me.titleTpl = function(data){
			return "<span data-type='responsive'>" + data + "</span>";
		};
		
		me.update = function(){
			var tables = $("table.responsive");
			
			if(tables.length > 0){
				
				var table, ths, th, trs, td, text;
				for(var i = 0, l = tables.length; i<l; i++){
					//iterate over each table
					table = $(tables[i]);
					//get all the table header for the give table
					ths = $(table).find("th");
					trs = $(table).find("tr");
					//iterate over all trs
					for(var ii = 0, ll = trs.length; ii<ll; ii++){
						//find tds and iterate
						tds = $(trs[ii]).find("td");
						for(var iii = 0, lll = tds.length; iii<lll; iii++){
							//for each td - find the correct heading
							th = ths[iii];
							//get the text content
							text = th.textContent || text.innerText; 
							//prepend td with the correct template
							td = $(tds[iii]).prepend(me.titleTpl(text));
						}
					}
				}
			}
		};
		
		//init
		$(document).ready(me.update);
		
})(this, this.document, jQuery);
