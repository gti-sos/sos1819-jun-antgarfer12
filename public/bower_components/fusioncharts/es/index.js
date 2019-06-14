import FusionCharts from'../core/fc-backward-compatibility';import moduleDependencies from'./module-dependencies';import loadScript from'../vendors/fc-core/src/script-loader';import defaultFeatures from'../features';import{pluck}from'../vendors/fc-core/src/lib';FusionCharts.addDep(defaultFeatures);let isChartAPI=a=>'chartAPI'===a.getType();const getMetaSentence=function(){let a={};return function(b){return b=b&&b.replace(/(^\s*)|(\s*$)/g,'')||'',a[b]||(a[b]={key:b,subject:b.replace(/[^\/]*?$/gi,''),predicate:b.replace(/^.*\//gi,'')})}}();function sanitiseChartType(a=''){return''===a?a:a.replace(/^[\s\S]*\//gi,'').replace(/\?/g,'%3F').replace(/\#/g,'%23').replace(/\:/g,'%3A')}function getDependentFileName(a){let b,c=FusionCharts.options;return b=getMetaSentence(a),a=sanitiseChartType(b.predicate),b.subject+c.html5ScriptNamePrefix+a+c.html5ScriptNameSuffix}function getDynamicImport(a){switch(moduleDependencies[a]){case'charts':return import('../charts');case'timeseries':return import('../timeseries');case'powercharts':return import('../powercharts');case'widgets':return import('../widgets');case'zoomline':return import('../zoomline');case'gantt':return import('../gantt');case'treemap':return import('../treemap');case'zoomscatter':return import('../zoomscatter');case'msstackedcolumn2dsplinedy':return import('../msstackedcolumn2dsplinedy');case'overlappedbar2d':return import('../overlappedbar2d');case'overlappedcolumn2d':return import('../overlappedcolumn2d/');default:return loadScript(`${FusionCharts.getScriptBaseURI()}${getDependentFileName(a)}`);}}FusionCharts.addEventListener('resourceRequested',a=>{let b=a.sender,c=b.chartType(),d=b.options.chartTypeSourcePath||'';FusionCharts.getDep(c,'chartapi')||FusionCharts.getDep(c,'maps')||FusionCharts.addDep({name:c,type:'dependency',extension:getDynamicImport(d+c)})}),FusionCharts.addEventListener('preconfigure',a=>{let b=a.sender;if(isChartAPI(b)){let a=b.getFromEnv('dataSource');a&&a.chart&&pluck(a.chart.exportenabled,0)&&!FusionCharts.getDep('ExcelExport')&&FusionCharts.addDep({name:'ExcelExport',extension:import('../features/excelexport').then(({default:a})=>{FusionCharts.addDep(a)})})}}),window&&'function'==typeof define&&define.amd&&(window.FusionCharts=FusionCharts);export default FusionCharts;