export default{"initial.extension.regression":function(){return{"path.appearing":null,"path.updating":null,"path.disappearing":null,"group.appearing":()=>{var a,b=this,c=b.getFromEnv('chart'),d=c.getChildren('canvas')[0],e=0,f=[],g=[];for(f.push(d.config.canvasLeft),f.push(d.config.canvasTop),f.push(0),f.push(d.config.canvasHeight),a=f.length;e<a;)g.push(f[e]),e++;return g[2]=d.config.canvasWidth,[{initialAttr:function(){return{"clip-rect":f}},finalAttr:function(){return{"clip-rect":g}},effect:'linear',slot:'plot'}]},"*":null}}};