webpackJsonp([0],{

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(128)

var Component = __webpack_require__(13)(
  /* script */
  __webpack_require__(130),
  /* template */
  __webpack_require__(131),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "E:\\Project\\WeChat-Marchsoft\\resources\\assets\\js\\components\\newsIndex.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] newsIndex.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1407ff55", Component.options)
  } else {
    hotAPI.reload("data-v-1407ff55", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(129);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(58)("7e124a84", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/_css-loader@0.28.7@css-loader/index.js!../../../../node_modules/_vue-loader@11.3.4@vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-1407ff55\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/_vue-loader@11.3.4@vue-loader/lib/selector.js?type=styles&index=0!./newsIndex.vue", function() {
     var newContent = require("!!../../../../node_modules/_css-loader@0.28.7@css-loader/index.js!../../../../node_modules/_vue-loader@11.3.4@vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-1407ff55\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/_vue-loader@11.3.4@vue-loader/lib/selector.js?type=styles&index=0!./newsIndex.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(41)(undefined);
// imports


// module
exports.push([module.i, "\n.s_card {\r\n    background: #fff;\r\n    margin-bottom: .2em;\r\n    background-origin: border-box;\r\n    position: relative;\r\n    width: 100%;\r\n    overflow: hidden;\n}\n.art_box {\r\n    width: 100%;\r\n    background: #fff;\r\n    -webkit-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n    padding: 5px;\n}\n.art_tit_h1 {\r\n    font-size: 1.62em;\r\n    color: #1a1a1a;\r\n    line-height: 1.34em;\r\n    overflow: hidden;\r\n    -o-text-overflow: ellipsis;\r\n    text-overflow: ellipsis;\r\n    display: -webkit-box;\r\n    -webkit-line-clamp: 2;\r\n    -webkit-box-orient: vertical;\r\n    word-break: break-all;\r\n    margin: .6em 0 .2em;\r\n    font-weight: 700;\r\n    text-align: justify;\n}\n.weibo_info {\r\n    display: -webkit-box;\r\n    display: -webkit-flex;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    padding: 0 .3em;\r\n    margin: .2em;\n}\n.look_info .weibo_img {\r\n    width: 1.6em;\r\n    height: 1.6em;\n}\n.weibo_img, .weibo_img .img_width, .weibo_v {\r\n    border-radius: 50%;\n}\n.weibo_img {\r\n    width: .7em;\r\n    height: .7em;\r\n    position: relative;\r\n    background-size: .32em .25em;\r\n    margin-right: .24em;\n}\n.look_info .weibo_img .img_width {\r\n    width: 1.6em;\r\n    height: 1.6em;\r\n    border-radius: 50%;\n}\n.weibo_img, .weibo_img .img_width, .weibo_v {\r\n    border-radius: 50%;\n}\n.img_width, .sw_c3 {\r\n    width: 100%;\n}\nimg {\r\n    vertical-align: middle;\r\n    border: 0;\r\n    -ms-interpolation-mode: bicubic;\r\n    -webkit-tap-highlight-color: rgba(0,0,0,0);\n}\n.look_info .weibo_v {\r\n    width: .28em;\r\n    height: .28em;\r\n    line-height: .28em;\r\n    border: 1px solid #fff;\r\n    font-weight: 700;\r\n    right: -.1em;\r\n    font-size: .36em;\r\n    -webkit-box-sizing: border-box;\r\n    box-sizing: border-box;\n}\n.weibo_v_b {\r\n    background: #008af5;\n}\n.weibo_v {\r\n    position: absolute;\r\n    right: 0;\r\n    bottom: 0;\r\n    width: .2em;\r\n    height: .2em;\r\n    line-height: .2em;\r\n    text-align: center;\r\n    color: #fff;\r\n    font-size: .32em;\r\n    background: #fdb900;\n}\n.weibo_img, .weibo_img .img_width, .weibo_v {\r\n    border-radius: 50%;\n}\n.look_info .weibo_detail {\r\n    position: relative;\r\n    margin-top: -.02em;\r\n    line-height: 1.2;\n}\n.weibo_detail {\r\n    -webkit-box-flex: 1;\r\n    -webkit-flex: 1;\r\n    -ms-flex: 1;\r\n    flex: 1;\r\n    width: 0;\n}\n.look_info .weibo_user {\r\n    float: none;\r\n    display: inline;\r\n    font-size: .36em;\r\n    width: auto;\r\n    max-width: 3.08em;\r\n    vertical-align: middle;\r\n    font-weight: 400;\r\n    color: #333;\n}\n.weibo_user {\r\n    width: 100%;\r\n    color: #555;\r\n    font-size: .34em;\r\n    font-weight: 700;\r\n    line-height: normal;\r\n    overflow: hidden;\r\n    white-space: nowrap;\r\n    -o-text-overflow: ellipsis;\r\n    text-overflow: ellipsis;\n}\n.look_info .weibo_time {\r\n    float: left;\r\n    width: 100%;\r\n    display: block;\r\n    font-size: .2em;\n}\n.weibo_time {\r\n    color: #888;\r\n    font-size: .2em;\r\n    display: block;\n}\n.weibo_time_day {\r\n    padding-right: .1em;\n}\n.look_sub {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    margin: auto 0 auto auto;\r\n    width: 2.32em;\r\n    height: 1.52rem;\r\n    line-height: normal;\r\n    border-radius: .06em;\r\n    font-size: .24em;\r\n    background: #fe9600;\r\n    color: #fff;\r\n    display: box;\r\n    display: -webkit-box;\r\n    display: -moz-box;\r\n    -webkit-box-pack: center;\r\n    -moz-box-pack: center;\r\n    -webkit-box-align: center;\r\n    -moz-box-align: center;\r\n    text-indent: 0;\r\n    padding: 0;\n}\n.look_sub_ic {\r\n    padding-right: .1em;\r\n    font-size: .2em;\n}\n.art_p {\r\n    margin: 0 .3em .36em;\r\n    font-size: .98em;\r\n    color: #1a1a1a;\r\n    line-height: 1.6em;\r\n    word-break: normal;\r\n    text-align: justify;\n}\n.art_p strong {\r\n    font-weight: 700;\n}\r\n\r\n", ""]);

// exports


/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    components: {},
    data: function data() {
        return {
            html: '<article class="art_box"><h1 class="art_tit_h1">技术引进再创新 国产X86 CPU和Intel还有多少差距？</h1><section><figure class="weibo_info look_info"><em class="weibo_img"><img class="img_width" src="//tva2.sinaimg.cn/crop.0.0.100.100.50/7e4980bcjw8f5qyrum4c7j202s02sjr7.jpg"></em><figcaption class="weibo_detail"><h2 class="weibo_user">三月网</h2><time class="weibo_time"><span class="weibo_time_day">09月28日</span>07:56</time></figcaption></figure></section><img src="//k.sinaimg.cn/n/tech/crawl/20170928/KGfF-fymfcih7207543.jpg/w700h350z1l10t107f7.jpg" width="100%"><p class="art_p"><em>今年6月，核高基总师魏少军接受科技日报采访时表示，“国产兆芯x86通用处理器的成功自主研发和量产，令国产桌面处理器在性能方面完成了一次跨越式的提升，从“十二五”初期的不足国际整体水准的7%提升到了目前的50%，综合性能体验达到80%。”</em></p><p class="art_p"><em>实际上，国产X86芯片的性能和英特尔对比究竟怎么样？在技术引进吸收创新的过程中又取得了怎样的进步呢？</em></p><p class="art_p">几个月前，上海兆芯最新的产品ZXD在2017年北京国际互联网科技博览会暨世界网络安全大会上亮相。ZXD虽然相对于Intel和AMD的CPU还有不小差距，但相对应兆芯第一款CPU ZXA而言，确实有着很大的进步——自上海兆芯自2013年成立以来，从第一款产品ZXA，到如今最新的产品ZXD，上海兆芯用了数年时间实现以VIA的技术为基础，将产品的裸CPU性能提升了80%以上。</p><p class="art_p"><strong>ZXC相当于ZXA性能有多少提升？</strong></p><p class="art_p">ZX-A 是兆芯的第一款CPU，技术源自VIA，拥有2个核心，主频1.6G，采用台积电40nm制造工艺。就其性能来说，根据相关单位的SPEC2006测试，主频1.6G的ZXC在采用Ubuntu 14.04操作系统，ICC编译器的情况下，成绩为：</p><p class="art_p"></p><p class="art_p">SPECint2006 ：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 11.3</p><p class="art_p">SPECint_rate2006：&nbsp; 20.5</p><p class="art_p">SPECfp2006 ：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 12.4</p><p class="art_p">SPECfp_rate2006：&nbsp;&nbsp; 18.7</p><p class="art_p">STREAM测试的单线程成绩为：</p><p class="art_p"></p><p class="art_p">Copy&nbsp;&nbsp; 5502.8MB/s；</p><p class="art_p">Scale&nbsp;&nbsp; 5042.9MB/s；</p><p class="art_p">Add&nbsp;&nbsp;&nbsp; 5321.6MB/s&nbsp;</p><p class="art_p">Triad&nbsp;&nbsp; 5252.7MB/s</p><p></p><p class="art_p">STREAM测试的多线程成绩为：</p><p class="art_p"></p><p class="art_p">Copy&nbsp;&nbsp; 5191.1MB/s；</p><p class="art_p">Scale&nbsp;&nbsp; 5104MB/s；</p><p class="art_p">Add&nbsp;&nbsp;&nbsp; 5383.8MB/s&nbsp;</p><p class="art_p">Triad&nbsp;&nbsp; 5461.9MB/s</p><p></p><p class="art_p">这里介绍下，SPEC2006是在行业内相对比较权威的测试软件，通过26个程序对CPU进行测试，然后计算结果，分数越高性能越好。不过SPEC2006测试也并非无懈可击——可以通过不说明编译器等条件作弊，是否打开auto parallelization也有有成绩差异，还有base分值和peak分值会有一定的差别等等。</p><p class="art_p">即便如此，相当于一些黑箱测试而言，SPEC依旧是相对比较公正的测试，能够比较客观的反映CPU的实际性能，毕竟绝对客观的测试是不存在的，就如同高考，即便存在这样或那样的问题，但目前来看，依旧是最具可操作性，相对公平合理的考评方式（北京、上海除外）。</p><p class="art_p">ZX-C是对VIA技术的引进消化吸收，相对于ZXA的2个CPU核，ZXC改为4个CPU核，而且CPU核之间核心通过 L2 Cache 交互，相比较ZXA而言，ZXC的多核性能有所提升。针对从VIA引进的内核存在资源冗余和不均衡的问题做了重新设计，并采用了台积电28nm制造工艺，降低了功耗，提高了稳定性，减少了量产成本，将CPU的主频从ZXA的1.6G，提升到ZXC的2G。</p><p class="art_p">另外，兆芯还重新设计 FSB 接口，FSB 频率从 1066MHz 提高到 1333MHz。对访存单元进行了重新设计，设计了全新的 L1/L2 访存控制单元，优化访存性能等工作。</p><p class="art_p">而这些修改最直接的体体现就是在性能上，根据相关单位的SPEC2006测试，主频2.16G（睿频）的ZXC在采用Ubuntu 14.04操作系统，ICC编译器的情况下，成绩为：</p><p class="art_p"></p><p class="art_p">Specint 2006：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 17</p><p class="art_p">Specint rate2006：&nbsp;&nbsp; 50</p><p class="art_p">Specfp 2006：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 18.2</p><p class="art_p">Specfp rate2006：&nbsp;&nbsp; 36.3</p><p></p><p class="art_p">ZXC相对于ZXA，在单线程定点成绩上提升了约54%，多线程提升了约147%；就浮点性能而言，ZXC相对于ZXA单线程性能提升了约50%，多线程性能提升了约50%。</p><p class="art_p">虽然在Ubuntu 14.04操作系统，ICC编译器的情况下，Specint 2006：17；Specfp 2006：18.2 的成绩相对应Intel有较大的差距，但相对于ZXA而言，ZXC的进步着实不小。</p><a href=""><figure class="art_img_mini j_p_gallery motu_cont"><img class="art_img_mini_img j_fullppt_cover finpic" src="//n.sinaimg.cn/tech/crawl/20170928/yc1U-fymkwwk6510129.jpg" width="100%"><h2 class="art_img_tit"></h2></figure></a><p class="art_p"><strong>ZXD性能再提升且弥补了ZXC的最大短板</strong></p><p class="art_p">之前介绍了，ZXC相对于ZXA，在单线程定点成绩上提升了约54%，多线程提升了约147%；就浮点性能而言，ZXC相对于ZXA单线程性能提升了约50%，多线程性能提升了约50%。</p><p class="art_p">但ZXC也有自己的短板，那就是前端总线——对于图像、音频、视频、游戏、FPGA综合以及科学应用等应用，通常是对于大工作集的少部分数据进行操作，前端总线就成为一个主要的性能瓶颈。</p><p class="art_p">ZXC延续了VIA原本的前端总线（VIA V4 bus）的设计——前端总线（front-side bus，FSB）是早期Intel芯片的计算机通信的接口，和AMD公司的EV6类似，其连接CPU和北桥芯片，内存控制器通常集成在北桥中——ZXC没有将内存控制器集成到处理器上，而是在桥片里。这样一来，导致STREAM测试的成绩就不太好看了。</p><p class="art_p">根据STREAM 5.10测试的成绩，单线程的成绩为：</p><p class="art_p"></p><p class="art_p">Copy： 7685.0 MB/s</p><p class="art_p">Scale： 7446.4 MB/s</p><p class="art_p">Add：&nbsp; 8129.5 MB/s</p><p class="art_p">Triad：&nbsp; 7981.7 MB/s</p><p></p><p class="art_p">4 线程测试成绩为：</p><p class="art_p"></p><p class="art_p">Copy： 7426.3 MB/s</p><p class="art_p">Scale： 7504.0 MB/s</p><p class="art_p">Add：&nbsp; 7656.8MB/s</p><p class="art_p">Triad：&nbsp; 7787.7 MB/s</p><p class="art_p">从中可以看出，ZXC的STREAM 测试成绩是比较一般的，而且相对于ZXA而言提升也比较有限。</p><p class="art_p">ZXD的最明显改进之处就在于更换了更好的DDR4内存控制器，是国内首款集成了DDR4内存控制器的国产桌面CPU，而且ZXD还把内存控制器集成到芯片里——相对于ZXC的DDR3内存控制器，ZXD采用了DDR4内存控制器，并把内存控制器集成到芯片里，而非像ZXC那样把内存控制器集成在桥片里，而这个改变一定程度上提升了CPU的综合性能。</p><p class="art_p">此外，ZXD很有可能将FSB总线换了类似于Intel的dmi这样的接口。两者因素相加，使ZXC存在的短板不复存在。最典型的证明就是STREAM测试成绩大幅提升。根据相关单位的测试，STREAM 5.10测试单线程成绩为：</p><p class="art_p"></p><p class="art_p">Copy： 10942.4 MB/s</p><p class="art_p">Scale： 10371.4 MB/s</p><p class="art_p">Add：&nbsp; 10603.1 MB/s</p><p class="art_p">Triad：&nbsp; 9850.1MB/s</p><p class="art_p">多线程成绩为：</p><p class="art_p"></p><p class="art_p">Copy： 12666.1 MB/s</p><p class="art_p">Scale： 13060.3 MB/s</p><p class="art_p">Add：&nbsp; 11270.2MB/s</p><p class="art_p">Triad： 11302.6MB/s</p><p class="art_p">从测试成绩可以看出，ZXD的SRTEAM测试成绩相对于ZXC有了显著提升，弥补了过去的短板。并且通过更新了ddr4内存控制器，在商业上还能有效应对各家内存大厂的DDR3内存条停产的问题。</p><p class="art_p">除了内存控制器上的改进之外，ZXD增加 X86 指令缓冲器，提供了更精确的循环缓冲功能，并通过整体流水线前后端各级优化，大幅减少流水线级数，有效降低了分支预测失败的性能损失。。。。。。经过一系列的改进，直接体现在ZXD相对于ZXC的性能提升，根据相关单位的数据，在采用Ubuntu 14.04操作系统，内存为 32GB DDR4内存，硬盘为Intel 530 系列120GB 的SSD硬盘，编译器为ICC，ZXD睿频到2.2G的情况下，SPEC2006测试成绩为：</p><p class="art_p"></p><p class="art_p">Specint 2006：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 20.4</p><p class="art_p">Specint rate2006：&nbsp; 63.3</p><p class="art_p">Specfp 2006：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 23</p><p class="art_p">Specfp rate2006：&nbsp;&nbsp; 47.6</p><p class="art_p"><strong>ZXD这个成绩虽然相对于Intel和AMD依旧有不小的差距，就裸CPU性能而言，ZXD大约是Intel主流四核CPU的30%—40%。</strong>而且必须说明的是，兆芯对CPU架构的修改还是相对有限的，目前所做的修改并非脱胎换骨的大换血，比如没有实现类似于AMD从“打桩机”到Zen的提升和飞跃。</p><img class="art_img_mini_img j_fullppt_cover finpic" src="//n.sinaimg.cn/tech/crawl/20170928/UjRY-fymfcih7207557.jpg" width="100%" alt=""></article>'
        };
    },

    methods: {},
    mounted: function mounted() {}
});

/***/ }),

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "s_card",
    domProps: {
      "innerHTML": _vm._s(_vm.html)
    }
  })
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-1407ff55", module.exports)
  }
}

/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(59)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ 59:
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ })

});