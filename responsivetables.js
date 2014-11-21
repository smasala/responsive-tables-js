/*!
* @author Steven Masala [me@smasala.com]
* Github: https://github.com/smasala/responsive-tables-js
* @license MIT https://tldrlegal.com/license/mit-license
* Responsive Tables
* @version 1.0.0
*
* usage: give any table you want to work responsively, the CSS class "responsive".
*/

window.responsiveTables = new (function(window, document, $){
		
		var me = this;
		
		me.version = "1.0.0";
		
		me.titleTpl = function(data){
			return "<span data-type='responsive'>" + data + "</span>";
		};
		
		/**
		 * @method update
		 * @param id {String} optional - pass if you wish to update a specific table
		 */
		me.update = function(id){
			var id = typeof id == "string" ? "#" + id : "",
				tables = $("table"+id+".responsive");
			
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
