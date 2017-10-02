<template>
<section class="s_card" v-html="html">
</section>
</template>
<style>
.s_card {
    background: #fff;
    margin-bottom: .2em;
    background-origin: border-box;
    position: relative;
    width: 100%;
    overflow: hidden;
}
.art_box {
    width: 100%;
    background: #fff;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 5px;
}
.art_tit_h1 {
    font-size: 1.62em;
    color: #1a1a1a;
    line-height: 1.34em;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-all;
    margin: .6em 0 .2em;
    font-weight: 700;
    text-align: justify;
}
.weibo_info {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    padding: 0 .3em;
    margin: .2em;
}
.look_info .weibo_img {
    width: 1.6em;
    height: 1.6em;
}
.weibo_img, .weibo_img .img_width, .weibo_v {
    border-radius: 50%;
}
.weibo_img {
    width: .7em;
    height: .7em;
    position: relative;
    background-size: .32em .25em;
    margin-right: .24em;
}
.look_info .weibo_img .img_width {
    width: 1.6em;
    height: 1.6em;
    border-radius: 50%;
}
.weibo_img, .weibo_img .img_width, .weibo_v {
    border-radius: 50%;
}
.img_width, .sw_c3 {
    width: 100%;
}
img {
    vertical-align: middle;
    border: 0;
    -ms-interpolation-mode: bicubic;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
}

.look_info .weibo_v {
    width: .28em;
    height: .28em;
    line-height: .28em;
    border: 1px solid #fff;
    font-weight: 700;
    right: -.1em;
    font-size: .36em;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.weibo_v_b {
    background: #008af5;
}
.weibo_v {
    position: absolute;
    right: 0;
    bottom: 0;
    width: .2em;
    height: .2em;
    line-height: .2em;
    text-align: center;
    color: #fff;
    font-size: .32em;
    background: #fdb900;
}
.weibo_img, .weibo_img .img_width, .weibo_v {
    border-radius: 50%;
}
.look_info .weibo_detail {
    position: relative;
    margin-top: -.02em;
    line-height: 1.2;
}
.weibo_detail {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    width: 0;
}
.look_info .weibo_user {
    float: none;
    display: inline;
    font-size: .36em;
    width: auto;
    max-width: 3.08em;
    vertical-align: middle;
    font-weight: 400;
    color: #333;
}
.weibo_user {
    width: 100%;
    color: #555;
    font-size: .34em;
    font-weight: 700;
    line-height: normal;
    overflow: hidden;
    white-space: nowrap;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
}
.look_info .weibo_time {
    float: left;
    width: 100%;
    display: block;
    font-size: .2em;
}
.weibo_time {
    color: #888;
    font-size: .2em;
    display: block;
}
.weibo_time_day {
    padding-right: .1em;
}
.look_sub {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto 0 auto auto;
    width: 2.32em;
    height: 1.52rem;
    line-height: normal;
    border-radius: .06em;
    font-size: .24em;
    background: #fe9600;
    color: #fff;
    display: box;
    display: -webkit-box;
    display: -moz-box;
    -webkit-box-pack: center;
    -moz-box-pack: center;
    -webkit-box-align: center;
    -moz-box-align: center;
    text-indent: 0;
    padding: 0;
}
.look_sub_ic {
    padding-right: .1em;
    font-size: .2em;
}
.art_p {
    margin: 0 .3em .36em;
    font-size: .98em;
    color: #1a1a1a;
    line-height: 1.6em;
    word-break: normal;
    text-align: justify;
}
.art_p strong {
    font-weight: 700;
}

</style> 
<script>
    export default{
        components: {
            
        },
        data(){
            return {
               html:'<article class="art_box"><h1 class="art_tit_h1">技术引进再创新 国产X86 CPU和Intel还有多少差距？</h1><section><figure class="weibo_info look_info"><em class="weibo_img"><img class="img_width" src="//tva2.sinaimg.cn/crop.0.0.100.100.50/7e4980bcjw8f5qyrum4c7j202s02sjr7.jpg"></em><figcaption class="weibo_detail"><h2 class="weibo_user">三月网</h2><time class="weibo_time"><span class="weibo_time_day">09月28日</span>07:56</time></figcaption></figure></section><img src="//k.sinaimg.cn/n/tech/crawl/20170928/KGfF-fymfcih7207543.jpg/w700h350z1l10t107f7.jpg" width="100%"><p class="art_p"><em>今年6月，核高基总师魏少军接受科技日报采访时表示，“国产兆芯x86通用处理器的成功自主研发和量产，令国产桌面处理器在性能方面完成了一次跨越式的提升，从“十二五”初期的不足国际整体水准的7%提升到了目前的50%，综合性能体验达到80%。”</em></p><p class="art_p"><em>实际上，国产X86芯片的性能和英特尔对比究竟怎么样？在技术引进吸收创新的过程中又取得了怎样的进步呢？</em></p><p class="art_p">几个月前，上海兆芯最新的产品ZXD在2017年北京国际互联网科技博览会暨世界网络安全大会上亮相。ZXD虽然相对于Intel和AMD的CPU还有不小差距，但相对应兆芯第一款CPU ZXA而言，确实有着很大的进步——自上海兆芯自2013年成立以来，从第一款产品ZXA，到如今最新的产品ZXD，上海兆芯用了数年时间实现以VIA的技术为基础，将产品的裸CPU性能提升了80%以上。</p><p class="art_p"><strong>ZXC相当于ZXA性能有多少提升？</strong></p><p class="art_p">ZX-A 是兆芯的第一款CPU，技术源自VIA，拥有2个核心，主频1.6G，采用台积电40nm制造工艺。就其性能来说，根据相关单位的SPEC2006测试，主频1.6G的ZXC在采用Ubuntu 14.04操作系统，ICC编译器的情况下，成绩为：</p><p class="art_p"></p><p class="art_p">SPECint2006 ：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 11.3</p><p class="art_p">SPECint_rate2006：&nbsp; 20.5</p><p class="art_p">SPECfp2006 ：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 12.4</p><p class="art_p">SPECfp_rate2006：&nbsp;&nbsp; 18.7</p><p class="art_p">STREAM测试的单线程成绩为：</p><p class="art_p"></p><p class="art_p">Copy&nbsp;&nbsp; 5502.8MB/s；</p><p class="art_p">Scale&nbsp;&nbsp; 5042.9MB/s；</p><p class="art_p">Add&nbsp;&nbsp;&nbsp; 5321.6MB/s&nbsp;</p><p class="art_p">Triad&nbsp;&nbsp; 5252.7MB/s</p><p></p><p class="art_p">STREAM测试的多线程成绩为：</p><p class="art_p"></p><p class="art_p">Copy&nbsp;&nbsp; 5191.1MB/s；</p><p class="art_p">Scale&nbsp;&nbsp; 5104MB/s；</p><p class="art_p">Add&nbsp;&nbsp;&nbsp; 5383.8MB/s&nbsp;</p><p class="art_p">Triad&nbsp;&nbsp; 5461.9MB/s</p><p></p><p class="art_p">这里介绍下，SPEC2006是在行业内相对比较权威的测试软件，通过26个程序对CPU进行测试，然后计算结果，分数越高性能越好。不过SPEC2006测试也并非无懈可击——可以通过不说明编译器等条件作弊，是否打开auto parallelization也有有成绩差异，还有base分值和peak分值会有一定的差别等等。</p><p class="art_p">即便如此，相当于一些黑箱测试而言，SPEC依旧是相对比较公正的测试，能够比较客观的反映CPU的实际性能，毕竟绝对客观的测试是不存在的，就如同高考，即便存在这样或那样的问题，但目前来看，依旧是最具可操作性，相对公平合理的考评方式（北京、上海除外）。</p><p class="art_p">ZX-C是对VIA技术的引进消化吸收，相对于ZXA的2个CPU核，ZXC改为4个CPU核，而且CPU核之间核心通过 L2 Cache 交互，相比较ZXA而言，ZXC的多核性能有所提升。针对从VIA引进的内核存在资源冗余和不均衡的问题做了重新设计，并采用了台积电28nm制造工艺，降低了功耗，提高了稳定性，减少了量产成本，将CPU的主频从ZXA的1.6G，提升到ZXC的2G。</p><p class="art_p">另外，兆芯还重新设计 FSB 接口，FSB 频率从 1066MHz 提高到 1333MHz。对访存单元进行了重新设计，设计了全新的 L1/L2 访存控制单元，优化访存性能等工作。</p><p class="art_p">而这些修改最直接的体体现就是在性能上，根据相关单位的SPEC2006测试，主频2.16G（睿频）的ZXC在采用Ubuntu 14.04操作系统，ICC编译器的情况下，成绩为：</p><p class="art_p"></p><p class="art_p">Specint 2006：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 17</p><p class="art_p">Specint rate2006：&nbsp;&nbsp; 50</p><p class="art_p">Specfp 2006：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 18.2</p><p class="art_p">Specfp rate2006：&nbsp;&nbsp; 36.3</p><p></p><p class="art_p">ZXC相对于ZXA，在单线程定点成绩上提升了约54%，多线程提升了约147%；就浮点性能而言，ZXC相对于ZXA单线程性能提升了约50%，多线程性能提升了约50%。</p><p class="art_p">虽然在Ubuntu 14.04操作系统，ICC编译器的情况下，Specint 2006：17；Specfp 2006：18.2 的成绩相对应Intel有较大的差距，但相对于ZXA而言，ZXC的进步着实不小。</p><a href=""><figure class="art_img_mini j_p_gallery motu_cont"><img class="art_img_mini_img j_fullppt_cover finpic" src="//n.sinaimg.cn/tech/crawl/20170928/yc1U-fymkwwk6510129.jpg" width="100%"><h2 class="art_img_tit"></h2></figure></a><p class="art_p"><strong>ZXD性能再提升且弥补了ZXC的最大短板</strong></p><p class="art_p">之前介绍了，ZXC相对于ZXA，在单线程定点成绩上提升了约54%，多线程提升了约147%；就浮点性能而言，ZXC相对于ZXA单线程性能提升了约50%，多线程性能提升了约50%。</p><p class="art_p">但ZXC也有自己的短板，那就是前端总线——对于图像、音频、视频、游戏、FPGA综合以及科学应用等应用，通常是对于大工作集的少部分数据进行操作，前端总线就成为一个主要的性能瓶颈。</p><p class="art_p">ZXC延续了VIA原本的前端总线（VIA V4 bus）的设计——前端总线（front-side bus，FSB）是早期Intel芯片的计算机通信的接口，和AMD公司的EV6类似，其连接CPU和北桥芯片，内存控制器通常集成在北桥中——ZXC没有将内存控制器集成到处理器上，而是在桥片里。这样一来，导致STREAM测试的成绩就不太好看了。</p><p class="art_p">根据STREAM 5.10测试的成绩，单线程的成绩为：</p><p class="art_p"></p><p class="art_p">Copy： 7685.0 MB/s</p><p class="art_p">Scale： 7446.4 MB/s</p><p class="art_p">Add：&nbsp; 8129.5 MB/s</p><p class="art_p">Triad：&nbsp; 7981.7 MB/s</p><p></p><p class="art_p">4 线程测试成绩为：</p><p class="art_p"></p><p class="art_p">Copy： 7426.3 MB/s</p><p class="art_p">Scale： 7504.0 MB/s</p><p class="art_p">Add：&nbsp; 7656.8MB/s</p><p class="art_p">Triad：&nbsp; 7787.7 MB/s</p><p class="art_p">从中可以看出，ZXC的STREAM 测试成绩是比较一般的，而且相对于ZXA而言提升也比较有限。</p><p class="art_p">ZXD的最明显改进之处就在于更换了更好的DDR4内存控制器，是国内首款集成了DDR4内存控制器的国产桌面CPU，而且ZXD还把内存控制器集成到芯片里——相对于ZXC的DDR3内存控制器，ZXD采用了DDR4内存控制器，并把内存控制器集成到芯片里，而非像ZXC那样把内存控制器集成在桥片里，而这个改变一定程度上提升了CPU的综合性能。</p><p class="art_p">此外，ZXD很有可能将FSB总线换了类似于Intel的dmi这样的接口。两者因素相加，使ZXC存在的短板不复存在。最典型的证明就是STREAM测试成绩大幅提升。根据相关单位的测试，STREAM 5.10测试单线程成绩为：</p><p class="art_p"></p><p class="art_p">Copy： 10942.4 MB/s</p><p class="art_p">Scale： 10371.4 MB/s</p><p class="art_p">Add：&nbsp; 10603.1 MB/s</p><p class="art_p">Triad：&nbsp; 9850.1MB/s</p><p class="art_p">多线程成绩为：</p><p class="art_p"></p><p class="art_p">Copy： 12666.1 MB/s</p><p class="art_p">Scale： 13060.3 MB/s</p><p class="art_p">Add：&nbsp; 11270.2MB/s</p><p class="art_p">Triad： 11302.6MB/s</p><p class="art_p">从测试成绩可以看出，ZXD的SRTEAM测试成绩相对于ZXC有了显著提升，弥补了过去的短板。并且通过更新了ddr4内存控制器，在商业上还能有效应对各家内存大厂的DDR3内存条停产的问题。</p><p class="art_p">除了内存控制器上的改进之外，ZXD增加 X86 指令缓冲器，提供了更精确的循环缓冲功能，并通过整体流水线前后端各级优化，大幅减少流水线级数，有效降低了分支预测失败的性能损失。。。。。。经过一系列的改进，直接体现在ZXD相对于ZXC的性能提升，根据相关单位的数据，在采用Ubuntu 14.04操作系统，内存为 32GB DDR4内存，硬盘为Intel 530 系列120GB 的SSD硬盘，编译器为ICC，ZXD睿频到2.2G的情况下，SPEC2006测试成绩为：</p><p class="art_p"></p><p class="art_p">Specint 2006：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 20.4</p><p class="art_p">Specint rate2006：&nbsp; 63.3</p><p class="art_p">Specfp 2006：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 23</p><p class="art_p">Specfp rate2006：&nbsp;&nbsp; 47.6</p><p class="art_p"><strong>ZXD这个成绩虽然相对于Intel和AMD依旧有不小的差距，就裸CPU性能而言，ZXD大约是Intel主流四核CPU的30%—40%。</strong>而且必须说明的是，兆芯对CPU架构的修改还是相对有限的，目前所做的修改并非脱胎换骨的大换血，比如没有实现类似于AMD从“打桩机”到Zen的提升和飞跃。</p><img class="art_img_mini_img j_fullppt_cover finpic" src="//n.sinaimg.cn/tech/crawl/20170928/UjRY-fymfcih7207557.jpg" width="100%" alt=""></article>'
            }
        },
        methods : {
            
        },
        mounted(){

        }
    }
</script>