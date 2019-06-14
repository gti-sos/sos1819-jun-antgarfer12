import{getArrayCopy,dashedAttr2CSSMap,loadRefImage,showRecursively}from'./raphael.lib';export default function(n){if(n.svg){var e={visibility:'hidden',"font-size":'0px'},t=String,r=parseFloat,i=parseInt,o={top:0,bottom:-1,middle:-.5},a=n._g.win,s=a.navigator,d=!!document.documentMode,l=Math,p=l.max,c=l.abs,h=l.pow,f=l.sqrt,g=/^xlink:/,u=/[, ]+/,y=/\n|<br\s*?\/?>/i,m=/&lt|&gt|<br/i,v=Array.prototype.shift,_=!!(/AppleWebKit/.test(s.userAgent)&&(!/Chrome/.test(s.userAgent)||29>s.appVersion.match(/Chrome\/(\d+)\./)[1])),k=n.eve,w=!!s.platform&&/iPad|iPhone|iPod/.test(s.platform),x={block:'M5,0 0,2.5 5,5z',classic:'M5,0 0,2.5 5,5 3.5,3 3.5,2z',diamond:'M2.5,0 5,2.5 2.5,5 0,2.5z',open:'M6,1 1,3.5 6,6',oval:'M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z'},b={speed:'optimizeSpeed',crisp:'crispEdges',precision:'geometricPrecision'},C=s.userAgent.toLowerCase(),A=function(){var e=-1!=C.indexOf('msie')&&parseInt(C.split('msie')[1]);return!!(e&&9===e)}(),S=n.supportsPointer,L=n.supportsTouch,E={},P=function(e,t,r,i){n._preload(r[1],function(){var r=this.offsetWidth,a=this.offsetHeight;I(e,{width:r,height:a}),I(t,{width:r,height:a}),i.safari()})},B=function(e,t){if(t)for(var r in t)e[r]=t[r]},N={elementInfo:[]},T=n._g.doc,a=n._g.win,z={mouseover:'touchstart',mousedown:'touchstart',mouseup:'touchend',mousemove:'touchmove',mouseout:'touchend'},D={"accent-height":!0,accumulate:!0,additive:!0,"alignment-baseline":!0,alphabetic:!0,amplitude:!0,"arabic-form":!0,ascent:!0,azimuth:!0,"baseline-shift":!0,bbox:!0,begin:!0,bias:!0,by:!0,"cap-height":!0,class:!0,clip:!0,"clip-path":!0,"clip-rule":!0,color:!0,"color-interpolation":!0,"color-interpolation-filters":!0,"color-profile":!0,"color-rendering":!0,cursor:!0,cx:!0,cy:!0,d:!0,decelerate:!0,descent:!0,direction:!0,display:!0,divisor:!0,"dominant-baseline":!0,dur:!0,dx:!0,dy:!0,elevation:!0,"enable-background":!0,end:!0,exponent:!0,fill:!0,"fill-opacity":!0,"fill-rule":!0,filter:!0,"flood-color":!0,"flood-opacity":!0,"font-family":!0,"font-size":!0,"font-size-adjust":!0,"font-stretch":!0,"font-style":!0,"font-variant":!0,"font-weight":!0,format:!0,fr:!0,from:!0,fx:!0,fy:!0,g1:!0,g2:!0,"glyph-name":!0,"glyph-orientation-horizontal":!0,"glyph-orientation-vertical":!0,hanging:!0,height:!0,"horiz-adv-x":!0,"horiz-origin-x":!0,href:!0,hreflang:!0,id:!0,ideographic:!0,"image-rendering":!0,in2:!0,in:!0,intercept:!0,k1:!0,k2:!0,k3:!0,k4:!0,k:!0,kerning:!0,lang:!0,"letter-spacing":!0,"lighting-color":!0,local:!0,"marker-end":!0,"marker-mid":!0,"marker-start":!0,mask:!0,mathematical:!0,max:!0,media:!0,method:!0,min:!0,mode:!0,name:!0,offset:!0,opacity:!0,operator:!0,order:!0,orient:!0,orientation:!0,origin:!0,overflow:!0,"overline-position":!0,"overline-thickness":!0,"paint-order":!0,"panose-1":!0,path:!0,ping:!0,"pointer-events":!0,points:!0,r:!0,radius:!0,rel:!0,"rendering-intent":!0,restart:!0,result:!0,rotate:!0,rx:!0,ry:!0,scale:!0,seed:!0,"shape-rendering":!0,slope:!0,spacing:!0,speed:!0,stemh:!0,stemv:!0,"stop-color":!0,"stop-opacity":!0,"strikethrough-position":!0,"strikethrough-thickness":!0,string:!0,stroke:!0,"stroke-dasharray":!0,"stroke-dashoffset":!0,"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-miterlimit":!0,"stroke-opacity":!0,"stroke-width":!0,style:!0,tabindex:!0,target:!0,"text-anchor":!0,"text-decoration":!0,"text-rendering":!0,to:!0,transform:!0,type:!0,u1:!0,u2:!0,"underline-position":!0,"underline-thickness":!0,unicode:!0,"unicode-bidi":!0,"unicode-range":!0,"units-per-em":!0,"v-alphabetic":!0,"v-hanging":!0,"v-ideographic":!0,"v-mathematical":!0,values:!0,"vector-effect":!0,version:!0,"vert-adv-y":!0,"vert-origin-x":!0,"vert-origin-y":!0,visibility:!0,width:!0,widths:!0,"word-spacing":!0,"writing-mode":!0,x1:!0,x2:!0,x:!0,"x-height":!0,"xlink:actuate":!0,"xlink:arcrole":!0,"xlink:href":!0,"xlink:role":!0,"xlink:show":!0,"xlink:title":!0,"xlink:type":!0,"xml:base":!0,"xml:lang":!0,"xml:space":!0,y1:!0,y2:!0,y:!0,z:!0};L&&T.addEventListener(S?'pointerover':'touchstart',function(t){if(N.srcElement&&N.srcElement!==(t.srcElement||t.target)){var e,r,a,e=N.elementInfo,n=e.length;for(a=0;a<n;a++)r=e[a],r.callback.call(r.el,t)}N={elementInfo:[]}},!0),n.toString=function(){return'Your browser supports SVG.\nYou are running Rapha\xEBl '+this.version},n._url='';var O=function(e,t){var r=e.gradient;if(r){if(r===t)return;r.refCount--,r.refCount||r.parentNode.removeChild(r),delete e.gradient}t&&(e.gradient=t,t.refCount++)},I=n._createNode=function(e,r){if('string'==typeof e&&(e=n._g.doc.createElementNS('http://www.w3.org/2000/svg',e)),r){var i,a;for(i in r)a=A?t(r[i]):r[i],g.test(i)?e.setAttributeNS('http://www.w3.org/1999/xlink',i.replace(g,''),a):e.setAttribute(i,a)}return e},M={userSpaceOnUse:'userSpaceOnUse',objectBoundingBox:'objectBoundingBox'},R={pad:'pad',redlect:'reflect',repeat:'repeat'},U=function(e,a){if(!e.paper||!e.paper.defs)return 0;var d,g,u,y,m,v,_='linear',w=e.paper,x=n.getElementID((w.id+'-'+a).replace(/[()\s%:,\xb0#]/g,'_')),k=.5,b=.5,C=e.node,o=C.style,s=n._g.doc.getElementById(x);if(!s){if(a=t(a).replace(n._radial_gradient,function(e,t){_='radial',t=t?t.split(','):[],y=t[5],m=t[6];var i,a,n=t[0],o=t[1],s=t[2],l=t[3],p=t[4],c=n&&o;return(s&&(d=/%/.test(s)?s:r(s)),y===M.userSpaceOnUse)?(c&&(k=n,b=o),l&&p&&(g=l,u=p,!c&&(k=g,b=u)),''):(c&&(k=r(n),b=r(o),i=2*(.5<b)-1,.25<(a=h(k-.5,2))+h(b-.5,2)&&.25>a&&(b=f(.25-a)*i+.5)&&.5!==b&&(b=b.toFixed(5)-1e-5*i)),l&&p&&(g=r(l),u=r(p),i=2*(.5<u)-1,.25<(a=h(g-.5,2))+h(u-.5,2)&&.25>a&&(u=f(.25-a)*i+.5)&&.5!==u&&(u=u.toFixed(5)-1e-5*i),!c&&(k=g,b=u)),'')}),a=a.split(/\s*-\s*/),'linear'==_){var A,S=a.shift(),L=S.match(/\((.*)\)/);if(L=L&&L[1]&&L[1].split(/\s*,\s*/),S=-r(S),isNaN(S))return null;L&&L.length?(L[0]in M?(y=L.shift(),L[0]in R&&(m=L.shift())):(L[4]&&(y=L[4]),L[5]&&(m=L[5])),v=[L[0]||'0%',L[1]||'0%',L[2]||'100%',L[3]||'0%']):(v=[0,0,l.cos(n.rad(S)),l.sin(n.rad(S))],A=1/(p(c(v[2]),c(v[3]))||1),v[2]*=A,v[3]*=A,0>v[2]&&(v[0]=-v[2],v[2]=0),0>v[3]&&(v[1]=-v[3],v[3]=0))}var E=n._parseDots(a);if(!E)return null;s=I(_+'Gradient',{id:x}),s.refCount=0,y in M&&s.setAttribute('gradientUnits',t(y)),m in R&&s.setAttribute('spreadMethod',t(m)),'radial'==_?(void 0!==d&&s.setAttribute('r',t(d)),void 0!==g&&void 0!==u&&(s.setAttribute('cx',t(g)),s.setAttribute('cy',t(u))),s.setAttribute('fx',t(k)),s.setAttribute('fy',t(b))):I(s,{x1:v[0],y1:v[1],x2:v[2],y2:v[3]});for(var P=0,B=E.length;P<B;P++)s.appendChild(I('stop',{offset:E[P].offset?E[P].offset:P?'100%':'0%',"stop-color":E[P].color||'#fff',"stop-opacity":void 0===E[P].opacity?1:E[P].opacity}));w.defs.appendChild(s)}return O(e,s),I(C,{fill:'url(\''+n._url+'#'+x+'\')',"fill-opacity":1}),o.fill='',1},H=function(e){var t=e.getBBox(1);I(e.pattern,{patternTransform:e.matrix.invert()+' translate('+t.x+','+t.y+')'})},F=function(e,r,a){if('path'==e.type){for(var o,s,d,l,c,f=t(r).toLowerCase().split('-'),g=e.paper,p=a?'end':'start',u=e.node,y=e.attrs,m=y['stroke-width'],v=f.length,_='classic',k=3,b=3,C=5;v--;)switch(f[v]){case'block':case'classic':case'oval':case'diamond':case'open':case'none':_=f[v];break;case'wide':b=5;break;case'narrow':b=2;break;case'long':k=5;break;case'short':k=2;}if('open'==_?(k+=2,b+=2,C+=2,d=1,l=a?4:1,c={fill:'none',stroke:y.stroke}):(l=d=k/2,c={fill:y.stroke,stroke:'none'}),e._.arrows?a?(e._.arrows.endPath&&E[e._.arrows.endPath]--,e._.arrows.endMarker&&E[e._.arrows.endMarker]--):(e._.arrows.startPath&&E[e._.arrows.startPath]--,e._.arrows.startMarker&&E[e._.arrows.startMarker]--):e._.arrows={},'none'!=_){var A='raphael-marker-'+_,S='raphael-marker-'+p+_+k+b+'-obj'+e.id;n._g.doc.getElementById(A)?E[A]++:(g.defs.appendChild(I(I('path'),{"stroke-linecap":'round',d:x[_],id:A})),E[A]=1);var L,P=n._g.doc.getElementById(S);P?(E[S]++,L=P.getElementsByTagName('use')[0]):(P=I(I('marker'),{id:S,markerHeight:b,markerWidth:k,orient:'auto',refX:l,refY:b/2}),L=I(I('use'),{"xlink:href":'#'+A,transform:(a?'rotate(180 '+k/2+' '+b/2+') ':'')+'scale('+k/C+','+b/C+')',"stroke-width":(1/((k/C+b/C)/2)).toFixed(4)}),P.appendChild(L),g.defs.appendChild(P),E[S]=1),I(L,c);var B=d*('diamond'!=_&&'oval'!=_);a?(o=e._.arrows.startdx*m||0,s=n.getTotalLength(y.path)-B*m):(o=B*m,s=n.getTotalLength(y.path)-(e._.arrows.enddx*m||0)),c={},c['marker-'+p]='url(\''+n._url+'#'+S+'\')',(s||o)&&(c.d=n.getSubpath(y.path,o,s)),I(u,c),e._.arrows[p+'Path']=A,e._.arrows[p+'Marker']=S,e._.arrows[p+'dx']=B,e._.arrows[p+'Type']=_,e._.arrows[p+'String']=r}else a?(o=e._.arrows.startdx*m||0,s=n.getTotalLength(y.path)-o):(o=0,s=n.getTotalLength(y.path)-(e._.arrows.enddx*m||0)),e._.arrows[p+'Path']&&I(u,{d:n.getSubpath(y.path,o,s)}),delete e._.arrows[p+'Path'],delete e._.arrows[p+'Marker'],delete e._.arrows[p+'dx'],delete e._.arrows[p+'Type'],delete e._.arrows[p+'String'];for(c in E)if(E.hasOwnProperty(c)&&!E[c]){var N=n._g.doc.getElementById(c);N&&N.parentNode.removeChild(N)}}},V={"":['none'],none:['none'],"-":[3,1],".":[1,1],"-.":[3,1,1,1],"-..":[3,1,1,1,1,1],". ":[1,3],"- ":[4,3],"--":[8,3],"- .":[4,3,1,3],"--.":[8,3,1,3],"--..":[8,3,1,3,1,3]},j=function(e,t,r){if(void 0!==t){var a,o,s,d,l,p=V[t.toLowerCase&&t.toLowerCase()];if(t=p||[].concat(t),n.is(t,'array')){if(o=r['stroke-width']||e.attrs['stroke-width']||1,s={round:o,square:o,butt:0}[r['stroke-linecap']||e.attrs['stroke-linecap']]||0,d=t.length,l=p?o:1,'none'===t[0])a=t;else for(a=[];d--;)a[d]=t[d]*l+(d%2?1:-1)*s,0>=a[d]&&(a[d]=.01+(1>=o?s:0)),isNaN(a[d])&&(a[d]=0);return{"stroke-dasharray":a.join(',')}}}},G=n._setFillAndStroke=function(e,r){if(e.paper.canvas){var a,o,s,d,l,h,f=e.node,g=e.attrs,y=e.paper,m={},v={},w={"clip-rect":!0};for(o in'image'===e.type&&loadRefImage(e,r),r)if(!(o in n._availableAttrs))o in D&&(''===s&&o in g?(delete g[o],f.removeAttribute(o)):(g[o]=s,v[o]=s));else if(s=r[o],''===s&&o in g)delete g[o],f.removeAttribute('src'===o?'href':o);else if(null===s&&!w[o])o in g&&(delete g[o],f.removeAttribute('src'===o?'href':o));else switch(g[o]=s,o){case'blur':e.blur(s);break;case'href':case'title':case'target':var x=f.parentNode;if('a'!==x.tagName.toLowerCase()){if(''===s)break;var k=I('a');k.raphael=!0,k.raphaelid=f.raphaelid,x.insertBefore(k,f),k.appendChild(f),x=k}'target'===o?x.setAttributeNS('http://www.w3.org/1999/xlink','show','blank'===s?'new':s):x.setAttributeNS('http://www.w3.org/1999/xlink',o,s),f.titleNode=x;break;case'cursor':v.cursor=s;break;case'transform':e.transform(s);break;case'rotation':n.is(s,'array')?e.rotate.apply(e,s):e.rotate(s);break;case'arrow-start':F(e,s);break;case'arrow-end':F(e,s,1);break;case'clip-path':d=!0;case'clip-rect':if(h=!d&&t(s).split(u),e._.clipispath=!!d,d||4===h.length){e.clip&&e.clip.parentNode.parentNode.removeChild(e.clip.parentNode);var C=I(d?'path':'rect');a=I('clipPath'),a.id=n.getElementID(n.createUUID()),I(C,d?{d:s?g['clip-path']=n._pathToAbsolute(s):n._availableAttrs.path,fill:'none'}:{x:h[0],y:h[1],width:h[2],height:h[3],transform:e.matrix.invert()}),a.appendChild(C),y.defs.appendChild(a),m['clip-path']='url(\''+n._url+'#'+a.id+'\')',e.clip=C}if(!s){var A=f.getAttribute('clip-path');if(A){var S=n._g.doc.getElementById(A.replace(/(^url\(#|\)$)/g,''));S&&S.parentNode.removeChild(S),m['clip-path']='',11===document.documentMode&&f.removeAttribute('clip-path'),delete e.clip}}break;case'path':'path'===e.type&&(m.d=s?g.path=n._stopabsolutePath?n.sanitizePath(s):n._pathToAbsolute(s):n._availableAttrs.path,e._.dirty=1,e._.arrows&&('startString'in e._.arrows&&F(e,e._.arrows.startString),'endString'in e._.arrows&&F(e,e._.arrows.endString,1)));break;case'width':if(m[o]=s,e._.dirty=1,g.fx)o='x',s=g.x;else break;case'x':g.fx&&(s=-g.x-(g.width||0));case'rx':if('rx'===o&&'rect'===e.type)break;case'cx':m[o]=s,e.pattern&&H(e),e._.dirty=1;break;case'height':if(m[o]=s,e._.dirty=1,g.fy)o='y',s=g.y;else break;case'y':if('text'===e.type)break;g.fy&&(s=-g.y-(g.height||0));case'ry':if('ry'===o&&'rect'===e.type)break;case'cy':m[o]=s,e.pattern&&H(e),e._.dirty=1;break;case'r':'rect'===e.type?m.rx=m.ry=s:m[o]=s,e._.dirty=1;break;case'src':'image'===e.type&&f.setAttributeNS('http://www.w3.org/1999/xlink','href',s);break;case'stroke-width':(1!==e._.sx||1!==e._.sy)&&(s/=p(c(e._.sx),c(e._.sy))||1),y._vbSize&&(s*=y._vbSize),_&&0===s&&(s=1e-6),m[o]=s,!r['stroke-dasharray']&&g['stroke-dasharray']&&''!==r['stroke-dasharray']&&B(m,j(e,g['stroke-dasharray'],r)),e._.arrows&&('startString'in e._.arrows&&n.addArrow&&n.addArrow(e,e._.arrows.startString),'endString'in e._.arrows&&n.addArrow&&n.addArrow(e,e._.arrows.endString,1));break;case'stroke-dasharray':B(m,j(e,s,r));break;case'fill':var L=n._ISURL.test(s);if(L){l=s.split(n._ISURL),a=I('pattern');var E=I('image');a.id=n.getElementID(n.createUUID()),I(a,{x:0,y:0,patternUnits:'userSpaceOnUse',height:1,width:1}),I(E,{x:0,y:0,"xlink:href":l[1]}),a.appendChild(E),P(a,E,l,y),y.defs.appendChild(a),m.fill='url(\''+n._url+l[1]+'\')',e.pattern=a,e.pattern&&H(e);break}var N=n.getRGB(s);if(!N.error)delete r.gradient,delete g.gradient,!n.is(g['fill-opacity'],'undefined')&&n.is(r['fill-opacity'],'undefined')&&(m['fill-opacity']=g['fill-opacity']),e.gradient&&O(e);else if(('circle'===e.type||'ellipse'===e.type||'r'!==t(s).charAt())&&U(e,s)){g.gradient=s;break}N.hasOwnProperty('opacity')?(m['fill-opacity']=1<N.opacity?N.opacity/100:N.opacity,e._.fillOpacityDirty=!0):e._.fillOpacityDirty&&n.is(g['fill-opacity'],'undefined')&&n.is(r['fill-opacity'],'undefined')&&(f.removeAttribute('fill-opacity'),delete e._.fillOpacityDirty);case'stroke':N=n.getRGB(s),m[o]=N.hex,'stroke'===o&&(N.hasOwnProperty('opacity')?(m['stroke-opacity']=1<N.opacity?N.opacity/100:N.opacity,e._.strokeOpacityDirty=!0):e._.strokeOpacityDirty&&n.is(g['stroke-opacity'],'undefined')&&n.is(r['stroke-opacity'],'undefined')&&(f.removeAttribute('stroke-opacity'),delete e._.strokeOpacityDirty),e._.arrows&&('startString'in e._.arrows&&F(e,e._.arrows.startString),'endString'in e._.arrows&&F(e,e._.arrows.endString,1)));break;case'gradient':('circle'===e.type||'ellipse'===e.type||'r'!==t(s).charAt())&&U(e,s);break;case'visibility':'hidden'===s?e.hide():e.show();break;case'opacity':s=1<s?s/100:s,m.opacity=s;break;case'fill-opacity':s=1<s?s/100:s,m['fill-opacity']=s;break;case'shape-rendering':e.attrs[o]=s=b[s]||s||'auto',m[o]=s,f.style.shapeRendering=s;break;case'line-height':case'vertical-align':break;default:'font-size'===o&&(s=i(s,10)+'px'),e._.dirty=1,m[o]=s,dashedAttr2CSSMap[o]&&(v[dashedAttr2CSSMap[o]]=s);}for(o in v)f.style[o]=v[o];for(o in m)f.setAttribute(o,m[o]);'text'!==e.type||r['_do-not-tune']||X(e,r)}},Y=n._updateFollowers=function(){var e,t,r,a=getArrayCopy(arguments),n=v.call(a),o=v.call(a);for(e=0,t=n.followers.length;e<t;e++)r=n.followers[e].el,r[o].apply(r,a)},X=function(s,p){if('text'===s.type&&(p.hasOwnProperty('text')||p.hasOwnProperty('font')||p.hasOwnProperty('font-size')||p.hasOwnProperty('x')||p.hasOwnProperty('y')||p.hasOwnProperty('line-height')||p.hasOwnProperty('vertical-align'))){var c,h,f,g,u,v,_,w,x,k,b,C,A=s.attrs,a=s.parent,S=s.node,L=s._oldAttr=s._oldAttr||{baseLineDiff:8,valign:-.5},E=r(p['line-height']||A['line-height']),P=p.direction||A.direction||a&&a.attrs&&a.attrs.direction||L.direction||'initial',B=!1,N=!1,T=d||'rtl'!==P?1:2,z=!1,D=!1;if(L.direction=P,E||(c=p.fontSize||p['font-size']||A['font-size']||a&&a.attrs&&a.attrs.fontSize,c=c?c.toString().replace('px',''):10,E=c*1.2),p.hasOwnProperty('text')&&(b=n.is(p.text,'array')?p.text.join('<br>'):p.text,b!==L.text&&(D=!0,b&&m.test(b)&&(b=b.replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&<br\/>lt;|&l<br\/>t;|&lt<br\/>;/g,'<<br/>').replace(/&<br\/>gt;|&g<br\/>t;|&gt<br\/>;/g,'><br/>')),L.text=A.text=b,y.test(b)?(L.noTSpan&&(L.noTSpan=!(C=!0)),_=t(b).split(y),u=_.length):(C=!0,L.noTSpan=!0,u=1),L.lineCount!==u&&(L.lineCount=u,z=!0))),E!==L.lineHeight&&(L.lineHeight=E,L.baseLineDiff=.75*E,z=!0),C)for(;S.firstChild;)S.removeChild(S.firstChild);if(!(1<L.lineCount))D&&S.appendChild(n._g.doc.createTextNode(b));else if(f={},L.tspanAttr||(L.tspanAttr={},L.tspan0Attr={}),L.tspanAttr.dy!==L.lineHeight&&(L.tspanAttr.dy=f.dy=L.lineHeight,N=!0),p.hasOwnProperty('x')&&L.tspanAttr.x!==p.x&&(L.tspan0Attr.x=L.tspanAttr.x=f.x=A.x,N=!0),D){for(k=S.getElementsByTagName('tspan'),g=0;g<u;g++){if(x=k[g*T],x){if(x.innerHTML='',d)for(;x.firstChild;)x.removeChild(x.firstChild);N&&I(x,g?f:L.tspan0Attr)}else x=I('tspan',g?L.tspanAttr:L.tspan0Attr),S.appendChild(x),d||'rtl'!==P||(w=I('tspan',e),w.appendChild(n._g.doc.createTextNode('i')),S.appendChild(w));_[g]||(x.setAttributeNS('http://www.w3.org/XML/1998/namespace','xml:space','preserve'),_[g]=' '),x.appendChild(n._g.doc.createTextNode(_[g]))}if(v=u*T,k.length>v)for(g=k.length-1;g>=v;g-=1)S.removeChild(k[g])}else if(N)for(k=S.getElementsByTagName('tspan'),v=k.length,g=0;g<v;g+=T)I(k[g],g?f:L.tspan0Attr);p['vertical-align']&&(h=o[A['vertical-align']]||0,h!==L.valign&&(L.valign=h,z=!0)),z&&(L.shift=L.baseLineDiff+L.lineCount*L.lineHeight*L.valign,B=!0),(p.y||0===p.y)&&L.y!==p.y&&(L.y=A.y,B=!0),B&&(L.y||0===L.y)&&(L.shift||0===L.shift)&&I(S,{y:Math.round(L.y+L.shift)})}},W=function(e,t,r){var i=this,a=r||t;a.canvas&&a.canvas.appendChild(e),i.node=i[0]=e,e.raphael=!0,e.raphaelid=i.id=n._oid++,i.matrix=n.matrix(),i.realPath=null,i.attrs=i.attrs||{},i.followers=i.followers||[],i.paper=t,i.ca=i.customAttributes=i.customAttributes||new t._CustomAttributes,i._={transform:[],sx:1,sy:1,deg:0,dx:0,dy:0,dirty:1},i.parent=a,a.bottom||(a.bottom=i),i.prev=a.top,a.top&&(a.top.next=i),a.top=i,i.next=null},q=function(e,t,r){var i=r?'pageY':'pageX';return Math.abs(t[i]-e[i])},K=n.storeHandlers=function(e,t,r){e._actualListners||(e._actualListners=[]),e._derivedListeners||(e._derivedListeners=[]),e._actualListners.push(t),e._derivedListeners.push(r)},J=function(e,t){var r,i=e._actualListners.indexOf(t);return-1!==i&&(r=e._derivedListeners[i],e._actualListners.splice(i,1),e._derivedListeners.splice(i,1)),r},Z=n.el;W.prototype=Z,Z.constructor=W,n._engine.getNode=function(e){var t=e.node||e[0].node;return t.titleNode||t},n._engine.getLastNode=function(e){var t=e.node||e[e.length-1].node;return t.titleNode||t},Z.rotate=function(e,i,a){var n,s=this;return s.removed?s:(Y(s,'rotate',e,i,a),e=t(e).split(u),e.length-1&&(i=r(e[1]),a=r(e[2])),e=r(e[0]),null==a&&(i=a),(null==i||null==a)&&(n=s.getBBox(1),i=n.x+n.width/2,a=n.y+n.height/2),s.transform(s._.transform.concat([['r',e,i,a]])),s)},Z.scale=function(e,i,a,n){var s,d=this;return d.removed?d:(Y(d,'scale',e,i,a,n),e=t(e).split(u),e.length-1&&(i=r(e[1]),a=r(e[2]),n=r(e[3])),e=r(e[0]),null==i&&(i=e),null==n&&(a=n),(null==a||null==n)&&(s=d.getBBox(1)),a=null==a?s.x+s.width/2:a,n=null==n?s.y+s.height/2:n,d.transform(d._.transform.concat([['s',e,i,a,n]])),d)},Z.translate=function(e,i){var a=this;return a.removed?a:(Y(a,'translate',e,i),e=t(e).split(u),e.length-1&&(i=r(e[1])),e=r(e[0])||0,i=+i||0,a.transform(a._.transform.concat([['t',e,i]])),a)},Z.transform=function(e){var t,r=this,i=r._;return null==e?i.transform:(n._extractTransform(r,e),r.clip&&!i.clipispath&&I(r.clip,{transform:r.matrix.invert()}),r.pattern&&H(r),r.node&&I(r.node,{transform:r.matrix}),(1!==i.sx||1!==i.sy)&&(t=r.attrs['stroke-width'],t&&r.attr({"stroke-width":t})),r)},Z.hide=function(){var e=this;return Y(e,'hide'),e.removed||e.paper.safari(e.node.style.display='none'),e},Z.show=function(){var e=this;return Y(e,'show'),e.removed||e.paper.safari(e.node.style.display=''),e},Z.remove=function(){if(!this.removed&&this.parent.canvas){var e,t=this,r=n._engine.getNode(t),a=t.paper,o=a.defs;for(a.__set__&&a.__set__.exclude(t),k.unbind('raphael.*.*.'+t.id),t.gradient&&o&&O(t);e=t.followers.pop();)e.el.remove();for(;e=t.bottom;)e.remove();if(t._drag&&t.undrag(),t.events)for(;e=t.events.pop();)e.unbind();for(e in t.parent.canvas.contains(r)&&t.parent.canvas.removeChild(r),t.removeData(),delete a._elementsById[t.id],n._tear(t,t.parent),t)t[e]='function'==typeof t[e]?n._removedFactory(e):null;t.removed=!0}},Z._getBBox=function(){var e,t,r,i=this,n=i.node,o={},s=i.attrs,a='text'===i.type;d&&a?e=showRecursively(i):'none'===n.style.display&&(i.show(),r=!0);try{o=n.getBBox(),a&&(void 0===o.x&&(o.isCalculated=!0,t=s['text-anchor'],o.x=(s.x||0)-o.width*('start'===t?0:'middle'===t?.5:1)),void 0===o.y&&(o.isCalculated=!0,t=s['vertical-align'],o.y=(s.y||0)-o.height*('bottom'===t?1:'middle'===t?.5:0)))}catch(t){}finally{o=o||{}}return d&&a?e&&e():r&&i.hide(),o},Z.attr=function(e,t){if(this.removed)return this;var r,a,o,s,d,l,p,c,h=this,f=this.attrs,g={},u=h._invokedCa||(h._invokedCa={}),y=this.ca;if(null==e){var m={};for(r in f)f.hasOwnProperty(r)&&(m[r]=f[r]);return m.gradient&&'none'===m.fill&&(m.fill=m.gradient)&&delete m.gradient,m.transform=this._.transform,m.visibility='none'===this.node.style.display?'hidden':'visible',m}if(null!=t)s={},s[e]=t;else if(n.is(e,'object'))s=e;else if(n.is(e,'string'))return'fill'===e&&'none'===f.fill&&f.gradient?f.gradient:'transform'===e?this._.transform:'visibility'===e?'none'===this.node.style.display?'hidden':'visible':e in f?f[e]:n.is(y[e],'function')?y[e].def:n._availableAttrs[e];if(!n.stopPartialEventPropagation)for(r in s)k('raphael.attr.'+r+'.'+this.id,this,s[r],r);for(r in s)if(c=y[r],c&&!u[r]&&n.is(c,'function')){for(d in u[r]=!0,l=c.apply(this,[].concat(s[r])),u[r]=!1,l)g[d]=l[d];f[r]=s[r]}else g[r]=s[r];for(G(this,g),a=0,o=this.followers.length;a<o;a++)p=this.followers[a],p.cb&&!p.cb.call(p.el,g,this)||p.el.attr(g);return this},Z.pinchstart=function(t,r){var i=this,a={},e=function(o){if(o.touches&&2===o.touches.length){let e=o.touches[0],s=o.touches[1];i._blockDrag=!0,o&&o.preventDefault(),n.makeSelectiveCopy(a,o),a.data={finger0:e,finger1:s,distanceX:q(e,s),distanceY:q(e,s,!0)},t.call(r||i,a)}else i._blockDrag=!1};K(i,t,e),i.node.addEventListener('touchstart',e)},Z.unpinchstart=function(e){var t=this,r=J(t,e);t.__blockDrag=!1,t._pinchDragStarted=!1,r&&t.node.removeEventListener('touchstart',r)},Z.pinchmove=function(t,r){var i=this,a={},e=function(o){if(o.touches&&2===o.touches.length){let e=o.touches[0],s=o.touches[1];o&&o.preventDefault(),i._pinchDragStarted=!0,n.makeSelectiveCopy(a,o),a.data={finger0:e,finger1:s,distanceX:q(e,s),distanceY:q(e,s,!0)},t.call(r||i,a)}};K(i,t,e),i.node.addEventListener('touchmove',e)},Z.unpinchmove=function(e){var t=this,r=J(t,e);r&&t.node.removeEventListener('touchmove',r)},Z.pinchend=function(t,r){var i=this,e=function(a){i._pinchDragStarted&&(i._pinchDragStarted=!1,t.call(r||i,a))};K(i,t,e),i.node.addEventListener('touchend',e)},Z.unpinchend=function(e){var t=this,r=J(t,e);t._pinchDragStarted=!1,r&&t.node.removeEventListener('touchend',r)},Z.pinch=function(e,t,r){Z.pinchstart.call(this,e),Z.pinchin.call(this,t),Z.pinchend.call(this,r)},Z.unpinch=function(e,t,r){Z.unpinchstart.call(this,e),Z.unpinchin.call(this,t),Z.unpinchend.call(this,r)},Z.fcwheel=function(t,r){var i=this,a={},e=function(o){o&&o.preventDefault(),n.makeSelectiveCopy(a,o),t.call(r||i,a)};K(i,t,e),i.node.addEventListener('wheel',e)},Z.fcunwheel=function(e){var t=this,r=J(t,e);r&&t.node.removeEventListener('wheel',r)},Z.on=function(e,t,r){if(t&&e){var i,a,o=this,s=e.match(/fc-/),d=t;if(this.removed)return this;switch(o._actualListners||(o._actualListners=[]),o._derivedListeners||(o._derivedListeners=[]),e){case'fc-dragstart':return o.drag(null,t),o;case'fc-dragmove':return o.drag(t),o;case'fc-dragend':return o.drag(null,null,t),o;case'fc-dbclick':return o.dbclick(t,r),o;case'fc-pinchstart':return o.pinchstart(t,r),o;case'fc-pinchmove':return o.pinchmove(t,r),o;case'fc-pinchend':return o.pinchend(t,r),o;case'fc-click':return o.fcclick(t,r),o;case'fc-wheel':return o.fcwheel(t,r),o;}return s&&(e=e.replace(/fc-/,'')),s&&L&&(a=e,e=(S?n.safePointerEventMapping[e]:z[e])||e,'mouseout'===a&&(d=function(i){S&&L&&!i.isPrimary||(N.elementInfo.push({el:r||o,callback:t}),N.srcElement=i.srcElement||i.target)},e=S?'pointerover':'touchstart')),this._&&this._.RefImg&&('load'===e||'error'===e)?(i=this._.RefImg,d=function(r){o.removed||t.call(o,r)}):i=this.node,d===t&&(d=function(i){S&&L&&!i.isPrimary||t.call(r||o,i)}),o._actualListners.push(t),o._derivedListeners.push(d),i.addEventListener?i.addEventListener(e,d):i['on'+e]=d,this}},Z.off=function(e,t){var r,i,a,o=this,s=t,d=e.match(/fc-/);if(this.removed||!o._actualListners||!e||!t)return this;return'fc-dragstart'===e?(o.undragstart(t),o):'fc-dragmove'===e?(o.undragmove(t),o):'fc-dragend'===e?(o.undragend(t),o):'fc-dbclick'===e?(o.undbclick(t),o):'fc-pinchstart'===e?(o.unpinchstart(t),o):'fc-pinchmove'===e?(o.unpinchmove(t),o):'fc-pinchend'===e?(o.unpinchend(t),o):'fc-click'===e?(o.fcunclick(t),o):'fc-wheel'===e?(o.fcunwheel(t),o):(d&&(e=e.replace(/fc-/,'')),s=t,d&&L&&(r=e,e=(S?n.safePointerEventMapping[e]:z[e])||e,'mouseout'===r&&(e=S?'pointerover':'touchstart')),a=this._&&this._.RefImg?this._.RefImg:this.node,i=o._actualListners.indexOf(s),-1!==i&&(s=o._derivedListeners[i],o._actualListners.splice(i,1),o._derivedListeners.splice(i,1)),a.removeEventListener?a.removeEventListener(e,s):a['on'+e]=null,this)},n._engine.path=function(e,t,r){var i=I('path'),a=new W(i,e,r);return a.type='path',t&&a.attr(t),a},n._engine.group=function(e,t,r){var i=I('g'),a=new W(i,e,r);return a.type='group',a.canvas=a.node,a.top=a.bottom=null,a._id=t||'',t&&i.setAttribute('class','raphael-group-'+a.id+'-'+t),a},n._engine.circle=function(e,t,r){var i=I('circle'),a=new W(i,e,r);return a.type='circle',t&&a.attr(t),a},n._engine.rect=function(e,t,r){var i=I('rect'),a=new W(i,e,r);return a.type='rect',t.rx=t.ry=t.r,t&&a.attr(t),a},n._engine.ellipse=function(e,t,r){var i=I('ellipse'),a=new W(i,e,r);return a.type='ellipse',t&&a.attr(t),a},n._engine.image=function(e,t,r){var i=I('image'),a=new W(i,e,r,!0);return a._.group=r||e,a.type='image',i.setAttribute('preserveAspectRatio','none'),t&&a.attr(t),a},n._engine.text=function(e,t,r,i){var a=I('text'),n=new W(a,e,r);return n.type='text',i&&n.css&&n.css(i,void 0,!0),t&&n.attr(t),n},n._engine.setSize=function(e,t){return this.width=e||this.width,this.height=t||this.height,this.canvas.setAttribute('width',this.width),this.canvas.setAttribute('height',this.height),this._viewBox&&this.setViewBox.apply(this,this._viewBox),this},n._engine.create=function(){var e,t=n._getContainer.apply(0,arguments),r=t&&t.container,i=t.x,a=t.y,o=t.width,s=t.height;if(!r)throw new Error('SVG container not found.');var d,l=I('svg'),p='overflow:hidden;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-user-select:none;-moz-user-select:-moz-none;-khtml-user-select:none;-ms-user-select:none;user-select:none;-o-user-select:none;cursor:default;vertical-align:middle;';return L&&(n.isEdge?p+='touch-action:none;':n.isFirefox&&n.isWindows?p+='touch-action:none;':n.isIE11&&(p+='-ms-touch-action:none;')),i=i||0,a=a||0,o=o||512,s=s||342,I(l,{height:s,version:1.1,width:o,xmlns:'http://www.w3.org/2000/svg'}),1===r?(l.style.cssText=p+'position:absolute;left:'+i+'px;top:'+a+'px',r=n._g.doc.body,r.appendChild(l),d=1):(l.style.cssText=p+'position:relative',r.firstChild?r.insertBefore(l,r.firstChild):r.appendChild(l)),e=new n._Paper,e.width=o,e.height=s,e.canvas=l,e.container=r,I(l,{id:'raphael-paper-'+e.id}),e.clear(),e._left=e._top=0,d&&(e.renderfix=function(){}),e.renderfix(),e},n._engine.setViewBox=function(e,t,r,i,a){k('raphael.setViewBox',this,this._viewBox,[e,t,r,i,a]);var n,o,s=p(r/this.width,i/this.height),d=this.top,l=a?'meet':'xMinYMin';if(null==e?(this._vbSize&&(s=1),delete this._vbSize,n='0 0 '+this.width+' '+this.height):(this._vbSize=s,n=e+' '+t+' '+r+' '+i),I(this.canvas,{viewBox:n,preserveAspectRatio:l}),s)for(;d;)o='stroke-width'in d.attrs?d.attrs['stroke-width']:1,d.attr({"stroke-width":o}),d._.dirty=1,d._.dirtyT=1,d=d.prev;return this._viewBox=[e,t,r,i,!!a],this},n.prototype.detachPaper=function(){!1!==this._detached&&(this.container.removeChild(this.canvas),this._detached=!0)},n.prototype.attachPaper=function(){this._detached&&(this.container.appendChild(this.canvas),this._detached=!1)},n.prototype.renderfix=function(){var e,t=this.canvas,r=t.style;try{e=t.getScreenCTM()||t.createSVGMatrix()}catch(r){e=t.createSVGMatrix()}var i=-e.e%1,a=-e.f%1;(i||a)&&(i&&(this._left=(this._left+i)%1,r.left=this._left+'px'),a&&(this._top=(this._top+a)%1,r.top=this._top+'px'))},n.prototype._desc=function(e){var t=this.desc;if(!t)this.desc=t=I('desc'),this.canvas.appendChild(t);else for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(n._g.doc.createTextNode(n.is(e,'string')?e:'Created with Red Rapha\xEBl '+n.version))},n.prototype.clear=function(){var e;for(k('raphael.clear',this);e=this.bottom;)e.remove();for(e=this.canvas;e.firstChild;)e.removeChild(e.firstChild);this.bottom=this.top=null,e.appendChild(this.desc=I('desc')),e.appendChild(this.defs=I('defs'))},n.prototype.remove=function(){for(k('raphael.remove',this);e=this.bottom;)e.remove();for(var e in this.defs&&this.defs.parentNode.removeChild(this.defs),this.desc&&this.desc.parentNode.removeChild(this.desc),this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas),this)this[e]='function'==typeof this[e]?n._removedFactory(e):null;this.removed=!0},n.prototype.setHTMLClassName=function(){}}}