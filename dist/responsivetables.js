/*!
 * @author Steven Masala [me@smasala.com]
 * Github: https://github.com/smasala/responsive-tables-js
 * @license MIT https://tldrlegal.com/license/mit-license
 * Responsive Tables
 * @version 0.1.4
 *
 * usage: give any table you want to work responsively, the CSS class "responsive".
 */

(function(e,t){if(typeof define!="function"||!define.amd)return t(e,e.document,e.jQuery);define(["jquery"],function(n){return t(e,e.document,n)})})(this,function(e,t,n){if(e.responsiveTables){console.error("window.responsiveTables is already defined globally",e.responsiveTables);return}var r={version:"0.1.4",titleTpl:function(e){return"<span data-type='responsive'>"+e+"</span>"},update:function(e){var t=this,r=typeof e=="string"?"#"+e:"",i=n("table"+r+".responsive"),s,o,u,a,f,l,c;if(i.length>0)for(var h=0,p=i.length;h<p;h++){s=n(i[h]),o=n(s).find("th"),a=n(s).find("tr");for(var d=0,v=a.length;d<v;d++){f=n(a[d]).find("td");for(var m=0,g=f.length;m<g;m++)u=o[m],c=u.textContent||c.innerText||"",l=n(f[m]).prepend(t.titleTpl(c))}}}};return e.responsiveTables=r,n(t).ready(function(){e.responsiveTables.update()}),r});