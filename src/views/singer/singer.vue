<template>
    <div class="con-singer wrap con-left">
        <header class="con-left-head">
            <!-- <a href="" class="con-left-text">本周流行音乐人|</a> -->
            <!-- <a href="" class="con-text">上升最快音乐人</a> -->
            歌手
             <router-link
                    :to="{name:'In'}"
                >
                    <img class="con-new-img" src="@/assets/img/back.png" alt="">
                </router-link>  
        </header>
        <!-- <Sort></Sort> -->
         <ul class="list clearfix"> 
            <li 
               v-for="item in list"
               :key="item.classid"
            >
                <div class="bor-img">
                    <router-link 
                     :to="{name:'Sort',params:{a:item.classid}}"                   
                    >
                        <img :src="item.imgurl" alt=""> 
                    </router-link>
                </div>
                <a 
                   href="javascript:;" style="display:block; font-size:20px; color:black; "
                >
                    {{item.classname}}
                </a>
            </li>
        </ul> 
    </div> 
</template>
<script>
import {getSongs} from '@/server/index'
    export default {
        data(){
            return{
                list:JSON.parse(localStorage.getItem('music1'))
            }
        },
        created(){
            getSongs().then(({data})=>{
                this.list = data.data.list
                // console.log(this.list)
            })
        },
        watch:{
            list:{
                deep:true,
                handler(){
                    localStorage.setItem('music1',JSON.stringify(this.list))
                }
            }
        }
    }
</script>

