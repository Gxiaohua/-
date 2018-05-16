<template>
   <div>
       156
   </div>
</template>
<script>
    // import {singersName} from '@/server'
    import jsonp from 'jsonp'
    export default {
        props:['d'],
        data(){
            return{
                list:[]
            }
        },
        created(){
            let name = this.d
            console.log(name)
            // singersName(name).then(({data})=>{
            //     console.log(data)
            // })
            console.log(jsonp)
            jsonp('http://songsearch.kugou.com/song_search_v2',{
                param: `?keyword=${name}&page=1&pagesize=30&userid=-1&clientver=&platform=WebFilter&tag=em&filter=2&iscorrection=1&privilege_filter=0&_=1525314&callback`
            },function (data){
                console.log(data)
            }).then((res)=>{
                console.log(data)
            })
            // http://mobilecdn.kugou.com/api/v3/search/songformat=jsonp&keyword=周杰伦&page=1&pagesize=30&showtype=1&callback
           // http://songsearch.kugou.com/song_search_v2?callback=jQuery112402722116304235871_1525314503909&keyword=纸短情长&page=1&pagesize=30&userid=-1&clientver=&platform=WebFilter&tag=em&filter=2&iscorrection=1&privilege_filter=0&_=1525314
        }
        // callback=jQuery112402722116304235871_1525314503909&
    }
</script>

