<template>
<div>
<el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1" @click="change('arctle')" >写新闻</el-menu-item>
  <el-menu-item index="2" @click="change('list')">新闻列表 </el-menu-item>
  <!-- <el-menu-item index="3" ><el-button  type="text" @click="open">新闻列表</el-button></el-menu-item> -->
</el-menu>
<div class="line"></div>
<component v-bind:is="currentview" @edit="getedit" @look="see"></component>
</div>
</template>
<script>
  export default {
    data() {
      return {
      	currentview: 'arctle',
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    components:{"arctle":require('./Example.vue'),'list':require('./list.vue'),'read':require('./read.vue')},
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      change:function(msg){
       this.currentview=msg;
      },
      getedit:function(msg){
      	this.currentview='arctle';

      },
      see:function(msg){
        this.currentview='read';
      },
  //     open(){
		// 	const h=this.$createElement;
		// 	this.$msgbox({
		// 	title: '消息',
		// 	message: h('p',null,[
		// 		h('span',null,'确定删除吗？'),
		// 		h('i',{style: 'color:teal'},'')
		// 		]),
		// 		showCancelButton:true,
		// 		confirmButtonText:'确定',
		// 		cancelButtonText:'取消',
		// 		beforeClose:(action,instance,done)=>{
		// 			if (action==='confirm') {
		// 				instance.confirmButtonLoading=true;
		// 				instance.confirmButtonText='执行中...';
		// 				setTimeout(()=>{
		// 					done();
		// 					setTimeout(()=>{
		// 						instance.confirmButtonLoading=false;
		// 					},300);

		// 				},3000);

		// 			}else{
		// 				done();
		// 			}
		// 		}	

		// 	}).then(action=>{
		// 		this.$message({
		// 			type:'info',
		// 			message:'action: '+action
		// 		});
		// 	});
		// },
      

    },
  }
</script>