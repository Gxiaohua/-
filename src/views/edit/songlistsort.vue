<template>
  <div class="wrap">
      <div class="songTop">
          
           <img :src="imgUrl" alt="">
           <div class="songTopright">
                <a href="" class="songTspecialname">{{list.specialname}}</a>
               <a href="" class="songTintro">{{list.intro}}</a>
           </div>
           
      </div>
      <div>
          <router-link
              :to = "{name:'edit'}"
          >
              <img class="songTopimg" src="@/assets/img/back.png" alt="">   
          </router-link>                  
            <span class="songTit">歌单</span>
      </div>
      <ul class="songList">
          <li
              v-for="(item,i) in obj" :key="i"
          >
            <router-link
                     tag="div"
                   :to="{name:'SongC',params:{p:item.hash}}"
            >
              <a href="javascript:;" >{{item.filename}}</a>
            </router-link>
          </li>
      </ul>
  </div>
</template>
<script>
    import {getSongListSort} from '@/server/index'
     import $ from 'jquery'
    export default {
        props:['b'],
        data(){
            return{
                list:[],
                obj:[]
            }
        },
       computed:{
           imgUrl:function(){
               if(this.list.imgurl !== undefined){
                    return this.list.imgurl = this.list.imgurl.replace('{size}',400)
               }
           }
       },
        created(){
            let id = this.b
            getSongListSort({id}).then(({data})=>{
                console.log(data)
                this.list = data.info.list
                this.obj = data.list.list.info
                // console.log( this.obj,this.obj.filename)
            })
        },
         watch:{
            list:{
                deep:true,
                handler(){
                    localStorage.setItem('music4',JSON.stringify(this.list))
                }
            },
            obj:{
                deep:true,
                handler(){
                    localStorage.setItem('music5',JSON.stringify(this.obj))
                }
            },
        }
    }
</script>

