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
            <div class="LableName">
                <!-- <span class="LableNamespan">{{list[0].LableName}}</span> -->
                <router-link
                    tag = "div"
                    :to ="{name:'singersName',params:{d:item.HintInfo}}"
                    class="itemname"
                    v-for="(item,i) in list[0].RecordDatas"
                    :key="i"
                >
                  {{item.HintInfo}}
                </router-link>
            </div>
            <!-- <div  class="LableName">
                 <span class="LableNamespan">{{list[1].LableName}}</span>
            </div>
            <div  class="LableName">
                 <span class="LableNamespan">{{list[2].LableName}}</span>
            </div> -->
        </div>
    </div>
</template>
<script>
    import {searchSong} from '@/server/index'
    export default {
        data(){
            return{
                list:[],
                title:''
            }
        },
       computed:{
            changeSn(){
                return this.searchVal()
            }
        },
       methods:{
            searchVal(){
                if(this.title === '') return
                searchSong(this.title).then(({data})=>{
                    this.list = data.data  
                })
                return this.list
                this.$emit('d')
            }
        }
    }
</script>

