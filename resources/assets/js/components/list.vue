<template id="list">
<div>
<ul class="list">
	<li class="title">
	<div class="icon">
	  <span class="name">一袭相思，柔软莫忘</span>
	  <div class="in">
	    <span class="date">2017-8-28 &nbsp; 周一</span>
		    <div class="ico">
			<i class="fa fa-book fa-lg" @click=" look" title="阅读"></i>
			<i class="fa fa-pencil fa-lg" @click="edit" title="编辑"></i>
			<a href="#/Administration" onclick="return confirm('确定删除吗？');" title="删除"><i class="fa fa-trash-o fa-lg"></i></a>
			</div>
		</div>
		</div>
	</li>
	<li class="title">
	<div class="icon">
	  <span class="name">在人间</span>
	  <div class="in">
	    <span class="date">2017-8-28 &nbsp; 周一</span>
		    <div class="ico">
			<i class="fa fa-book fa-lg" @click=" look" title="阅读"></i>
			<i class="fa fa-pencil fa-lg" @click="edit" title="编辑"></i>
			<a href="#/Administration" onclick="return confirm('确定删除吗？');" title="删除"><i class="fa fa-trash-o fa-lg"></i></a>
			</div>
		</div>
		</div>
	</li>
	<li class="title">
	<div class="icon">
	  <span class="name">和风细雨杏花开</span>
	  <div class="in">
	    <span class="date">2017-8-28 &nbsp; 周一</span>
		    <div class="ico">
			<i class="fa fa-book fa-lg" @click=" look" title="阅读"></i>
			<i class="fa fa-pencil fa-lg" @click="edit" title="编辑"></i>
			<a href="#/Administration" onclick="return confirm('确定删除吗？');" title="删除"><i class="fa fa-trash-o fa-lg"></i></a>
			</div>
		</div>
		</div>
	</li>
	<li class="title">
	<div class="icon">
	  <span class="name">君生我未生</span>
	  <div class="in">
	    <span class="date">2017-8-28 &nbsp; 周一</span>
		    <div class="ico">
			<i class="fa fa-book fa-lg" @click=" look" title="阅读"></i>
			<i class="fa fa-pencil fa-lg" @click="edit" title="编辑"></i>
			<a href="#/Administration" onclick="return confirm('确定删除吗？');" title="删除"><i class="fa fa-trash-o fa-lg"></i></a>
			</div>
		</div>
		</div>
	</li>
	<li class="title">
	<div class="icon">
	  <span class="name">浅遇深藏，温柔时光</span>
	  <div class="in">
	    <span class="date">2017-8-28 &nbsp; 周一</span>
		    <div class="ico">
			<i class="fa fa-book fa-lg" @click=" look" title="阅读"></i>
			<i class="fa fa-pencil fa-lg" @click="edit" title="编辑"></i>
			<a href="#/Administration" onclick="return confirm('确定删除吗？');" title="删除"><i class="fa fa-trash-o fa-lg"></i></a>
			</div>
		</div>
		</div>
	</li>
	<li class="title">
	<div class="icon">
	  <span class="name">我的青春没有失败</span>
	  <div class="in">
	    <span class="date">2017-8-28 &nbsp; 周一</span>
		    <div class="ico">
			<i class="fa fa-book fa-lg" @click=" look" title="阅读"></i>
			<i class="fa fa-pencil fa-lg" @click="edit" title="编辑"></i>
			<a href="#/Administration" onclick="return confirm('确定删除吗？');" title="删除"><i class="fa fa-trash-o fa-lg"></i></a>
			</div>
		</div>
		</div>
	</li>
	<li class="title">
	<div class="icon">
	  <span class="name">下完这场雨</span>
	  <div class="in">
	    <span class="date">2017-8-28 &nbsp; 周一</span>
		    <div class="ico">
			<i class="fa fa-book fa-lg" @click=" look" title="阅读"></i>
			<i class="fa fa-pencil fa-lg" @click="edit" title="编辑"></i>
			<a href="#/Administration" onclick="return confirm('确定删除吗？');" title="删除"><i class="fa fa-trash-o fa-lg"></i></a>
			</div>
		</div>
		</div>
	</li>
	<li class="title">
	<div class="icon">
	  <span class="name">等风来</span>
	  <div class="in">
	    <span class="date">2017-8-28 &nbsp; 周一</span>
		    <div class="ico">
			<i class="fa fa-book fa-lg" @click=" look" title="阅读"></i>
			<i class="fa fa-pencil fa-lg" @click="edit" title="编辑"></i>
			<a href="#/Administration" onclick="return confirm('确定删除吗？');" title="删除"><i class="fa fa-trash-o fa-lg"></i></a>
			</div>
		</div>
		</div>
	</li>
	<li class="title">
	<div class="icon">
	  <span class="name">一袭相思，柔软莫忘</span>
	  <div class="in">
	    <span class="date">2017-8-28 &nbsp; 周一</span>
		    <div class="ico">
			<i class="fa fa-book fa-lg" @click=" look" title="阅读"></i>
			<i class="fa fa-pencil fa-lg" @click="edit" title="编辑"></i>
			<a href="#/Administration" onclick="return confirm('确定删除吗？');" title="删除"><i class="fa fa-trash-o fa-lg"></i></a>
			</div>
		</div>
		</div>
	</li>

</ul>
</div>	
</template>

<script type="text/javascript">
export default{
	name:'list',
	data(){
    	return{

    	}
	},
	methods:{
		edit: function() {
			var arc ="fffffffffffffffffffffffffffffffffffffffffffffffffffff";
			this.$emit('edit',arc);
		},
		look: function(){
		  var arc ="fffffffffffffffffffffffffffffffffffffffffffffffffffff";
			this.$emit('look',arc);
		}
	}
}
	
</script>
<style type="text/css" scoped>

a{
	color: #000;
}
.list{
	margin: auto;
	font-size: 16px;
	margin-top: 50px;
	font-family: "楷体";
}
.title{
	list-style: none;
	text-align: left;
	padding-left: 20px;

}
.title{
	width: 800px;

	margin: 0px auto;
	margin-bottom: 20px;
	border: 1px solid #ADCD3C;
	background-color: #F2FDDB;
}
.name{
	margin-top: 10px;
}
.icon{
	display: inline-block;
	padding: 15px;
	width: 800px;
}
.in{
	float: right;
	display: inline-block;
}
.ico{
	display: inline-block;
	float: right;
	margin-right: 35px;
}
.fa{
	margin-right: 10px;
}
.date{
	margin-right: 200px;
}
</style>