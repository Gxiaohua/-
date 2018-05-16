<template>
  <div class="wrap songradio">
      <div class="songTop"   >
          
           <img :src="imgUrl" alt="">
           <div class="songTopright">
                <a href="" class="songTspecialname">{{list.singername}}</a>
               <a href="" class="songTintro">{{changeinfonum}}</a>
           </div>
           
      </div>
      <div>
          <router-link
              :to = "{name:'Sort'}"
          >
              <img class="songTopimg" src="@/assets/img/back.png" alt="">   
          </router-link>                  
            <span class="songTit">歌单</span>
      </div>
      <ul class="songList">
                      
          <li v-for="(item,i) in obj" :key="i"
                 @click = 'SongCi'
          >
             <router-link 
                 tag="div"
                :to="{name:'SongC',params:{p:item.hash}}"
             >
                <a href="" >{{changenamenum(item)}}</a>
                <a href="" style="margin-left:10px; color:gray;">{{item.remark}}</a>
             </router-link>
          </li>
      </ul>
 </div>  
</template> 
<script>
    import {singersNameList} from  '@/server'
    import $ from 'jquery'
    export default {
        props:['c'],
        data(){
            return{
                list:[],
                obj:[],
            }
        },
        created(){
            let id = this.c
            singersNameList({id}).then(({data})=>{
                this.list = data.info
                this.obj = data.songs.list
                console.log(this.obj)
            })
        },
         computed:{
            imgUrl:function(){
                // if(this.list.length !== 0){
                    if(this.list.imgurl !== undefined){
                        return this.list.imgurl = this.list.imgurl.replace('{size}',400)
                    }
                // } 
                
            },
            changeinfonum:function(){
                let info = this.list.intro
                if(info !== undefined){
                        return info.length > 250 ? info.slice(0,200) + '...' : info
                }
            },
       },
        methods:{
            changenamenum(item){
                if(item.filename !== undefined){
                     return item.filename.length > 25 ? item.filename.slice(0,20) + '...' : item.filename
                }               
            },
            SongCi(){
                 this.$emit('p')
            }
        }
    }
</script>
