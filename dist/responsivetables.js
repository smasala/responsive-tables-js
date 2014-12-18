/*!
* @author Steven Masala [me@smasala.com]
* Github: https://github.com/smasala/responsive-tables-js
* @license MIT https://tldrlegal.com/license/mit-license
* Responsive Tables
* @version 1.0.3
*
* usage: give any table you want to work responsively, the CSS class "responsive".
*/

(function(e,t){if(typeof define!="function"||!define.amd)return t(e,e.document,e.jQuery);define(["jquery"],function(n){return t(e,e.document,n)})})(this,function(e,t,n){if(e.responsiveTables){console.error("responsive-tables-js is already defined globally",e.responsiveTables);return}var r=new function(){var e=this;e.version="1.0.3",e.titleTpl=function(e){return"<span data-type='responsive'>"+e+"</span>"},e.update=function(t){var t=typeof t=="string"?"#"+t:"",r=n("table"+t+".responsive"),i,s,o,u,a,f;if(r.length>0)for(var l=0,c=r.length;l<c;l++){i=n(r[l]),s=n(i).find("th"),u=n(i).find("tr");for(var h=0,p=u.length;h<p;h++){tds=n(u[h]).find("td");for(var d=0,v=tds.length;d<v;d++)o=s[d],f=o.textContent||f.innerText,a=n(tds[d]).prepend(e.titleTpl(f))}}},n(t).ready(e.update)};return e.responsiveTables=r,r});