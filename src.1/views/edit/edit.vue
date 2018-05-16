<template>
     <div class="con-edit con-singer wrap con-left">
            <header class="con-left-head clearfix">
               <span>歌单  </span> 
                 <router-link
                    :to="{name:'In'}"
                >
                    <img class="con-new-img" src="@/assets/img/back.png" alt="">
                </router-link>   
                
            </header>
            <ul class="con-list clearfix list">
                <li v-for="(item,i) in list"
                   :key="i"
                   @click= "changeSongList"
                >
                    <div class="con-edit-img"> 
                        <router-link
                            :to ="{name:'songList',params:{b:item.specialid}}"
                        >
                           <img :src="item.user_avatar" alt="">
                        </router-link>
                    </div>
                    <div class="con-edit-text">
                        <span>{{item.specialname}}</span>
                       <p>
                            {{intro(item)}}
                        </p>
                    </div>
                </li>
            </ul>
        </div>
</template>
<script>
    import {getSongList} from '@/server/index'
    export default {
        data(){
            return{
                list: JSON.parse(localStorage.getItem('music'))
            }
        },
        created(){
            getSongList().then(({data}) =>{
                this.list = data.data.plist.list.info
            })
        },
        watch:{
            list:{
                deep:true,
                handler(){
                    localStorage.setItem('music',JSON.stringify(this.list))
                }
            }
        },
        methods:{
            changeSongList(){
                this.$emit('b')
            },
            intro(item){
                return item.intro.length >  15 ? item.intro.substring(0,8) + '...' : item.intro
            }
        }
    }
</script>
