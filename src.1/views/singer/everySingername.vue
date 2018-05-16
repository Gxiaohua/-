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
              :to = "{name:'In'}"
          >
              <img class="songTopimg" src="@/assets/img/back.png" alt="">   
          </router-link>                  
            <span class="songTit">歌单</span>
      </div>
      <ul class="songList">
           <!-- @click="changeSingers" -->
          <li v-for="(item,i) in obj" :key="i"
          >
             <!-- <router-link 
                 tag="div"
                :to="{name:'everySinger',params:{c:item.audio_id}}"
             >
                <a href="" >{{changenamenum(item)}}</a>
                <a href="" style="margin-left:10px; color:gray;">{{item.remark}}</a>
             </router-link> -->
          </li>
      </ul>
        <!-- <div 
           class="radio" 
           :style ="{display:songsname ? 'block' : 'none'}"
        >
            <div class="radioname">{{songsname && songsname.filename}}</div>
            <div class="radioinfo">因版权问题请到原网站收听！！！</div>
            <a class="changeurl" @click="changeUrl(songsname.hash,songsname.album_id)">点击跳转到原网页</a>
            <div class="changes"  @click="changeState">取消</div>
        </div>  -->
 </div>  
</template> 
<script>
// "'http://www.kugou.com/song/'+ `#hash=${songsname && songsname.hash}` + '&' + `album_id=${songsname && songsname.album_id}`"
// http://www.kugou.com/song/#hash=${item.hash}&album_id=${item.album_id}
// http://www.kugou.com/song/#hash=0CEDF221CA6AD22E7A18F5043423F967&album_id=960327
    import {singersNameList} from  '@/server'
    import $ from 'jquery'
    export default {
        props:['c'],
        data(){
            return{
                list:[],
                obj:[],
                songsname:{},
                // url: "http://www.kugou.com/song/#hash="
            }
        },
        created(){
            let id = this.c
            singersNameList({id}).then(({data})=>{
                this.list = data.info
                this.obj = data.songs.list
                console.log(this.obj)
            }),
            this.songersName()
        },
         computed:{
            imgUrl:function(){
                if(this.list.length !== 0){
                    if(this.list.imgurl !== undefined){
                        return this.list.imgurl = this.list.imgurl.replace('{size}',400)
                    }
                } 
                
            },
            changeinfonum:function(){
                let info = this.list.intro
                if(info !== undefined){
                        return info.length > 250 ? info.slice(0,200) + '...' : info
                }
            },
       },
    //    watch:{
    //         $route(){
    //             let id = this.$route.params.c
    //             if(id){
    //                 this.songsname = this.obj.find(item => item.audio_id == id)
    //             }else{
    //                 this.songsname = {}
    //             }
    //         }
    //    },
        methods:{
            changenamenum(item){
                if(item.filename !== undefined){
                     return item.filename.length > 25 ? item.filename.slice(0,20) + '...' : item.filename
                }               
            },
            // songersName(){
            //     console.log(this.$route)
            //     let id = this.$route.params.c
            //     if(id){
            //             this.songsname = this.obj.find(item => item.audio_id == id)
            //             //  console.log(this.songsname.filename,this.songsname.audio_id)                
            //     }else{
            //         this.songsname = {}
            //     }
            // },
            // changeState(){
            //     let parent = $('.changes').parent()
            //     parent.hide()
            // },
            // changeSingers(){
            //     $('.radio').show()
            // },
            // changeUrl(p,l){
            //     if(p&&l){
            //         console.log(p,l)
            //         $('.changeurl').attr('href',this.url+p+`&album_id=`+ l); 
            //     }
            // }
        }
    }
</script>
