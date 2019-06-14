import Axis from'./axis';import{UNDEF,pluckNumber,parseUnsafeString,DASH_DEF,getDashStyle,pluck,extend2,setLineHeight,NORMAL,POSITION_START,POSITION_END,POSITION_MIDDLE,POSITION_BOTTOM,POSITION_TOP,POINTER,BLANKSTRING,parseTooltext,ONESTRING,toRaphaelColor,getValidValue,getSuggestiveRotation,convertColor}from'../lib';import cartesianAxisAnimation from'./cartesian-axis.animation';import interpolateNumber from'./utils/interpolators/number';import difference from'./utils/array/diff';import differenceWith from'ramda/src/differenceWith';import{addDep}from'../dependency-manager';import{ScrollBar}from'../toolbox/tools';import{setAxisDimention,shiftLabels,_createContainer}from'./common-api';let CRISP='crisp',BUTT='butt',EVENTARGS='eventArgs',TREND_ID='_trend',TICK_ID='_tick',LABEL_ID='_label',getCrispPath=function(e,a){var i,t,l=Math.round,n=!1,o=a%2;return e[1]===e[4]&&(i=e[1],t=l(i),e[1]=e[4]=o?t>i?t-.5:t+.5:t,n=!0),e[2]===e[5]&&(i=e[2],t=l(i),e[2]=e[5]=o?t>i?t-.5:t+.5:t,n=!0),{path:e,isCrisped:n}},isVisible=e=>(a,i)=>!!(e.minValue<=a&&e.maxValue>=a||e.minValue<=i&&e.maxValue>=i),isInBetween=e=>a=>!!(e.minValue<=a&&e.maxValue>=a),queryOptions={wrtVisible:!0},minimumEnquiry=function(e){for(var a=0,t=e.length;a<t;a++)if(e[a].label||e[a].oriLabel)return a};function getAxisNamePaddingOffset(e,a){var i=Math.max;let t=0;return e.relativeAxis&&e.relativeAxis.config&&e.relativeAxis.config.axisNamePadding&&(t=i(e.relativeAxis.config.axisNamePadding,t)),e.isOpposit&&a.canvasMarginRight&&(t=i(t,a.canvasMarginRight-a.marginLeft-e.nameMaxW)),!e.isOpposit&&a.canvasMarginLeft&&(t=i(t,a.canvasMarginLeft-a.marginRight-e.nameMaxW)),t}addDep({name:'cartesianAxisAnimation',type:'animationRule',extension:cartesianAxisAnimation});class Cartesian extends Axis{constructor(){super(),this.config.referenceInfo=[],this.config.prevTicks=[],this.config.prevIntervalArr=[],this.config.prevTrendLabels=[],this.config.prevCategoryIntervalArr=[]}configureAttributes(e){super.configureAttributes(e)}placeAxis(e){var a,i=this,t=i.getScale(),l=i.getFromEnv('chart'),n=i.getChildren('scrollBar')&&i.getChildren('scrollBar')[0],o=i.config.isVertical,r=i.config.isOpposit,s=i.config.isReverse,d=l.config,g={};return n&&!n.getState('removed')&&(a=n.getLogicalSpace(),a&&(o?(l.config.shift=a.width+n.config.conf.padding,g[r?'right':'left']=l.config.shift):(l.config.shift=a.height+n.config.conf.padding,g[r?'top':'bottom']=l.config.shift),l._allocateSpace(g))),o?(s?t.setRange([d.canvasBottom,d.canvasTop]):t.setRange([d.canvasTop,d.canvasBottom]),i._placeVerticalAxis(e)):(s?t.setRange([d.canvasRight,d.canvasLeft]):t.setRange([d.canvasLeft,d.canvasRight]),i._placeHorizontalAxis(e))}_placeVerticalAxis(e){var a,t,l,n,o,r,s,d,g,h,c,m,b,x,p,f,v,u,L=Math.min,w=Math.max,T=this,y=T.config,k=T.getFromEnv('chart'),C=k.config,V=k.getFromEnv('smartLabel'),P=y.axisRange,A=y.minLabelWidthPercent,S=y.name,D=y.isOpposit,E=T.getFromEnv('number-formatter'),M=C.canvasHeight,F=y.labelPadding=pluckNumber(y.rawAttr.axisValuePadding,4),R=pluckNumber(y.rawAttr.axisNamePadding,5),W=y.useEllipsesWhenOverflow,H=y.name.style,N=y.trend.trendStyle,O=y.axisName,I=y.trendLines,B=y.drawLabelsOpposit,_=y.drawAxisNameOpposit,z=0,G=0,Z=0,X=0,Y=0,J=0,U={left:0,right:0},Q='',K='',$=0,q=-1;if(A&&(q=A/100*C.width),y.oriCanvasHeight=M,0>F&&(y.labelPadding=2),f=y.drawTick&&y.tickLength?y.axisLineThickness+y.tickLength:y.axisLineThickness,y.showAxisLine?(y.labelPadding=pluckNumber(F,2)+f,0>y.labelPadding&&(y.labelPadding=(0>y.axisLineThickness?0:f)+2),e-=y.axisLineThickness):(y.labelPadding=pluckNumber(F,2),0>y.labelPadding&&(y.labelPadding=2)),g=P.max,h=P.min,y.name.rotation=0,y.labels.step=y.labelStep,y.labels.isDraw=1,y.labels.drawNormalVal=y.showDivLineValues,y.labels.drawLimitVal=y.showLimits,$=H.lineHeight,$=+$.replace(/px/i,''),O&&$<e&&(e-=$),1!==y.showLimits&&1!==y.showDivLineValues&&(y.labels.isDraw=0),m=y.drawLabels?T._getVMaxLabelDimention(e-y.labelPadding):{width:0,height:0},(m.width+y.labelPadding>e&&!y.tickValues||0===m.width)&&(y.labels.isDraw=0),y.labels.isDraw&&(y.labelMaxW=m.width>q?m.width:q,y.labelMaxH=m.height,z=y.labelMaxW+y.labelPadding,Z=z),y.drawTrendLines&&y.drawTrendLabels&&I&&I.length){for(n=y.isPercent?E.percentValue:y.isVertical?E.yAxis:E.xAxis,V.useEllipsesOnOverflow(C.useEllipsesWhenOverflow),V.setStyle({fontSize:N.fontSize,fontFamily:N.fontFamily,lineHeight:N.lineHeight,fontWeight:N.fontWeight}),(a=0,t=I.length);a<t;a+=1)for(d=0,b=I[a].line&&I[a].line.length;d<b;d+=1)x=I[a].line[d],v=E.getCleanValue(pluck(x.startvalue,x.value,0)),u=pluckNumber(x.endvalue,v),v<=g&&v>=h&&u<=g&&u>=h&&(y.isOpposit&&(x.valueonright=1),p=pluckNumber(x.valueonright,0),s=1===p?x.endvalue||x.startvalue:x.startvalue||x.endvalue,c=parseUnsafeString(x.origText||x.displayvalue||s||''),c===s&&(c=''+n.call(E,c)),p?c.length>K.length&&(K=c):c.length>Q.length&&(Q=c));for(m=V.getOriSize(K),J=m.width+y.labelPadding,m=V.getOriSize(Q),Y=m.width+y.labelPadding,D?(J>Z&&J>e&&(J=e),Z=w(Z,J+y.labelPadding),Y>e-Z&&(Y=L(Y,e-Z))):(Y>Z&&Y>e&&(Y=e),Z=w(Z,Y+y.labelPadding),J>e-Z&&(J=L(J,e-Z))),(a=0,t=I.length);a<t;a+=1)for(d=0,b=I[a].line&&I[a].line.length;d<b;d+=1)x=I[a].line[d],v=E.getCleanValue(pluck(x.startvalue,x.value,0)),u=pluckNumber(x.endvalue,v),c=1===+x.valueonright?x.origText||x.displayvalue||''+u||'':x.origText||x.displayvalue||''+v||'',c=parseUnsafeString(''+c),(c===x.endvalue||c===x.startvalue)&&(c=''+n.call(E,c)),x.origText=c,p=pluckNumber(x.valueonright,0),r=p?V.getSmartText(c,J,k.canvasHeight,W):V.getSmartText(c,Z,k.canvasHeight,W),l=y.parsedTrendLabels[G++],l&&(l.attr.text=x.displayvalue=r.text,y.isOpposit&&(l.valueOnRight=1,l.attr['text-anchor']=POSITION_START)),r.tooltext?(x.valueToolText=r.tooltext,l&&(l.valueToolText=x.valueToolText)):(delete x.valueToolText,l&&delete l.valueToolText)}return e+=$,!y.drawAxisName||0>=e-Z-J||''===O?(S.isDraw=!1,S.value=''):(V.setStyle({fontSize:H.fontSize,fontFamily:H.fontFamily,lineHeight:H.lineHeight,fontWeight:H.fontWeight}),S.isDraw=!0,y.rotateAxisName?(y.name.rotation=D?90:270,o=V.getSmartText(O,M,e-Z-J),S.value=O,y.nameMaxW=L(o.height),X=y.nameMaxW+R):(o=V.getSmartText(O,e-Z-J,M),S.value=O,y.nameMaxW=L(o.width,e-Z),y.nameMaxH=o.height,0<=y.axisNameWidth&&(y.nameMaxW=L(y.nameMaxW,y.axisNameWidth)),X=y.nameMaxW+R)),D?(B?(U.left+=w(z,Y),U.right+=J):(U.left+=Y,U.right+=w(z,J)),_?(y.axisNamePadding=U.left+R,U.left+=X):(y.axisNamePadding=U.right+R,U.right+=X)):(B?(U.left+=Y,U.right+=w(z,J)):(U.left+=w(z,Y),U.right+=J),_?(y.axisNamePadding=U.right+R,U.right+=X):(y.axisNamePadding=U.left+R,U.left+=X)),S.isDraw&&y.axisNamePadding+y.nameMaxW>e&&(y.axisNamePadding=e-y.nameMaxW,X=y.nameMaxW+y.axisNamePadding-Z),U}_placeHorizontalAxis(e){var a,t,l,n,o,r,s,d,g,h,c,m,b,x,p,f,v,u,L,w,T=this,y=T.config,k=T.getFromEnv('chart'),C=k.config,V=k.getFromEnv('smartLabel'),P=y.axisRange,A=y.name,S=y.isOpposit,D=k.getFromEnv('number-formatter'),E=y.drawLabelsOpposit,M=y.drawAxisNameOpposit,F=0,R=C.canvasWidth,W=y.labelPadding=pluckNumber(y.rawAttr.axisValuePadding,4),H=pluckNumber(y.rawAttr.axisNamePadding,5),N=y.useEllipsesWhenOverflow,O=y.name.style,I=y.trend.trendStyle,B=y.axisName,_=y.vTrendLines,z=0,G=0,Z=0,X={top:0,bottom:0},Y=0,J=0;if(0>W&&(y.labelPadding=2),u=y.drawTick&&y.tickLength?y.axisLineThickness+y.tickLength:y.axisLineThickness,y.showAxisLine?(y.labelPadding=pluckNumber(W,2)+u,0>y.labelPadding&&(y.labelPadding=(0>y.axisLineThickness?0:u)+2),e-=y.axisLineThickness):(y.labelPadding=pluckNumber(W,2),0>y.labelPadding&&(y.labelPadding=2)),d=P.max,g=P.min,y.labels.rotation=0,y.labels.step=y.labelStep,y.labels.isDraw=1,y.labels.drawNormalVal=y.showDivLineValues,y.labels.drawLimitVal=y.showLimits,J=O.lineHeight,J=+J.replace(/px/i,''),B&&J<e&&(e-=J),y.rotateLabels&&'stagger'!==y.labelDisplay&&'none'!==y.labelDisplay&&(y.labelDisplay='rotate'),1!==y.showLimits&&1!==y.showDivLineValues&&(y.labels.isDraw=0),f=y.drawLabels?T._getHMaxLabelDimention(e-y.labelPadding):{width:0,height:0},y.labels.rotation?f.width+y.labelPadding>e&&!y.tickValues&&(y.labels.isDraw=0):f.height+y.labelPadding>e&&!y.tickValues&&(y.labels.isDraw=0),y.labels.isDraw&&(y.labels.rotation?(y.labelMaxW=f.height,y.labelMaxH=f.width,F=f.width+y.labelPadding):(y.labelMaxW=f.width,y.labelMaxH=f.height,F=f.height+y.labelPadding),z=F),z=Math.max(z,y.labelPadding),m=z<=e?e-z:e,y.drawTrendLines&&y.drawTrendLabels&&_&&y.isActive)for(v=y.isPercent?T.getFromEnv('number-formatter').percentValue:y.isVertical?T.getFromEnv('number-formatter').yAxis:T.getFromEnv('number-formatter').xAxis,V.useEllipsesOnOverflow(C.useEllipsesWhenOverflow),V.setStyle({fontSize:I.fontSize,fontFamily:I.fontFamily,lineHeight:I.lineHeight,fontWeight:I.fontWeight}),(l=0,n=_.length);l<n;l+=1)for(s=0,c=_[l].line&&_[l].line.length;s<c;s+=1)b=_[l].line[s],L=D.getCleanValue(pluck(b.startvalue,b.value,0)),w=pluckNumber(b.endvalue,L),L<=d&&L>=g&&w<=d&&w>=g&&(a=pluckNumber(b.valueonright,0),t=1===a?b.endvalue||b.startvalue:b.startvalue||b.endvalue,h=parseUnsafeString(b.origText||b.displayvalue||t||''),h===t&&(h=''+v.call(k.getFromEnv('number-formatter'),h)),b.origText=h,x=V.getSmartText(h,k.canvasWidth,I.lineHeight,N),p=x.height+2,0>m-p?b.displayvalue='':(o=y.parsedTrendLabels[G++],o&&(o.attr.text=b.displayvalue=x.text),Y=Y<x.height?x.height:Y),x.tooltext?(b.valueToolText=x.tooltext,o&&(o.valueToolText=b.valueToolText)):(delete b.valueToolText,o&&delete o.valueToolText));return m-=Y,z+=Y,m+=J,e+=J,!y.drawAxisName||0>=m||''===B?(A.isDraw=!1,A.value=''):(V.setStyle({fontSize:O.fontSize,fontFamily:O.fontFamily,lineHeight:O.lineHeight,fontWeight:O.fontWeight}),A.isDraw=!0,r=V.getSmartText(B,R,m),A.value=B,y.nameMaxW=R,y.nameMaxH=r.height,Z=r.height+H,y.axisNamePadding=H+z,y.axisNamePadding+r.height>e&&(y.axisNamePadding=e-r.height,Z=r.height+y.axisNamePadding-z)),S?(E?X.bottom+=F+Y:(X.top+=F,X.bottom+=Y),y.trendBottomPadding=X.bottom-Y+2,M?X.bottom+=Z:X.top+=Z):(E?(X.top+=F,X.bottom+=Y):X.bottom+=F+Y,y.trendBottomPadding=X.bottom-Y+2,M?X.top+=Z:X.bottom+=Z),X}_parseCategoryPlotLine(){var e,a,t,l=this,n=l.config,o=n.axisRange,r=n.tickValues.tickValue,s=convertColor(n.divLineColor,n.divLineAlpha),d=n.divLineThickness,g=n.divLineIsDashed?getDashStyle(n.divLineDashLen,n.divLineDashGap,d):DASH_DEF,h=isInBetween(l.getVisibleConfig()),c=n._allTicks,m=c.length;if((e={stroke:s,"stroke-width":d,"stroke-dasharray":g},!(r[0]&&(r[0].x!==UNDEF||r[0].y!==UNDEF)))&&n.lines.isDraw&&n.categoryNumDivLines)for(a=0;a<m;++a)(t=c[a],!!h(t))&&t!==o.min&&t!==o.max&&l.setReferenceInfo({from:t,type:'line',layer:1,attr:e})}_drawComponents(){var e=this,a=e.config;a.drawAxisName&&e._drawAxisName(),a.drawAxisLine&&e._drawAxisLine(),a.tickValues?a.drawLabels&&e._drawCategory():a.drawLabels&&e._drawLabel(),a.drawTrendLines&&e.drawTrendLabel()}drawTrendLabel(){let e,a,t,l,n,o,r,s,d,g,h,c,m,b,x,p,f=this,v=f.config,u=v.parsedTrendLabels,L=f.getFromEnv('animationManager'),w=this.getFromEnv('toolTipController'),T=v.axisTrendLabelContainer,y=v.isOpposit,k=v.labelPadding,C=v.vTrendLines,V=v.trendLines,P=v.axisDimention,A=f.getVisibleConfig(),S=A.minValue,D=A.maxValue,E=!0;for(x=0,p=u.length;x<p;x++)u[x].id=x+TREND_ID;for(C?l=y?P.opposite-(v.trendBottomPadding||0):P.y+(v.trendBottomPadding||0):(l=y?P.opposite+(k||0):P.x-(k||0),n=y?P.x+(k||0):P.opposite+(k||0)),m=differenceWith((e,a)=>e.attr.text===a.attr.text,v.prevTrendLabels,u),(x=0,p=m.length);x<p;x++)c=f.getGraphicalElement(m[x].id),c&&f.removeGraphicalElement(c);if(v.prevTrendLabels=extend2([],u),!v.drawTrendLabels){for(x=0,p=u.length;x<p;x++)c=f.getGraphicalElement(u[x].id),c&&f.removeGraphicalElement(c);return}for(x=0,p=u.length;x<p;x++)a=u[x],t=f.getGraphicalElement(x+TREND_ID),r=+a.from,d=+a.to,E=!0,b=!isNaN(d),b?(s=r+(d-r)/2,(S>s||D<s)&&(E=!1)):(S>r||D<r)&&(E=!1),E?(C?(g=f.getPixel(r,queryOptions),h=d?f.getPixel(d,queryOptions):0,o=pluckNumber(a.isTrendZone,v.isTrendZone,1),b&&d!=r&&o?(a.attr.x=g+(h-g)/2,a.attr.y=l):(a.attr.x=d?h:g,a.attr.y=l)):V&&(g=f.getPixel(r,queryOptions),h=d?f.getPixel(d,queryOptions):0,e=pluckNumber(a.valueOnRight,0),o=pluckNumber(a.isTrendZone,v.isTrendZone,0),b&&d!=r&&o?(a.attr.x=e?n:l,a.attr.y=g+(h-g)/2):(a.attr.x=e?n:l,a.attr.y=d?e?h:g:g)),t=f.addGraphicalElement(x+TREND_ID,L.setAnimation({container:T,el:t||'text',attr:a.attr,css:a.css,data:{value:s||r},component:f,label:'text'})),v.showTooltip&&a.valueToolText?w.enableToolTip(t,a.valueToolText):w.disableToolTip(t)):t&&f.removeGraphicalElement(t)}_drawAxisName(){var e,a,i,t,l,n,o=Math.max,r=this,s=r.config,d=this.getFromEnv('toolTipController'),g=r.getLinkedItem('canvas').getEffectiveDimensions(),h=r.getFromEnv('animationManager'),c=g.left,m=g.top,b=g.width,x=g.height,p=m+x,f=r.getFromEnv('chart').config,v=s.name.style,u=s.name.value,L=s.isOpposit,w=s.isVertical,T=r.getFromEnv('smartLabel'),y=s.axisNameContainer,k=s.axisNamePadding,C=s.nameMaxH,V=s.nameMaxW,P=s.axisDimention,A=w?P.x:P.y,S=P.opposite,D=r.getGraphicalElement('axisName'),E=pluckNumber(s.name.rotation,w?90:270),M=r.getFromEnv('paper'),F={fontFamily:v.fontFamily,fontSize:v.fontSize,lineHeight:v.lineHeight,fontWeight:v.fontWeight,fontStyle:v.fontStyle};s.name.isDraw?(e={fontFamily:v.fontFamily,fill:v.color,"vertical-align":'middle',"font-size":v.fontSize,"line-height":v.lineHeight},T.useEllipsesOnOverflow(f.useEllipsesWhenOverflow),T.setStyle({fontSize:v.fontSize,fontFamily:v.fontFamily,lineHeight:v.lineHeight,fontWeight:v.fontWeight}),s.drawAxisNameOpposit&&(L=!L,A=S),w?(k=o(k,getAxisNamePaddingOffset(s,f)),t=s.axisNameAlignCanvas||f.captionalignment&&'left'===f.captionalignment?x:o(x,s.oriCanvasHeight||0),E?(a=T.getSmartText(u,t,V),i=a.tooltext,l=a.width):(a=T.getSmartText(u,V,t),i=a.tooltext,l=a.height),n=s.drawAxisNameFromBottom?p-l/2:l>x?f.height/2:m+x/2,e.text=a.text,e.x=L?(A||c+b)+k+V/2:(A||c)-k-V/2,e.y=n):(a=T.getSmartText(u,b,C),i=a.tooltext,L&&f.canvasMarginTop&&(k=o(k,f.canvasMarginTop-f.marginTop-C)),!L&&f.canvasMarginBottom&&(k=o(k,f.canvasMarginBottom-f.marginBottom-C)),e.text=a.text,e.x=c+b/2,e.y=L?(A||m)-k-C/2:(A||p)+k+C/2),e['text-bound']=''===a.text?[]:[v.backgroundColor,v.borderColor,v.borderColor?v.borderThickness:0,v.borderPadding,v.borderRadius,v.borderDash],e.transform=M.getSuggestiveRotation(w?E:0,e.x,e.y),D=r.addGraphicalElement('axisName',h.setAnimation({css:F,el:D||'text',attr:e,container:y,component:r,label:'text'})),s.showTooltip?d.enableToolTip(D,i):d.disableToolTip(D)):D&&r.removeGraphicalElement(D)}_drawAxisLine(){const e='axisLine';var a,t,l,n,o,r,s,d,g,h,c,m,b,x,p,f,v,u,L=this,w=L.config,T=w.isVertical,y=w.isOpposit,k=L.getFromEnv('chart'),C=L.getLinkedItem('canvas').getEffectiveDimensions(),V=L.getFromEnv('animationManager'),P=C.top,A=C.left,S=P+C.height,D=A+C.width,E=w.axisDimention,M=T?E.x:E.y,F=w.drawAxisLineWRTCanvas,R=k.getFromEnv('dataSource').chart,W=w.axisAxisLineContainerBottom,H=L.getGraphicalElement('axisLine'),N=[];if(n=1===pluckNumber(R.showyaxisline,R.showyaxisline)?pluckNumber(R.yaxislinethickness,R.pyaxislinethickness,1):0,w.showAxisLine){if(T?(y?(M=F?D:M,o=M+w.axisLineThickness/2):(M=F?A:M,o=M-w.axisLineThickness/2),f=getCrispPath(['M',o,S,'L',o,P],w.axisLineThickness),l=f.path):(y?(M=F?P:M,o=M-w.axisLineThickness/2):(M=F?S:M,o=M+w.axisLineThickness/2),f=getCrispPath(['M',A-n,o,'L',D,o],w.axisLineThickness),l=f.path),d={path:l,stroke:w.axisLineColor,"stroke-linecap":BUTT,"stroke-width":w.axisLineThickness,"shape-rendering":f.isCrisped?CRISP:UNDEF},w.drawTick&&w.tickLength)for(a={stroke:w.tickColor,"stroke-width":w.tickWidth},r=T?y?o+w.tickLength:o-w.tickLength:y?o-w.tickLength:o+w.tickLength,v=w.tickValues?w.tickValues.tickValue.map(e=>T?e.y:e.x):w.ticks,(p=0,u=v.length);p<u;p+=1)m=v[p],b=`${m}${TICK_ID}`,h=L.getGraphicalElement(b),s=L.getPixel(m,queryOptions),a.path=getCrispPath(T?['M',o,s,'L',r,s]:['M',s,o,'L',s,r],w.tickWidth).path,g=V.setAnimation({el:h||'path',attr:a,data:{value:m,path:a.path},container:W,component:L,label:'path'}),h||L.addGraphicalElement(b,g),N.push(b);t=V.setAnimation({el:H||'path',attr:d,container:W,component:L,label:'path'}),H||L.addGraphicalElement(e,t),N.push(e)}for(x=difference(w.prevTicks,N),p=0,u=x.length;p<u;p++)c=L.getGraphicalElement(x[p]),c&&L.removeGraphicalElement(c);w.prevTicks=N}_parseCategory(){var e,a,t,l,n,o,r,s,d,g,h,c,m,b,x,p,f,v,u,L,w,T,y,k,C,V,P,A,S,D=Math.abs,E=this,M=E.config,F=M.axisDimention||{},R=E.getFromEnv('chart'),W=R.getFromEnv('smartLabel'),H=E.components,N=H.labels,O=E.getLinkedItem('canvas').getEffectiveDimensions(),I=R.config,B=M.isOpposit,_=M.labels,z=_.style,G=M.isVertical,Z=O.top,j=O.left,X=Z+O.height,Y=j+O.width,J=M.labelPadding,U=G?F.x:F.y,Q=F.opposite,K=R.getFromEnv('dataSource').categories,$={},q=M.tickValues.tickValue,ee=M.axisRange.min,ae=M.drawnStaggerLines,ie=(M.labelStep!==M.labels.step||1!==E.getZoom())&&'stagger'===M.labelDisplay;if(M.labels.isDraw)for(G&&(C=D(E.getPixel(0,queryOptions)-E.getPixel(0+M.axisRange.tickInterval,queryOptions)),M.labelMaxH>C&&(w=Math.ceil(M.labelMaxH/C)),w>M.labels.step&&(M.labels.step=w)),ie&&(k=2*D(E.getPixel(ee,queryOptions)-E.getPixel(ee+M.labels.step,queryOptions))*M.sWidthAdjstFactor-1),l=M.labels.rotation,P=l?M.labelMaxH:M.labelMaxW,A=l?M.labelMaxW:M.labelMaxH,M.drawLabelsOpposit&&(B=!B,U=Q),K&&K[0]&&'auto'!==M.xAxisLabelMode&&($.fontFamily=K[0].font,$.fontSize=K[0].fontsize,$.color=K[0].fontcolor),M.ParentCss=m={fontFamily:pluck($.fontFamily,z.fontFamily),fontSize:pluck($.fontSize,z.fontSize),fontWeight:pluck(z.fontWeight),fontStyle:pluck(z.fontStyle)},m.lineHeight=setLineHeight(m),u=E._getCategoryArr(),H.labelIndexArr=[],(e=0,L=u.length);e<L;e+=1)S=u[e].index,a=q[S],f=u[e].value,H.labelIndexArr.push(S),d=pluck(a.font,a.labelfont),g=pluck(a.fontsize,a.labelfontsize),h=pluck(a.fontbold,a.labelfontbold)?pluckNumber(a.fontbold,a.labelfontbold,0)?'bold':NORMAL:UNDEF,c=pluck(a.fontitalic,a.labelfontitalic)?pluckNumber(a.fontitalic,a.labelfontitalic,0)?'italic':NORMAL:UNDEF,x=convertColor(pluck(a.fontcolor,a.labelfontcolor,$.color,z.color),pluckNumber(a.labelalpha,M.rawAttr.labelFontAlpha,R.config.singleseries?UNDEF:a.alpha,100)),d||g||h||c?(s={},d&&(s.fontFamily=d),g&&(s.fontSize=g),h&&(s.fontWeight=h),c&&(s.fontStyle=c),s.lineHeight=g?setLineHeight(s):m.lineHeight):s=UNDEF,(s||m)&&(o=(s||m).lineHeight,-1!==o.indexOf('px')&&(n=o.replace(/px/i,''),n=parseFloat(n))),!1===a.appliedSmartLabel&&(W.setStyle(a._ovrStyle||m),V=W.getSmartText(a.oriLabel||a.label,P,A),a.oriLabel=a.oriLabel||a.label,a.label=V.text,a.labelTooltext=V.labelTooltext,a.appliedSmartLabel=!0),p=E.getPixel(f,queryOptions),G?(t=a.label||'',r=+a.labelPadding||0,b={fill:x,"line-height":n,opacity:1,"text-anchor":B?POSITION_START:POSITION_END,text:t,cursor:!I.singleseries&&a.link||a.labellink||z.labelLink?POINTER:'',x:B?(U||Y)+J:(U||j)-J,y:r?p+r:p}):(t=a.label||'',r=+a.labelPadding||0,b={fill:x,"line-height":n,opacity:1,text:t,cursor:!I.singleseries&&a.link||a.labellink||z.labelLink?POINTER:'',x:p,y:B?(Z||U)-J:(U||X)+J},l?(b['text-anchor']=B?POSITION_START:POSITION_END,b['vertical-align']='middle'):(b['text-anchor']=POSITION_MIDDLE,b['vertical-align']=B?POSITION_BOTTOM:POSITION_TOP),ie?(T=a.labelCount%ae,T&&(!(n=a.style.lineHeight)&&(n=M.labels.style.lineHeight),y=n.replace(/px/i,'')*T,b.y=B?b.y-y:b.y+y),W.setStyle(a._ovrStyle||m),V=W.getSmartText(a.oriLabel||a.label,k,A),a.oriLabel=a.oriLabel||a.label,b.text=a.label=V.text,a.labelTooltext=V.labelTooltext,a.appliedSmartLabel=!0):r&&(B?b.y-=r:b.y+=r)),v={label:a.label,lineHeight:o,border:pluckNumber(a.borderthickness,a.labelborderthickness)?pluckNumber(a.borderthickness,a.labelborderthickness,1)+'px solid':'',borderColor:a.bordercolor||a.labelbordercolor?convertColor(a.bordercolor||a.labelbordercolor,pluckNumber(a.borderalpha,a.labelborderalpha,a.alpha,a.labelalpha,100)):BLANKSTRING,borderThickness:pluckNumber(a.borderthickness,a.labelborderthickness),borderPadding:pluckNumber(a.borderpadding,a.labelborderpadding),borderRadius:pluckNumber(a.borderradius,a.labelborderradius),backgroundColor:a.bgcolor||a.labelbgcolor?convertColor(a.bgcolor||a.labelbgcolor,pluckNumber(a.bgalpha,a.labelbgalpha,a.alpha,a.labelalpha,M.rawAttr.labelFontAlpha,100)):BLANKSTRING,borderDash:pluckNumber(a.borderdashed,a.labelborderdashed,0)?getDashStyle(pluckNumber(a.borderdashlen,a.labelborderdashlen,4),pluckNumber(a.borderdashgap,a.labelborderdashgap,2)):0===pluckNumber(a.borderdashed,a.labelborderdashed)?DASH_DEF:z.borderDash},b['text-bound']=a.label?[pluck(v.backgroundColor,z.backgroundColor),pluck(v.borderColor,z.borderColor),pluck(v.borderThickness,z.borderThickness),pluck(v.borderPadding,z.borderPadding),pluck(v.borderRadius,z.borderRadius),pluck(v.borderDash,z.borderDash)]:[],_.shiftX&&(b.x+=_.shiftX),_.shiftY&&(b.y+=_.shiftY),b.transform=getSuggestiveRotation(l,b.x,b.y),N[S]=N[S]||{config:{props:{label:{}}}},N[S].config.props.label.attr=b,N[S].config.props.label.css=s}allocatePosition(){var e=this,a=e.config;a.tickValues?a.drawLabels&&e._parseCategory():a.drawLabels&&e._parseLabel(),e.getChildren('scrollBar')&&e.getChildren('scrollBar')[0]&&e.getChildren('scrollBar')[0].setDimension(e.getScrollbarDimension())}_drawCategory(){var e,a,t,l,n,o,r,s,d,g,h,c,m=this,b=m.config,x=m.getFromEnv('chart'),p=x.config,f=b.labels,v=m.getFromEnv('animationManager'),u=f.style,L=this.getFromEnv('toolTipController'),w=b.axisContainer,T=m.config.categoryLabel||(m.config.categoryLabel=[]),y=function(e){return function(a){var i=this;x.plotEventHandler(i,a,e)}},k=b.tickValues.tickValue,C=[];if(b.labels.isDraw){for(w.css(b.ParentCss),r=m._getCategoryArr(),n=differenceWith((e,a)=>e.value===a.value,b.prevCategoryIntervalArr,r),(e=0,d=n.length);e<d;e++)h=m.getGraphicalElement(`${n[e].value}${LABEL_ID}`),h&&m.removeGraphicalElement(h);for(b.prevCategoryIntervalArr=extend2([],r),e=0,d=r.length;e<d;e+=1)C[e]=`${r[e].value}${LABEL_ID}`;for(e=0,d=r.length;e<d;e+=1)c=r[e].index,a=k[c],g=m.components.labels[c].config,l=g.props.label.attr,s=m.getGraphicalElement(C[e]),t=v.setAnimation({el:s||'text',attr:l,container:w,data:{value:o},component:m,label:'text',css:g.props.label.css}),s||(m.addGraphicalElement(C[e],t),t.on('fc-click',y('dataLabelClick')).hover(y('dataLabelRollOver'),y('dataLabelRollOut'))),t.data(EVENTARGS,{link:!p.singleseries&&a.link||a.labellink||u.labelLink,text:l.text,index:c}),a.labelTooltext?L.enableToolTip(t,a.labelTooltext):L.disableToolTip(t),T[c]=t}else for(e=0,d=b.prevCategoryIntervalArr.length;e<d;e++)h=m.getGraphicalElement(`${b.prevCategoryIntervalArr[e].value}${LABEL_ID}`),h&&m.removeGraphicalElement(h)}_getCategoryArr(){var e,a,t,l,n,o,r,s,d,g,h=this,c=h.config,m=c.isVertical,b=0,x=0,p=[];for(e=c.tickValues.tickValue,l=minimumEnquiry(e),t=e?e.length-1:0,m&&(d=Math.abs(h.getPixel(0,queryOptions)-h.getPixel(1,queryOptions)),c.labelMaxH>d&&(b=Math.ceil(c.labelMaxH/d)),b>c.labels.step&&(c.labels.step=b)),s=0<c.labels.step?c.labels.step:1,g=1!==h.getZoom(),o=this.getVisibleConfig(),a=l;a<=t;a+=s)if((n=e[a],!!n)&&(r=pluckNumber(n.x,n.y,a),0!==pluckNumber(n.showlabel,c.showLabels,1))){if(g&&(r<o.minValue||r>o.maxValue)){n.labelCount=x++;continue}('auto'!==c.xAxisLabelMode&&'mixed'!==c.xAxisLabelMode||0!==c.showZeroPlane&&0!==c.showZeroPlaneValue||0!==r)&&(c.labels.drawNormalVal||c.labels.drawLimitVal&&(a==l||a==t))&&(c.labels.drawNormalVal||a==l||a==t)&&(c.labels.drawLimitVal||a!=l&&a!=t)&&(n.labelCount=x++,p.push({index:a,value:r}))}return p}getValue(e,a={wrtVisible:!1}){var i=this.getScale(),t=this.getTranslation(),l=i.getDomainValue(a.wrtVisible?e:e-t);return l}getPixel(e,a={wrtVisible:!1}){var i=this.getScale(),t=this.getTranslation(),l=i.getRangeValue(e);return a.wrtVisible?l:l+t}_getCustomPixel(e,a,i={wrtVisible:!1}){if(!a)return this.getPixel(e,i);var t=this.getScale().copy(),[l,n]=t.getRange(),o=Math.min(l,n),r=t.getRangeValue(e),s=this.getTranslation();return t.setRange([o,o+a]),i.wrtVisible?r:r+s}getTranslation(){return this.config.translation||0}setScrollType(e){('none'===e||'smart'===e||'always'===e)&&(this.config.scrollType=e,'none'===e?this.disableScroll():this.enableScroll())}getScrollType(){return this.config.scrollType}_createScrollBar(){var e,a=this,i=a.config,t=a.getFromEnv('chart'),l=a.getFromEnv('animationManager'),n=a.getChildren('scrollBar')&&a.getChildren('scrollBar')[0];n||(n=a.attachChild(new ScrollBar,'scrollBar')),n.configure({isHorizontal:!i.isVertical}),n.attachEventHandlers({scrollStart:function(a){e=a,t.fireChartInstanceEvent('scrollstart',{scrollPosition:a})},scroll:function(e){let n=i.axisRange.max,o=i.axisRange.min,r=a.getVisibleConfig(),s=r.minValue,d=r.maxValue,g=d-s,h=interpolateNumber(o,n-g),c=i.isReverse?h(1-e):h(e);a.setState('scrolling',!0),l.setAnimationState('scroll'),t.fireChartInstanceEvent('onScroll',{scrollPosition:e}),a.setVisibleConfig(c,c+g)},scrollEnd:function(a){t.fireChartInstanceEvent('scrollend',{scrollPosition:a,prevScrollPosition:e})}})}_disposeScrollBar(){var e=this,a=e.getChildren('scrollBar')&&e.getChildren('scrollBar')[0];a&&a.remove()}getScrollbarDimension(){var e,a,i,t,l,n,o,r,s,d,g,h,c,m,b,x,p,f,v=this,u=v.getFromEnv('chart'),L=v.config,w=L.axisRange,T=L.scrollOptions||(L.scrollOptions={}),y=w.max,k=w.min,C=T.vxLength,V=v.getChildren('scrollBar')[0],P=u.getChildren('canvas')[0].config,A=L.scrollbarContainer;if(V)return e=V.config,a=P.canvasLeft,i=P.canvasTop,t=P.canvasHeight,l=P.canvasWidth,n=P.canvasBorderWidth,o=L.showAxisLine?L.axisLineThickness||0:0,r=pluckNumber(n,L.lineStartExtension),s=pluckNumber(n,L.lineEndExtension),T.viewPortMin=k,T.viewPortMax=y,c=v.getVisibleConfig(),m=c.maxValue,b=c.minValue,x=m-b,p=w.max-w.min,d=x/p,f=(b-w.min)/(p-x),g=T.windowedCanvasWidth=v.getPixel(C,queryOptions),h=T.fullCanvasWidth=v.getPixel(y-k,queryOptions)-g,e.scrollRatio=d,e.roundEdges=P.isRoundEdges,e.fullCanvasWidth=h,e.windowedCanvasWidth=g,e.parentLayer=A,e.scrollPosition=f,L.isVertical?(e.scrollPosition=L.isReverse?1-f:f,{x:a,y:i,height:t}):(e.scrollPosition=f,{x:a-r,y:i+t+n+o-2,width:l+r+s})}enableScroll(){this._createScrollBar()}disableScroll(){this._disposeScrollBar()}isScrollEnabled(){return!!this.getChildren('scrollBar')}setVisibleConfig(e,a){let i,t=this,l=t.config,n=t.getZoom(),o=t.getScale();return!(e>=a||e<l.axisRange.min||a>l.axisRange.max)&&(i=o.setDomain([e,a]).getDomain(),l.visibleMin=i[0],l.visibleMax=i[1],l.zoom=t._computeZoom(),l.translation=t._computeTranslation(),(1!==n||1!==t.getZoom())&&(l.ticks=t.generateTicks(),l.minorTicks=t.generateMinorTicks(),l.tickValues&&t.calculateTicksOnLabelMode&&t.calculateTicksOnLabelMode()),t.clearReferenceInfo(),t._parseReferenceVisuals(),t.fireEvent('visiblerangeset',{minValue:e,maxValue:a}),t.asyncDraw(),!0)}hide(){var e=this,a=e.config;a.axisContainer&&(a.axisLabelContainerTop.hide(),a.axisContainer.hide(),a.axisNameContainer.hide(),a.axisTrendLabelContainer.hide(),a.axisAxisLineContainer.hide(),a.axisAxisLineContainerBottom.hide())}show(){var e=this,a=e.config;a.axisContainer&&(a.axisLabelContainerTop.show(),a.axisContainer.show(),a.axisNameContainer.show(),a.axisTrendLabelContainer.show(),a.axisAxisLineContainer.show(),a.axisAxisLineContainerBottom.show())}getZoom(){return this.config.zoom||1}_computeTranslation(){let e=this.config,a=this.getVisibleConfig(),i=pluckNumber(a.minValue,e.axisRange.min,0),t=pluckNumber(e.axisRange.min,a.minValue,0);return this.getPixel(i)-this.getPixel(t)}_computeZoom(){let e=this.config,a=this.getVisibleConfig(),i=pluckNumber(a.minValue,e.axisRange.min,0),t=pluckNumber(a.maxValue,e.axisRange.max,1),l=pluckNumber(e.axisRange.min,a.minValue,0),n=pluckNumber(e.axisRange.max,a.maxValue,1),o=e.maxZoomLimit,r=(n-l)/(t-i);return r>o?o:r}getTickValues(){var e=this.config.tickValues;return e&&e.tickValue||[]}dataLabels(e){var a=this,i=a.config.axisIndex,t=a.getFromEnv('number-formatter');return t.dataLabels(e,i)}getAxisBase(){let{minValue:e,maxValue:a}=this.getVisibleConfig();return 0>e&&0<a?0:0>=a?a:e}_parseReferenceVisuals(){var e,a,i=this,t=i.config,l=i.getTickValues(),n=l.length,o=i.getFromEnv('chartConfig').is3D;t.isActive||(e=t.lines.isDraw,a=t.band.isDraw,t.lines.isDraw=0,t.band.isDraw=0),t.tickValues?t.drawLabels&&i._parseCategoryLine(l,0,n):t.drawPlotlines&&i._parsePlotLine(),t.tickValues&&'auto'!==t.xAxisLabelMode?(t.drawPlotlines&&!o&&i._parseCategoryPlotLine(),t.drawPlotBands&&!o&&i._parseCategoryPlotBand(),'mixed'===t.xAxisLabelMode&&t.drawPlotBands&&!o&&i._parsePlotBand()):t.drawPlotBands&&!o&&i._parsePlotBand(),t.isActive||(t.lines.isDraw=e,t.band.isDraw=a),t.drawTrendLines&&i._parseTrendLine()}_parseCategoryPlotBand(){var e,a,t,l,n,o=this,r=o.config,s=r.tickValues.tickValue,d=r.showAlternateGridColor,g=r.alternateGridColor,h=r.alternateGridAlpha,c=r._allTicks,m=o.getLimit(),b=m.min,x=m.max,p=isVisible(o.getVisibleConfig());if(!(s[0]&&(s[0].x!==UNDEF||s[0].y!==UNDEF))&&d&&r.band.isDraw&&r.categoryNumDivLines)for(e={fill:toRaphaelColor(convertColor(g,h)),"stroke-width":0},a=0,n=0;n<c.length;++a,++n)p(c[n],c[n+1])&&(t=c[n],0==a%2)&&(l=c[n+1],l!==UNDEF)&&(t===b&&(t='canvasStart'),l===x&&(l='canvasEnd'),o.setReferenceInfo({from:t,to:l,layer:0,type:'band',attr:e}))}_parseTrendLine(){var e,a,t,l,n,o,r,s,d,g,h,c,m,b,x,p,f,v,u,L,w=this,T=w.config,y=T.isVertical,k=T.axisIndex,C=w.getFromEnv('chart-attrib'),V=w.getFromEnv('number-formatter'),P=T.axisRange,A=P.max,S=P.min,D=T.trend.trendStyle,E={fontFamily:D.fontFamily,fontSize:D.fontSize,lineHeight:D.lineHeight,fontWeight:D.fontWeight,fontStyle:D.fontStyle},M=T.vTrendLines,F=T.trendLines,R=0;if(r=F||M,r)for(t=0,l=r.length;t<l;t+=1)for(e=0,a=r[t].line&&r[t].line.length;e<a;e+=1)(h=r[t].line[e],f=y?'yAxis':'xAxis',b=h.startvalue||h.value||0,b=V.getCleanValue(pluck(h.startvalue,h.value,0)),x=+h.endvalue||UNDEF,n=getValidValue(parseUnsafeString(pluck(r[t].line[e].tooltext,r[0].tooltext,T.trendlineToolText))),n=parseTooltext(n,[7,15,16,17,18,19],{startValue:b,startDataValue:V[f](b,k),endValue:x||b,endDataValue:V[f](x||b,k),axisName:T.axisName},h),!(b>A||b<S||x>A||x<S))&&(M?(c=parseUnsafeString(h.displayvalue||''),s=pluckNumber(h.istrendzone,T.isTrendZone,1),x!==UNDEF&&''!==x&&x!==b&&s?(d={fill:convertColor(pluck(h.color,T.trendlineColor),pluck(h.alpha,T.trendlineAlpha,40)),"stroke-width":0},g={fill:convertColor(pluck(h.color,D.color),pluck(D.valueAlpha,h.alpha,T.trendlineAlpha,99)),"vertical-align":POSITION_TOP,text:c}):(p=pluckNumber(h.thickness,T.trendlineThickness,1),d={stroke:convertColor(pluck(h.color,T.trendlineColor),pluck(h.alpha,T.trendlineAlpha,99)),"stroke-width":p,"stroke-dasharray":pluck(h.dashed,T.trendlinesAreDashed)===ONESTRING?getDashStyle(pluckNumber(h.dashlen,T.trendlinesDashLen),pluckNumber(h.dashgap,T.trendlinesDashGap)):DASH_DEF},g={fill:convertColor(pluck(h.color,D.color),pluck(D.valueAlpha,h.alpha,T.trendlineAlpha,99)),"vertical-align":POSITION_TOP,text:c})):F&&(c=pluck(parseUnsafeString(h.displayvalue),h.startvalue,''),m=pluckNumber(h.valueonright,0),s=pluckNumber(h.istrendzone,T.isTrendZone,0),x!==UNDEF&&''!==x&&x!==b&&s?(d={fill:convertColor(pluck(h.color,T.trendlineColor),pluck(h.alpha,T.trendlineAlpha,40)),"stroke-width":0},g={"text-anchor":m?POSITION_START:POSITION_END,fill:convertColor(pluck(h.color,D.color),pluck(D.valueAlpha,h.alpha,T.trendlineAlpha,99)),text:c}):(p=pluckNumber(h.thickness,T.trendlineThickness,1),d={stroke:convertColor(pluck(h.color,T.trendlineColor),pluck(h.alpha,T.trendlineAlpha,99)),"stroke-width":p,"stroke-dasharray":pluck(h.dashed,T.trendlinesAreDashed)===ONESTRING?getDashStyle(pluckNumber(h.dashlen,T.trendlinesDashLen),pluckNumber(h.dashgap,T.trendlinesDashGap)):DASH_DEF},g={"text-anchor":m?POSITION_START:POSITION_END,fill:convertColor(pluck(h.color,D.color),pluck(D.valueAlpha,h.alpha,T.trendlineAlpha,99)),text:c})),g['text-bound']=g.text?[D.backgroundColor,D.borderColor,D.borderThickness,D.borderPadding,D.borderRadius,D.borderDash]:[],T.showTooltip&&n||(n=''),o=T.forceTrendBelow?0:pluckNumber(h.showontop,C.showtrendlinesontop,0),y?(v=b,L=x===UNDEF?b:x):(v=x===UNDEF?b:x,L=b),u=s&&v!==L?'band':'line',v!==UNDEF&&w.setReferenceInfo({from:v,to:L,toolText:n,attr:d,layer:o?3:2,type:u,id:'trend'+R+u}),T.parsedTrendLabels.push({css:E,valueOnRight:m,isTrendZone:s,from:b,to:x,attr:g}),R+=1)}_parsePlotLine(){var e,a,t,l,n,o=this,r=o.config,s=r.axisRange,d=s.max,g=s.min,h=isInBetween(o.getVisibleConfig()),c=r.showCanvasBorder,m=convertColor(r.divLineColor,r.divLineAlpha),b=r.divLineThickness,x=r.divLineIsDashed?getDashStyle(r.divLineDashLen,r.divLineDashGap):DASH_DEF,p=convertColor(r.zeroPlaneColor,r.zeroPlaneAlpha),f=r.zeroPlaneThickness,v=r._allTicks,u=v.length,L=r.showZeroPlaneOnTop,w=r.minorTicks,T=w&&w.length;if(r.lines.isDraw)for(a=0;a<u;++a)(e=v[a],!!h(e))&&(l={"stroke-dasharray":x},!(0===r.showZeroPlane&&0===e||c&&(e===d||e===g)))&&(0===e&&e!==g&&e!==d?(l.stroke=p,l['stroke-width']=f,L=r.showZeroPlaneOnTop):(L=0,l.stroke=m,l['stroke-width']=b),o.setReferenceInfo({type:'line',from:e,layer:0===e&&L?3:1,attr:l}));for(n={stroke:r.minorDivlinecolor,"stroke-width":r.minorDivLineThickness,"stroke-dasharray":x},a=0;a<T;++a)t=w[a],o.setReferenceInfo({type:'line',from:t,layer:1,attr:n})}_parseCategoryLine(e,a,t){var l,n,o,r,s,d,g=this,h=g.config,c=g.getFromEnv('color-manager'),m=g.getFromEnv('chartInstance'),b=m.getJSONData().categories,x={};if(a=a||0,t=t||e?e.length-1:0,h.drawPlotlines)for(d=1!==g.getZoom(),o=this.getVisibleConfig(),b&&b[0]&&(x.verticalLineColor=b[0].verticallinecolor,x.verticalLineAlpha=b[0].verticallinealpha,x.verticalLineThickness=b[0].verticallinethickness,x.verticalLineDashed=b[0].verticallinedashed,x.verticalLineDashLen=b[0].verticallinedashlen,x.verticalLineDashGap=b[0].verticallinedashgap),l=a;l<=t;l+=1)(n=e[l],!!n)&&(s=pluckNumber(n.x,n.y,l),1===+n.showverticalline)&&(d&&(s<o.minValue||s>o.maxValue)||(r={stroke:convertColor(pluck(n.linecolor,x.verticalLineColor,h.divLineColor,c.getColor('divLineColor')),pluck(n.linealpha,x.verticalLineAlpha,c.getColor('divLineAlpha'))),"stroke-width":pluckNumber(n.linethickness,x.verticalLineThickness,1)},r['stroke-dasharray']=pluckNumber(n.linedashed,x.verticalLineDashed,0)?getDashStyle(pluckNumber(n.linedashLen,x.verticalLineDashLen,4),pluckNumber(n.linedashgap,x.verticalLineDashGap,2),r['stroke-width']):DASH_DEF,g.setReferenceInfo({type:'line',from:s,layer:1,attr:r})))}_parsePlotBand(){var e,a,t,l,n,o,r=Math.min,s=Math.max,d=this,g=d.config,h=g.showAlternateGridColor,c=g.alternateGridColor,m=g.alternateGridAlpha,b=g._allTicks,x=isVisible(d.getVisibleConfig()),p=g.isReverse;if(h&&g.band.isDraw)for(a=1,e={fill:toRaphaelColor(convertColor(c,m)),"stroke-width":0},(l=0,t=b.length);l<t;++l,++a)x(b[l],b[l+1])&&0==a%2&&b[l+1]!==UNDEF&&(o=p?s(b[l],b[l+1]):r(b[l],b[l+1]),n=p?r(b[l],b[l+1]):s(b[l],b[l+1]),d.setReferenceInfo({from:o,to:n,type:'band',layer:0,attr:e}))}getReferenceInfo(){return this.config.referenceInfo}setReferenceInfo(e){this.config.referenceInfo.push(e)}clearReferenceInfo(){let e=this.config;e.referenceInfo=[],e.parsedTrendLabels=[],e.parsedVlineInfo=[]}resetStoredLimits(){this.config.dataLimit={}}decideScroll(){let e=this,a=e.getScrollType();'always'===a||'smart'===a&&1!==e.getZoom()?e.enableScroll():e.disableScroll()}getAxisDimension(){let{x:e,y:a,opposite:i,axisLength:t}=this.config.axisDimention;return{x:e,y:a,opposite:i,axisLength:t}}}Cartesian.prototype.setAxisDimention=setAxisDimention,Cartesian.prototype.shiftLabels=shiftLabels,Cartesian.prototype._createContainer=_createContainer;export default Cartesian;export{getCrispPath,minimumEnquiry};