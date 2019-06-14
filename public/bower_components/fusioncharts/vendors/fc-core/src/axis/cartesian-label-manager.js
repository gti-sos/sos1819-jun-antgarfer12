import Cartesian,{minimumEnquiry}from'./cartesian';import{UNDEF,stubFN,extend2,toPrecision,pluckNumber,setLineHeight,pluck}from'../lib';import{getTrendLineLimits,_drawLabel,_parseLabel,getLabel,setAxisPadding}from'./common-api';const ROTATED_LABEL_PADDING=3,ROTATED_LABEL_MIN_GAP=10;class CartesainLabelManager extends Cartesian{_getHMaxLabelDimention(a){function b(a,b){switch(b.toLowerCase()){case'left':return T(V._getCustomPixel(a));case'right':return T(Y.width-V._getCustomPixel(a));}}var c,d,e,f,g,h,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P=Math.ceil,Q=Math.max,R=Math.floor,S=Math.min,T=Math.abs,U=Number.POSITIVE_INFINITY,V=this,W=V.config,X=V.getFromEnv('chart'),Y=X.config,Z=X.getFromEnv('smartLabel'),$=W.axisRange,_=W.labels,aa=W.labelDisplay,ba=W.slantLabel,ca=_.style,da=W.maxLabelHeight,ea=V.getInterval(),fa=W.staggerLines,ga=W.labelStep,ha=Y.canvasLeft,ia=Y.canvasRight,ja=fa-2,ka=$.max,la=$.min,ma=0,na=W.tickValues&&W.tickValues.tickValue,oa=na&&na.length,pa=X.distributedColumns,qa=0,ra={text:UNDEF,width:0,style:UNDEF},sa=0,ta=4,ua=stubFN,va=stubFN,wa=stubFN,xa={},ya=0,za=!1,Aa=0,Ba=!1,Ca=U,Da=W.ticks,Ea=U;if(pa)for(t=0;t<oa;t++)na[t+1]?na[t].x&&(na[t].plotWidth=V.getPixel(na[t+1].x-na[t].x)-V.getPixel(0)):na[t].plotWidth=V.getPixel(Y.canvasRight-na[t].x)-V.getPixel(0);if(W.tickValues&&(!na||0===na.length))return{width:0,height:0};if('rotate'===aa&&(W.rotateLabels=1),W.tickValues||(W.irregularCatAxis=!1),W.sWidthAdjstFactor=d=0==ja?1:1==ja?1.5:ja,Z.useEllipsesOnOverflow(Y.useEllipsesWhenOverflow),Z.setStyle({fontSize:ca.fontSize,fontFamily:ca.fontFamily,lineHeight:ca.lineHeight,fontWeight:ca.fontWeight}),W.irregularCatAxis){for(na.sort(function(a,b){return a.x-b.x}),t=0,qa=na.length;t<qa;t++){if(g=na[t],'undefined'!=typeof z){if(Ea=T(g.x-z),D=T(V._getCustomPixel(la)-V._getCustomPixel(la+Ea)),Z.setStyle(Object.assign({},g.style)),B=Z.getOriSize('W'),C=B.width,D<1.2*C){g.label='',Ea=Ca;continue}E._individualIWR=D,g._individualIWL=D,Ca=Ea}E=g,z=g.x}for(Ea===U&&(Ea=R(S(g.x,ka-g.x)),Ea=Q(Ea,4)),t=0,qa=na.length;t<qa;t++)g=na[t],t||(g._individualIWL=1/0),t===qa-1&&(g._individualIWR=1/0),g.individualIW=S(g._individualIWL,g._individualIWR);j=T(V._getCustomPixel(la)-V._getCustomPixel(la+Ea)),j=S(2*b(na[0].x,'left'),2*b(na[qa-1].x,'right'),j)}else j=T(V._getCustomPixel(la)-V._getCustomPixel(la+ea));if(a=da||a,xa.__root__={getHeight:function(a){var b=na[a],c=b._ovrStyle.lineHeight,d=parseInt(c.replace(/(\d+)px/,'$1'),10);return d},getWidth:function(){return a},getCalculatedLabelStep:function(a){var b,c,d,e,f,g,i,l,m,n,o=0,p=a.length,q=Number.NEGATIVE_INFINITY,r={},s=0;for(o=0;o<p;o++)e=a[o],e.style=e.style||{};if(W.irregularCatAxis)return W.labelStep;for(o=0;o<p;o++)(e=a[o],!!e)&&(e.label||(e.label=''),f=e.oriLabel||e.label,h={fontSize:ca.fontSize,fontFamily:ca.fontFamily,lineHeight:ca.lineHeight,fontWeight:ca.fontWeight},s++,e.style=e.style||{},extend2(h,e.style),b=h.fontSize+h.fontFamily+h.lineHeight+h.fontWeight,r[b]?f.length>r[b].label.length&&(r[b].label=f):r[b]={label:f,style:h});for(g in r)r.hasOwnProperty(g)&&(c=r[g].style,d=r[g].label,c.lineHeight=setLineHeight(c),Z.setStyle(c),W.rotateLabels&&(m=parseInt(c.lineHeight.replace(/(\d+)px/,'$1'),10)),k=Z.getSmartText(d,UNDEF,m),l=0===W.rotateLabels?60<k.width?60:k.width:k.height,q=Q(l,q));return('wrap'===aa||'auto'===aa)&&(q=S(N,q)),i=R(T(V._getCustomPixel(ka)-V._getCustomPixel(la))/q),n=Q(P(s/i),W.labelStep),j=T(V._getCustomPixel(la)-V._getCustomPixel(la+n)),s<=i?W.labelStep:n}},xa._inProp={},xa.getCopyById=function(a){var b,c=this,d=c._inProp,e=c.__root__,f=d.copyStore;return(f=f||{},b=f[a],b)?b:(extend2(b=f[a]={},e),b)},W.tickValues){for('rotate'===aa?(_.rotation=ba?300:270,n=xa.getCopyById('rotate')):'stagger'===aa?(n=xa.getCopyById('stagger'),n.getHeight=function(a){var b,c,d,e;return b=W.tickValues.tickValue,c=b[a],d=c&&c.style||(c.style={}),h={fontSize:ca.fontSize,fontFamily:ca.fontFamily,lineHeight:ca.lineHeight,fontWeight:ca.fontWeight},extend2(h,d),Z.setStyle(h),e=Z.getOriSize(c.label),e.height},n.getWidth=function(a){return ta=1,a.individualIW?a.individualIW:2*j*d-ta},wa=function(b){var c,d,e,f,g,h,i,j,k=b.length,l=0;if(Z.setStyle(ca),j=Z.getOriSize('WWW'),e=j.height,d=b[k-1],R(d._cumulativeSum)<=P(k*(e+2)))h=R(a/e),fa=0>h-fa?h:fa;else{h=R(a/(e+4));do for(l=0,i=h,(f=i-1,k=b.length);f<k;){if(k-f<h&&(f=k-1),c=b[f],g=c._cumulativeSum-l,~~g>-~a){za=!0;break}else za=!1;l=c._cumulativeSum,f+=i}while(h--&&za);h++,fa=S(fa,h)}W.drawnStaggerLines=fa},ua=function(a){var b,c,d,f,g,h=0;for(g=0,d=a.length;g<d;g++)(b=a[g],!b.stepSkipped)&&(c=b&&b.style||{},(f=c.lineHeight)||(f=ca.lineHeight),e=h++%fa,b.labelPadding=e?f.replace(/px/i,'')*e:0)}):'none'===aa?(n=xa.getCopyById('none'),n.getHeight=stubFN,n.getWidth=stubFN,va=stubFN,W.rotateLabels&&(_.rotation=ba?300:270,A=a),n.getCalculatedLabelStep=function(){return W.labelStep}):(n=xa.getCopyById('auto'),n.getHeight=function(){return a},n.getWidth=function(a){return a.individualIW?a.individualIW:j-2*ta},Z.setStyle(ra.style),O=Z.getOriSize('WWW'),N=O.width,va=function(a,b){var c,d,e,f,g=X.getFromEnv('chart-attrib'),h=pluckNumber(g&&g.rotatelabels);if(!W.irregularCatAxis&&(Z.setStyle(a),O=Z.getOriSize('WWW'),N=O.width,N>=j&&0!==h)){for(_.rotation=ba?300:270,_.forceRotate=!0,n=xa.getCopyById('rotate'),l=n.getWidth,m=n.getHeight,ra.width=0,(c=0,d=b.length);c<d;c++)(e=b[c],e&&(e.label||e.oriLabel)&&0!==pluckNumber(e.showlabel,W.showLabels,1)&&!0!==e.stepSkipped)&&(f=e._ovrStyle,Z.setStyle({fontSize:f.fontSize,fontFamily:f.fontFamily,lineHeight:f.lineHeight,fontWeight:f.fontWeight}),k=Z.getSmartText(e.oriLabel,l(e),m(c)),e.label=k.text,e.labelTooltext=k.tooltext,e._sLabel=k,ra.width<k.width&&(ra.text=k.text,ra.width=k.width,ra.height=k.height,ra.style=f));o=ra.text}}),l=n.getWidth,m=n.getHeight,ga=W.labels.step=W.labelStep=W._oriLabelStep,ga=W.labels.step=W.labelStep=n.getCalculatedLabelStep(na),q=minimumEnquiry(na),t=q,p=0,u=0,qa=na.length;t<qa;t++,p++)if(g=na[t],g&&(g.label||g.oriLabel)&&0!==pluckNumber(g.showlabel,W.showLabels,1)){if(Ba=!0,h={fontSize:ca.fontSize,fontFamily:ca.fontFamily,lineHeight:ca.lineHeight,fontWeight:ca.fontWeight},extend2(h,g.style),h.lineHeight=setLineHeight(h),K=h.fontSize+h.fontFamily+h.lineHeight+h.fontWeight,K!=J&&(Z.setStyle(h),J=K),p%ga){g.stepSkipped=!0,g.appliedSmartLabel=!1,Aa++;continue}else g.appliedSmartLabel=!0,g.stepSkipped=!1;g._ovrStyle=h,na[t].plotWidth?c=Q('rotate'===aa?na[t].plotWidth-6:0,m(t)):('rotate'===aa?t<qa-1&&(f=V.getPixel(t+1)-V.getPixel(t)-ROTATED_LABEL_MIN_GAP):f=0,'rotate'===aa&&isNaN(+f)&&(f=Y.canvasWidth/V.getVisibleLength()-ROTATED_LABEL_PADDING),c=Q(f,m(t))),k=Z.getSmartText(g.oriLabel||g.label,l(g),c),ya+=k.height+2,V.components.labels[u++]={config:{width:k.width,height:k.height,props:{label:{}}}},g._cumulativeSum=ya,g.oriLabel=g.oriLabel||g.label,g.label=k.text,g.labelTooltext=k.tooltext,g._sLabel=k,ra.width<k.oriTextWidth&&(extend2(ra,k),ra.style=h),sa<k.height&&(sa=k.height)}if(!Ba)return{height:0,width:0};if(wa(na,Aa),ua(na,Aa),va(ra.style,na),o=ra.text||'','mixed'===W.xAxisLabelMode)for(x=W.isPercent?X.getFromEnv('number-formatter').percentValue:X.getFromEnv('number-formatter').xAxis,ma=o.length,(t=0,L=Da&&Da.length);t<L;++t)w=Da[t],v=''+x.call(X.getFromEnv('number-formatter'),w,W.axisIndex),v.length>ma&&(o=v,ma=v.length);for(ra.height=Q(sa,ra.height||0),H=na.length,(t=0,qa=na.length);t<qa&&(F=na[t],!F._sLabel);t++);for(qa=na.length,t=qa-1;0<=t&&(G=na[t],!G._sLabel);t--);I=1!==V.getZoom(),_.rotation||I||!F._sLabel?(W.axisEndLabelDisplaySpace.left=0,W.axisEndLabelDisplaySpace.right=0):(W.axisEndLabelDisplaySpace.left=Q(ha-(V._getCustomPixel(F.x||0)-F._sLabel.width/2),0),W.axisEndLabelDisplaySpace.right=Q(V._getCustomPixel(G.x||H-1)+G._sLabel.width/2-ia,0)),y=ra}else{for(x=W.numberFormatterFn?X.getFromEnv('number-formatter')[W.numberFormatterFn]:W.isPercent?X.getFromEnv('number-formatter').percentValue:X.getFromEnv('number-formatter').xAxis,t=0,L=Da&&Da.length;t<L;++t)M=Da[t],w=toPrecision(M,10),v=''+x.call(X.getFromEnv('number-formatter'),w,W.axisIndex),M===la&&(r=v),M===ka&&(s=v),y=Z.getOriSize(v),V.components.labels[t]={config:{width:y.width,height:y.height,props:{label:{}}}},v.length>ma&&(o=v,ma=v.length);Z.setStyle({fontSize:ca.fontSize,fontFamily:ca.fontFamily,lineHeight:ca.lineHeight,fontWeight:ca.fontWeight}),y=Z.getOriSize(o||''),'rotate'===aa&&(_.rotation=270),W.rotateLabels&&(ba?_.rotation=300:_.rotation=270),_.rotation||(r=Z.getOriSize(r||''),s=Z.getOriSize(s||''),W.axisEndLabelDisplaySpace.left=r.width/2+2,W.axisEndLabelDisplaySpace.right=s.width/2+2)}return W.tickValues&&'stagger'===aa&&(y.height=fa*ra.height),y.width=A?S(A,y.width):y.width,y.width=pluckNumber(y.width),y.maxWidth=pluckNumber(y.maxWidth),y}_getVMaxLabelDimention(a){var b,c,d,e,f,g,h,j,k,l,m,n,o,p,q=this,r=q.config,s=q.getFromEnv('chart'),t=s.config,u=s.getFromEnv('smartLabel'),v=r.labels.style,w=r.useEllipsesWhenOverflow,x=r.maxLabelWidthPercent,y=r.minLabelWidthPercent,z=0,A=s.getFromEnv('dataSource').categories,B={height:0,width:0},C=r.ticks,D={};if(u.useEllipsesOnOverflow(t.useEllipsesWhenOverflow),u.setStyle({fontSize:v.fontSize,fontFamily:v.fontFamily,lineHeight:v.lineHeight,fontWeight:v.fontWeight}),r.tickValues){for(A&&(D={fontFamily:A[0].font,fontSize:A[0].fontsize,color:A[0].fontcolor}),x&&(c=x/100*t.width,c<a&&(a=c)),y&&(d=y/100*t.width,d>a&&(a=d)),j=r.tickValues.tickValue,(e=0,k=j.length);e<k;e++)(l=j[e],0!==pluckNumber(l.showlabel,r.showLabels))&&(o={fontFamily:pluck(l.font,l.labelfont,D.fontFamily,v.fontFamily),fontSize:pluck(l.fontsize,l.labelfontsize,D.fontSize,v.fontSize).replace(/px/i,'')+'px',fontWeight:'normal'==v.fontWeight?pluckNumber(l.fontbold,l.labelfontbold,0)?'bold':'normal':v.fontWeight,fontStyle:'normal'==v.fontStyle?pluckNumber(l.fontitalic,l.labelfontitalic,0)?'italic':'normal':v.fontStyle},p={fontFamily:pluck(o.fontFamily,D.fontFamily,v.fontFamily),fontSize:pluck(o.fontSize,D.fontSize,v.fontSize),fontWeight:pluck(o.fontWeight,v.fontWeight),fontStyle:pluck(o.fontStyle,v.fontStyle)},p.lineHeight=setLineHeight(p),u.setStyle(p),m=u.getSmartText(l.oriLabel||l.label,a,v.lineHeight,w),q.components.labels[e]={config:{width:m.width,height:m.height,props:{label:{}}}},l.oriLabel=l.oriLabel||l.label,l.label=h=m.text,l.labelTooltext=m.tooltext,m.width>z&&(B=m,z=m.width));return B}for(n=r.numberFormatterFn?s.getFromEnv('number-formatter')[r.numberFormatterFn]:r.isPercent?s.getFromEnv('number-formatter').yAxisPercentValue:s.getFromEnv('number-formatter').yAxis,e=0,f=C&&C.length;e<f;++e)g=toPrecision(C[e],10),h=''+n.call(s.getFromEnv('number-formatter'),g,r.axisIndex),m=u.getSmartText(h),q.components.labels[e]={config:{width:m.width,height:m.height,props:{label:{}}}},h.length>z&&(b=h,z=h.length);return u.getOriSize(b)}getCleanValue(a,b){var c=this,d=c.getFromEnv('number-formatter');return d.getCleanValue(a,b)}generateMinorTicks(){if(this)return[]}setCanvas(a){var b=this,c=b.config;c.canvas=a}_adjustNumberFormatter(a){var b,c,d=this,e=d.config,f=e.axisIndex,g=e.isVertical,h=d.getFromEnv('chart'),i=h.getFromEnv('number-formatter'),j=e._defaultDecimalPrecision,k=e._defaultForceDecimal,l=0;c=g||'yAxis'===e.numberFormatterFn?(i.Y[f]||i.Y[0]).yAxisLabelConf:i.paramX,j===UNDEF?e._defaultDecimalPrecision=c.decimalprecision:c.decimalprecision=j,k===UNDEF?e._defaultForceDecimal=c.forcedecimals:c.forcedecimals=k;0<parseInt(a,10)||(b=a.toString().split('.')[1],b&&(l=b.match(/^[0]*/)[0].length+1,l>c.decimalprecision&&(c.forcedecimals=1),c.decimalprecision=Math.max(l,c.decimalprecision)))}setLabelConfig(a){var b,c=this,d=c.config,e=d.labels;for(b in a)a.hasOwnProperty(b)&&(e[b]=a[b])}}CartesainLabelManager.prototype._parseLabel=_parseLabel,CartesainLabelManager.prototype._drawLabel=_drawLabel,CartesainLabelManager.prototype.getTrendLineLimits=getTrendLineLimits,CartesainLabelManager.prototype.setAxisPadding=setAxisPadding,CartesainLabelManager.prototype.getLabel=getLabel;export default CartesainLabelManager;