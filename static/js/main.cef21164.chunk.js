(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{277:function(e){e.exports={"menu.load_from_url":"Otw\xf3rz URL","menu.load_from_file":"Otw\xf3rz plik","menu.github":"\u0179r\xf3d\u0142a na GitHub","intro.title":"Topola Genealogy","intro.description":"Topola Genealogy pozwala przegl\u0105da\u0107 drzewo genealogiczne w interaktywny spos\xf3b.","intro.instructions":"Kliknij OTW\xd3RZ URL lub OTW\xd3RZ PLIK, aby za\u0142adowa\u0107 plik GEDCOM. Wi\u0119kszo\u015b\u0107 program\xf3w genealogicznych posiada funkcj\u0119 eksportu do pliku GEDCOM.","intro.examples":"Poni\u017cej jest kilka przyk\u0142ad\xf3w znalezionych w Internecie:","intro.from":"\u017ar\xf3d\u0142o:","intro.privacy":"Prywatno\u015b\u0107","intro.privacy_note":'U\u017cywaj\u0105c funkcji "Otw\xf3rz plik", Twoje dane nie s\u0105 nigdzie wysy\u0142ane i pozostaj\u0105 na Twoim komputerze. U\u017cywaj\u0105c funkcji "Otw\xf3rz URL", dane z podanego adresu przesy\u0142ane s\u0105 przez us\u0142ug\u0119 {link} w celu umo\u017cliwienia za\u0142adowania danych z innej domeny (CORS).',"load_from_url.title":"Otw\xf3rz z adresu URL","load_from_url.comment":"Dane z podanego adresu URL zostan\u0105 za\u0142adowane poprzez us\u0142ug\u0119 {link} w celu unikni\u0119cia problem\xf3w z CORS.","load_from_url.cancel":"Anuluj","load_from_url.load":"Otw\xf3rz"}},278:function(e,t){},313:function(e,t,a){e.exports=a(561)},374:function(e,t){},380:function(e,t){},555:function(e,t,a){},561:function(e,t,a){"use strict";a.r(t);var n=a(175),r=(a(314),a(346),a(347),a(275)),o=a(276),i=a(0),l=a(69),s=a(277),c=a(16),d=a(35),u=a(36),h=a(40),m=a(37),p=a(39),f=a(41),g=a(118),v=a.n(g),y=a(17),E=a(72);function w(){var e=y.select("#chart").node().parentElement;e.scrollLeft=-y.event.transform.x,e.scrollTop=-y.event.transform.y}function b(){var e=y.select("#chart").node().parentElement,t=e.scrollLeft+e.clientWidth/2,a=e.scrollTop+e.clientHeight/2;y.select(e).call(y.zoom().translateTo,t,a)}var O=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).chart=void 0,a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"renderChart",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{initialRender:!1};t.initialRender&&(y.select("#chart").node().innerHTML="",this.chart=Object(E.createChart)({json:this.props.data,chartType:E.HourglassChart,renderer:E.DetailedRenderer,svgSelector:"#chart",indiCallback:function(t){return e.props.onSelection(t)},animate:!0,updateSvgSize:!1}));var a=this.chart.render({startIndi:this.props.selection.id,baseGeneration:this.props.selection.generation}),n=y.select("#chart"),r=n.node().parentElement;y.select(r).on("scroll",b).call(y.zoom().scaleExtent([1,1]).translateExtent([[0,0],a.size]).on("zoom",w));var o,i,l=r.clientWidth/2-a.origin[0],s=r.clientHeight/2-a.origin[1],c=y.max([0,(r.clientWidth-a.size[0])/2]),d=y.max([0,(r.clientHeight-a.size[1])/2]),u=n.transition().delay(200).duration(500);(t.initialRender?n:u).attr("transform","translate(".concat(c,", ").concat(d,")")).attr("width",a.size[0]).attr("height",a.size[1]),t.initialRender?(r.scrollLeft=-l,r.scrollTop=-s):u.tween("scrollLeft",(i=-l,function(){var e=y.interpolateNumber(r.scrollLeft,i);return function(t){r.scrollLeft=e(t)}})).tween("scrollTop",(o=-s,function(){var e=y.interpolateNumber(r.scrollTop,o);return function(t){r.scrollTop=e(t)}}))}},{key:"componentDidMount",value:function(){this.renderChart({initialRender:!0})}},{key:"componentDidUpdate",value:function(e){this.renderChart({initialRender:this.props.data!==e.data})}},{key:"render",value:function(){return i.createElement("div",{id:"svgContainer"},i.createElement("svg",{id:"chart"}))}}]),t}(i.PureComponent);function j(e,t){if(!e.children)return e;var a=e.children.sort(function(e){var t=new Map;return e.indis.forEach(function(e){t[e.id]=e}),function(e,a){var n,r,o=(n=e)<(r=a)?-1:n>r?1:0,i=t[e],l=t[a],s=i&&i.birth,c=l&&l.birth,d=s&&(s.date||s.dateRange&&s.dateRange.from),u=c&&(c.date||c.dateRange&&c.dateRange.from);return d&&d.year&&u&&u.year?d.year!==u.year?d.year-u.year:d.month&&u.month?d.month!==u.month?d.month-u.month:d.day&&u.day&&d.day!==u.day?d.month-u.month:o:o:o}}(t));return Object.assign({},e,{children:a})}function k(e){if(!e.imageUrl||e.imageUrl.startsWith("http"))return e;var t=Object.assign({},e);return delete t.imageUrl,t}function z(e){var t=Object(E.gedcomToJson)(e);if(!t||!t.indis||!t.indis.length||!t.fams||!t.fams.length)throw new Error("Failed to read GEDCOM file");return function(e){var t=e.indis.map(k);return Object.assign({},e,{indis:t})}(function(e){var t=e.fams.map(function(t){return j(t,e)});return Object.assign({},e,{fams:t})}(t))}var C=a(577),U=a(570);function R(e){return i.createElement(C.a,{negative:!0,className:"error"},i.createElement(C.a.Header,null,"Failed to load file"),i.createElement("p",null,e.message))}function S(e,t,a){return{id:t||e.indis[0].id,generation:a||0}}var _=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!1},a.onSelection=function(e){var t=a.props.location,n=f.parse(t.search);n.indi=e.id,n.gen=String(e.generation),t.search=f.stringify(n),a.props.history.push(t)},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"loadFromUrl",value:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=sessionStorage.getItem(e);if(n){var r=JSON.parse(n);this.setState(Object.assign({},this.state,{data:r,selection:S(r,a.indi,a.generation),loadedUrl:e,loading:!1,error:void 0,hash:void 0}))}else{this.setState(Object.assign({},this.state,{loading:!0,loadedUrl:e,data:void 0,error:void 0}));var o=a.handleCors?"https://cors-anywhere.herokuapp.com/"+e:e;window.fetch(o).then(function(e){return 200!==e.status?Promise.reject(new Error(e.statusText)):e.text()}).then(function(n){return t.setGedcom({gedcom:n,url:e,indi:a.indi,generation:a.generation})}).catch(function(e){return t.setState(Object.assign({},t.state,{error:e.message,loading:!1}))})}}},{key:"setGedcom",value:function(e){var t=v()(e.gedcom);try{var a=z(e.gedcom),n=JSON.stringify(a);sessionStorage.setItem(e.url||t,n),this.setState(Object.assign({},this.state,{data:a,selection:S(a,e.indi,e.generation),hash:t,loading:!1,loadedUrl:e.url,error:void 0}))}catch(r){this.setState(Object.assign({},this.state,{data:void 0,selection:void 0,hash:t,loading:!1,error:"Failed to read GEDCOM file",loadedUrl:e.url}))}}},{key:"componentDidMount",value:function(){this.componentDidUpdate()}},{key:"componentDidUpdate",value:function(){var e=this.props.location.state&&this.props.location.state.data,t=f.parse(this.props.location.search),a=function(e){var a=t[e];return"string"===typeof a?a:void 0},n=a("url"),r=a("indi"),o=Number(a("gen")),i=isNaN(o)?void 0:o,l=a("file"),s="false"!==a("handleCors");if(l&&l!==this.state.hash)if(e)this.setGedcom({gedcom:e,indi:r,generation:i});else{var c=sessionStorage.getItem(l);if(c){var d=JSON.parse(c);this.setState(Object.assign({},this.state,{data:d,hash:l,selection:S(d,r,i),error:void 0,loading:!1,loadedUrl:void 0}))}else this.props.history.replace({pathname:"/"})}else if(!this.state.loading&&n&&this.state.loadedUrl!==n)this.loadFromUrl(n,{indi:r,generation:i,handleCors:n.startsWith("http")&&s});else if(n||e||l===this.state.hash){if(this.state.data&&this.state.selection){var u=S(this.state.data,r,i);this.state.selection.id===u.id&&this.state.selection.generation===u.generation||this.setState(Object.assign({},this.state,{selection:u}))}}else this.props.history.replace({pathname:"/"})}},{key:"render",value:function(){return this.state.data&&this.state.selection?i.createElement(O,{data:this.state.data,onSelection:this.onSelection,selection:this.state.selection}):this.state.error?i.createElement(R,{message:this.state.error}):i.createElement(U.a,{active:!0,size:"large"})}}]),t}(i.Component),L=a(580),M=a(584),D=a(583),T=a(576),x=a(571);function G(e){return i.createElement(x.a,{to:{pathname:"/view",search:f.stringify({url:e.url})}},e.text)}var F=a(575),I=a(581),N=a(274),H=a(574),W=a(573),P=a(579),A=a(578),J=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={loadUrlDialogOpen:!1},a.inputRef=void 0,a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"handleUpload",value:function(e){var t=this,a=e.target.files;if(a&&a.length){var n=new FileReader;n.onload=function(e){var a=e.target.result,n=v()(a);t.props.history.push({pathname:"/view",search:f.stringify({file:n}),state:{data:a}})},n.readAsText(a[0])}}},{key:"handleLoadFromUrl",value:function(){var e=this;this.setState(Object.assign({},this.state,{loadUrlDialogOpen:!0}),function(){return e.inputRef.focus()})}},{key:"handleClose",value:function(){this.setState(Object.assign({},this.state,{loadUrlDialogOpen:!1}))}},{key:"handleLoad",value:function(){this.setState(Object.assign({},this.state,{loadUrlDialogOpen:!1})),this.state.url&&this.props.history.push({pathname:"/view",search:f.stringify({url:this.state.url})})}},{key:"handleUrlChange",value:function(e){this.setState(Object.assign({},this.state,{url:e.target.value}))}},{key:"render",value:function(){var e=this,t=i.createElement(F.a,{open:this.state.loadUrlDialogOpen,onClose:function(){return e.handleClose()},centered:!1},i.createElement(I.a,null,i.createElement(N.a,{name:"cloud download"}),i.createElement(c.a,{id:"load_from_url.title",defaultMessage:"Load from URL",children:function(e){return e}})),i.createElement(F.a.Content,null,i.createElement(H.a,{onSubmit:function(){return e.handleLoad()}},i.createElement(W.a,{placeholder:"https://",fluid:!0,onChange:function(t){return e.handleUrlChange(t)},ref:function(t){return e.inputRef=t}}),i.createElement("p",null,i.createElement(c.a,{id:"load_from_url.comment",defaultMessage:"Data from the URL will be loaded through {link} to avoid CORS issues.",values:{link:i.createElement("a",{href:"https://cors-anywhere.herokuapp.com/"},"cors-anywhere.herokuapp.com")}})))),i.createElement(F.a.Actions,null,i.createElement(P.a,{secondary:!0,onClick:function(){return e.handleClose()}},i.createElement(c.a,{id:"load_from_url.cancel",defaultMessage:"Cancel"})),i.createElement(P.a,{primary:!0,onClick:function(){return e.handleLoad()}},i.createElement(c.a,{id:"load_from_url.load",defaultMessage:"Load"}))));return i.createElement(A.a,{attached:"top",inverted:!0,color:"blue",size:"large"},i.createElement(x.a,{to:"/"},i.createElement(A.a.Item,null,i.createElement("b",null,"Topola Genealogy"))),i.createElement(A.a.Item,{as:"a",onClick:function(){return e.handleLoadFromUrl()}},i.createElement(N.a,{name:"cloud download"}),i.createElement(c.a,{id:"menu.load_from_url",defaultMessage:"Load from URL"})),i.createElement("input",{className:"hidden",type:"file",accept:".ged",id:"fileInput",onChange:function(t){return e.handleUpload(t)}}),i.createElement("label",{htmlFor:"fileInput"},i.createElement(A.a.Item,{as:"a"},i.createElement(N.a,{name:"folder open"}),i.createElement(c.a,{id:"menu.load_from_file",defaultMessage:"Load from file"}))),i.createElement(A.a.Item,{as:"a",href:"https://github.com/PeWu/topola-viewer",position:"right"},i.createElement(c.a,{id:"menu.github",defaultMessage:"Source on GitHub"})),t)}}]),t}(i.Component);a(555),a(557);Object(c.c)([].concat(Object(n.a)(r),Object(n.a)(o)));var K={pl:s},Z=navigator.language&&navigator.language.split(/[-_]/)[0];l.render(i.createElement(c.b,{locale:Z,messages:K[Z]},i.createElement(L.a,null,i.createElement("div",{className:"root"},i.createElement(M.a,{component:J}),i.createElement(D.a,null,i.createElement(M.a,{exact:!0,path:"/",component:function(){return i.createElement(T.a,{className:"intro"},i.createElement(T.a.Content,null,i.createElement(T.a.Header,null,i.createElement(c.a,{id:"intro.title",defaultMessage:"Topola Genealogy Viewer"}))),i.createElement(T.a.Content,null,i.createElement("p",null,i.createElement(c.a,{id:"intro.description",defaultMessage:"Topola Genealogy is a genealogy tree viewer that lets you browse the structure of the family."})),i.createElement("p",null,i.createElement(c.a,{id:"intro.instructions",defaultMessage:"Use the LOAD FROM URL or LOAD FROM FILE buttons above to load a GEDCOM file. You can export a GEDCOM file from most of the existing genealogy programs and web sites."})),i.createElement("p",null,i.createElement(c.a,{id:"intro.examples",defaultMessage:"Here are some examples from the web that you can view:"})),i.createElement("ul",null,i.createElement("li",null,i.createElement(G,{url:"http://genpol.com/module-Downloads-prep_hand_out-lid-32.html",text:"Karol Wojty\u0142a"})," ","(",i.createElement(c.a,{id:"intro.from",defaultMessage:"from"})," ",i.createElement("a",{href:"http://genpol.com/module-Downloads-display-lid-32.html"},"GENPOL"),")"),i.createElement("li",null,i.createElement(G,{url:"https://webtreeprint.com/tp_downloader.php?path=famous_gedcoms/shakespeare.ged",text:"Shakespeare"})," ","(",i.createElement(c.a,{id:"intro.from",defaultMessage:"from"})," ",i.createElement("a",{href:"https://webtreeprint.com/tp_famous_gedcoms.php"},"webtreeprint.com"),")"),i.createElement("li",null,i.createElement(G,{url:"http://genealogyoflife.com/tng/gedcom/HarryPotter.ged",text:"Harry Potter"})," ","(",i.createElement(c.a,{id:"intro.from",defaultMessage:"from"})," ",i.createElement("a",{href:"http://famousfamilytrees.blogspot.com/"},"Famous Family Trees"),")")),i.createElement("p",null,i.createElement("b",null,i.createElement(c.a,{id:"intro.privacy",defaultMessage:"Privacy"})),":",i.createElement(c.a,{id:"intro.privacy_note",defaultMessage:'When using the "load from file" option, this site does not send your data anywhere and files loaded from disk do not leave your computer. When using "load from URL", data is passed through the {link} service to deal with an issue with cross-site file loading in the browser (CORS).',values:{link:i.createElement("a",{href:"https://cors-anywhere.herokuapp.com/"},"cors-anywhere")}}))))}}),i.createElement(M.a,{exact:!0,path:"/view",component:_}))))),document.querySelector("#root"))}},[[313,2,1]]]);
//# sourceMappingURL=main.cef21164.chunk.js.map