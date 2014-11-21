/*!
* @author Steven Masala [me@smasala.com]
* Github: https://github.com/smasala/responsive-tables-js
* @license MIT https://tldrlegal.com/license/mit-license
* Responsive Tables
* @version 0.1
*
* usage: give any table you want to work responsively, the CSS class "responsive".
*/
		
window.responsiveTables=new function(e,t,n){var r=this;r.version="1.0.0";r.titleTpl=function(e){return"<span data-type='responsive'>"+e+"</span>"};r.update=function(e){var e=typeof e=="string"?"#"+e:"",t=n("table"+e+".responsive");if(t.length>0){var i,s,o,u,a,f;for(var l=0,c=t.length;l<c;l++){i=n(t[l]);s=n(i).find("th");u=n(i).find("tr");for(var h=0,p=u.length;h<p;h++){tds=n(u[h]).find("td");for(var d=0,v=tds.length;d<v;d++){o=s[d];f=o.textContent||f.innerText;a=n(tds[d]).prepend(r.titleTpl(f))}}}}};n(t).ready(r.update)}(this,this.document,jQuery)