!function(e){"object"==typeof module&&"undefined"!=typeof module.exports?module.exports=e:e()}(function(){(window.webpackJsonpFusionCharts=window.webpackJsonpFusionCharts||[]).push([[6],{1015:function(e,t,o){"use strict";t.__esModule=!0,t.ZoomLineDY=t.ZoomLine=undefined;var i=r(o(1016)),n=r(o(1022)),a=r(o(1025));function r(e){return e&&e.__esModule?e:{"default":e}}t.ZoomLine=i["default"],t.ZoomLineDY=n["default"],t["default"]={name:"zoomline",type:"package",requiresFusionCharts:!0,extension:function(e){e.addDep(a["default"]),e.addDep(i["default"]),e.addDep(n["default"])}}},1016:function(e,t,o){"use strict";t.__esModule=!0;var i,n=o(1017),a=(i=n)&&i.__esModule?i:{"default":i};t["default"]=a["default"]},1017:function(e,t,o){"use strict";t.__esModule=!0;var i=o(125),n=p(o(594)),a=p(o(1018)),r=p(o(1020)),s=o(136),l=o(518),c=o(1021),u=o(132);function p(e){return e&&e.__esModule?e:{"default":e}}function d(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):function(e,t){for(var o=Object.getOwnPropertyNames(t),i=0;i<o.length;i++){var n=o[i],a=Object.getOwnPropertyDescriptor(t,n);a&&a.configurable&&e[n]===undefined&&Object.defineProperty(e,n,a)}}(e,t))}var h=window.navigator.userAgent,f=(0,u.getDep)("redraphael","plugin"),g=window.doc,m="rgba(192,192,192,"+(/msie/i.test(h)&&!window.opera?.002:1e-6)+")",v=window.parseFloat,b=window.parseInt,y=Math,x=y.max,C=y.min,w=y.ceil,k=y.floor,E=0;f.addSymbol(c.symbolList);var P=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this));return o.canvasborderthickness=1,o.zoomX=!0,o.hasScroll=!0,o.eiMethods={zoomOut:function(e){var t,o=this.apiInstance,i=o.getChildren&&o.getChildren("canvas")[0],n=i&&i.getChildren("inputManager");n=n&&n[0],o&&n&&o.addJob("zoomOut"+E++,function(){t=n.zoomOut(),"function"==typeof e&&e(t)},s.priorityList.postRender)},zoomTo:function(e,t,o){var i,n=this.apiInstance,a=n.getChildren&&n.getChildren("canvas")[0],r=a&&a.getChildren("inputManager");if(e!==undefined&&t!==undefined&&(r=r&&r[0],n&&r))return o?void n.addJob("zoomTo"+E++,function(){i=r.zoomTo(e,t),"function"==typeof o&&o(i)},s.priorityList.postRender):r.zoomTo(e,t)},resetChart:function(){var e=this.apiInstance,t=e.getChildren&&e.getChildren("canvas")[0],o=t&&t.getChildren("inputManager");o=o&&o[0],e&&o&&e.addJob("resetChart"+E++,function(){o.resetChart()},s.priorityList.postRender)},setZoomMode:function(e){var t=this.apiInstance,o=t.getChildren&&t.getChildren("canvas")[0],i=o&&o.getChildren("inputManager");i=i&&i[0],t&&i&&t.addJob("setZoomMode"+E++,function(){i.setZoomMode(e)},s.priorityList.postRender)},getViewStartIndex:function(e){var t,o,i,n=this.apiInstance;if(!e)return t=n.getChildren("xAxis")[0],o=t.getVisibleConfig().minValue,0===(i=Math.ceil(o))?0:i;n.addJob("getViewStartIndex"+E++,function(){"function"==typeof e&&(t=n.getChildren("xAxis")[0],o=t.getVisibleConfig().minValue,i=Math.ceil(o),e(0===i?0:i))},s.priorityList.postRender)},getViewEndIndex:function(e){var t,o,i=this.apiInstance;if(!e)return t=i.getChildren("xAxis")[0],o=t.getVisibleConfig().maxValue,Math.floor(o);i.addJob("getViewEndIndex"+E++,function(){"function"==typeof e&&(t=i.getChildren("xAxis")[0],o=t.getVisibleConfig().maxValue,e(Math.floor(o)))},s.priorityList.postRender)}},o.eiMethods.scrollTo=l.scrollTo,o.registerFactory("dataset",r["default"],["vCanvas"]),o}return d(t,e),t.getName=function(){return"ZoomLine"},t.includeInputOptions=function(){return["DragZoomIn","DragPin","ZoomResetButton","ZoomOutButton"]},t.prototype.__setDefaultConfig=function(){e.prototype.__setDefaultConfig.call(this);var t=this.config;t.friendlyName="Zoomable and Panable Multi-series Line Chart",t.defaultDatasetType="zoomline",t.showValues=0,t.zeroplanethickness=1,t.zeroplanealpha=40,t.showzeroplaneontop=0,t.enablemousetracking=!0,t.skipAttr=!0,t.showvalues=0},t.prototype.getName=function(){return"ZoomLine"},t.prototype.parseChartAttr=function(t){e.prototype.parseChartAttr.call(this,t);var o=this.config,n=(t||this.getFromEnv("dataSource")).chart;o.useCrossline=Number(n.usecrossline)||n.usecrossline===i.UNDEF?1:0,o.drawTrendRegion=0},t.prototype.getInputConfigurations=function(){var e=this,t=e.config,o=function(o,i){e.addJob("inputZoom",function(){var n=t.viewPortConfig;n.dsi=o,n.dei=i,e.updateManager(),e.getChildren("xAxis")[0].prepareAttributes()},s.priorityList.configure)};return{dragZoomIn:{scaleX:!0,scaleY:!1,drawButton:!1,boxStyle:{stroke:t.zoomPaneStroke,fill:t.zoomPaneFill,"stroke-width":0},catZoomLimit:2,skipGraphics:!0,dragendFn:function(){return o(arguments.length<=1?undefined:arguments[1],arguments.length<=2?undefined:arguments[2])}},zoomResetButton:{hookFn:o,tooltext:t.btnResetChartTooltext},zoomOutButton:{hookFn:o,tooltext:t.btnZoomOutTooltext},dragPin:{orientation:"horizontal",attr:{stroke:t.zoomPaneStroke,fill:t.zoomPaneFill,"stroke-width":0},skipGraphics:!t.allowPinMode,pinAttr:{"stroke-width":0,stroke:"none",fill:t.pinPaneFill,"shape-rendering":"crisp"},strokeWidth:0,tooltext:t.showToolBarButtonTooltext&&t.btnSwitchToPinModeTooltext||""}}},t.prototype._setCategories=function(){var e,t,o,n,a=this.config,r=this.getFromEnv("dataSource"),s=r.chart||{},l=this.getChildren("xAxis"),c=a.cdm,u=a.cdmchar,p=r.categories&&r.categories[0].category||[];if(a.cdm=c=(0,i.pluckNumber)(s.compactdatamode,0),a.cdmchar=u=(0,i.pluck)(s.dataseparator,"|"),(c||"string"==typeof p)&&p.split){for(t=[],o=0,n=(e=p.split(u)).length;o<n;o+=1)t.push({label:e[o]});this.config.categories=r.categories[0].category=t}l[0].setAxisPadding(0,0),l[0].setTickValues(t||p)},t.prototype.isWithinCanvas=function(e,t){return function(e,t){var o=t.get("config"),n=(0,i.getMouseCoordinate)(t.get("linkedItems","container"),e,t),a=n.chartX,r=n.chartY,s=o.canvasLeft,l=o.canvasTop,c=o.canvasLeft+o.canvasWidth,u=o.canvasHeight+o.canvasTop;return n.insideCanvas=!1,n.originalEvent=e,a>s&&a<c&&r>l&&r<u&&(n.insideCanvas=!0),n}.call(this,e,t)},t.prototype.highlightPoint=function(e,t,o,i,n,a){var r,s,l,c,u,p=this,d=p.config,h=p.getFromEnv("animationManager"),f=p.components,v=p.graphics,b=Number(e),y=v.tracker,x=f.dataset[n],C=x&&x.config,w=x&&C.zoomedRadius||0,k=x&&C.hoverCosmetics,E=k&&k.fill,P=k&&k.borderColor,M=k&&k.borderThickness,_=function(e){p.plotEventHandler(this,e)},L=function(e){p.plotEventHandler(this,e,"dataplotRollover")},T=function(e){p.plotEventHandler(this,e,"dataplotRollout")};y||(r=v.tracker=h.setAnimation({el:"circle",attr:{cx:0,cy:0,r:w,fill:b?E:m,stroke:b?P:m,"stroke-width":b?M:0,"clip-rect":d.canvasLeft+","+d.canvasTop+","+d.canvasWidth+","+d.canvasHeight},container:v.trackerGroup,component:p}).on("fc-click",_).hover(L,T)),i&&r.data("eventArgs",{x:i.x,y:i.y,tooltip:i.tooltip,link:i.link}),d.lastHoveredPoint=i,p.getFromEnv("toolTipController").enableToolTip(r,a),r.transform("t"+(t+d.canvasLeft)+","+(o+d.canvasTop)),i&&(s="mouseover",l=r&&r.node,c=d.lastMouseEvent,l&&s&&(c||(c={}),c.originalEvent&&(c=c.originalEvent),c.touches&&(c=c.touches[0]),l.dispatchEvent?(MouseEvent?u=new MouseEvent(s,{bubbles:!!c.bubbles,cancelable:!!c.cancelable,clientX:c.clientX||c.pageX&&c.pageX-g.body.scrollLeft-g.documentElement.scrollLeft||0,clientY:c.clientY||c.pageY&&c.pageY-g.body.scrollTop-g.documentElement.scrollTop||0,screenX:c.screenX||0,screenY:c.screenY||0,pageX:c.pageX||0,pageY:c.pageY||0}):g.createEvent&&(u=g.createEvent("HTMLEvents")).initEvent(s,!!c.bubbles,!!c.cancelable),u.eventName=s,u&&l.dispatchEvent(u)):g.createEventObject&&l.fireEvent&&((u=g.createEventObject()).eventType=s,u.eventName=s,l.fireEvent("on"+s,u))))},t.prototype.configureAttributes=function(t){e.prototype.configureAttributes.call(this,t);var o,n,a=this.getFromEnv("dataSource").chart||{},r=this.getFromEnv("color-manager"),s=r.getColor("canvasBorderColor"),l=(0,i.pluckNumber)(a.showtoolbarbuttontooltext,1);o=(n=this.config).style,n.stepZoom=400/(100-(0,i.pluckNumber)(a.stepzoom,25)),n.stepZoom<=2&&(n.stepZoom=1.9),(0,i.extend2)(n,{useRoundEdges:(0,i.pluckNumber)(a.useroundedges,0),zoomType:"x",canvasPadding:(0,i.pluckNumber)(a.canvaspadding,0),scrollColor:(0,i.getFirstColor)((0,i.pluck)(a.scrollcolor,r.getColor("altHGridColor"))),scrollShowButtons:!!(0,i.pluckNumber)(a.scrollshowbuttons,1),scrollHeight:(0,i.pluckNumber)(a.scrollheight,16)||16,scrollBarFlat:(0,i.pluckNumber)(a.flatscrollbars,0),allowPinMode:(0,i.pluckNumber)(a.allowpinmode,1),skipOverlapPoints:(0,i.pluckNumber)(a.skipoverlappoints,1),showToolBarButtonTooltext:l,btnResetChartTooltext:l?(0,i.pluck)(a.btnresetcharttooltext,"Reset Chart"):"",btnZoomOutTooltext:l?(0,i.pluck)(a.btnzoomouttooltext,"Zoom out one level"):"",btnSwitchToZoomModeTooltext:l?(0,i.pluck)(a.btnswitchtozoommodetooltext,"<strong>Switch to Zoom Mode</strong><br/>Select a subset of data to zoom into it for detailed view"):"",btnSwitchToPinModeTooltext:l?(0,i.pluck)(a.btnswitchtopinmodetooltext,"<strong>Switch to Pin Mode</strong><br/>Select a subset of data and compare with the rest of the view"):"",pinPaneFill:(0,i.convertColor)((0,i.pluck)(a.pinpanebgcolor,s),(0,i.pluckNumber)(a.pinpanebgalpha,15)),zoomPaneFill:(0,i.convertColor)((0,i.pluck)(a.zoompanebgcolor,"#b9d5f1"),(0,i.pluckNumber)(a.zoompanebgalpha,30)),zoomPaneStroke:(0,i.convertColor)((0,i.pluck)(a.zoompanebordercolor,"#3399ff"),(0,i.pluckNumber)(a.zoompaneborderalpha,80)),showPeakData:(0,i.pluckNumber)(a.showpeakdata,0),maxPeakDataLimit:(0,i.pluckNumber)(a.maxpeakdatalimit,a.maxpeaklimit,null),minPeakDataLimit:(0,i.pluckNumber)(a.minpeakdatalimit,a.minpeaklimit,null),crossline:{enabled:(0,i.pluckNumber)(a.showcrossline,1),line:{"stroke-width":(0,i.pluckNumber)(a.crosslinethickness,1),stroke:(0,i.getFirstColor)((0,i.pluck)(a.crosslinecolor,"#000000")),"stroke-opacity":(0,i.pluckNumber)(a.crosslinealpha,20)/100},labelEnabled:(0,i.pluckNumber)(a.showcrosslinelabel,a.showcrossline,1),labelstyle:{fontSize:v(a.crosslinelabelsize)?v(a.crosslinelabelsize)+"px":o.outCanfontSize,fontFamily:(0,i.pluck)(a.crosslinelabelfont,o.outCanfontFamily)},valueEnabled:(0,i.pluckNumber)(a.showcrosslinevalues,a.showcrossline,1),valuestyle:{fontSize:v(a.crosslinevaluesize)?v(a.crosslinevaluesize)+"px":o.inCanfontSize,fontFamily:(0,i.pluck)(a.crosslinevaluefont,o.inCanvasStyle.fontFamily)}},useCrossline:(0,i.pluckNumber)(a.usecrossline,1),tooltipSepChar:(0,i.pluck)(a.tooltipsepchar,", "),showTerminalValidData:(0,i.pluckNumber)(a.showterminalvaliddata,0)})},t.prototype.getValuePixel=function(e){var t=this.config.viewPortConfig;return t.ddsi+k(e/t.ppp)},t.prototype.getDatasets=function(){var e=[];return this.iterateComponents(function(t){t.getType&&"dataset"===t.getType()&&e.push(t)}),e},t.prototype.__preDraw=function(){var e,t,o,n,a,r=this.config,s=this.getFromEnv("dataSource").chart,l=r.cdm,c=this.getChildren("xAxis")[0],u=r.viewPortConfig,p=this.getChildren("canvas")[0].config,d=x(p.canvasPadding,p.canvasPaddingLeft,p.canvasPaddingRight),h=this.getChildren("yAxis")[0],f=r.canvasHeight,g=this.getFromEnv("dataSource").chart,m=c.getTicksLen(),v=c.getVisibleConfig(),y=v.minValue,C=v.maxValue,w=(0,i.pluckNumber)(s.displaystartindex,y,1),k=(0,i.pluckNumber)(s.displayendindex,C,m||2),E=b(w,10)-1,P=b(k,10)-1,M=0;if(a=(n=this.getDatasets()).length,r.borderWidth=(0,i.pluckNumber)(g.showborder,1)?(0,i.pluckNumber)(g.borderthickness,1):0,r.updateAnimDuration=500,r.status="zoom",r.maxZoomLimit=(0,i.pluckNumber)(s.maxzoomlimit,1e3),r.viewPortHistory=[],(t=(0,i.pluckNumber)(s.pixelsperpoint,15))<1&&(t=1),(o=(0,i.pluckNumber)(s.pixelsperlabel,s.xaxisminlabelwidth,c.getAxisConfig("labels").rotation?20:60))<t&&(o=t),(E<0||E>=(m-1||1))&&(E=0),(P<=E||P>(m-1||1))&&(P=m-1||1),(u=r.viewPortConfig=(0,i.extend2)(r.viewPortConfig,{amrd:(0,i.pluckNumber)(s.anchorminrenderdistance,20),nvl:(0,i.pluckNumber)(s.numvisiblelabels,0),cdm:l,oppp:t,oppl:o,dsi:E,dei:P,vdl:P-E,clen:m,offset:0,step:1,llen:0,alen:0,ddsi:E,ddei:P,ppc:0})).clen){for(;a--;)e=n[a].config,M=x(M,e.drawanchors&&(e.anchorradius||0)+(Number(e.anchorborderthickness)||0)||0);r.overFlowingMarkerWidth=M,d=r.canvasPadding=x(M,d),r._prezoomed=u.dei-u.dsi<u.clen-1,r._visw=Math.max(1,r.canvasWidth-2*d),r._visx=r.canvasLeft+d,r._visout=-(r.height+f+1e3),r._yminValue=h.getLimit().min,r._ymin=h.getPixel(r._yminValue),(0,i.pluckNumber)(s.displaystartindex,s.displayendindex)&&c.setVisibleConfig(w,k),this.updateManager()}},t.prototype.resetZoom=function(){var e=this.config.viewPortHistory,t=e[0];return!!e.length&&(e.length=0,this.zoomTo(t.dsi,t.dei,t)&&this.fireChartInstanceEvent("zoomReset",this._zoomargs,[this.getFromEnv("chartInstance").id]),!0)},t.prototype.zoomOut=function(){var e,t,o,i,n,a=this.config,r=a.viewPortHistory;return e=r.pop(),t=r[0]||a.viewPortConfig,e?(o=e.dsi,i=e.dei):a._prezoomed&&(o=0,i=t.clen-1),(n=this.zoomTo(o,i,e))&&this.fireChartInstanceEvent("zoomedout",n),!0},t.prototype.zoomRangePixels=function(e,t){var o,i,n=this.config.viewPortConfig,a=n.ppp,r=n.ddsi;o=r+k(e/a),i=r+k(t/a),n.dsi=o,n.dei=i,this.updateManager()},t.prototype.prepareAttributes=function(){this.config.hasChartMessage||(this.__preDraw(),e.prototype.prepareAttributes.call(this))},t.prototype.getValue=function(e){var t=this.config,o=t.viewPortConfig,i=this.getOriginalPositions(e.x,e.y,e.x,e.y),n=i[0],a=i[1],r=this.getChildren("xAxis")[0],s=this.getChildren("yAxis")[0],l=r.config.axisRange,c=s.config.axisRange,u=l.min,p=l.max,d=c.max,h=c.min,f=t.canvasWidth*o.scaleX/(p-u),g=t.canvasHeight*o.scaleY/(d-h);return{x:u+(n-t.canvasLeft)/f,y:d-(a-t.canvasTop)/g}},t.prototype.getOriginalPositions=function(e,t,o,i){var n=this.config,a=n.viewPortConfig,r=a.scaleX,s=a.scaleY,l=a.x,c=a.y,u=C(e,o),p=x(e,o),d=C(t,i),h=x(t,i);return p=p>n.canvasWidth?n.canvasWidth:p,h=h>n.canvasHeight?n.canvasHeight:h,[l+(u=u<0?0:u)/r,c+(d=d<0?0:d)/s,(p-u)/r,(h-d)/s]},t.prototype.updateManager=function(){var e,t,o,i,n,a,r,s,l,c,u,p,d,h,f,g,m,b=this.getDatasets(),y=b.length,C=this.config,k=C.viewPortConfig,E=C._visw,P=this.getChildren("xAxis")[0],M=function(e){return P.getPixel(e,{wrtVisible:!0})},_=P.getAxisConfig("labels").style;if(C.legendClicked)for(e=0;e<y;e+=1)b[e].draw();else!k&&(k=C.viewPortConfig),n=k.oppp,g=k.nvl,p=k.dsi,d=k.dei,a=k.vdl=d-p,r=k.ppl=g?E/g:k.oppl,l=k.step=(s=k.ppp=E/a)<n?w(n/s):1,c=k.lskip=w(x(r,v(_.lineHeight))/s/l),h=k.dsi,f=k.dei,k.offset=0,u=k.norm=h%l,k.ddsi=h-=u,k.ddei=f=f+2*l-u,k._ymin=C._ymin,k._yminValue=C._yminValue,k.x=(M(h)-M(P.getVisibleConfig().minValue)+k.offset)/k.scaleX,f-h>P.getTicksLen()?k.scaleX=1:k.scaleX=P.getTicksLen()/Math.abs(f-h-l-.9),m=P.getVisibleConfig(),o=Math.ceil((m.maxValue-m.minValue+1)/g),i=C.viewPortConfig&&C.viewPortConfig.scaleX,t=Math.max(Math.round(P.getAxisConfig("labelStep")/i),g?o:c*l),P.setLabelConfig({step:t})},t.prototype.getParsedLabel=function(e){var t=this.xlabels;return t.parsed[e]||(t.parsed[e]=(0,i.parseUnsafeString)(t.data[e]||""))},t.prototype._setAxisScale=function(){this.getChildren("xAxis")[0].setScrollType("always")},t.prototype.getDSdef=function(){return a["default"]},t}(n["default"]);t["default"]=P},1018:function(e,t,o){"use strict";t.__esModule=!0;var i=o(125),n=s(o(448)),a=o(132),r=s(o(1019));function s(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):function(e,t){for(var o=Object.getOwnPropertyNames(t),i=0;i<o.length;i++){var n=o[i],a=Object.getOwnPropertyDescriptor(t,n);a&&a.configurable&&e[n]===undefined&&Object.defineProperty(e,n,a)}}(e,t))}var c=i.hasTouch?i.TOUCH_THRESHOLD_PIXELS:i.CLICK_THRESHOLD_PIXELS;(0,a.addDep)({name:"zoomlineAnimation",type:"animationRule",extension:r["default"]});var u=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return l(t,e),t.prototype.getType=function(){return"dataset"},t.prototype.getName=function(){return"zoomLine"},t.prototype.__setDefaultConfig=function(){e.prototype.__setDefaultConfig.call(this),this.config.skipIgnorerIndices=[],this.config.showPeakData=0,this.config.showTerminalValidData=0,this.config.minPeakDataLimit=null,this.config.maxPeakDataLimit=null},t.prototype._plotConfigure=function(t,o,i){e.prototype._plotConfigure.call(this,t,o,i);var n=this.config,a=this.components.data[t].config.setValue,r=i||this.getFromEnv("xAxis").getTicksLen(),s=n.showTerminalValidData,l=n.showPeakData,c=n.maxPeakDataLimit,u=n.minPeakDataLimit,p=c>u,d=a>c||a<u;l&&(c<u&&(a>c&&a<u)?n.skipIgnorerIndices.push(t):p&&d&&n.skipIgnorerIndices.push(t)),s&&t===r-1&&n.skipIgnorerIndices.push(t)},t.prototype.drawPlots=function(){var t=this.getFromEnv("xAxis"),o=this.getFromEnv("chartConfig").viewPortConfig;t.getPixel(o.step)-t.getPixel(0)>=o.amrd?e.prototype.drawPlots.call(this):this.hideAllAnchors()},t.prototype._setConfigure=function(t,o){var n=this.config,a=this.getFromEnv("chart"),r=a.config,s=a.getFromEnv("dataSource").chart,l=this.config.JSONData;n.drawanchors=(0,i.pluckNumber)(s.drawanchors,s.showanchors,1),n.anchorradius=(0,i.pluckNumber)(l.anchorradius,s.anchorradius,n.linethickness+2),n.showTerminalValidData=(0,i.pluckNumber)(r.showTerminalValidData,0),n.showPeakData=(0,i.pluckNumber)(r.showPeakData,0),n.showPeakData&&(r.maxPeakDataLimit||r.minPeakDataLimit)&&(n.maxPeakDataLimit=(0,i.pluckNumber)(r.maxPeakDataLimit,Number.MIN_SAFE_INTEGER),n.minPeakDataLimit=(0,i.pluckNumber)(r.minPeakDataLimit,Number.MAX_SAFE_INTEGER)),e.prototype._setConfigure.call(this,t,o)},t.prototype.configureAttributes=function(t){e.prototype.configureAttributes.call(this,t);var o,n,a={},r=this.getFromEnv("chart").getFromEnv("dataSource").chart;o=(n=this.config).linethickness+(0,i.pluckNumber)(r.pinlinethicknessdelta,1),a["stroke-width"]=o>0&&o||0,a["stroke-dasharray"]=[3,2],a.stroke=(0,i.hashify)(n.linecolor),a["stroke-opacity"]=n.alpha/100,a["stroke-linejoin"]=n["stroke-linejoin"]="round",a["stroke-linecap"]=n["stroke-linecap"]="round",n.pin=a,n.animation=!1,n.transposeanimduration=0,n.defaultPadding={left:0,right:0}},t.prototype.drawLabel=function(){return this},t.prototype.isWithinShape=function(e,t,o,n){var a,r,s,l,u,p,d,h,f,g,m,v;if(e)return a=e.config.anchorProps,r=e.config,l=a.borderThickness,this,u=this.components.data,p=(0,i.pluckNumber)(r.dragTolerance,0),d=e._xPos,null!==(h=e._yPos)?(v=e.config.hoverEffects,s=Math.max(a.radius,v&&v.anchorRadius||0,c)+l/2,f=o-d,g=n-h,((m=Math.sqrt(Math.pow(f,2)+Math.pow(g,2)))<=s||m<=p)&&{pointIndex:t,hovered:!0,pointObj:u[t]}):void 0},t.prototype.hideAllAnchors=function(){var e,t,o,i=this.components.data;for(t=0,o=i.length;t<o;t++)(e=i[t])&&e.graphics&&e.graphics.element&&e.graphics.element.hide()},t.prototype._firePlotEvent=function(e,t,o){var i,n,a,r=this.getFromEnv("chart"),s=this.components.data,l=this.getFromEnv("toolTipController"),c=s[t],u=c.graphics.element,p=this.config.currentToolTip,d=!r.config.useCrossline;switch(a=(i=c.config).setLink,n=i.eventArgs,e){case"fc-mouseover":d&&this._decideTooltipType(t,o),this._rolloverResponseSetter(r,c,o),a&&(u.node.style.cursor="pointer");break;case"fc-mouseout":l.hide(p),this._rolloutResponseSetter(r,c,o),a&&(u.node.style.cursor="default");break;case"fc-click":r.plotEventHandler(u,o,"dataplotclick",n);break;case"fc-mousemove":d&&this._decideTooltipType(t,o)}},t.prototype.calculateScrollRange=function(){var e=this.config,t=this.getFromEnv("xAxis"),o=t.getTicksLen(),i=this.getFromEnv("chartConfig").viewPortConfig.step||1;e.scrollMinVal=Math.max(Math.round(t.getVisibleConfig().minValue),0)-i,e.scrollMaxVal=Math.min(Math.round(t.getVisibleConfig().maxValue)+1,o)+i,e.scrollMinValForLabel=Math.max(Math.round(t.getVisibleConfig().minValue),0)-i,e.scrollMaxValForLabel=Math.min(Math.round(t.getVisibleConfig().maxValue)+1,o)+i,e.scrollMinVal-=e.scrollMinVal%i,e.scrollMinValForLabel-=e.scrollMinValForLabel%i},t}(n["default"]);t["default"]=u},1019:function(e,t,o){"use strict";t.__esModule=!0;var i,n=o(451),a=(i=n)&&i.__esModule?i:{"default":i};t["default"]={"initial.dataset.zoomLine":a["default"]["initial.dataset.line"]}},1020:function(e,t,o){"use strict";t.__esModule=!0,t["default"]=function(e){var t,o,a=e.getFromEnv("dataSource"),r=a.chart||{},s=e.config,l=a.dataset,c=void 0,u=void 0,p=void 0,d=void 0,h=void 0,f=void 0,g=e.getChildren().canvas[0].getChildren("vCanvas")[0];for(s.cdm=t=(0,i.pluckNumber)(r.compactdatamode,0),s.cdmchar=o=(0,i.pluck)(r.dataseparator,n),l||e.setChartMessage(),u=0;u<l.length;u++)if(c=l[u],t&&c.data&&c.data.split){for(p=[],d=0,f=(h=c.data.split(o)).length;d<f;d++)p.push({value:h[d]});c.data=p}(0,i.datasetFactory)(g,e.getDSdef(),"dataset",l.length,l),e.iterateComponents(function(e){e.getType&&"dataset"===e.getType()&&e.createPinElem&&e.addEventListener("createpinelements",e.createPinElem)})};var i=o(125),n="|"},1022:function(e,t,o){"use strict";t.__esModule=!0;var i,n=o(1023),a=(i=n)&&i.__esModule?i:{"default":i};t["default"]=a["default"]},1023:function(e,t,o){"use strict";t.__esModule=!0;var i=s(o(1017)),n=o(494),a=s(o(495)),r=s(o(1024));function s(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):function(e,t){for(var o=Object.getOwnPropertyNames(t),i=0;i<o.length;i++){var n=o[i],a=Object.getOwnPropertyDescriptor(t,n);a&&a.configurable&&e[n]===undefined&&Object.defineProperty(e,n,a)}}(e,t))}var c=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this));return o.getSpecificxAxisConf=n.getSpecificxAxisConf,o.getSpecificyAxisConf=n.getSpecificyAxisConf,o.registerFactory("axis",a["default"],["canvas"]),o.registerFactory("dataset",r["default"],["vCanvas"]),o}return l(t,e),t.getName=function(){return"ZoomLineDy"},t.prototype.getName=function(){return"ZoomLineDy"},t.prototype.__setDefaultConfig=function(){e.prototype.__setDefaultConfig.call(this);var t=this.config;t.friendlyName="Zoomable and Panable Multi-series Dual-axis Line Chart",t.defaultDatasetType="zoomline",t.isdual=!0,t.syncaxislimits=0},t.prototype._feedAxesRawData=function(){return n._feedAxesRawData.call(this)},t}(i["default"]);c.prototype.setAxisDimention=n.setAxisDimention,t["default"]=c},1024:function(e,t,o){"use strict";t.__esModule=!0,t["default"]=function(e){var t,o,r=e.getFromEnv("dataSource"),s=r.chart||{},l=e.config,c=r.dataset,u=void 0,p=void 0,d=void 0,h=void 0,f=void 0,g=void 0,m=void 0,v=[],b=[],y=[],x=[],C=e.getChildren().canvas[0].getChildren("vCanvas");for(l.cdm=t=(0,i.pluckNumber)(s.compactdatamode,0),l.cdmchar=o=(0,i.pluck)(s.dataseparator,n),c||e.setChartMessage(),p=0;p<c.length;p++)if(u=c[p],t&&u.data&&u.data.split){for(d=[],h=0,g=(f=u.data.split(o)).length;h<g;h++)d.push({value:f[h]});u.data=d}for(p=0;p<c.length;p++)"s"===((m=c[p]).parentyaxis||"").toLowerCase()?(x.push(m),b.push(p)):(y.push(m),v.push(p));y.length?(0,i.datasetFactory)(C[0],e.getDSdef(),"dataset_line",y.length,y,v):a(C[0]),x.length?(0,i.datasetFactory)(C[1],e.getDSdef(),"dataset_line",x.length,x,b):a(C[1]),e.iterateComponents(function(e){e.getType&&"dataset"===e.getType()&&e.createPinElem&&e.addEventListener("createpinelements",e.createPinElem)})};var i=o(125),n="|",a=function(e){e&&e.iterateComponents(function(e){"dataset"===e.getType()&&e.remove()})}},1025:function(e,t,o){"use strict";t.__esModule=!0;var i=o(125),n=o(138);function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):function(e,t){for(var o=Object.getOwnPropertyNames(t),i=0;i<o.length;i++){var n=o[i],a=Object.getOwnPropertyDescriptor(t,n);a&&a.configurable&&e[n]===undefined&&Object.defineProperty(e,n,a)}}(e,t))}var s=Math,l=s.max,c=s.min,u=void 0,p=void 0,d=0,h=void 0,f=void 0,g="ontouchstart"in window,m={zoomlinedy:!0,zoomline:!0},v=function(e,t,o){return o.getFromEnv("animationManager").setAnimation({el:"group",attr:{name:e},container:t,state:"appearing",component:o,label:"group"})},b=function(e){var t,o,i,n={},a=Number.POSITIVE_INFINITY;for(t=0;t<this.length;t++)i=(o=this[t]-e)<0?p.NEG:p.POS,(o=Math.abs(o))<=a&&(a=o,n.absValue=o,n.noScaleSide=i);return n},y=function(e){return{onMouseOut:function(){e.hide(),e.position=u},onMouseMove:function(t){var o,n,a,r,s,l,c,u,p,d,h,f,m;e.disabled||e._mouseIsDown&&!g||(n=e.getZoomInfo(),a=e.getGraphicalElement("line"),r=n.step,l=(s=e.chart).getChildren("xAxis")[0],u=(c=s.get("config")).canvasLeft,p=l.getAxisConfig("axisDimention"),d=(0,i.getMouseCoordinate)(e.getFromEnv("chart-container"),t,s).chartX,h=l.getVisibleConfig(),f=p.x-u,m=(m=e.getDataIndexFromPixel(Math.round(d)))+((o=m%r)>r/2?r-o:-o),d=l.getPixel(m,{wrtVisible:!0})-f-u,d-=n.offset,a.transform(["T",Math.round(d),0]),e.hidden&&0!==c.crossline.enabled&&e.show(),(m<h.minValue||m>h.maxValue)&&e.hide(),(m!==e.position||e.hidden)&&(e.position=m,e.lineX=d,e.updateLabels()))}}},x=function(e){function t(){a(this,t);var o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this));return o.config.handlers=y(o),o}return r(t,e),t.prototype.configureAttributes=function(e){this.config.options=e},t.prototype.draw=function(){var e,t,o=void 0,n=void 0,a=void 0,r=void 0,s={},l=this.getFromEnv("chart"),c=l.getFromEnv()["number-formatter"],u=l.config,p=this.left=l.getChildren("xAxis")[0].getAxisConfig("axisDimention").x,d=this.top=u.canvasTop,h=this.height=u.canvasHeight,f=this._visout=u._visout,g=[],m=this.getFromEnv("animationManager"),b=void 0,y=this.getGraphicalElement("line"),x=this.config.options,C=x.labelstyle,w=x.valuestyle,k=l.getChildren("yAxis")[0],E=k.getLimit(),P=l.getChildren("yAxis")[1],M=P&&P.getLimit(),_=this.getGraphicalElement("labels"),L=[],T=void 0,N=this.getGraphicalElement("positionLabel"),S=this.getLinkedParent().getChildContainer("crosslineBottom"),D=this.getLinkedParent().getChildContainer("crosslineTop"),F=function(){this.remove()};if(l.iterateComponents(function(e){e.getType&&"dataset"===e.getType()&&!e.getState("removed")&&g.push(e)}),this.plots=g,this.width=u._visw,b=this.group,(b=this.getContainer("valueGroup"))||(b=this.addContainer("valueGroup",v("crossline-value-group",D,this))),(T=this.getContainer("labelGroup"))||(T=this.addContainer("labelGroup",v("crossline-label-group",D,this))).insertBefore(l.getChildContainer("plotGroup")),this.container=S,b.attr({transform:["T",p,u._ymin]}).css(w),e=m.setAnimation({el:y||"path",container:S,doNotRemove:!0,attr:(0,i.extend2)({path:["M",p,d,"l",0,h]},x.line)}).toBack(),y||this.addGraphicalElement("line",e,!1),x.labelEnabled&&(s.x=f,s.y=d+h+(u.scrollHeight||0)+2.5,s["vertical-align"]="top",s.direction=u.textDirection,s.text=""),t=m.setAnimation({el:N||"text",attr:x.labelEnabled&&s,css:x.labelEnabled&&C,container:T,doNotRemove:!0,callback:!x.labelEnabled&&function(){this.remove()}}),!N&&x.labelEnabled&&this.addGraphicalElement("positionLabel",t,!1),this.hide(),this.ppixelRatio=-k.config.axisDimention.axisLength/k.getVisibleLength(),this.spixelRatio=P&&-P.config.axisDimention.axisLength/P.getVisibleLength(),this.yminValue=u._yminValue,this.pyaxisminvalue=E.min,this.pyaxismaxvalue=E.max,this.syaxisminvalue=M&&M.min,this.syaxismaxvalue=M&&M.max,this.positionLabels=u.xlabels||{data:[],parsed:[]},this.chart=l,o=0,x.valueEnabled){for(n=g.length;o<n;o+=1)a=g[o],r=(0,i.hashify)(a.config.linecolor),s.x=0,s.y=f,s.fill=r,s.direction=u.textDirection,s.text="",s["text-bound"]=w["text-bound"],s.lineHeight=w.lineHeight,L[o]=m.setAnimation({el:_&&_[o]||"text",container:b,doNotRemove:!0,attr:s}),(!_||!_[o])&&this.addGraphicalElement("labels",L[o],!0);this.numberFormatter=c}for(n=_&&_.length;o<n;o++)m.setAnimation({el:_[o],component:this,doNotRemove:!0,callback:F});_&&_.splice(g.length)},t.prototype.getType=function(){return"crossline"},t.prototype.getName=function(){return"crossLine"},t.prototype.getZoomInfo=function(){return this.getFromEnv("chartConfig").viewPortConfig},t.prototype.getDataIndexFromPixel=function(e){var t=this.getFromEnv("chart").getChildren("xAxis")[0];return Math.round(t.getValue(e,{wrtVisible:!0}))},t.prototype.getPositionLabel=function(e){var t=this.getFromEnv("chart").getChildren("xAxis")[0].getLabel(e);return t&&t.label||""},t.prototype.disable=function(e){return e!==u&&(this.disabled=!!e,this.disabled&&this.visible&&this.hide()),this.disabled},t.prototype.updateLabels=function(){var e=this,t=e.getFromEnv("animationManager"),o=e.getGraphicalElement("labels"),i=e.getGraphicalElement("positionLabel"),n=e.plots,a=e.width,r=e.position,s=e.lineX,g=Math.floor(s),m=e.dummyText,v=e.numberFormatter,b=e.pyaxisminvalue,y=e.pyaxismaxvalue,x=e.syaxisminvalue,C=e.syaxismaxvalue,k=function(e){var t=e.yminValue,o=e.getFromEnv("chart").getChildren("yAxis")[0].getPixel(t),i=void 0,n={},a=void 0;p={},h=-1*e.height;try{Object.defineProperty(p,"POS",{enumerable:!1,configurable:!1,get:function(){return 1}}),Object.defineProperty(p,"NEG",{enumerable:!1,configurable:!1,get:function(){return-1}})}catch(r){p.POS=1,p.NEG=-1}try{Object.defineProperty(n,"top",{enumerable:!1,configurable:!1,get:function(){return h}}),Object.defineProperty(n,"bottom",{enumerable:!1,configurable:!1,get:function(){return o}})}catch(r){n.top=h,n.bottom=o}return n.init=function(e){var t;for(h+=(d=e+2)/2,a=Math.floor(Math.abs(h)/d),i=new w(a),t=0;t<a;t++)i.pos.push(0)},n.occupy=function(e,t){var o=Math.floor(Math.abs(h-e)/d);i&&i.attachShift(e,o,t)},n}(e);f=e._visout,o&&(m||(m=e.dummyText=e.getFromEnv("paper").text().hide()),m.attr({text:v.yAxis("0")}),m&&k.init(m.getBBox().height,o.length),o.forEach(function(t,o){if(!n[o].getState("removed")){var i,a=n[o],s=a.components.data[r]&&a.components.data[r].config.setValue,l=a.config.parentYAxis;i=s===u||!a.getState("visible")||(l?s>C||s<x:s>y||s<b)?f:l?(s-x)*e.spixelRatio:(s-b)*e.ppixelRatio,k.occupy(i,t)}})),o&&o.forEach(function(o,i){if(!n[i].getState("removed")){var p,d,h,f,m,b,y=n[i],x=y.components.data[r]&&y.components.data[r].config.setValue,C=v[y.config.parentYAxis?"sYAxis":"yAxis"](x);C?(o.attr({text:C}),f=(h=(d=(p=o.getBBox())&&p.width)&&.5*d)&&h+10,b=o.calcY,m=l(0,c(g,a)),b!==u&&m!==u&&t.setAnimation({el:o,attr:{x:m,y:b,"text-anchor":(s<=f?"start":s+f>=a&&"end")||"middle","text-bound":["rgba(255,255,255,0.8)","rgba(0,0,0,0.2)",1,2.5]},doNotRemove:!0,component:e})):o.attr({x:-a})}}),i&&t.setAnimation({el:i,attr:{x:s+e.left,text:e.getPositionLabel(r),"text-bound":["rgba(255,255,255,1)","rgba(0,0,0,1)",1,2.5]},component:e})},t.prototype.show=function(){if(!this.disabled){this.hidden=!1;var e=this.getContainer("valueGroup"),t=this.getGraphicalElement("positionLabel"),o=this.getGraphicalElement("line");e&&e.show(),t&&t.show(),o&&o.show()}},t.prototype.hide=function(){this.hidden=!0;var e=this.getContainer("valueGroup"),t=this.getGraphicalElement("positionLabel"),o=this.getGraphicalElement("line");e&&e.hide(),t&&t.hide(),o&&o.hide()},t.prototype.dispose=function(){var e;for(e in this)this.hasOwnProperty(e)&&delete this[e]},t}(n.ComponentInterface);var C=function(){function e(){a(this,e),this.y=0,this.lRef=u,this.__shift=0,this.__index=0}return e.prototype.applyShift=function(e){this.__shift=e,this.lRef.calcY=this.y+=e*d},e.prototype.applyDirectIndex=function(e){this.__index=e,this.lRef.calcY=this.y=h-e*d*-1},e}(),w=function(){function e(t){a(this,e),this.holes=[],this.pos=[];for(var o=0;o<t;o++)this.holes.push(o)}return e.prototype.repositionHoles=function(){var e,t=0,o=this.pos;for(this.holes.length=0,e=0;e<o.length;e++)!o[e]&&(this.holes[t++]=e)},e.prototype.attachShift=function(e,t,o){var i,n,a,r,s,l,c,u=this.pos,d=u.length;if(e!==f){if(i=u[l=t>d-1?d-1:t],(r=new C).y=e,r.lRef=o,!i)return r.applyDirectIndex(l),u.splice(l,1,r),void this.holes.splice(this.holes.indexOf(l),1);if(n=l+(c=b.call(this.holes,l)).absValue*c.noScaleSide,c.noScaleSide===p.POS)return r.applyDirectIndex(n),u.splice(n,1,r),this.holes.splice(this.holes.indexOf(n),1),n;if(c.noScaleSide===p.NEG){for(a=u.splice(n+1,u.length-1),u.pop(),a.forEach(function(e){e&&e.applyShift(-1)}),[].push.apply(u,a),s=n;u[s];)s++;return u.push(0),this.repositionHoles(),s+=(c=b.call(this.holes,s)).absValue*c.noScaleSide,r.applyDirectIndex(s),u.splice(s,1,r),this.repositionHoles(),u.length-1}}else o.calcY=f},e}();t["default"]={extension:function(e){e.addEventListener("instantiated",function(e){if("canvas"===e.sender.getName()){var t=e.sender,o=void 0,n=void 0,a=void 0;t.registerFactory("crossLineManager-zoomline",function(){var r=e.sender.getFromEnv("chart"),s=r&&r.getName(),l=void 0;s&&m[s.toLowerCase()]&&((n=r.config.crossline)&&0!==n.enabled&&1===r.config.useCrossline?a=1:(n&&(n.enabled=0),a=0),(0,i.componentFactory)(t,x,"crossLine",a,[n]),a&&(l=t.getChildren("crossLine")[0],o=l.config.handlers,l.addExtEventListener("fc-mousemove",o.onMouseMove,t),l.addExtEventListener("fc-mouseover",o.onMouseMove,t),l.addExtEventListener("fc-dragstart",function(e){o.onMouseOut(e),l.removeExtEventListener("fc-mousemove",o.onMouseMove,t)},t),l.addExtEventListener("fc-dragend",function(){l.addExtEventListener("fc-mousemove",o.onMouseMove,t)},t),l.addExtEventListener("fc-mouseout",function(e){o.onMouseOut(e)},t)))})}})},name:"crossline-manager",type:"extension",requiresFusionCharts:!0}}}])});
//# sourceMappingURL=http://localhost:3052/3.13.5/map/eval/fusioncharts.zoomline.js.map