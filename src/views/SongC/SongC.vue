<template>
    <div class="wrap clearfix">
        <div class="posi-song">
            <div class="fl bag-img">
                <img :src="obj.img" alt="">            
            </div>
            <ul class="allwidth right">
                <li
                class="wordSong"
                v-for="(item,i) in list" 
                :key="i"
            >
              {{delnum(item)}}
            </li>
            </ul>
            <div class="posi-change">
                 <!-- <router-link
                    tag="div"
                    :to = "{name:'everySinger'}"
                >
                    <img class="songTopimg" src="@/assets/img/back.png" alt=""> 
                 </router-link> -->
                 <!-- <router-link :to = "{name:'everySinger'}">歌手</router-link>
                 <router-link :to = "{name:'songlistsort'}">歌单</router-link>
                 <router-link :to= "{name:'newsongs'}">新歌</router-link> -->
            </div>
           
             <audio id="audio" :src="obj.play_url " controls="controls">296389</audio>
        </div>
        
    </div>
</template>
<script>
    import {WordSong} from '@/server/jsonp'
    console.log(WordSong)
    export default {
        props:['p'],
        data(){
            return{
                list:[],
                obj:[]
            }
        },
        created(){
            let arr = []
            let song = this.p
           console.log(song)
            WordSong({
                hash:song
            }).then(({data})=>{
                this.obj = data
                console.log(this.obj.play_url)
                arr = data.lyrics.split('\n')
                this.list = arr
                // console.log(this.list)
            })
        },
        methods:{
            delnum(item){
                return item.slice(10,length-1)
            }
        }
    }
</script>

