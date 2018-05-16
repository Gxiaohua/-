<template>
    <div class="allchange">
        <div class="wrap change-img">
            <div
               v-for="(item,index) in banner" 
               :key="item.id"
            >
            <img 
                :src="item.imgurl" 
                class = 'imgs'
                ref = 'imgs'
                alt="">
            </div>
        </div>
        <div 
            class="prev"
            @click = 'prevImg'
             @mouseover = 'clearOver'
             @mouseout= "changeimg"
        ></div>
        <div class="next"
            @click = 'rightImg(index)'
            @mouseover = 'clearOver'
            @mouseout= "changeimg"
        ></div>
        <nav class="change-page">
            <!-- <span ref="spans"></span>
            <span ref="spans"></span>
            <span ref="spans"></span>
            <span ref="spans"></span> -->
            <span 
                v-for="(i,m) in banner"
                :key="i.id"
                ref="spans"
                class="spans"
                @click = 'changeSpan(m)'
            ></span>
        </nav>
    </div>
</template>
<script>
import {getBanner} from '@/server/index'
import $ from 'jquery'
export default {
     data(){
       return{
           banner:[],
           timer:'',
           n:0
       }
    },
    created(){
        getBanner().then(({data})=>{
            this.banner = data.data.banner
        })
        return this.banner
   },
   methods:{
       //定时器
       changeimg(){
           this.timer = setInterval(()=>{
                //把this.n赋值，并没有改变data中的a
                // let n = this.n  
                this.rightImg()           
              },1000)
            // clearInterval(this.timer)
         },
         //封装一个函数，右移
         rightImg(){
                let imgs = ''
                 let len = ''
                 let spans = ''
                this.$nextTick( () => {
                   imgs = this.$refs.imgs 
                   spans = this.$refs.spans
                //    console.log(spans)
                   len = imgs.length
                    if(this.n === len-1){
                        this.n = 0
                    }else{
                        this.n++
                    }
                    $('.imgs').css('opacity',0)
                    $('.imgs').eq(this.n).css('opacity',1)
                    $('.spans').css('backgroundColor','rosybrown')
                    $('.spans').eq(this.n).css('backgroundColor','blue')
                 })  
         },
         prevImg(){
             let imgs = ''
            let len = ''
            let spans = ''
           this.$nextTick( () => {
                imgs = this.$refs.imgs 
                spans = this.$refs.spans
                console.log(spans)
                len = imgs.length
                if(this.n === 0){
                    this.n = len-1
                }else{
                    this.n--
                }
                $('.imgs').css('opacity',0)
                $('.imgs').eq(this.n).css('opacity',1)
                $('.spans').css('backgroundColor','rosybrown')
                $('.spans').eq(this.n).css('backgroundColor','blue')
            })  
         },
         //鼠标移入清除定时器
         clearOver(){
             clearInterval(this.timer)
         },
        changeSpan(m){
            $('.imgs').css('opacity',0)
            $('.imgs').eq(m).css('opacity',1)
            $('.spans').css('backgroundColor','rosybrown')
            $('.spans').eq(m).css('backgroundColor','blue')
        }
    },
     mounted:function(){  
        this.changeimg();      
    } ,
}
</script>

