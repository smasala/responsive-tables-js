/*
* Author: Steven Masala
* Responsive Tables
* version: 0.1
*/
		
window.responsiveTables=new function(e,t,n){var r=this;r.version="0.1";r.titleTpl=function(e){return"<span data-type='responsive'>"+e+"</span>"};r.update=function(){var e=n("table.responsive");if(e.length>0){var t,i,s,o,u,a;for(var f=0,l=e.length;f<l;f++){t=n(e[f]);i=n(t).find("th");o=n(t).find("tr");for(var c=0,h=o.length;c<h;c++){tds=n(o[c]).find("td");for(var p=0,d=tds.length;p<d;p++){s=i[p];a=s.textContent||a.innerText;u=n(tds[p]).prepend(r.titleTpl(a))}}}}};n(t).ready(r.update)}(this,this.document,jQuery)
