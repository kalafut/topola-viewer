(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{250:function(e){e.exports={"menu.load_from_url":"Otw\xf3rz URL","menu.load_from_file":"Otw\xf3rz plik","menu.print":"Drukuj","menu.download":"Pobierz","menu.pdf_file":"Plik PDF","menu.png_file":"Plik PNG","menu.svg_file":"Plik SVG","menu.view":"Widok","menu.hourglass":"Wykres klepsydrowy","menu.relatives":"Wszyscy krewni","menu.fancy":"Ozdobne drzewo (eksperymentalne)","menu.github":"\u0179r\xf3d\u0142a na GitHub","menu.powered_by":"Topola Genealogy","menu.search.placeholder":"Szukaj osoby","menu.search.no_results":"Brak wynik\xf3w","intro.title":"Topola Genealogy","intro.description":"Topola Genealogy pozwala przegl\u0105da\u0107 drzewo genealogiczne w interaktywny spos\xf3b.","intro.instructions":"Kliknij OTW\xd3RZ URL lub OTW\xd3RZ PLIK, aby za\u0142adowa\u0107 plik GEDCOM. Wi\u0119kszo\u015b\u0107 program\xf3w genealogicznych posiada funkcj\u0119 eksportu do pliku GEDCOM.","intro.examples":"Poni\u017cej jest kilka przyk\u0142ad\xf3w znalezionych w Internecie:","intro.from":"\u017ar\xf3d\u0142o:","intro.privacy":"Prywatno\u015b\u0107","intro.privacy_note":'U\u017cywaj\u0105c funkcji "Otw\xf3rz plik", Twoje dane nie s\u0105 nigdzie wysy\u0142ane i pozostaj\u0105 na Twoim komputerze. U\u017cywaj\u0105c funkcji "Otw\xf3rz URL", dane z podanego adresu przesy\u0142ane s\u0105 przez us\u0142ug\u0119 {link} w celu umo\u017cliwienia za\u0142adowania danych z innej domeny (CORS).',"load_from_url.title":"Otw\xf3rz z adresu URL","load_from_url.comment":"Dane z podanego adresu URL zostan\u0105 za\u0142adowane poprzez us\u0142ug\u0119 {link} w celu unikni\u0119cia problem\xf3w z CORS.","load_from_url.cancel":"Anuluj","load_from_url.load":"Otw\xf3rz","gedcom.BAPM":"Chrzest","gedcom.BIRT":"Narodziny","gedcom.BURI":"Pogrzeb","gedcom.CHR":"Chrzest","gedcom.DEAT":"\u015amier\u0107","gedcom.EMAIL":"E-mail","gedcom.EVEN":"Wydarzenie","gedcom.OCCU":"Zaw\xf3d","gedcom.TITL":"Tytu\u0142","gedcom.WWW":"Strona WWW","date.abt":"oko\u0142o","date.cal":"wyliczone","date.est":"oszacowane","date.between":"mi\u0119dzy {from} a {to}","date.after":"po {from}","date.before":"przed {to}","error.error":"B\u0142\u0105d","error.failed_pdf":"Nie uda\u0142o si\u0119 utworzy\u0107 pliku PDF. Spr\xf3buj jeszcze raz z mniejszym diagramem lub pobierz plik SVG.","error.failed_png":"Nie uda\u0142o si\u0119 utworzy\u0107 pliku PNG. Spr\xf3buj jeszcze raz z mniejszym diagramem lub pobierz plik SVG.","error.failed_to_load_file":"B\u0142\u0105d wczytywania pliku"}},251:function(e,t){},294:function(e,t,n){e.exports=n(525)},306:function(e,t){},312:function(e,t){},522:function(e,t,n){},525:function(e,t,n){"use strict";n.r(t);var a=n(76),r=n(248),o=n(249),i=n(0),s=n(63),l=n(250),c=n(15),u=n(16),d=n.n(u),f=n(24),m=n(29),p=n(30),h=n(40),g=n(37),v=n(39),w=n(32);function E(e,t){window.gtag("event",e,t)}var y,b=n(18),k=n(253),O=n.n(k),x=n(164),j=n(33);function M(){var e=b.select("#chart").node().parentElement;e.scrollLeft=-b.event.transform.x,e.scrollTop=-b.event.transform.y}function S(){var e=b.select("#chart").node().parentElement,t=e.scrollLeft+e.clientWidth/2,n=e.scrollTop+e.clientHeight/2;b.select(e).call(b.zoom().translateTo,t,n)}function R(e){var t=new FileReader;return t.readAsDataURL(e),new Promise(function(e,n){t.onload=function(t){return e(t.target.result)}})}function z(e){return C.apply(this,arguments)}function C(){return(C=Object(f.a)(d.a.mark(function e(t){var n,a,r,o;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.href.baseVal){e.next=3;break}return e.abrupt("return");case 3:return e.prev=3,e.next=6,fetch(n);case 6:return a=e.sent,e.next=9,a.blob();case 9:return r=e.sent,e.next=12,R(r);case 12:o=e.sent,t.href.baseVal=o,e.next=19;break;case 16:e.prev=16,e.t0=e.catch(3),console.warn("Failed to load image:",e.t0);case 19:case"end":return e.stop()}},e,null,[[3,16]])}))).apply(this,arguments)}function _(e){return D.apply(this,arguments)}function D(){return(D=Object(f.a)(d.a.mark(function e(t){var n;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=Array.from(t.getElementsByTagName("image")),e.next=3,Promise.all(n.map(z));case 3:case"end":return e.stop()}},e)}))).apply(this,arguments)}function T(e){var t=new Image;return t.src=URL.createObjectURL(e),new Promise(function(e,n){t.addEventListener("load",function(){return e(t)})})}function P(e){var t=document.createElement("canvas");t.width=2*e.width,t.height=2*e.height;var n=t.getContext("2d"),a=n.fillStyle;return n.fillStyle="white",n.fillRect(0,0,t.width,t.height),n.fillStyle=a,n.drawImage(e,0,0,t.width,t.height),t}function N(e,t){return new Promise(function(n,a){e.toBlob(function(e){e?n(e):a()},t)})}!function(e){e[e.Hourglass=0]="Hourglass",e[e.Relatives=1]="Relatives",e[e.Fancy=2]="Fancy"}(y||(y={}));var L=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).chart=void 0,n}return Object(v.a)(t,e),Object(p.a)(t,[{key:"getChartType",value:function(){switch(this.props.chartType){case y.Hourglass:return j.HourglassChart;case y.Relatives:return j.RelativesChart;case y.Fancy:return j.FancyChart;default:return j.HourglassChart}}},{key:"getRendererType",value:function(){switch(this.props.chartType){case y.Fancy:return j.CircleRenderer;default:return j.DetailedRenderer}}},{key:"renderChart",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{initialRender:!1};t.initialRender&&(b.select("#chart").node().innerHTML="",this.chart=Object(j.createChart)({json:this.props.data,chartType:this.getChartType(),renderer:this.getRendererType(),svgSelector:"#chart",indiCallback:function(t){return e.props.onSelection(t)},animate:!0,updateSvgSize:!1,locale:this.context.intl.locale}));var n=this.chart.render({startIndi:this.props.selection.id,baseGeneration:this.props.selection.generation}),a=b.select("#chart"),r=a.node().parentElement;b.select(r).on("scroll",S).call(b.zoom().scaleExtent([1,1]).translateExtent([[0,0],n.size]).on("zoom",M));var o,i,s=r.clientWidth/2-n.origin[0],l=r.clientHeight/2-n.origin[1],c=b.max([0,(r.clientWidth-n.size[0])/2]),u=b.max([0,(r.clientHeight-n.size[1])/2]),d=a.transition().delay(200).duration(500);(t.initialRender?a:d).attr("transform","translate(".concat(c,", ").concat(u,")")).attr("width",n.size[0]).attr("height",n.size[1]),t.initialRender?(r.scrollLeft=-s,r.scrollTop=-l):d.tween("scrollLeft",(i=-s,function(){var e=b.interpolateNumber(r.scrollLeft,i);return function(t){r.scrollLeft=e(t)}})).tween("scrollTop",(o=-l,function(){var e=b.interpolateNumber(r.scrollTop,o);return function(t){r.scrollTop=e(t)}}))}},{key:"componentDidMount",value:function(){this.renderChart({initialRender:!0})}},{key:"componentDidUpdate",value:function(e){var t=this.props.data!==e.data||this.props.chartType!==e.chartType;this.renderChart({initialRender:t})}},{key:"render",value:function(){return i.createElement("div",{id:"svgContainer"},i.createElement("svg",{id:"chart"}))}},{key:"getSvgContents",value:function(){var e=document.getElementById("chart").cloneNode(!0);return e.removeAttribute("transform"),(new XMLSerializer).serializeToString(e)}},{key:"getSvgContentsWithInlinedImages",value:function(){var e=Object(f.a)(d.a.mark(function e(){var t;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(t=document.getElementById("chart").cloneNode(!0)).removeAttribute("transform"),e.next=4,_(t);case 4:return e.abrupt("return",(new XMLSerializer).serializeToString(t));case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"print",value:function(){var e=this,t=document.createElement("iframe");t.style.position="absolute",t.style.top="-1000px",t.style.left="-1000px",t.onload=function(){t.contentDocument.open(),t.contentDocument.write(e.getSvgContents()),t.contentDocument.close(),setTimeout(function(){t.contentWindow.focus(),t.contentWindow.print(),t.parentNode.removeChild(t)},500)},document.body.appendChild(t)}},{key:"downloadSvg",value:function(){var e=Object(f.a)(d.a.mark(function e(){var t,n;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getSvgContentsWithInlinedImages();case 2:t=e.sent,n=new Blob([t],{type:"image/svg+xml"}),Object(x.saveAs)(n,"topola.svg");case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"drawOnCanvas",value:function(){var e=Object(f.a)(d.a.mark(function e(){var t,n;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getSvgContentsWithInlinedImages();case 2:return t=e.sent,n=new Blob([t],{type:"image/svg+xml"}),e.t0=P,e.next=7,T(n);case 7:return e.t1=e.sent,e.next=10,(0,e.t0)(e.t1);case 10:return e.abrupt("return",e.sent);case 11:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"downloadPng",value:function(){var e=Object(f.a)(d.a.mark(function e(){var t,n;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.drawOnCanvas();case 2:return t=e.sent,e.next=5,N(t,"image/png");case 5:n=e.sent,Object(x.saveAs)(n,"topola.png");case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"downloadPdf",value:function(){var e=Object(f.a)(d.a.mark(function e(){var t,n;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.drawOnCanvas();case 2:t=e.sent,(n=new O.a({orientation:t.width>t.height?"l":"p",unit:"pt",format:[t.width,t.height]})).addImage(t,"PNG",0,0,t.width,t.height,"NONE"),n.save("topola.pdf");case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}]),t}(i.PureComponent);L.contextTypes={intl:c.d};var I=n(255),U=n.n(I),A=n(256),F=n.n(A),W=n(160);function H(e){return e.substring(1,e.length-1)}function G(e){var t=e.find(function(e){return"HEAD"===e.tag}),n={},a={},r={};return e.forEach(function(e){"INDI"===e.tag?n[H(e.pointer)]=e:"FAM"===e.tag?a[H(e.pointer)]=e:e.pointer&&(r[H(e.pointer)]=e)}),{head:t,indis:n,fams:a,other:r}}function B(e){var t=function(e){var t=new Map;return e.indis.forEach(function(e){t[e.id]=e}),function(e,n){var a,r,o=(a=e)<(r=n)?-1:a>r?1:0,i=t[e],s=t[n],l=i&&i.birth,c=s&&s.birth,u=l&&(l.date||l.dateRange&&l.dateRange.from),d=c&&(c.date||c.dateRange&&c.dateRange.from);return u&&u.year&&d&&d.year?u.year!==d.year?u.year-d.year:u.month&&d.month?u.month!==d.month?u.month-d.month:u.day&&d.day&&u.day!==d.day?u.month-d.month:o:o:o}}(e),n=e.fams.map(function(e){return function(e,t){if(!e.children)return e;var n=e.children.sort(t);return Object.assign({},e,{children:n})}(e,t)});return Object.assign({},e,{fams:n})}var V=[".jpg",".png",".gif"];function J(e,t){if(e.imageUrl){var n=e.imageUrl.match(/[^\/\\]*$/)[0];if(t.has(n)){var a=Object.assign({},e);return a.imageUrl=t.get(n),a}}if(!e.imageUrl||e.imageUrl.startsWith("http")&&function(e){var t=e.toLowerCase();return V.some(function(e){return t.endsWith(e)})}(e.imageUrl))return e;var r=Object.assign({},e);return delete r.imageUrl,r}function Y(e,t){var n=e.indis.map(function(e){return J(e,t)});return Object.assign({},e,{indis:n})}function q(e){var t=e&&e.tree&&e.tree.find(function(e){return"SOUR"===e.tag}),n=t&&t.tree&&t.tree.find(function(e){return"NAME"===e.tag});return n&&n.data||null}var K=new Map([["abt","about"],["cal","calculated"],["est","estimated"]]);function X(e,t){var n=void 0!==e.day,a=void 0!==e.month,r=void 0!==e.year;if(!n&&!a&&!r)return e.text||"";var o=new Date(r?e.year:0,a?e.month-1:0,n?e.day:1),i=e.qualifier&&e.qualifier.toLowerCase(),s={day:n?"numeric":void 0,month:a?"long":void 0,year:r?"numeric":void 0};return[i&&t.formatMessage({id:"date.".concat(i),defaultMessage:K.get(i)||i}),new Intl.DateTimeFormat(t.locale,s).format(o)].join(" ")}function Z(e,t){var n=Object(j.getDate)(e);return n?n.date?X(n.date,t):n.dateRange?function(e,t){var n=e.from,a=e.to,r=n&&X(n,t),o=a&&X(a,t);return r&&o?t.formatMessage({id:"date.between",defaultMessage:"between {from} and {to}"},{from:r,to:o}):r?t.formatMessage({id:"date.after",defaultMessage:"after {from}"},{from:r}):o?t.formatMessage({id:"date.before",defaultMessage:"before {to}"},{to:o}):""}(n.dateRange,t):"":""}var $=["BIRT","BAPM","CHR","DEAT","BURI","EVEN"],Q=["NAME","SEX","FAMC","FAMS","NOTE","SOUR"],ee=new Map([["BAPM","Baptism"],["BIRT","Birth"],["BURI","Burial"],["CHR","Christening"],["DEAT","Death"],["EMAIL","E-mail"],["EVEN","Event"],["OCCU","Occupation"],["TITL","Title"],["WWW","WWW"]]);function te(e){return i.createElement(c.a,{id:"gedcom.".concat(e),defaultMessage:ee.get(e)||e})}function ne(e){return i.createElement(i.Fragment,null,e.map(function(e,t){return i.createElement("div",{key:t},i.createElement(F.a,{properties:{target:"_blank"}},e),i.createElement("br",null))}))}function ae(e){var t=[e.data];return e.tree.forEach(function(e){if("CONC"===e.tag&&e.data){var n=t.length-1;t[n]+=e.data}else"CONT"===e.tag&&e.data&&t.push(e.data)}),t}function re(e){return ne(ae(e).map(function(e,t){return i.createElement("i",{key:t},e)}))}function oe(e){return i.createElement("h2",{className:"ui header"},e.data.split("/").filter(function(e){return!!e}).map(function(e,t){return i.createElement("div",{key:t},e,i.createElement("br",null))}))}function ie(e,t,n){return U()(t,function(t){return e.filter(function(e){return e.tag===t}).map(function(e){return n(e)})}).filter(function(e){return null!==e}).map(function(e,t){return i.createElement("div",{className:"ui segment",key:t},e)})}function se(e){return e.tree.length>0||e.data&&!e.data.startsWith("@")}function le(e){return e.filter(function(e){return!Q.includes(e.tag)&&!$.includes(e.tag)}).filter(se).map(function(e){return function(e){var t=[];return e.data&&t.push.apply(t,Object(a.a)(ae(e))),e.tree.filter(function(e){return"NOTE"===e.tag}).forEach(function(e){return ae(e).forEach(function(e){return t.push(i.createElement("i",null,e))})}),t.length?i.createElement(i.Fragment,null,i.createElement("div",{className:"ui sub header"},te(e.tag)),i.createElement("span",null,ne(t))):null}(e)}).filter(function(e){return null!==e}).map(function(e,t){return i.createElement("div",{className:"ui segment",key:t},e)})}var ce=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.props.gedcom.indis[this.props.indi].tree,n=t.map(function(t){return function(e,t){if(e.data){var n=t.other[H(e.data)];if(n)return n}return e}(t,e.props.gedcom)}).filter(se);return i.createElement("div",{className:"ui segments",id:"details"},ie(t,["NAME"],oe),ie(t,$,function(t){return function(e,t){var n=[];e.data&&e.data.length>1&&n.push(i.createElement("i",null,e.data));var r=e.tree.find(function(e){return"DATE"===e.tag});r&&r.data&&n.push(Z(r.data,t));var o=e.tree.find(function(e){return"PLAC"===e.tag});return o&&o.data&&n.push.apply(n,Object(a.a)(ae(o))),e.tree.filter(function(e){return"NOTE"===e.tag}).forEach(function(e){return ae(e).forEach(function(e){return n.push(i.createElement("i",null,e))})}),n.length?i.createElement(i.Fragment,null,i.createElement("div",{className:"ui sub header"},te(e.tag)),i.createElement("span",null,ne(n))):null}(t,e.context.intl)}),le(n),ie(n,["NOTE"],re))}}]),t}(i.Component);function ue(e,t,n){return{id:t||e.indis[0].id,generation:n||0}}function de(e,t,n){var a=function(e,t){var n=Object(W.parse)(e),a=Object(j.gedcomEntriesToJson)(n);if(!a||!a.indis||!a.indis.length||!a.fams||!a.fams.length)throw new Error("Failed to read GEDCOM file");return{chartData:Y(B(a),t),gedcom:G(n)}}(e,n||new Map),r=JSON.stringify(a);try{sessionStorage.setItem(t,r)}catch(o){console.warn("Failed to store data in session storage: "+o)}return a}function fe(e,t){return me.apply(this,arguments)}function me(){return(me=Object(f.a)(d.a.mark(function e(t,n){var a,r,o,i;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(a=sessionStorage.getItem(t))){e.next=4;break}return e.abrupt("return",JSON.parse(a));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.warn("Failed to load data from session storage: "+e.t0);case 9:return r=n?"https://cors-anywhere.herokuapp.com/"+t:t,e.next=12,window.fetch(r);case 12:if(200===(o=e.sent).status){e.next=15;break}throw new Error(o.statusText);case 15:return e.next=17,o.text();case 17:return i=e.sent,e.abrupt("return",de(i,t));case 19:case"end":return e.stop()}},e,null,[[0,6]])}))).apply(this,arguments)}function pe(e,t,n){return he.apply(this,arguments)}function he(){return(he=Object(f.a)(d.a.mark(function e(t,n,a){var r;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(r=sessionStorage.getItem(t))){e.next=4;break}return e.abrupt("return",JSON.parse(r));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.warn("Failed to load data from session storage: "+e.t0);case 9:if(n){e.next=11;break}throw new Error("Error loading data. Please upload your file again.");case 11:return e.abrupt("return",de(n,t,a));case 12:case"end":return e.stop()}},e,null,[[0,6]])}))).apply(this,arguments)}ce.contextTypes={intl:c.d};var ge=n(540),ve=n(533);function we(e){return i.createElement(ve.a,{to:{pathname:"/view",search:w.stringify({url:e.url})}},e.text)}function Ee(){return i.createElement(ge.a,{className:"intro"},i.createElement(ge.a.Content,null,i.createElement(ge.a.Header,null,i.createElement(c.a,{id:"intro.title",defaultMessage:"Topola Genealogy Viewer"}))),i.createElement(ge.a.Content,null,i.createElement("p",null,i.createElement(c.a,{id:"intro.description",defaultMessage:"Topola Genealogy is a genealogy tree viewer that lets you browse the structure of the family."})),i.createElement("p",null,i.createElement(c.a,{id:"intro.instructions",defaultMessage:"Use the LOAD FROM URL or LOAD FROM FILE buttons above to load a GEDCOM file. You can export a GEDCOM file from most of the existing genealogy programs and web sites."})),i.createElement("p",null,i.createElement(c.a,{id:"intro.examples",defaultMessage:"Here are some examples from the web that you can view:"})),i.createElement("ul",null,i.createElement("li",null,i.createElement(we,{url:"http://genpol.com/module-Downloads-prep_hand_out-lid-32.html",text:"Karol Wojty\u0142a"})," ","(",i.createElement(c.a,{id:"intro.from",defaultMessage:"from"})," ",i.createElement("a",{href:"http://genpol.com/module-Downloads-display-lid-32.html"},"GENPOL"),")"),i.createElement("li",null,i.createElement(we,{url:"https://webtreeprint.com/tp_downloader.php?path=famous_gedcoms/shakespeare.ged",text:"Shakespeare"})," ","(",i.createElement(c.a,{id:"intro.from",defaultMessage:"from"})," ",i.createElement("a",{href:"https://webtreeprint.com/tp_famous_gedcoms.php"},"webtreeprint.com"),")"),i.createElement("li",null,i.createElement(we,{url:"http://genealogyoflife.com/tng/gedcom/HarryPotter.ged",text:"Harry Potter"})," ","(",i.createElement(c.a,{id:"intro.from",defaultMessage:"from"})," ",i.createElement("a",{href:"http://famousfamilytrees.blogspot.com/"},"Famous Family Trees"),")")),i.createElement("p",null,i.createElement("b",null,i.createElement(c.a,{id:"intro.privacy",defaultMessage:"Privacy"})),":",i.createElement(c.a,{id:"intro.privacy_note",defaultMessage:'When using the "load from file" option, this site does not send your data anywhere and files loaded from disk do not leave your computer. When using "load from URL", data is passed through the {link} service to deal with an issue with cross-site file loading in the browser (CORS).',values:{link:i.createElement("a",{href:"https://cors-anywhere.herokuapp.com/"},"cors-anywhere")}})),i.createElement("p",{className:"ui right aligned version"},"version: ",new Date("2019-11-29 23:35:49 +0100").toISOString().slice(0,16).replace("T"," ")," (",i.createElement("a",{href:"https://github.com/PeWu/topola-viewer/commit/".concat("07bcafc")},"07bcafc"),")")))}var ye=n(541),be=n(548),ke=n(550),Oe=n(536),xe=n(547),je=n(549),Me=n(544),Se=n(261),Re=n.n(Se),ze=n(165),Ce=n.n(ze),_e=n(262),De=n.n(_e),Te=n(263),Pe=n.n(Te);function Ne(e){return e.toLocaleLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/\u0142/g,"l")}function Le(e,t){return e.score!==t.score?t.score-e.score:De()(e.ref,t.ref)}function Ie(e,t){return e.tree.filter(function(e){return"FAMS"===e.tag}).map(function(e){return t.fams[H(e.data)]}).filter(function(e){return!!e}).map(function(n){var a=n.tree.find(function(e){return"HUSB"===e.tag}),r=a&&H(a.data);return r&&r!==H(e.pointer)&&t.indis[r]}).filter(function(e){return!!e}).flatMap(function(e){return e.tree.filter(function(e){return"NAME"===e.tag}).map(function(e){var t=e.data.split("/");return t.length>=2?t[1]:""})}).join(" ")}var Ue=function(){function e(t){Object(m.a)(this,e),this.gedcom=t,this.index=void 0}return Object(p.a)(e,[{key:"initialize",value:function(){var e=this;this.index=Pe()(function(){for(var t in this.ref("id"),this.field("id"),this.field("name",{boost:10}),this.field("normalizedName",{boost:8}),this.field("spouseLastName",{boost:2}),this.field("normalizedSpouseLastName",{boost:2}),e.gedcom.indis){var n=e.gedcom.indis[t],a=n.tree.filter(function(e){return"NAME"===e.tag}).map(function(e){return e.data}).join(" "),r=Ie(n,e.gedcom);this.add({id:t,name:a,normalizedName:Ne(a),spouseLastName:r,normalizedSpouseLastName:Ne(r)})}})}},{key:"search",value:function(e){var t=this,n=e.split(" ").filter(function(e){return!!e}).map(function(e){return"+".concat(e,"*")}).join(" ");return this.index.search(n).sort(Le).slice(0,8).map(function(e){return{id:e.ref,indi:t.gedcom.indis[e.ref]}})}}]),e}();function Ae(e){var t=e.indi.tree.find(function(e){return"NAME"===e.tag}),n=t&&t.data.split("/").filter(function(e){return!!e}).join(" ");return e.id.length>8?n:i.createElement(i.Fragment,null,n," ",i.createElement("i",null,"(",e.id,")"))}function Fe(e,t,n){var a=e.tree.find(function(e){return e.tag===t}),r=a&&a.tree.find(function(e){return"DATE"===e.tag});return r&&Z(r.data,n)||""}function We(e,t){var n=Fe(e,"BIRT",t),a=Fe(e,"DEAT",t);return a?"".concat(n," \u2013 ").concat(a):n}var He=n(538),Ge=n(546),Be=n(64),Ve=n(537),Je=n(535),Ye=n(527),qe=n(543),Ke=n(539),Xe=n(542);function Ze(e){return new Promise(function(t,n){var a=new FileReader;a.onload=function(e){t(e.target.result)},a.readAsText(e)})}function $e(e){var t=e.toLowerCase();return t.endsWith(".jpg")||t.endsWith(".png")}var Qe,et=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={loadUrlDialogOpen:!1,searchResults:[]},n.inputRef=void 0,n.searchRef=void 0,n.searchIndex=void 0,n}return Object(v.a)(t,e),Object(p.a)(t,[{key:"handleUpload",value:function(){var e=Object(f.a)(d.a.mark(function e(t){var n,a,r,o,i,s,l,c,u;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if((n=t.target.files)&&n.length){e.next=3;break}return e.abrupt("return");case 3:return a=Array.from(n),t.target.value="",E("upload_files_selected",{event_value:n.length}),r=1===a.length?a[0]:a.find(function(e){return e.name.toLowerCase().endsWith(".ged")})||a[0],o=a.filter(function(e){return e.name!==r.name&&$e(e.name)}).map(function(e){return{name:e.name,url:URL.createObjectURL(e)}}),i=new Map(o.map(function(e){return[e.name,e.url]})),e.next=11,Ze(r);case 11:s=e.sent,l=o.map(function(e){return e.name}).sort().join("|"),c=Ce()(Ce()(s)+l),u=w.parse(this.props.location.search),(u.file===c?this.props.history.replace:this.props.history.push)({pathname:"/view",search:w.stringify({file:c}),state:{data:s,images:i}});case 17:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"handleLoadFromUrl",value:function(){var e=this;this.setState(Object.assign({},this.state,{loadUrlDialogOpen:!0}),function(){return e.inputRef.focus()})}},{key:"handleClose",value:function(){this.setState(Object.assign({},this.state,{loadUrlDialogOpen:!1}))}},{key:"handleLoad",value:function(){this.setState(Object.assign({},this.state,{loadUrlDialogOpen:!1})),this.state.url&&(E("url_selected"),this.props.history.push({pathname:"/view",search:w.stringify({url:this.state.url})}))}},{key:"handleUrlChange",value:function(e){this.setState(Object.assign({},this.state,{url:e.target.value}))}},{key:"handleSearch",value:function(e){var t=this;if(e){var n=this.searchIndex.search(e).map(function(e){return function(e,t){return{id:e.id,key:e.id,title:Ae(e),description:We(e.indi,t)}}(e,t.context.intl)});this.setState(Object.assign({},this.state,{searchResults:n}))}}},{key:"handleResultSelect",value:function(e){E("search_result_selected"),this.props.eventHandlers.onSelection({id:e,generation:0}),this.searchRef.setValue("")}},{key:"initializeSearchIndex",value:function(){this.props.gedcom&&(this.searchIndex=function(e){var t=new Ue(e);return t.initialize(),t}(this.props.gedcom))}},{key:"changeView",value:function(e){var t=this.props.location,n=w.parse(t.search);n.view!==e&&(n.view=e,t.search=w.stringify(n),this.props.history.push(t))}},{key:"componentDidMount",value:function(){this.initializeSearchIndex()}},{key:"componentDidUpdate",value:function(e){e.gedcom!==this.props.gedcom&&this.initializeSearchIndex()}},{key:"render",value:function(){var e=this,t=i.createElement(He.a,{open:this.state.loadUrlDialogOpen,onClose:function(){return e.handleClose()},centered:!1},i.createElement(Ge.a,null,i.createElement(Be.a,{name:"cloud download"}),i.createElement(c.a,{id:"load_from_url.title",defaultMessage:"Load from URL",children:function(e){return e}})),i.createElement(He.a.Content,null,i.createElement(Ve.a,{onSubmit:function(){return e.handleLoad()}},i.createElement(Je.a,{placeholder:"https://",fluid:!0,onChange:function(t){return e.handleUrlChange(t)},ref:function(t){return e.inputRef=t}}),i.createElement("p",null,i.createElement(c.a,{id:"load_from_url.comment",defaultMessage:"Data from the URL will be loaded through {link} to avoid CORS issues.",values:{link:i.createElement("a",{href:"https://cors-anywhere.herokuapp.com/"},"cors-anywhere.herokuapp.com")}})))),i.createElement(He.a.Actions,null,i.createElement(Ye.a,{secondary:!0,onClick:function(){return e.handleClose()}},i.createElement(c.a,{id:"load_from_url.cancel",defaultMessage:"Cancel"})),i.createElement(Ye.a,{primary:!0,onClick:function(){return e.handleLoad()}},i.createElement(c.a,{id:"load_from_url.load",defaultMessage:"Load"})))),n=this.props.showingChart?i.createElement(i.Fragment,null,i.createElement(qe.a.Item,{as:"a",onClick:function(){return e.props.eventHandlers.onPrint()}},i.createElement(Be.a,{name:"print"}),i.createElement(c.a,{id:"menu.print",defaultMessage:"Print"})),i.createElement(Ke.a,{trigger:i.createElement("div",null,i.createElement(Be.a,{name:"download"}),i.createElement(c.a,{id:"menu.download",defaultMessage:"Download"})),className:"item"},i.createElement(Ke.a.Menu,null,i.createElement(Ke.a.Item,{onClick:function(){return e.props.eventHandlers.onDownloadPdf()}},i.createElement(c.a,{id:"menu.pdf_file",defaultMessage:"PDF file"})),i.createElement(Ke.a.Item,{onClick:function(){return e.props.eventHandlers.onDownloadPng()}},i.createElement(c.a,{id:"menu.png_file",defaultMessage:"PNG file"})),i.createElement(Ke.a.Item,{onClick:function(){return e.props.eventHandlers.onDownloadSvg()}},i.createElement(c.a,{id:"menu.svg_file",defaultMessage:"SVG file"})))),i.createElement(Ke.a,{trigger:i.createElement("div",null,i.createElement(Be.a,{name:"eye"}),i.createElement(c.a,{id:"menu.view",defaultMessage:"View"})),className:"item"},i.createElement(Ke.a.Menu,null,i.createElement(Ke.a.Item,{onClick:function(){return e.changeView("hourglass")}},i.createElement(Be.a,{name:"hourglass"}),i.createElement(c.a,{id:"menu.hourglass",defaultMessage:"Hourglass chart"})),i.createElement(Ke.a.Item,{onClick:function(){return e.changeView("relatives")}},i.createElement(Be.a,{name:"users"}),i.createElement(c.a,{id:"menu.relatives",defaultMessage:"All relatives"})),i.createElement(Ke.a.Item,{onClick:function(){return e.changeView("fancy")}},i.createElement(Be.a,{name:"users"}),i.createElement(c.a,{id:"menu.fancy",defaultMessage:"Fancy tree (experimental)"})))),i.createElement(Xe.a,{onSearchChange:Re()(function(t,n){return e.handleSearch(n.value)},200),onResultSelect:function(t,n){return e.handleResultSelect(n.result.id)},results:this.state.searchResults,noResultsMessage:this.context.intl.formatMessage({id:"menu.search.no_results",defaultMessage:"No results found"}),placeholder:this.context.intl.formatMessage({id:"menu.search.placeholder",defaultMessage:"Search for people"}),selectFirstResult:!0,ref:function(t){return e.searchRef=t}})):null,a=this.props.standalone?i.createElement(i.Fragment,null,i.createElement(ve.a,{to:"/"},i.createElement(qe.a.Item,null,i.createElement("b",null,"Topola Genealogy"))),i.createElement(qe.a.Item,{as:"a",onClick:function(){return e.handleLoadFromUrl()}},i.createElement(Be.a,{name:"cloud download"}),i.createElement(c.a,{id:"menu.load_from_url",defaultMessage:"Load from URL"})),i.createElement("input",{className:"hidden",type:"file",accept:".ged,image/*",id:"fileInput",multiple:!0,onChange:function(t){return e.handleUpload(t)}}),i.createElement("label",{htmlFor:"fileInput"},i.createElement(qe.a.Item,{as:"a"},i.createElement(Be.a,{name:"folder open"}),i.createElement(c.a,{id:"menu.load_from_file",defaultMessage:"Load from file"})))):null,r=this.props.standalone?i.createElement(i.Fragment,null,i.createElement(qe.a.Item,{as:"a",href:"https://github.com/PeWu/topola-viewer",position:"right",target:"_blank"},i.createElement(c.a,{id:"menu.github",defaultMessage:"Source on GitHub"}))):i.createElement(i.Fragment,null,i.createElement(qe.a.Item,{as:"a",href:"https://pewu.github.com/topola-viewer",position:"right",target:"_blank"},i.createElement(c.a,{id:"menu.powered_by",defaultMessage:"Powered by Topola"})));return i.createElement(qe.a,{attached:"top",inverted:!0,color:"blue",size:"large"},a,n,r,t)}}]),t}(i.Component);function tt(e){return i.createElement(ye.a,{negative:!0,className:"error"},i.createElement(ye.a.Header,null,i.createElement(c.a,{id:"error.failed_to_load_file",defaultMessage:"Failed to load file"})),i.createElement("p",null,e.message))}function nt(e){return i.createElement(be.a,{open:e.open,onClose:e.onDismiss},i.createElement(ye.a,{negative:!0,className:"errorPopup",onDismiss:e.onDismiss},i.createElement(ye.a.Header,null,i.createElement(c.a,{id:"error.error",defaultMessage:"Error"})),i.createElement("p",null,e.message)))}et.contextTypes={intl:c.d},function(e){e.GEDCOM="gedcom",e.READY="ready",e.PARENT_READY="parent_ready"}(Qe||(Qe={}));var at=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!1,embedded:!1,standalone:!0,chartType:y.Hourglass,showErrorPopup:!1},n.chartRef=null,n.onSelection=function(e){if(E("selection_changed"),n.state.embedded)n.updateDisplay(e);else{var t=n.props.location,a=w.parse(t.search);a.indi=e.id,a.gen=String(e.generation),t.search=w.stringify(a),n.props.history.push(t)}},n.onPrint=function(){E("print"),n.chartRef&&n.chartRef.print()},n.onDownloadPdf=Object(f.a)(d.a.mark(function e(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(E("download_pdf"),e.prev=1,e.t0=n.chartRef,!e.t0){e.next=6;break}return e.next=6,n.chartRef.downloadPdf();case 6:e.next=11;break;case 8:e.prev=8,e.t1=e.catch(1),n.showErrorPopup(n.context.intl.formatMessage({id:"error.failed_pdf",defaultMessage:"Failed to generate PDF file. Please try with a smaller diagram or download an SVG file."}));case 11:case"end":return e.stop()}},e,null,[[1,8]])})),n.onDownloadPng=Object(f.a)(d.a.mark(function e(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(E("download_png"),e.prev=1,e.t0=n.chartRef,!e.t0){e.next=6;break}return e.next=6,n.chartRef.downloadPng();case 6:e.next=11;break;case 8:e.prev=8,e.t1=e.catch(1),n.showErrorPopup(n.context.intl.formatMessage({id:"error.failed_png",defaultMessage:"Failed to generate PNG file. Please try with a smaller diagram or download an SVG file."}));case 11:case"end":return e.stop()}},e,null,[[1,8]])})),n.onDownloadSvg=function(){E("download_svg"),n.chartRef&&n.chartRef.downloadSvg()},n.onDismissErrorPopup=function(){n.setState(Object.assign({},n.state,{showErrorPopup:!1}))},n.renderMainArea=function(){return n.state.data&&n.state.selection?i.createElement("div",{id:"content"},i.createElement(nt,{open:n.state.showErrorPopup,message:n.state.error,onDismiss:n.onDismissErrorPopup}),i.createElement(L,{data:n.state.data.chartData,selection:n.state.selection,chartType:n.state.chartType,onSelection:n.onSelection,ref:function(e){return n.chartRef=e}}),n.state.showSidePanel?i.createElement(ke.a,{minWidth:768,id:"sidePanel"},i.createElement(ce,{gedcom:n.state.data.gedcom,indi:n.state.selection.id})):null):n.state.error?i.createElement(tt,{message:n.state.error}):i.createElement(Oe.a,{active:!0,size:"large"})},n}return Object(v.a)(t,e),Object(p.a)(t,[{key:"isNewData",value:function(e,t,n){return!(!e||e===this.state.hash)||!(!t||this.state.url===t)||!!n&&!this.state.loading&&!this.state.data}},{key:"updateDisplay",value:function(e,t){(!this.state.selection||this.state.selection.id!==e.id||this.state.selection.generation!==e.generation||void 0!==t&&t!==this.state.chartType)&&this.setState(Object.assign({},this.state,{selection:e,chartType:void 0!==t?t:this.state.chartType}))}},{key:"setError",value:function(e){this.setState(Object.assign({},this.state,{error:e,loading:!1}))}},{key:"onMessage",value:function(){var e=Object(f.a)(d.a.mark(function e(t){var n,a;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.message!==Qe.PARENT_READY){e.next=4;break}window.parent.postMessage({message:Qe.READY},"*"),e.next=21;break;case 4:if(t.message!==Qe.GEDCOM){e.next=21;break}if(n=t.gedcom){e.next=8;break}return e.abrupt("return");case 8:return e.prev=8,e.next=11,pe("",n);case 11:a=e.sent,E("embedded_file_loaded",{event_label:q(a.gedcom.head)}),this.setState(Object.assign({},this.state,{data:a,selection:ue(a.chartData),error:void 0,loading:!1})),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(8),E("embedded_file_error"),this.setError(e.t0.message);case 21:case"end":return e.stop()}},e,this,[[8,17]])}));return function(t){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.componentDidUpdate()}},{key:"componentDidUpdate",value:function(){var e=Object(f.a)(d.a.mark(function e(){var t,n,a,r,o,i,s,l,c,u,f,m,p,h,g,v,b,k,O,x=this;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("/view"===this.props.location.pathname){e.next=2;break}return e.abrupt("return");case 2:if(t=w.parse(this.props.location.search),a="false"!==(n=function(e){var n=t[e];return"string"===typeof n?n:void 0})("sidePanel"),(r="true"===n("embedded"))&&!this.state.embedded&&(this.setState(Object.assign({},this.state,{embedded:!0,standalone:!1,showSidePanel:a})),window.parent.postMessage("ready","*"),window.addEventListener("message",function(e){return x.onMessage(e.data)})),!r){e.next=9;break}return e.abrupt("return");case 9:if(o=n("url"),i=n("indi"),s=Number(n("gen")),l=isNaN(s)?void 0:s,c=n("file"),u="false"!==n("handleCors"),f="false"!==n("standalone"),m=n("view"),p=new Map([["relatives",y.Relatives],["fancy",y.Fancy]]),h=p.get(m)||y.Hourglass,g=this.props.location.state&&this.props.location.state.data,v=this.props.location.state&&this.props.location.state.images,o||c){e.next=25;break}this.props.history.replace({pathname:"/"}),e.next=50;break;case 25:if(!this.isNewData(c,o,g)){e.next=49;break}if(e.prev=26,this.setState(Object.assign({},this.state,{data:void 0,selection:void 0,hash:c,error:void 0,loading:!0,url:o,standalone:f,chartType:h})),!c){e.next=34;break}return e.next=31,pe(c,g,v);case 31:e.t0=e.sent,e.next=37;break;case 34:return e.next=36,fe(o,u);case 36:e.t0=e.sent;case 37:b=e.t0,k=q(b.gedcom.head),E(c?"upload_file_loaded":"url_file_loaded",{event_label:k,event_value:v&&v.size||0}),this.setState(Object.assign({},this.state,{data:b,hash:c,selection:ue(b.chartData,i,l),error:void 0,loading:!1,url:o,showSidePanel:a,standalone:f,chartType:h})),e.next=47;break;case 43:e.prev=43,e.t1=e.catch(26),E(c?"upload_file_error":"url_file_error"),this.setError(e.t1.message);case 47:e.next=50;break;case 49:this.state.data&&this.state.selection&&(O=ue(this.state.data.chartData,i,l),this.updateDisplay(O,h));case 50:case"end":return e.stop()}},e,this,[[26,43]])}));return function(){return e.apply(this,arguments)}}()},{key:"showErrorPopup",value:function(e){this.setState(Object.assign({},this.state,{showErrorPopup:!0,error:e}))}},{key:"render",value:function(){var e=this;return i.createElement(i.Fragment,null,i.createElement(xe.a,{render:function(t){return i.createElement(et,Object.assign({},t,{gedcom:e.state.data&&e.state.data.gedcom,showingChart:!("/view"!==e.props.history.location.pathname||!e.state.data||!e.state.selection),standalone:e.state.standalone,eventHandlers:{onSelection:e.onSelection,onPrint:e.onPrint,onDownloadPdf:e.onDownloadPdf,onDownloadPng:e.onDownloadPng,onDownloadSvg:e.onDownloadSvg}}))}}),i.createElement(je.a,null,i.createElement(xe.a,{exact:!0,path:"/",component:Ee}),i.createElement(xe.a,{exact:!0,path:"/view",render:this.renderMainArea}),i.createElement(Me.a,{to:"/"})))}}]),t}(i.Component);at.contextTypes={intl:c.d};var rt=n(281),ot=n(545);n(522),n(523),n(524);Object(c.c)([].concat(Object(a.a)(r),Object(a.a)(o)));var it={pl:l},st=navigator.language&&navigator.language.split(/[-_]/)[0],lt=Object(rt.detect)();lt&&"ie"===lt.name?s.render(i.createElement("p",null,"Topola Genealogy Viewer does not support Internet Explorer. Please try a different browser."),document.querySelector("#root")):s.render(i.createElement(c.b,{locale:st,messages:it[st]},i.createElement(ot.a,null,i.createElement(xe.a,{component:at}))),document.querySelector("#root"))}},[[294,1,2]]]);
//# sourceMappingURL=main.74aa871d.chunk.js.map