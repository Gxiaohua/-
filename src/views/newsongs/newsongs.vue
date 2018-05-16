<template>
        <div class="con-new con-singer wrap con-left">
            <header class="con-left-head .con-new-head">
                新歌
                <router-link
                    :to="{name:'In'}"
                >
                    <img class="con-new-img" src="@/assets/img/back.png" alt="">
                </router-link> 
                <!-- <div class="con-new-head-nav clearfix fl">
                    <a href="javascrript:;">最热|</a>
                    <a href="javascrript:;">华语|</a>
                    <a href="javascrript:;">欧美|</a>
                    <a href="javascrript:;">日韩|</a>
                    <a href="javascrript:;">单曲</a>
                </div>
                <div class="right more">更多</div> -->
            </header>
            <ul class="con-new-list list clearfix">
                    <router-link
                       tag = 'li'
                       v-for="(item,i) in list"
                       :key="i"
                       :to="{name:'SongC',params:{p:item.hash}}"
                    >
                    <div class="bor-img"
                    >
                        <!-- <a href="https://music.douban.com/artists/player/" style="display:block"> -->
                            <img :src="item.imgurl" alt="">
                        <!-- </a> -->
                    </div>
                    <div style="display:block; font-size:16px; color:black; height:40px; line-height
                    80px;">
                        {{filename(item)}}{{item.audio_id}}
                    </div>
                    <span style="display:block; color:gray; font-size:14px;" >
                       {{item.remark}}
                    </span>
                </router-link>
            </ul>
        </div>
</template>
<script>
    import {getNewSong} from '@/server/index'
     import $ from 'jquery'
    export default {
        data(){
            return{
               list: JSON.parse(localStorage.getItem('music2')),
                list:[],
            }
        },
        created(){
            getNewSong().then(({data})=>{
                this.list = data.data.data
                // console.log(this.list)
            })
        },
        watch:{
            list:{
                deep:true,
                handler(){
                    localStorage.setItem('music2',JSON.stringify(this.list))
                }
            }
        },
        methods:{
            filename(item){
                return item.filename.length > 10 ? item.filename.slice(0,7) + '...' : item.filename
            }
        }
    }
</script>

