<template>
<div>
<el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1" @click="change('arctle')" >写新闻</el-menu-item>
  <el-menu-item index="2" @click="change('list')">新闻列表 </el-menu-item>
  <el-menu-item index="3">退出登录</el-menu-item>
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
      }
      

    },
  }
</script>