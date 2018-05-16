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
              :to = "{name:'In'}"
          >
              <img class="songTopimg" src="@/assets/img/back.png" alt="">   
          </router-link>                  
            <span class="songTit">歌单</span>
      </div>
      <ul class="songList">
          <li
              v-for="(item,i) in obj" :key="i"
               @click="changeSingers"
          >
            <router-link
                     tag="div"
                    :to ="{name:'songlistsort',params:{l:item.audio_id}}"
            >
              <a href="javascript:;" >{{item.filename}}</a>
            </router-link>
          </li>
      </ul>
       <div 
            class="radio" 
            :style = "{display: songsname ? 'block' : 'none'}"
        >        
                <div>{{songsname}}</div>
                <div class="radioname">{{songsname && songsname.filename}}</div>
                <div class="radioinfo">因版权问题请到原网站收听！！！</div>
                <a class="changeurl" @click="changeUrl(songsname.hash,songsname.album_id)">点击跳转到原网页</a>
                <div class="changes"  @click="changeState">取消</div>
        </div>
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
                obj:[],
                songsname:{},
                url: "http://www.kugou.com/song/#hash="
            }
        },
       computed:{
           imgUrl:function(){
               if(this.list.imgurl !== undefined){
                    return this.list.imgurl = this.list.imgurl.replace('{size}',400)
               }
           }
       },
       watch:{
            $route(){
                let id = this.$route.params.l
                if(id){
                    this.songsname = this.obj.find(item => item.audio_id == id)
                }else{
                    this.songsname = {}
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
            }),
            this.songersName()
        },
        methods:{
             songersName(){
                console.log(this.$route)
                let id = this.$route.params.l
                if(id){
                        this.songsname = this.obj.find(item => item.audio_id == id)             
                }else{
                    this.songsname = {}
                }
            },
            changeState(){
                let parent = $('.changes').parent()
                parent.hide()
            },
            changeSingers(){
                $('.radio').show()
            },
            changeUrl(p,l){
                if(p&&l){
                    console.log(p,l)
                    $('.changeurl').attr('href',this.url+p+`&album_id=`+ l); 
                }
            }
        }
    }
</script>

