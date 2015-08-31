require=function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c?c:a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({148:[function(a,b,c){(function(b){var c=a("../appMain");window.Jigsaw=a("./jigsaw"),"undefined"!=typeof b&&(b.Jigsaw=window.Jigsaw);var d=a("./blocks"),e=a("./levels"),f=a("./skins");window.jigsawMain=function(a){a.skinsModule=f,a.blocksModule=d,c(window.Jigsaw,e,a)}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../appMain":9,"./blocks":143,"./jigsaw":145,"./levels":146,"./skins":149}],149:[function(a,b,c){var d=a("../skins"),e={jigsaw:{}};c.load=function(a,b){var c=d.load(a,b);e[c.id];return c.artist=c.assetUrl("artist.png"),c.blocks=c.assetUrl("blocks.png"),c.apple=c.assetUrl("apple.png"),c.smiley=c.assetUrl("smiley.png"),c.snail=c.assetUrl("snail.png"),c.elephant=c.assetUrl("elephant.png"),c.fish=c.assetUrl("fish.png"),c.doggie=c.assetUrl("doggie.png"),c.tree=c.assetUrl("tree.png"),c.flower=c.assetUrl("flower.png"),c.house=c.assetUrl("house.png"),c.computer=c.assetUrl("computer.png"),c.blank=c.assetUrl("blank.png"),c.smallStaticAvatar=c.blank,c.background=c.assetUrl("background.png"),c}},{"../skins":272}],145:[function(a,b,c){"use strict";function d(){var a=8,b=6,c=10;Blockly.BlockSvg.NOTCH_PATH_WIDTH=2*b+c,Blockly.BlockSvg.NOTCH_WIDTH=50;var d="l "+b+","+a+" "+c+",0 "+b+",-"+a,e="l -"+b+","+a+" -"+c+",0 -"+b+",-"+a,f=a,g=b+.5,h=c-1,i="l "+g+","+f+" "+h+",0 "+g+",-"+f;Blockly.Connection.NOTCH_PATHS_OVERRIDE={left:d,leftHighlight:i,right:e}}function e(){var a=f.goal.successCondition();a&&(Blockly.removeChangeListener(k.successListener),k.result=l.SUCCESS,k.onPuzzleComplete())}var f,g,h=a("../StudioApp").singleton,i=(a("../skins"),a("../templates/page.html.ejs")),j=a("../dom"),k=b.exports,l=h.ResultType,m=h.TestResults;h.setCheckForEmptyBlocks(!0),Blockly.BUMP_UNCONNECTED=!1,k.scale={snapRadius:1,stepSpeed:33};var n=function(){for(var a in f.scale)k.scale[a]=f.scale[a];k.MAZE_WIDTH=0,k.MAZE_HEIGHT=0,k.block1Clicked=!1},o=function(){var a=document.getElementById("visualizationColumn");a.style.display="none";var b=document.getElementById("visualizationResizeBar");if(b.style.display="none",f.ghost){var c=Blockly.mainBlockSpace.getCanvas();Blockly.createSvgElement("rect",{fill:"url(#pat_"+f.id+"A)","fill-opacity":"0.2",width:f.image.width,height:f.image.height,transform:"translate("+f.ghost.x+", "+f.ghost.y+")"},c,{beforeExisting:!0})}};k.init=function(b){g=b.skin,f=b.level,n(),f.largeNotches&&d(),Blockly.SNAP_RADIUS=f.snapRadius||90,b.html=i({assetUrl:h.assetUrl,data:{localeDirection:h.localeDirection(),controls:a("./controls.html.ejs")({assetUrl:h.assetUrl}),editCode:f.editCode,blockCounterClass:"block-counter-default"}}),b.loadAudio=function(){h.loadAudio(g.winSound,"win"),h.loadAudio(g.startSound,"start"),h.loadAudio(g.failureSound,"failure")},b.afterInject=function(){Blockly.HSV_SATURATION=.6,o()},b.trashcan=!!f.toolbox,b.scrollbars=!1,b.enableShowCode=!1,b.enableShowBlockCount=!1,h.init(b),document.getElementById("runButton").style.display="none",k.successListener=Blockly.mainBlockSpaceEditor.addChangeListener(function(a){e()});var c=document.querySelectorAll("[block-id='1']")[0];c&&j.addMouseDownTouchEvent(c,function(){k.block1Clicked=!0})};var p=function(){k.waitingForReport||h.displayFeedback({app:"Jigsaw",skin:g.id,feedbackType:k.testResults,response:k.response,level:f})};k.onReportComplete=function(a){k.response=a,k.waitingForReport=!1,p()},k.execute=function(){},k.onPuzzleComplete=function(){var a=k.result==l.SUCCESS;k.testResults=h.getTestResults(a,{allowTopBlocks:!0}),k.testResults>=m.FREE_PLAY?h.playAudio("win"):h.playAudio("failure");var b=Blockly.Xml.blockSpaceToDom(Blockly.mainBlockSpace),c=Blockly.Xml.domToText(b);k.waitingForReport=!0,h.report({app:"Jigsaw",level:f.id,result:k.result===l.SUCCESS,testResult:k.testResults,program:encodeURIComponent(c),onComplete:k.onReportComplete})}},{"../StudioApp":5,"../dom":109,"../skins":272,"../templates/page.html.ejs":302,"./controls.html.ejs":144}],144:[function(require,module,exports){module.exports=function(){var t=function anonymous(locals,filters,escape){escape=escape||function(a){return String(a).replace(/&(?!\w+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")};var buf=[];with(locals||{})!function(){buf.push("");require("./locale");buf.push("\n")}();return buf.join("")};return function(a){return t(a,require("ejs").filters)}}()},{"./locale":147,ejs:500}],143:[function(a,b,c){"use strict";function d(){return document.getElementById("blocklySvgDefs")?void h.addQueuedPatterns():void setTimeout(d,100)}function e(a,b,c,d,e,f){a.Blocks[c]={helpUrl:"",init:function(){this.setHSV.apply(this,d),this.appendDummyInput().appendTitle(new a.FieldImage(b.blank,e,54)),this.setPreviousStatement(!0),f&&this.appendStatementInput("child"),this.setNextStatement(!0)}}}function f(a,b,c){function d(c){var d="jigsaw_"+j+p[c],q="pat_"+j+p[c];a.Blocks[d]={helpUrl:"",init:function(){this.setHSV.apply(this,k),this.appendDummyInput().appendTitle(new a.FieldImage(b.blank,n,o)),this.setPreviousStatement(1!==c||l),this.setNextStatement(c!==h||l),this.setFillPattern(i(q,e,f,g,0,m*(c-1)))}}}for(var e=c.image,f=c.width,g=c.height,h=c.numBlocks,j=c.level,k=c.HSV,l=c.notchedEnds,m=g/h,n=f-20,o=m-10,p="-ABCDEFGHIJKLMNOPQRSTUVWXYZ",q=1;h>=q;q++)d(q)}var g=(a("./locale"),a("../dom"),a("./levels")),h={queued:[],created:{},addToQueue:function(a){this.queued.push(a)},addQueuedPatterns:function(){this.queued.forEach(function(a){i(a.id,a.imagePath,a.width,a.height,a.offsetX,a.offsetY)}),this.queued=[]},wasCreated:function(a){var b=!0,c=this.created[a.id];if(!c)return!1;if(Object.keys(a).forEach(function(d){a[d]!==c[d]&&(b=!1)}),!b)throw new Error("Can't add attribute of same id with different attributes");return!0},markCreated:function(a){if(this.created[a.id])throw new Error("Already have cached item with id: "+a.id);this.created[a.id]=a}},i=function(a,b,c,d,e,f){var g,i,j,k,l={id:a,imagePath:b,width:c,height:d,offsetX:e,offsetY:f},m=document.getElementById("blocklySvgDefs");return m?h.wasCreated(l)||(g="function"==typeof e?-e():-e,i="function"==typeof f?-f():-f,j=Blockly.createSvgElement("pattern",{id:a,patternUnits:"userSpaceOnUse",width:"100%",height:d,x:g,y:i},m),k=Blockly.createSvgElement("image",{width:c,height:d},j),k.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",b),h.markCreated(l)):h.addToQueue(l),a};c.install=function(a,b){var c=b.skin,h=[0,1,.98],j=Object.keys(a.Blocks);Object.keys(g).forEach(function(b){var d=g[b];if(f(a,c,{image:c[d.image.name],HSV:d.backgroundHSV||h,width:d.image.width,height:d.image.height,numBlocks:d.numBlocks,notchedEnds:d.notchedEnds,level:b}),0===d.numBlocks){var e="pat_"+d.id+"A";i(e,c[d.image.name],d.image.width,d.image.height,0,0)}}),e(a,c,"jigsaw_repeat",[322,.9,.95],100,!0),e(a,c,"jigsaw_green",[140,1,.74],80),e(a,c,"jigsaw_blue",[184,1,.74],80),e(a,c,"jigsaw_purple",[312,.32,.62],80);var k=a.Generator.get("JavaScript");a.JavaScript=k,Object.keys(a.Blocks).forEach(function(a){-1!==j.indexOf(a)||k[a]||(k[a]=function(){return"\n"})}),d(),delete a.Blocks.procedures_defreturn,delete a.Blocks.procedures_ifreturn}},{"../dom":109,"./levels":146,"./locale":147}],147:[function(a,b,c){b.exports=window.blockly.jigsaw_locale},{}],146:[function(a,b,c){var d=a("../block_utils").createToolbox,e=function(a,b,c,d,e){return g(a,b,c,d,e,!0)},f=function(a,b,c,d,e){return g(a,b,c,d,e,!1)},g=function(a,b,c,d,e,f){var g="";return b=b||0,c=c||0,e=e||"next","statement"===e&&(g=" name='child'"),'<block type="'+a+'" deletable="'+f+'" x="'+b+'" y="'+c+'">'+(d?"<"+e+g+">"+d+"</"+e+">":"")+"</block>"},h=function(a,b){var c;if(a)c=a.length;else{var d="-ABCDEFGHIJKLMNOPQRSTUVWXYZ",e=b.level;c=b.numBlocks,a=[];for(var f=1;c>=f;f++)a.push("jigsaw_"+e+d[f])}var g=Blockly.mainBlockSpace.getTopBlocks();if(1!==g.length)return!1;for(var h=0,i=g[0];c>h;){if(!i||i.type!==a[h])return!1;var j=i.getChildren();if(j.length>1)return!1;i=j[0],h++}return void 0!==i?!1:!0};b.exports={1:{instructionsIcon:"apple",aniGifURL:"/script_assets/k_1_images/instruction_gifs/click-block.gif",isK1:!0,image:{name:"apple",width:200,height:200},backgroundHSV:[41,1,.969],numBlocks:1,requiredBlocks:[],freePlay:!1,largeNotches:!0,goal:{successCondition:function(){return Jigsaw.block1Clicked}},startBlocks:f("jigsaw_1A",20,20)},2:{instructionsIcon:"smiley",aniGifURL:"/script_assets/k_1_images/instruction_gifs/drag-drop.gif",isK1:!0,image:{name:"smiley",width:200,height:200},backgroundHSV:[184,1,.733],ghost:{x:400,y:100},numBlocks:1,requiredBlocks:[],freePlay:!1,largeNotches:!0,goal:{successCondition:function(){if(Blockly.mainBlockSpace.dragMode)return!1;var a=Blockly.mainBlockSpace.getAllBlocks()[0].getRelativeToSurfaceXY(),b=Math.abs(400-a.x),c=Math.abs(100-a.y);return 80>b+c}},startBlocks:f("jigsaw_2A",20,20)},3:{instructionsIcon:"snail",aniGifURL:"/script_assets/k_1_images/instruction_gifs/drag-connect.gif",isK1:!0,image:{name:"snail",width:200,height:200},backgroundHSV:[36,1,.999],ghost:{x:400,y:100},numBlocks:2,requiredBlocks:[],freePlay:!1,largeNotches:!0,goal:{successCondition:function(){return h(null,{level:3,numBlocks:2})}},startBlocks:f("jigsaw_3A",400,100)+f("jigsaw_3B",100,220)},4:{instructionsIcon:"elephant",isK1:!0,image:{name:"elephant",width:200,height:200},backgroundHSV:[320,.6,.999],ghost:{x:400,y:100},numBlocks:2,requiredBlocks:[],freePlay:!1,largeNotches:!0,goal:{successCondition:function(){return h(null,{level:4,numBlocks:2})}},startBlocks:f("jigsaw_4A",100,140)+f("jigsaw_4B",400,200)},5:{instructionsIcon:"fish",isK1:!0,image:{name:"fish",width:200,height:200},backgroundHSV:[209,.57,.6],ghost:{x:400,y:100},numBlocks:3,requiredBlocks:[],freePlay:!1,largeNotches:!0,notchedEnds:!0,goal:{successCondition:function(){return h(null,{level:5,numBlocks:3})}},startBlocks:f("jigsaw_5A",100,20)+f("jigsaw_5B",100,140)+f("jigsaw_5C",100,280)},6:{instructionsIcon:"doggie",isK1:!0,image:{name:"doggie",width:200,height:200},backgroundHSV:[25,.57,.96],ghost:{x:400,y:100},numBlocks:3,requiredBlocks:[],freePlay:!1,largeNotches:!0,notchedEnds:!0,goal:{successCondition:function(){return h(null,{level:6,numBlocks:3})}},startBlocks:f("jigsaw_6B",100,20)+f("jigsaw_6A",100,140)+f("jigsaw_6C",100,280)},7:{instructionsIcon:"tree",isK1:!0,image:{name:"tree",width:200,height:200},backgroundHSV:[238,.51,.999],ghost:{x:400,y:100},numBlocks:3,requiredBlocks:[],freePlay:!1,largeNotches:!0,notchedEnds:!0,goal:{successCondition:function(){return h(null,{level:7,numBlocks:3})}},startBlocks:f("jigsaw_7B",100,20)+f("jigsaw_7A",100,140)+f("jigsaw_7C",100,280)},8:{instructionsIcon:"flower",isK1:!0,image:{name:"flower",width:200,height:200},backgroundHSV:[75,.8,.999],ghost:{x:400,y:100},numBlocks:3,requiredBlocks:[],freePlay:!1,largeNotches:!0,notchedEnds:!0,goal:{successCondition:function(){return h(null,{level:8,numBlocks:3})}},startBlocks:f("jigsaw_8C",100,20)+f("jigsaw_8B",100,140)+f("jigsaw_8A",100,280)},9:{instructionsIcon:"house",aniGifURL:"/script_assets/k_1_images/instruction_gifs/drag-disordered.gif",isK1:!0,image:{name:"house",width:200,height:200},backgroundHSV:[110,.56,.6],ghost:{x:400,y:100},numBlocks:3,requiredBlocks:[],freePlay:!1,notchedEnds:!0,largeNotches:!0,goal:{successCondition:function(){return h(null,{level:9,numBlocks:3})}},startBlocks:f("jigsaw_9B",100,20,f("jigsaw_9C",0,0,f("jigsaw_9A",0,0)))},10:{instructionsIcon:"computer",isK1:!0,image:{name:"computer",width:200,height:200},backgroundHSV:[300,.25,.8],ghost:{x:400,y:100},numBlocks:3,requiredBlocks:[],freePlay:!1,notchedEnds:!0,largeNotches:!0,goal:{successCondition:function(){return h(null,{level:10,numBlocks:3})}},startBlocks:f("jigsaw_10A",100,20,f("jigsaw_10C",0,0,f("jigsaw_10B",0,0)))},11:{instructionsIcon:"blocks",isK1:!0,image:{name:"blocks",width:131,height:286},ghost:{x:200,y:12},numBlocks:0,requiredBlocks:[],freePlay:!1,notchedEnds:!0,largeNotches:!1,snapRadius:30,goal:{successCondition:function(){return h(["jigsaw_repeat","jigsaw_purple","jigsaw_blue","jigsaw_green"],{})}},startBlocks:f("jigsaw_repeat",20,20,f("jigsaw_purple",0,0,f("jigsaw_blue")),"statement"),toolbox:d(e("jigsaw_green"))},12:{instructionsIcon:"blocks",isK1:!0,image:{name:"blocks",width:131,height:286},ghost:{x:200,y:12},numBlocks:0,requiredBlocks:[],freePlay:!1,notchedEnds:!0,largeNotches:!1,snapRadius:30,goal:{successCondition:function(){return h(["jigsaw_repeat","jigsaw_purple","jigsaw_blue","jigsaw_green"],{})}},startBlocks:f("jigsaw_repeat",20,20),toolbox:d(e("jigsaw_green")+e("jigsaw_purple")+e("jigsaw_blue"))},13:{instructionsIcon:"doggie",isK1:!0,image:{name:"doggie",width:200,height:200},ghost:{x:400,y:100},backgroundHSV:[25,.57,.96],numBlocks:3,requiredBlocks:[],freePlay:!1,largeNotches:!0,notchedEnds:!0,goal:{successCondition:function(){return h(null,{level:13,numBlocks:3})}},startBlocks:e("jigsaw_13C",100,20,e("jigsaw_13B",0,0,e("jigsaw_13A",0,0)))}}},{"../block_utils":77}]},{},[148]);