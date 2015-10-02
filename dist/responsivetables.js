/*!
 * @author Steven Masala [me@smasala.com]
 * Github: https://github.com/smasala/responsive-tables-js
 * @license MIT https://tldrlegal.com/license/mit-license
 * Responsive Tables
 * @version 0.1.5
 *
 * usage: give any table you want to work responsively, the CSS class "responsive".
 */

(function(e,t){if(typeof define!="function"||!define.amd)return t(e,e.document,e.jQuery);define(["jquery"],function(n){return t(e,e.document,n)})})(this,function(e,t,n){if(e.responsiveTables){console.error("window.responsiveTables is already defined globally",e.responsiveTables);return}var r={version:"0.1.5",titleTpl:function(e){return"<span data-type='responsive'>"+e+"</span>"},init:function(e,t){var r=this,i=n(e?e:"table.responsive"),s,o,u,a,f,l,c,h;if(i.length>0)for(var p=0,d=i.length;p<d;p++){s=n(i[p]);if(s.attr("data-type")&&!t)continue;s.attr("data-type","responsive"),o=s.find("th"),a=s.find("tr");for(var v=0,m=a.length;v<m;v++){f=n(a[v]).find("td");for(var g=0,y=f.length;g<y;g++)u=o[g],h=n(f[g]),c=u.textContent||c.innerText||"",t&&h.find("span[data-type='responsive']").remove(),l=h.prepend(r.titleTpl(c))}}}};return e.responsiveTables=r,r});