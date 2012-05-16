/*!
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * www.tbs.gc.ca/ws-nw/wet-boew/terms / www.sct.gc.ca/ws-nw/wet-boew/conditions
 */
(function(c){var a,b;a=(typeof window.pe!=="undefined"&&window.pe!==null)?window.pe:{fn:{}};b={language:(c("html").attr("lang")?(c("html").attr("lang").indexOf("en")===0?"eng":"fra"):c("meta[name='dc.language'], meta[name='dcterms.language']").attr("content")),suffix:"",html5:(function(){var d=false,e=/\s+(X?HTML)\s+([\d\.]+)\s*([^\/]+)*\//gi;if(typeof document.namespaces!=="undefined"){d=(document.all[0].nodeType===8)?e.test(document.all[0].nodeValue):false}else{d=(document.doctype!==null)?e.test(document.doctype.publicId):false}return(d)?false:true}()),ie:c.browser.msie?c.browser.version:0,_init:function(){var h,d,i,e,g,o,l,j,k,n,f,m;n=a.url(document.getElementById("progressive").src).file;a.suffix=n.substr(n.length-7)==="-min.js"?"-min":"";a.add.language(a.language);a.polyfills();if(a.mobilecheck()){a.mobile=true;h='<div data-role="page" id="jqmobile-wet-boew-menubar"><div data-role="header">';h+="<h2>"+c("#cn-psnb > :header").html()+"</h2></div>";h+='<div data-role="content" data-inset="true">';h+='<p id="jqm-mb-location-text"></p>';if(c("#cn-left-col").length>0){d="<h2>"+c("#cn-left-col").find(":header").eq(0).html()+"</h2>";d+='<div data-role="collapsible-set">';d+=c("#cn-left-col .cn-left-col-default").html().replace(/<section>/gi,'<div data-role="collapsible">').replace(/<\/section>/gi,"</div>");d=d.replace(/<h(.*?)>\s*<a/gmi,'<h$1><a class="ui-link" data-icon="arrow-r" data-theme="b"');d=d.replace(/<ul(.*?)>/gi,'<ul data-role="listview"$1>').replace(/<\/ul>/gi,"</ul>");d=d.replace(/<div class=\"top-level\"/gmi,'<div data-role="button" data-icon="arrow-r" class="top-level"');d+="</div>";h+=d}h+="<h2>"+c("#cn-psnb").find(":header").eq(0).html()+"</h2>";h+='<div data-role="collapsible-set">';c("#cn-psnb ul.mb-menu").clone().each(function(){c(this).find("div[class^=span]").each(function(){c(this).replaceWith(c(this).html())});c(this).find(".mb-sm").each(function(){c(this).html('<div data-role="collapsible-set">'+c(this).html()+"</div)")});c(this).children().children("div:first-child,h2,h3,h4,section").each(function(){var p=c(this);if(p.is("section")){p=p.children("h2,h3,h4").eq(0)}p.html(p.text());if(p.is("div")){h+='<div data-role="button" data-icon="arrow-r" data-corners="false" class="top-level'+(p.parent().is("li:first-child")?" ui-corner-top":((p.parent().is("li:last-child")?" ui-corner-bottom":"")))+'" data-theme="a">'+c(this).html()+"</div>"}else{p.parent().find("ul").attr("data-role","listview");p.parent().find(".mb-sm div > a,.mb-sm h2,.mb-sm h3,.mb-sm h4").each(function(){var q=c(this),r=q.parent();if(r.is("div")){r.html(r.text());r.attr("data-role","button").attr("data-icon","arrow-r").attr("data-corners","false").attr("data-theme","a").addClass("top-level"+(p.parent().is("li:first-child")?" ui-corner-top":((p.parent().is("li:last-child")?" ui-corner-bottom":""))))}else{if(r.is("section")){q.html(q.text());r.wrap('<div data-role="collapsible" data-theme="a">');r.parent().html(r.html())}}});h+='<div data-role="collapsible" data-theme="a">'+p.parent().html()+"</div>"}})});h+="</div>";h+="</div></div>";a.pagecontainer().append(h);c("#cn-psnb-inner").remove();c("#cn-psnb :header").wrapInner('<a href="#jqmobile-wet-boew-menubar" data-rel="dialog"></a>');i=c("#cn-search-box");e=c('<div data-role="page" id="jqmobile-wet-boew-search"></div>');e.append(c('<div data-role="header"></div>').append(i.find(":header").clone())).append(c('<div data-role="content"></div>').append(i.find("form").clone()));a.pagecontainer().append(e);i.find("form").remove();i.find(":header").wrapInner('<a href="#jqmobile-wet-boew-search" data-rel="dialog"></a>');g=c("<ul></ul>").hide().append('<li><a data-rel="dialog" data-theme="b" data-icon="search" href="'+i.find(":header a").attr("href")+'">'+i.find(":header a").text()+"</a></li>").append('<li><a data-rel="dialog" data-theme="b"  data-icon="grid" href="'+c("#cn-psnb > :header").find("a").attr("href")+'">'+c("#cn-psnb > :header").find("a").text()+"</a></li>");c("#cn-site-title").after(c('<div data-role="navbar" data-iconpos="right"></div>').append(g));o=c("#cn-sft-inner #cn-ft-tctr a, #cn-sft-inner .col-head a").attr("data-theme","b");l=c('<div data-role="navbar"><ul></ul></div>');k=l.children();o.each(function(){k.append(c("<li/>").append(this))});o=c("#cn-gcft-inner a").attr("data-theme","c");j=c('<div data-role="navbar"><ul></ul></div>');k=j.children();o.each(function(){if(c(this).parents("#cn-ft-ca").length){k.append(c('<li id="cn-ft-ca"/>').append(this))}else{k.append(c("<li/>").append(this))}});c("#cn-foot").replaceWith(l.children().end());c(document).on("mobileinit",function(){c.mobile.ajaxEnabled=false;c.mobile.pushStateEnabled=false;i.remove();c("#cn-psnb :header").remove();g.show()});c(document).on("pageinit",function(){})}a.add.css(a.add.liblocation+"css/pe-ap"+(a.ie<9&&a.ie>0?"-ie":"")+a.suffix+".css")},depends:{_ind:[],is:function(d){return -1!==c.inArray(d,a.depends._ind)},put:function(d){a.depends._ind[a.depends._ind.length]=d},on:(function(){c(document).on("wet-boew-dependency-loaded",function(){var e,f;for(e=0,f=a.depends.on.length;e<f;e+=1){a.depends.on[e](e)}});return[]}())},mobile:false,mobilecheck:function(){return(document.documentElement.clientWidth<767&&!(c.browser.msie&&c.browser.version<9))?true:false},pagecontainer:function(){return c("#cn-body-inner-3col,#cn-body-inner-2col,#cn-body-inner-1col").add("body").eq(0)},parameter:function(d,e){return(a.html5)?e.data(d):e.attr("class").replace("/.*"+d+"-([a-z0-9_]+).*/i","$1")},resize:function(d){ResizeEvents.initialise();ResizeEvents.eventElement.bind("x-text-resize x-zoom-resize x-window-resize",function(){d()});return},url:function(e){var d;d=document.createElement("a");d.href=e;return{source:e,protocol:d.protocol.replace(":",""),host:d.hostname,port:d.port==="0"?"80":d.port,query:d.search,params:(function(){var i,h,j,g,k,f;h={};g=d.search.replace(/^\?/,"").split("&");for(k=0,f=g.length;k<f;k+=1){i=g[k];if(i){j=i.split("=");h[j[0]]=j[1]}}return h}()),file:d.pathname.match(/\/([^\/?#]+)$/i)?d.pathname.match(/\/([^\/?#]+)$/i)[1]:"",hash:d.hash.replace("#",""),path:d.pathname.replace(/^([^\/])/,"/$1"),relative:d.href.match(/tps?:\/\/[^\/]+(.+)/)?d.href.match(/tps?:\/\/[^\/]+(.+)/)[1]:"",segments:d.pathname.replace(/^\//,"").split("/"),removehash:function(){return this.source.replace(/#([A-Za-z0-9-_=&]+)/,"")}}},_execute:function(e,f){var d=(typeof e._exec!=="undefined")?e._exec:e.exec;if(typeof e.depends!=="undefined"){a.add.js(e.depends,function(){d(f)})}else{d(f)}return},cssenabled:function(){return c("link").get(0).disabled},limit:function(e){var d;d=c(e).attr("class").match(/\blimit-\d+/);if(!d){return 0}return Number(d[0].replace(/limit-/i,""))},focus:function(d){setTimeout(function(){return(typeof d.jquery!=="undefined"?d.focus():c(d).focus())},0);return d},string:{ify:(function(){return{link:function(d){return d.replace(/[a-z]+:\/\/[a-z0-9-_]+\.[a-z0-9-_@:~%&\?\+#\/.=]+[^:\.,\)\s*$]/ig,function(e){return'<a href="'+e+'">'+((e.length>25)?e.substr(0,24)+"...":e)+"</a>"})},at:function(d){return d.replace(/(^|[^\w]+)\@([a-zA-Z0-9_]{1,15}(\/[a-zA-Z0-9-_]+)*)/g,function(e,g,f){return g+'@<a href="http://twitter.com/'+f+'">'+f+"</a>"})},hash:function(d){return d.replace(/(^|[^&\w'"]+)\#([a-zA-Z0-9_]+)/g,function(e,g,f){return g+'#<a href="http://search.twitter.com/search?q=%23'+f+'">'+f+"</a>"})},clean:function(d){return this.hash(this.at(this.link(d)))}}}()),pad:function(e,d){var f;f=String(e);while(f.length<d){f="0"+f}return f}},date:{convert:function(e){if(e.constructor===Date){return e}if(e.constructor===Array){return new Date(e[0],e[1],e[2])}if(e.constructor===Number){return new Date(e)}if(e.constructor===String){return new Date(e)}if(typeof e==="object"){return new Date(e.year,e.month,e.date)}return NaN},compare:function(e,d){if(isFinite(e=this.convert(e).valueOf())&&isFinite(d=this.convert(d).valueOf())){return(e>d)-(e<d)}return NaN},in_range:function(f,g,e){if(isFinite(f=this.convert(f).valueOf())&&isFinite(g=this.convert(g).valueOf())&&isFinite(e=this.convert(e).valueOf())){return g<=f&&f<=e}return NaN},to_iso_format:function(g,f){var e;e=this.convert(g);if(f){return e.getFullYear()+"-"+a.string.pad(e.getMonth()+1,2,"0")+"-"+a.string.pad(e.getDate(),2,"0")+" "+a.string.pad(e.getHours(),2,"0")+":"+a.string.pad(e.getMinutes(),2,"0")}return e.getFullYear()+"-"+a.string.pad(e.getMonth()+1,2,"0")+"-"+a.string.pad(e.getDate(),2,"0")}},polyfills:function(){var e=a.add.liblocation,d=(function(j){var h=j.createElement("details"),g,f,i;if(typeof h.open==="undefined"){return false}f=j.body||(function(){var k=j.documentElement;g=true;return k.insertBefore(j.createElement("body"),k.firstElementChild||k.firstChild)}());h.innerHTML="<summary>a</summary>b";h.style.display="block";f.appendChild(h);i=h.offsetHeight;h.open=true;i=i!==h.offsetHeight;f.removeChild(h);if(g){f.parentNode.removeChild(f)}return i}(document));if(!window.localStorage){a.add._load(e+"polyfills/localstorage"+a.suffix+".js")}if(typeof document.createElement("progress").position==="undefined"){a.add._load(e+"polyfills/progress"+a.suffix+".js")}if(!d){a.add._load(e+"polyfills/detailsummary"+a.suffix+".js")}},add:(function(){return{head:document.head||document.getElementsByTagName("head"),liblocation:(function(){var d=document.getElementById("progressive").src;return d.substr(0,d.lastIndexOf("/")+1)}()),staged:[],_load:function(e){var d=a.add.head;if(c.inArray(e,this.staged)>-1){return this}setTimeout(function(){if(typeof d.item!=="undefined"){if(!d[0]){setTimeout(arguments.callee,25);return}d=d[0]}var f=document.createElement("script"),g=false;a.add.set(f,"async",true);f.onload=f.onreadystatechange=function(){if((f.readyState&&f.readyState!=="complete"&&f.readyState!=="loaded")||g){return false}f.onload=f.onreadystatechange=null;g=true;a.depends.put(e);c(document).trigger({type:"wet-boew-dependency-loaded",js:e})};f.src=e;if(a.ie>0&&a.ie<9){c(f).appendTo(c(d))}else{d.insertBefore(f,d.firstChild)}},0);this.staged[this.staged.length]=e;return this},set:function(f,d,e){f.setAttribute(d,e);return this},css:function(f){var e=a.add.head,d=document.createElement("link");a.add.set(d,"rel","stylesheet").set(d,"href",f);if(a.ie>0&&a.ie<9){c(d).appendTo(c(e)).attr("href",f)}else{e.insertBefore(d,e.firstChild)}return this},depends:function(g){var f=a.add.liblocation,e=c.map(g,function(d){return(/^http(s)?/i.test(d))?d:f+"dependencies/"+d+a.suffix+".js"});return e},language:function(e){var d=a.add.liblocation+"i18n/"+e.substring(0,2)+a.suffix+".js";a.add._load(d)},js:function(f,e){var d;f=a.add.depends(f);for(d=0;d<f.length;d+=1){if(!a.depends.is(f[d])){a.add._load(f[d])}}a.depends.on[a.depends.on.length]=function(g){var h=true;for(d=0;d<f.length;d+=1){if(!a.depends.is(f[d])){h=false}}if(h){a.depends.on[g]=function(){};e()}};c(document).trigger("wet-boew-dependency-loaded");return this},meta:function(e,f){var d;d=document.createElement("meta");a.add.set(d,"name",e).set(d,"content",f);a.add.head.appendChild(d);return this}}}()),dance:function(){var d,e=(typeof wet_boew_properties!=="undefined"&&wet_boew_properties!==null)?wet_boew_properties:false;if(a.mobile){c("#jqm-mb-location-text").html(c("#cn-bc").html())}c('[class^="wet-boew-"]').each(function(){var g,f;f=c(this);g=f.attr("class").replace(/^wet-boew-(\S*).*/i,"$1".toLowerCase());if(typeof a.fn[g]!=="undefined"){a._execute(a.fn[g],f)}});if(e){for(d=0;d<e.globals.length;d+=1){a._execute(a.fn[e.globals[d]],document)}}c("html").removeClass("no-js").addClass("gcwu");if(a.mobile){a.add._load([a.add.liblocation+"../js/jquery.mobile/jquery.mobile.min.js"])}window.onresize=function(){if(a.mobile!==a.mobilecheck()){window.location.href=a.url(window.location.href).removehash()}}}};window.pe=c.extend(true,a,b);return window.pe}(jQuery))._init();(function(b){var a=window.pe||{fn:{}};a.fn.archived={type:"plugin",_exec:function(d){if(pe.mobile){return}var c=b('<div class="archived" role="toolbar"><a class="archived-top-page" href="#archived" role="link">'+pe.dic.get("%archived-page")+"</a></div>");b(window).on("scroll",function(){if(b(this).scrollTop()>10){c.fadeIn("normal").attr("aria-hidden","false")}else{c.fadeOut("normal").attr("aria-hidden","true")}});if(b(window).scrollTop()<10||b(window).scrollTop()==="undefined"){c.fadeOut("normal").attr("aria-hidden","true")}else{c.fadeIn("normal").attr("aria-hidden","false")}pe.pagecontainer().append(c)}};window.pe=a;return a}(jQuery));(function(b){var a=window.pe||{fn:{}};a.fn.charts={type:"plugin",depends:["excanvas","flot"],_exec:function(i){var d,h,g,f,e,c;d=b(i);e=d.find(".chart-canvas");if(!e.hasClass("fixed-size")){e.height(Math.round(e.width()/1.61663))}c=b(i).find("table").eq(0);g=[];h=f=[];c.find("thead td, thead th").each(function(){return h.push(b(this).text())});c.find("tbody tr").each(function(){var j;j={label:"",data:[]};j.label=b(this).find("th").eq(0).text();b(this).find("td").each(function(k){return j.data.push([h[k+1],b(this).text()])});return g.push(j)});b.plot(e,g,{xaxis:{tickDecimals:0}})}};window.pe=a;return a}(jQuery));(function(b){var a=window.pe||{fn:{}};a.fn.mathlib={type:"plugin",support:(function(){var c=false,d,f,e;if(document.createElementNS){d="http://www.w3.org/1998/Math/MathML";f=document.createElement("div");f.style.position="absolute";f.style.color="#fff";e=f.appendChild(document.createElementNS(d,"math")).appendChild(document.createElementNS(d,"mfrac"));e.appendChild(document.createElementNS(d,"mi")).appendChild(document.createTextNode("xx"));e.appendChild(document.createElementNS(d,"mi")).appendChild(document.createTextNode("yy"));document.body.appendChild(f);c=f.offsetHeight>f.offsetWidth;f.style.display="none"}return c}()),_exec:function(c){if(pe.mobile||pe.fn.mathlib.support){return}pe.add._load("http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML")}};window.pe=a;return a}(jQuery));(function(b){var a=window.pe||{fn:{}};a.fn.menubar={type:"plugin",depends:["resize","equalheights","hoverintent","outside"],_exec:function(k){var m,d,j,p,o,l,q,n,g,c,f,h,e;o=b(k);e=function(s){var r,i;r=b(s).closest("li");r.addClass("mb-active");g();i=r.find(".mb-sm");i.attr("aria-expanded","true").attr("aria-hidden","false").toggleClass("mb-sm mb-sm-open");if((Math.floor(i.offset().left+i.width())-Math.floor(j.offset().left+j.width()))>=-1){i.css("right","0px")}return};n=function(s){var r,i;e(s);r=b(s);i=r.closest("li").find(".mb-sm-open");pe.focus(i.find("a[href]:first"));return};c=function(s){var r,i;r=b(s);i=r.closest("li").removeClass("mb-active").find(".mb-sm-open");i.attr("aria-expanded","false").attr("aria-hidden","true").toggleClass("mb-sm mb-sm-open").css("right","auto");return};g=function(){d.find(".mb-sm-open").each(function(){var i;i=b(this).closest("li");return c(i)});return};q=function(){var r,i;i=d.children("li:last");r=(i.offset().top+i.outerHeight())-o.offset().top;return o.css("min-height",r)};j=o.children("div");d=j.children("ul");o.attr("role","application");d.attr("role","menubar");if(pe.cssenabled){d.find("a").attr("tabindex","-1").attr("role","menuitem");d.find("li:first a:first").removeAttr("tabindex")}pe.resize(q);o.on("focusoutside",function(){return g()});b(document).on("click",function(){o.trigger("focusoutside")});o.on("keydown focus section-next section-previous item-next item-previous close","li",function(t){var s,i,r,u;i=b(t.target);r=b.map(/\bknav-(\d+)-(\d+)-(\d+)/.exec(i.attr("class")),function(v){return parseInt(v,10)});if(t.type==="keydown"){if(!(t.ctrlKey||t.altKey||t.metaKey)){switch(t.keyCode){case 27:i.trigger("close");t.preventDefault();return false;case 37:i.trigger("section-previous");t.preventDefault();return false;case 38:i.trigger("item-previous");t.preventDefault();return false;case 39:i.trigger("section-next");t.preventDefault();return false;case 40:i.trigger("item-next");t.preventDefault();return false}}}if(t.type==="close"){pe.focus(o.find(".knav-"+r[1]+"-0-0"));setTimeout(function(){return g()},5)}if(t.type==="section-previous"){u=!!r[2]<<1|!!r[3];switch(u){case 0:case 1:s=o.find(".knav-"+(r[1]-1)+"-0-0");if(s.length>0){pe.focus(s)}else{pe.focus(o.find("ul.mb-menu > li:last").find("a:eq(0)"))}break;case 2:case 3:s=o.find(".knav-"+(r[1])+"-"+(r[2]-1)+"-0");if(s.length>0&&r[2]>1){pe.focus(s)}else{s=o.find(".knav-"+(r[1]-1)+"-0-0");if(s.length>0){pe.focus(s)}else{pe.focus(o.find("ul.mb-menu > li:last").find("a:eq(0)"))}}break}}if(t.type==="section-next"){u=!!r[2]<<1|!!r[3];switch(u){case 0:case 1:s=o.find(".knav-"+(r[1]+1)+"-0-0");if(s.length>0){pe.focus(s)}else{pe.focus(o.find(".knav-0-0-0"))}break;case 2:case 3:s=o.find(".knav-"+(r[1])+"-"+(r[2]+1)+"-0");if(s.length>0){pe.focus(s)}else{s=o.find(".knav-"+(r[1]+1)+"-0-0");if(s.length>0){pe.focus(s)}else{pe.focus(o.find(".knav-0-0-0"))}}break}}if(t.type==="item-next"){s=o.find(".knav-"+r[1]+"-"+(r[2])+"-"+(r[3]+1));if(s.length>0){pe.focus(s)}else{s=o.find(".knav-"+r[1]+"-"+(r[2]+1)+"-0");if(s.length>0){pe.focus(s)}else{pe.focus(o.find(".knav-"+r[1]+"-0-0"))}}}if(t.type==="item-previous"){s=o.find(".knav-"+r[1]+"-"+(r[2])+"-"+(r[3]-1));if(s.length>0){pe.focus(s)}else{s=o.find(".knav-"+r[1]+"-"+(r[2]-1)+"-0");if(s.length>0){pe.focus(s)}else{pe.focus(o.find(".knav-"+r[1]+"-0-0"))}}}if(t.type==="focusin"&&r[2]===0&&r[3]===0){g();if(i.find(".expandicon").length>0){e(t.target)}return}});o.find("ul.mb-menu > li").find("a:eq(0)").each(function(r,t){var s,i;i=b(t);i.addClass("knav-"+r+"-0-0");s=i.closest("li").find(".mb-sm");if(s.size()>0){i.attr("aria-haspopup","true").addClass("mb-has-sm").wrapInner('<span class="expandicon"><span class="sublink"></span></span>');s.attr("role","menu").attr("aria-expanded","false").attr("aria-hidden","true").find(":has(:header) ul").attr("role","menu");i.append('<span class="cn-invisible">'+(pe.dic.get("%sub-menu-help"))+"</span>");i.closest("li").hoverIntent(function(){return e(this)},function(){return c(this)});s.find("h4 a").each(function(u){b(this).addClass("knav-"+r+"-"+(u+1)+"-0");b(this).parent().next("ul").find("a").each(function(v){b(this).addClass("knav-"+r+"-"+(u+1)+"-"+(v+1));return});return});s.find("ul").not(function(){return(b(this).prev("h4").length?true:false)}).find("a").each(function(u){b(this).addClass("knav-"+r+"-0-"+(u+1))})}});l=b("#cn-bc, #cn-bcrumb");if(l.size()>0&&!o.hasClass("page-match-off")){p=d.children("li").find('a[href="'+window.location.pathname+'"]');if(p.size()>0){p.eq(0).addClass("nav-current")}else{h=false;m=l.find('li a:not([href^="#"])');if(m.size()>0){f=0;while(f<=m.size()){p=d.children("li").find('a[href="'+m.eq(f).attr("href")+'"]');if(p.size()>0){p.eq(0).addClass("nav-current");h=true;break}f+=1}}if(!h){p=d.children("li").find('a:contains("'+l.find("li:last-child").text()+'")');if(p.size()>0){p.eq(0).addClass("nav-current")}}}}q();return o}};window.pe=a;return a}(jQuery));(function(b){var a=window.pe||{fn:{}};a.fn.searchtermhighlight={type:"plugin",_exec:function(j){var f,h,e,g=b(j),d={termlength:pe.parameter("minlength",g)||3,passed:pe.url(document.location).param||""};f=(typeof d.passed==="string")?d.passed:d.passed.terms;e=b('<form class="wet-boew-termSearch"><label for="term">'+pe.dic.get("%search-for-terms")+'</label> <input type="text" id="term" name="term" value="'+f+'" role="textbox" aria-multiline="false" />&#160;<span class="matches-found" role="status" aria-live="polite" aria-relevant="additions text"></span></form>');g.before(e);e.on("change keypress click","input",function(k){setTimeout(function(){f=b(k.delegateTarget).find("input[type=text]").attr("value");h=b(k.delegateTarget).next();if(f.length>=d.minLength){i(h);c(f,h,d)}else{i(h)}},50)});e.submit(function(){return false});g.bind("searchComplete",function(l,m){var k;if(m<1){k=dictionary.noMatch}else{if(m===1){k=dictionary.oneMatch}else{k=m+dictionary.multiMatch}}b(l.target).prev().find(".matches-found").text(k)});if(f.length>=d.minLength){c(f,b(this),d)}function c(m,p,l){var q,o,k,n=0;m=m.replace(/^\s+|\s+$/g,"");m=m.replace(/\|+/g,"");q=m.split(" ");if(q.length>0){m="";for(k=0;k<q.length;k+=1){if(q[k].length>=l.minLength){m+=q[k]+" "}}m=m.replace(/^\s+|\s+$|\"|\(|\)/g,"")}m=m.replace(/\s+/g,"|");m="(?=([^>]*<))([\\s'])?("+m+")(?!>)";o=p.html().replace(new RegExp(m,"gi"),function(u,t,s,r){n+=1;return s+'<span class="wet-boew-highlight-term">'+r+"</span>"});p.trigger("searchComplete",[n]);p.html(o);return null}function i(k){k.find("span.wet-boew-highlight-term").each(function(){var l=b(this).text();b(this).replaceWith(l)});k.prev().find(".matches-found").text("")}return this}};window.pe=a;return a}(jQuery));(function(b){var a=window.pe||{fn:{}};a.fn.tabbedinterface={type:"plugin",depends:["easytabs","equalheights"],mobile:function(h){var d,g,f,e,c;d=h.find(".tabs li > a");g=h.find(".tabs-panel").children();f=b('<div data-role="collapsible-set"/>');for(e=0;e<d.length;e+=1){c=b('<div data-role="collapsible" data-theme="b" data-content-theme="b"/>');c.append("<h1>"+d.eq(e).text()+"</h1>");c.append(g.eq(e).html());if(d.eq(e).parent().hasClass("default")){c.attr("data-collapsed","false")}f.append(c)}h.replaceWith(f);return h},_exec:function(m){if(pe.mobile){return a.fn.tabbedinterface.mobile(m)}var j,w,n,d,h,t,o,p,e,c,l,u,q,v,i,k,f,g,r,s;p={panelActiveClass:"active",tabActiveClass:"active",defaultTab:((m.find(".default").length)?".default":"li:first-child"),autoHeight:(m.hasClass("auto-height-none")?false:true),cycle:(m.hasClass("cycle-slow")?8000:(m.hasClass("cycle-fast")?2000:(m.hasClass("cycle")?6000:false))),carousel:(/style-carousel/i.test(m.attr("class")))?true:false,autoPlay:(m.hasClass("auto-play")?true:false),animate:(m.hasClass("animate")||m.hasClass("animate-slow")||m.hasClass("animate-fast")?true:false),animationSpeed:(m.hasClass("animate-slow")?"slow":(m.hasClass("animate-fast")?"fast":"normal")),updateHash:false};w=m.find(".tabs");d=w.find("li > a");n=m.find(".tabs-panel").children();j=(w.find(".default").length>0?w.find(".default"):w.find("li:first-child"));w.attr("role","tablist");w.find("li").each(function(){b(this).attr("role","presentation");return b(this).children("a").each(function(){return b(this).attr("role","tab").attr("aria-selected","false").attr("id",b(this).attr("href").substring(1)+"-link").bind("click",function(){b(this).parent().parent().children("."+p.tabActiveClass).children("a").each(function(){b(this).attr("aria-selected","false");return b("#"+b(this).attr("href").substring(1)).attr("aria-hidden","true")});b(this).attr("aria-selected","true");return b("#"+b(this).attr("href").substring(1)).attr("aria-hidden","false")})})});n.each(function(){return b(this).attr("role","tabpanel").attr("aria-hidden","true").attr("aria-labelledby",b('a[href*="#'+b(this).attr("id")+'"]').attr("id"))});j.children("a").each(function(){b(this).attr("aria-selected","true");return b("#"+b(this).attr("href").substring(1)).attr("aria-hidden","false")});w.find("li a").bind("focus",function(){n.stop(true,true);b(this).click()});w.find("li a").keyup(function(y){if(y.keyCode===13||y.keyCode===32){var x=n.filter(function(){return b(this).is("."+p.tabActiveClass)});x.attr("tabindex","0");if(y.stopPropagation){y.stopImmediatePropagation()}else{y.cancelBubble=true}return setTimeout(function(){return x.focus()},0)}});m.keyup(function(x){if(x.which===37){c(d,n,p,true);x.preventDefault()}else{if(x.which===39){e(d,n,p,true);x.preventDefault()}}});c=function(x,D,C,B){var A,y,z;D.stop(true,true);A=x.filter(function(){return b(this).is("."+C.tabActiveClass)});y=x.eq((x.index(A)-1)+x.size()%x.size());if(C.animate){D.filter("."+C.panelActiveClass).removeClass(C.panelActiveClass).attr("aria-hidden","true").fadeOut(C.animationSpeed,function(){return D.filter("#"+y.attr("href").substr(1)).fadeIn(C.animationSpeed,function(){return b(this).addClass(C.panelActiveClass).attr("aria-hidden","false")})})}else{D.removeClass(C.panelActiveClass).attr("aria-hidden","true").hide();D.filter("#"+y.attr("href").substr(1)).show().addClass(C.panelActiveClass).attr("aria-hidden","false")}x.parent().removeClass(C.tabActiveClass).children().removeClass(C.tabActiveClass).filter("a").attr("aria-selected","false");y.parent().addClass(C.tabActiveClass).children().addClass(C.tabActiveClass).filter("a").attr("aria-selected","true");z=A.parent().siblings(".tabs-toggle");if(!B&&(z.length===0||z.data("state")==="stopped")){return y.focus()}};e=function(x,D,C,B){var A,y,z;D.stop(true,true);A=x.filter(function(){return b(this).is("."+C.tabActiveClass)});y=x.eq((x.index(A)+1)%x.size());if(C.animate){D.filter("."+C.panelActiveClass).removeClass(C.panelActiveClass).attr("aria-hidden","true").fadeOut(C.animationSpeed,function(){return D.filter("#"+y.attr("href").substr(1)).fadeIn(C.animationSpeed,function(){return b(this).addClass(C.panelActiveClass).attr("aria-hidden","false")})})}else{D.removeClass(C.panelActiveClass).attr("aria-hidden","true").hide();D.filter("#"+y.attr("href").substr(1)).show().addClass(C.panelActiveClass).attr("aria-hidden","false")}x.parent().removeClass(C.tabActiveClass).children().removeClass(C.tabActiveClass).filter("a").attr("aria-selected","false");y.parent().addClass(C.tabActiveClass).children().addClass(C.tabActiveClass).filter("a").attr("aria-selected","true");z=A.parent().siblings(".tabs-toggle");if(!B&&(z.length===0||z.data("state")==="stopped")){return y.focus()}};v=function(){if(t.data("state")==="stopped"){e(d,n,p,true);o(d,n,p);h.removeClass(l["class"]).addClass(u["class"]).html(u.text+"<span class='cn-invisible'>"+u["hidden-text"]+"</span>").attr("aria-pressed",true);return b(".cn-invisible",h).text(u["hidden-text"])}if(t.data("state")==="started"){return q()}};if(p.autoHeight){n.show();b(".tabs-panel",m).equalHeights(true)}m.easytabs(b.extend({},p,{cycle:false}));if(p.cycle){o=function(x,A,z){var y,B;y=x.filter(function(){return b(this).is("."+z.tabActiveClass)});B=y.siblings(".tabs-roller");m.find(".tabs-toggle").data("state","started");return B.show().animate({width:y.parent().width()},z.cycle-200,"linear",function(){b(this).width(0).hide();e(x,A,z,true);return m.data("interval",setTimeout(function(){return o(x,A,z)},0))})};q=function(){clearTimeout(m.data("interval"));m.find(".tabs-roller").width(0).hide().stop();m.find(".tabs-toggle").data("state","stopped");h.removeClass(u["class"]).addClass(l["class"]).html(l.text+"<span class='cn-invisible'>"+l["hidden-text"]+"</span>").attr("aria-pressed",false);return b(".cn-invisible",h).text(l["hidden-text"])};i=b("<li class='tabs-toggle'>");r={"class":"tabs-prev",text:"&nbsp;&nbsp;&nbsp;","hidden-text":pe.dic.get("%previous")};f=b("<a class='"+r["class"]+"' href='javascript:;' role='button' aria-pressed='true'>"+r.text+"<span class='cn-invisible'>"+r["hidden-text"]+"</span></a>");w.append(i.append(f));f.click(function(){c(d,n,p,true)});k=b("<li class='tabs-toggle'>");s={"class":"tabs-next",text:"&nbsp;&nbsp;&nbsp;","hidden-text":pe.dic.get("%next")};g=b("<a class='"+s["class"]+"' href='javascript:;' role='button' aria-pressed='true'>"+s.text+"<span class='cn-invisible'>"+s["hidden-text"]+"</span></a>");w.append(k.append(g));g.click(function(){e(d,n,p,true)});t=b("<li class='tabs-toggle'>");u={"class":"tabs-stop",text:pe.dic.get("%stop"),"hidden-text":pe.dic.get("%tab-rotation","disable")};l={"class":"tabs-start",text:pe.dic.get("%play"),"hidden-text":pe.dic.get("%tab-rotation","enable")};h=b("<a class='"+u["class"]+"' href='javascript:;' role='button' aria-pressed='true'>"+u.text+"<span class='cn-invisible'>"+u["hidden-text"]+"</span></a>");w.append(t.append(h));t.click(v).bind("keydown",function(x){if(x.keyCode===32){v();return x.preventDefault()}});w.find("li a").not(t.find("a")).click(function(){return q()});d.each(function(){var x;x=b('<div class="tabs-roller">').hide().click(function(){return b(this).siblings("a").click()}).hover(function(){return b(this).css("cursor","text")});if(b.browser.msie&&b.browser.version<8){b(".tabs-style-2 .tabs, .tabs-style-2 .tabs li").css("filter","")}return b(this).parent().append(x)});o(d,n,p);if(!p.autoPlay){q()}}m.find('a[href^="#"]').each(function(){var x,y;y=b(this).attr("href");if(y.length>1){x=b(y,n);if(x.length){return b(this).click(function(B){var z,A;z=x.parents('[role="tabpanel"]:hidden');if(z){B.preventDefault();A=z.attr("id");z.parent().siblings(".tabs").find('a[href="#'+A+'"]').click();return x.get(0).scrollIntoView(true)}})}}});return m.attr("class",m.attr("class").replace(/\bwidget-style-/,"style-"))}};window.pe=a;return a}(jQuery));(function(b){var a=window.pe||{fn:{}};a.fn.toolbar={scope:"plugin",_exec:function(d){var c=b('<div class="wet-boew-toolbar" role="toolbar"><ul><li class="toolbar-top-page"> <a href="#cn-tphp" role="link">'+pe.dic.get("%top-of-page")+"</a> </li></ul></div>");b("#cn-body-inner-3col, #cn-body-inner-2col, #cn-body-inner-1col").add("body").first().append(c);c.hide();b(window).bind("scroll",function(){if(b(this).scrollTop()>10){c.fadeIn("normal").attr("aria-hidden","false")}else{c.fadeOut("normal").attr("aria-hidden","true")}});if(b(window).scrollTop()<10||b(window).scrollTop()==="undefined"){c.fadeOut("normal").attr("aria-hidden","true")}else{c.fadeIn("normal").attr("aria-hidden","false")}}};window.pe=b.extend(true,window.pe,a);return window.pe}(jQuery));(function(b){var a=window.pe||{fn:{}};a.fn.webwidget={type:"plugin",twitter:{_parse_entries:function(d,e,j){var h,g,c,f;h=(e>0&&e<d.length?e:d.length);f=d.sort(function(k,i){return pe.date.compare(i.created_at.replace("+0000 ","")+" GMT",k.created_at.replace("+0000 ","")+" GMT")});c='<ul class="widget-content">';g=0;while(g<h){c+='<li><a class="float-left" href="http://www.twitter.com/';c+=f[g].user.name+"/status/"+f[g].user.id+'"><img class="widget-avatar" src="'+f[g].user.profile_image_url+'" /></a> ';c+=pe.string.ify.clean(f[g].text);c+=' <span class="widget-datestamp-accent">'+pe.dic.ago(f[g].created_at)+"</span></li>";g+=1}c+="</ul>";return j.replaceWith(c)},_json_request:function(c){if(c.toLowerCase().indexOf("!/search/")>-1){return c.replace("http://","https://").replace(/https:\/\/twitter.com\/#!\/search\/(.+$)/,function(g,f,e,d){return"http://search.twitter.com/search.json?q="+encodeURI(decodeURI(f))})}return c.replace("http://","https://").replace(/https:\/\/twitter.com\/#!\/(.+$)/i,function(g,f,e,d){return"http://twitter.com/status/user_timeline/"+encodeURI(decodeURI(f))+".json?callback=?"})},exec:function(j,e,k){var c,g,h,f,d;h=j.length-1;c=[];f=this._parse_entries;g=j.length-1;d=[];while(g>=0){b.getJSON(this._json_request(j[g]),function(l){var i;i=0;while(i<l.length){c.push(l[i]);i+=1}if(!h){f(c,e,k)}h-=1;return h});d.push(g-=1)}return d}},weather:{_parse_entries:function(d,e,f){var c;c='<ul class="widget-content">';c+='<li><a href="'+d[1].link+'">'+d[1].title+'</a><span class="widget-datestamp">['+pe.date.to_iso_format(d[1].publishedDate,true)+"]</span></li>";c+="</ul>";return f.replaceWith(c)},exec:function(j,e,k){var c,g,h,f,d;h=j.length-1;c=[];f=this._parse_entries;g=j.length-1;d=[];while(g>=0){b.getJSON(this._json_request(j[g]),function(l){var i;i=0;while(i<l.responseData.feed.entries.length){c.push(l.responseData.feed.entries[i]);i+=1}if(!h){f(c,e,k)}h-=1;return h});d.push(g-=1)}return d},_json_request:function(d,c){var e;d=d.replace(/^.*?\.gc\.ca\/([a-z]+).+\/(.*?)_[a-z]+_([ef])\.html/i,"http://www.weatheroffice.gc.ca/rss/$1/$2_$3.xml");e="http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&callback=?&q="+encodeURI(decodeURI(d));if(c>0){e+="&num="+c}return e}},rss:{_parse_entries:function(d,e,j){var h,g,c,f;h=(e>0&&e<d.length?e:d.length);f=d.sort(function(k,i){return pe.date.compare(i.publishedDate,k.publishedDate)});c='<ul class="widget-content">';g=0;while(g<h){c+='<li><a href="'+f[g].link+'">'+f[g].title+'</a><span class="widget-datestamp">['+pe.date.to_iso_format(f[g].publishedDate,true)+"]</span></li>";g+=1}c+="</ul>";return j.replaceWith(c)},exec:function(j,e,k){var c,g,h,f,d;h=j.length-1;c=[];f=this._parse_entries;g=j.length-1;d=[];while(g>=0){b.getJSON(this._json_request(j[g]),function(l){var i;i=0;while(i<l.responseData.feed.entries.length){c.push(l.responseData.feed.entries[i]);i+=1}if(!h){f(c,e,k)}h-=1;return h});d.push(g-=1)}return d},_json_request:function(d,c){var e;e="http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&callback=?&q="+encodeURI(decodeURI(d));if(c>0){e+="&num="+c}return e}},_exec:function(h,g){var f,d,c,e;f=b(h);e=pe.limit(f);c=f.find("a").map(function(){var i;i=b(this).attr("href");if(!g&&/twitter.com/i.test(i)){g="twitter"}if(!g&&/weatheroffice.gc.ca/i.test(i)){g="weather"}if(!g){g="rss"}return b(this).attr("href")});d=b('<ul class="widget-content"><li class="widget-state-loading"><img src="'+pe.add.liblocation+'/images/ajax-loader.gif" /><span class="cn-invisible">'+pe.dic.get("%loading")+"</span></li></ul>");f.find(".widget-content").replaceWith(d);b.extend({},a.fn.webwidget[g]).exec(c,e,d);return}};window.pe=a;return window.pe}(jQuery));(function(b){var a=window.pe||{fn:{}};a.fn.zebra={type:"plugin",_exec:function(f){var c,d,e;if(f.is("table")){c=(f.children("tr").add(f.children("tbody").children("tr"))).filter(function(){return b(this).children("td").length>0});c.filter(":odd").addClass("table-even");c.filter(":even").addClass("table-odd");c.on("hover focusin focusout",function(g){g.stopPropagation();b(this).toggleClass("table-hover")})}else{d=f.children("li");e=(f.parents("li").length+1)%2;d.filter(":odd").addClass(e===0?"list-odd":"list-even");d.filter(":even").addClass(e===1?"list-odd":"list-even");d.on("mouseover mouseout focusin focusout",function(g){g.stopPropagation();b(this).toggleClass("list-hover")})}}};window.pe=a;return a}(jQuery));