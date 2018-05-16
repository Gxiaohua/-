<template>
   <div class="wrap">
       <ul class="Singerwrap">
           <router-link 
               tag="li"
               class="SingerName"
               v-for="(item,i) in list"
               :key="i"
               :to="{name:'SongC',params:{p:item.FileHash}}"
           >
                <span>歌名：{{changeSongName(item)}}</span>
                <span class="Auxiliary">{{item.Auxiliary}}</span>
                <span class="Auxiliary">歌手：{{changeSingerName(item)}}</span>
           </router-link>
       </ul>
   </div>
</template>
<script>
    import {songSearch} from '@/server/jsonp'
    export default {
        // props:['d'],
        data(){
            return{
                list:[]
            }
        },
        watch:{
            $route(){
                let name = this.$route.params.d
                songSearch({
                    keyword:name,
                }).then(({data})=>{
                    this.list = data.lists
                })
            }
        },
        created(){
            let name = this.$route.params.d
            songSearch({
                keyword:name,
            }).then(({data})=>{
                this.list = data.lists
                console.log(this.list)
            })
        },
        methods:{
            changeSongName(item){
                return item.SongName.length > 20? item.SongName.slice(0,15) + '...' : item.SongName
            },
            changeSingerName(item){
                return item.SingerName.length > 15 ? item.SingerName.slice(0,10) + '...' : item.SingerName
            }
        }
    }
</script>

