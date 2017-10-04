<template id="artcle">
     <form class="artcle" @submit.prevent="submit">
   <a title="置顶"> <i class="fa fa-tag fa-lg fa-inverse" @click="changecolor" v-model="artcle.top"></i></a>
         <div class="input">
            <input type="text" name="name"  id="name" placeholder="请输入标题" v-model="artcle.title">
         </div>
        <div id="editorElem" style="text-align: left" ></div>
        <div class="input" id="ok">
            <input type="buttom" value="清空" class="buttom" id="empty"  @click="del">
          <input type="submit" value="提交" class="buttom" id="confirm">
        </div>
    </form>
</template>
<script type="text/javascript">
    import E from 'wangeditor'
    var editor;
    export default{
    name:'middle',
    data() {
     return {
        artcle:{
           title:'',
           top:false,
        },
        editorContent:''
        
     }
    },
     mounted(){
         // editor =new E('#editorElem')
        editor.customConfig.onchange = (html) =>{
            this.editorContent=html
        }
        editor.create()
    },

    methods:{
        submit:function(){
            if (this.artcle.title=='') {
                   alert("标题不能为空");
            }else{
                var artcle =new Object();
              artcle.top =this.artcle.top;
                artcle.title=this.artcle.title;
                artcle.content=editor.txt.text();
                var formData =JSON.stringify(artcle,["top","title","content"]); 
            // this.$http.post('Administration',formData).then((response) =>{
            //    return  true;
            // });
             this.$router.push({ path: 'Administration' })
            }
            
        },
        del:function(){
            var bool=confirm("确定清空吗?");
            if (bool) {
                 editor.txt.text("");
               this.artcle.title="";
            }
           
           
        },
      changecolor:function(){
        this.artcle.top =!this.artcle.top;
         if (this.artcle.top) {
           $(".fa-inverse").css("color","red");
         }else{
            $(".fa-inverse").css("color","#000");
         }
       
       
    },
  
   } 
      }
</script>
<style type="text/css">
.artcle{
    margin:auto;
    width: 800px;
    padding: 10px;
  position: relative;

}   
#editorElem{
    
    font-size: 10px;
}

.input{
    margin-top: 20px;
    margin-bottom: 20px;
    display: inline-block;
}
#name{
    text-align: center;
    padding: 0;
    font-size: 18px;
    width: 700px;
    height: 40px;
    border: none;
    border-bottom: 1px solid #ccc;
    outline: none ;

}
#name:hover{
     border-bottom: 1px solid #66CCCC;
}
#ok{
 display: inherit;
 text-align: right;
    }
.buttom{
    margin-left: 20px;
    border: none;
    padding: 5px 7px;
    border-radius: 2px;
    color: #fff;
    cursor: pointer;
    
}

#confirm{
    background: #66CCCC;
  
}
#empty{
    background: #8ba497;
    width: 30px;
}
.fa-inverse{
  color: #000;
}
</style>