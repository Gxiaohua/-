<template>
    <div class="wrap">
        <input 
            type="text" class="inp-val" placeholder="搜索"
            v-model="title"
            @input = "searchVal"
        >
        <div 
            class="search-list clearfix"
            v-if = "list.length !== 0"
        >
            <ul class="LableName">
                <!-- <span class="LableNamespan">{{list[0].LableName}}</span> -->
                <li 
                    class="itemname"
                   v-for="(item,i) in list[0].RecordDatas"
                   :key="i"
                   @click = "changesongName"
                >
                    <router-link
                        tag = "div"
                        :to ="{name:'singersName',params:{d:item.HintInfo}}"
                     >
                     {{item.HintInfo}}
                   </router-link>
               </li>     
            </ul>
        </div>
    </div>
</template>
<script>
    import {searchSong} from '@/server/index'
    import $ from 'jquery'
    export default {
        data(){
            return{
                list:[],
                title:''
            }
        },
       methods:{
            searchVal(){
                if(this.title === '') return
                searchSong(this.title).then(({data})=>{
                    this.list = data.data  
                    console.log(this.list)
                })
                if(this.title !== ''){
                     $('.search-list').show() 
                     console.log($('.search-list'))
                }
                // console.log(this.list[0] === null)
                // if(this.list[0]=== null){
                //     $('.search-list').hide() 
                // }
                // if(this.list !== null){
                //     console.log(this.list)
                    if(this.list.length === 0){
                        console.log(47489)
                         $('.search-list').hide() 
                    }
                // }
                return this.list
                this.$emit('d')
            },
            changesongName(){
                let parent = $(".itemname").parent().parent();
                parent.hide()
                this.title=''
            }
        }
    }
</script>

