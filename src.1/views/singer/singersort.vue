<template>
    <div class="wrap singlistsort">
        <div class="othsingers">
            <ul>
                <!-- 渲染在同一个组件中，通过$route找到相对应的路径 -->
                <router-link 
                    class="othsingernum" 
                    v-for="(item,i) in num"
                    :key="i"
                    :to="{name:'Sort',params:{a:item.classid}}"
                    tag="li"
                >
                   {{item.classname}}
                
                </router-link>
            </ul>
        </div>
        <router-link :to = "{name:'In'}">
            <div class="home-html">首页</div>
        </router-link>
        <ul class="singer-list">
            <li 
               v-for="(item,i) in list"
               :key="i"
               @click = 'changeSinger'
            >
                <div class="singers-name">
                    <router-link
                        tag = "div"
                        :to ="{name:'everySinger',params:{c:item.singerid}}"
                    >
                         <img :src="imgUrl(item)" alt="">
                    </router-link>
                     <a href="javascript:;">{{item.singername}}</a>
                </div>
          </li>
        </ul>
  </div>
</template>
<script>
import {getSingerList} from '@/server/index'
export default {
    props:['a'],
    data(){
        return{
            list:[],
        }
    },
     computed:{
            num(){
                let all = this.$store.state.num
                return all
            }
        },
    //监控一下动态id
    watch:{
        $route(){
            let id = this.$route.params.a
            // console.log(id)
            getSingerList({id}).then(({data})=>{
                this.list = data.singers.list.info           
            })
            this.$store.dispatch('changeName')
        }
    },
    created(){
        let id = this.$route.params.a
        console.log(id)
         getSingerList({id}).then(({data})=>{
             this.list = data.singers.list.info    
             console.log(this.list)       
         })
         this.$store.dispatch('changeName')
    },
    methods:{
        imgUrl(item){
           return  item.imgUrl = item.imgurl.replace('{size}',100)
        },
        changeSinger(){
            console.log(1)
            this.$emit('c')
        }
    }
}
</script>

