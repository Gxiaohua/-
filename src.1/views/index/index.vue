<template>
    <section id="box">
        <!-- <h1 class="top">音乐</h1> -->
        <!-- 头部 -->
        <!-- <header class="head">
            <nav class="wrap">
                <!-- <a href="javascript:;">音乐人</a>
                <a href="javascript:;">歌单</a>
                <a href="javascript:;">排行榜</a>
                <a href="javascript:;">专题</a> -->
                <!-- <router-link :to = "{name:'singer'}">歌手</router-link> -->
                <!-- <router-link :to = "{name:'edit'}">歌单</router-link>
                <router-link :to="{name:'newsongs'}">新歌</router-link>
            </nav>
        </header> --> 

        <!-- 图片切换 -->
        <Banner></Banner>
        <!-- <div class="allchange">
            <div class="wrap change-img">
                <img class = "one-img" src="http://p1.music.126.net/_t41D6GaW1sBWjKSX03NIg==/109951163274730599.jpg" alt="">
                <img src="http://p1.music.126.net/VsaixaMKgMlYOiTXh4WqcA==/109951163274435010.jpg" alt="">
                <img src="http://p1.music.126.net/_bCCuvK9vMp-7razCBbE-w==/109951163273215796.jpg" alt="">
                <img src="http://p1.music.126.net/rsBRGCh1EeAvCjp1uVE0AQ==/109951163272908015.jpg" alt="">
            </div>
            <div class="prev"><</div>
            <div class="next">></div>
            <nav class="change-page">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </nav>
        </div> -->
        <!-- 主题，内容部分 -->
        <div class="content wrap clearfix">
            <!-- 左侧 -->
            <div class="con-left fl">
                <!-- <div class="con-singer">
                    <header class="con-left-head">
                        <a href="" class="con-left-text">本周流行音乐人|</a>
                        <a href="" class="con-text">上升最快音乐人</a>
                    </header>
                    <ul class="list clearfix">
                        <li>
                            <div class="bor-img">
                                <a href="https://music.douban.com/artists/player/" style="display:block">
                                    <img src="https://img1.doubanio.com/view/site/large/public/6a2319e9fb0dcb8.jpg" alt="">
                                </a>
                            </div>
                            <a style="display:block; font-size:20px; color:aquamarine; ">
                                刺猬
                            </a>
                            <span style="display:block; color:gray; font-size:16px;" >
                                摇滚 Rock
                            </span>
                        </li>
                        <li>
                            <div class="bor-img">
                                <a href="" style="display:block">
                                    <img src="https://img1.doubanio.com/view/site/large/public/6a2319e9fb0dcb8.jpg" alt="">
                                </a>
                            </div>
                            <a style="display:block; font-size:20px; color:aquamarine; ">
                                刺猬
                            </a>
                            <span style="display:block; color:gray; font-size:16px;" >
                                摇滚 Rock
                            </span>
                        </li>
                        <li>
                            <div class="bor-img">
                                <a href="" style="display:block">
                                    <img src="https://img1.doubanio.com/view/site/large/public/6a2319e9fb0dcb8.jpg" alt="">
                                </a>
                            </div>
                            <a style="display:block; font-size:20px; color:aquamarine; ">
                                刺猬
                            </a>
                            <span style="display:block; color:gray; font-size:16px;" >
                                摇滚 Rock
                            </span>
                        </li>
                        <li>
                            <div class="bor-img">
                                <a href="" style="display:block">
                                    <img src="https://img1.doubanio.com/view/site/large/public/6a2319e9fb0dcb8.jpg" alt="">
                                </a>
                            </div>
                            <a style="display:block; font-size:20px; color:aquamarine; ">
                                刺猬
                            </a>
                            <span style="display:block; color:gray; font-size:16px;" >
                                摇滚 Rock
                            </span>
                        </li>
                        <li>
                                <div class="bor-img">
                                    <a href="" style="display:block">
                                        <img src="https://img1.doubanio.com/view/site/large/public/6a2319e9fb0dcb8.jpg" alt="">
                                    </a>
                                </div>
                                <a style="display:block; font-size:20px; color:aquamarine; ">
                                    刺猬
                                </a>
                                <span style="display:block; color:gray; font-size:16px;" >
                                    摇滚 Rock
                                </span>
                            </li>
                            <li>
                                <div class="bor-img">
                                    <a href="" style="display:block">
                                        <img src="https://img1.doubanio.com/view/site/large/public/6a2319e9fb0dcb8.jpg" alt="">
                                    </a>
                                </div>
                                <a style="display:block; font-size:20px; color:aquamarine; ">
                                    刺猬
                                </a>
                                <span style="display:block; color:gray; font-size:16px;" >
                                    摇滚 Rock
                                </span>
                            </li>
                            <li>
                                <div class="bor-img">
                                    <a href="" style="display:block">
                                        <img src="https://img1.doubanio.com/view/site/large/public/6a2319e9fb0dcb8.jpg" alt="">
                                    </a>
                                </div>
                                <a style="display:block; font-size:20px; color:aquamarine; ">
                                    刺猬
                                </a>
                                <span style="display:block; color:gray; font-size:16px;" >
                                    摇滚 Rock
                                </span>
                            </li>
                            <li>
                                <div class="bor-img">
                                    <a href="" style="display:block">
                                        <img src="https://img1.doubanio.com/view/site/large/public/6a2319e9fb0dcb8.jpg" alt="">
                                    </a>
                                </div>
                                <a style="display:block; font-size:20px; color:aquamarine; ">
                                    刺猬
                                </a>
                                <span style="display:block; color:gray; font-size:16px;" >
                                    摇滚 Rock
                                </span>
                            </li>
                    </ul>
                </div>  -->
               <Singer></Singer>
                <!-- 编辑推荐 -->
                <Edit></Edit>
                <!-- <div class="con-edit con-singer">
                    <header class="con-edit-head con-left-head clearfix">
                        编辑推荐
                        <div class="right btn">
                            <div class="fl"><</div>
                            <div class="fl">></div>
                        </div>     
                    </header>
                    <ul class="con-list clearfix">
                        <li>
                            <div class="con-edit-img">
                                <a href="https://music.douban.com/artists/player/?sid=725323,725324" style="display:block;">
                                    <img src="https://img3.doubanio.com/view/music_index_feature/mid/public/c62506.jpg" alt="">
                                </a>
                            </div>
                            <div class="con-edit-text">
                                <span>[歌曲]</span>
                                <a href="" class="con-song">分身 无形</a>
                                <a href="" class="con-edit-singer">吹管老丹</a>
                                <p>老丹是海青的管乐手，也是红领巾的成员之一。
                                    他把中国竹笛吹出了合成器的味道。
                                </p>
                            </div>
                        </li>
                        <li>
                            <div class="con-edit-img">
                                <a href="https://music.douban.com/artists/player/?sid=725323,725324" style="display:block;">
                                    <img src="https://img3.doubanio.com/view/music_index_feature/mid/public/c62506.jpg" alt="">
                                </a>
                            </div>
                            <div class="con-edit-text">
                                <span>[歌曲]</span>
                                <a href="" class="con-song">分身 无形</a>
                                <a href="" class="con-edit-singer">吹管老丹</a>
                                <p>老丹是海青的管乐手，也是红领巾的成员之一。
                                    他把中国竹笛吹出了合成器的味道。
                                </p>
                            </div>
                        </li>
                        <li>
                            <div class="con-edit-img">
                                <a href="https://music.douban.com/artists/player/?sid=725323,725324" style="display:block;">
                                    <img src="https://img3.doubanio.com/view/music_index_feature/mid/public/c62506.jpg" alt="">
                                </a>
                            </div>
                            <div class="con-edit-text">
                                <span>[歌曲]</span>
                                <a href="" class="con-song">分身 无形</a>
                                <a href="" class="con-edit-singer">吹管老丹</a>
                                <p>老丹是海青的管乐手，也是红领巾的成员之一。
                                    他把中国竹笛吹出了合成器的味道。
                                </p>
                            </div>
                        </li>
                    </ul>
                
                </div> -->
                <!-- 新碟榜 -->
                <!-- <Newsongs></Newsongs> -->
                <!-- <div class="con-new con-singer">
                    <header class="con-new-head con-left-head">
                        <span class="fl" style="margin-right:15px;">新碟榜</span>
                        <div class="con-new-head-nav clearfix fl">
                            <a href="javascrript:;">最热|</a>
                            <a href="javascrript:;">华语|</a>
                            <a href="javascrript:;">欧美|</a>
                            <a href="javascrript:;">日韩|</a>
                            <a href="javascrript:;">单曲</a>
                        </div>
                        <div class="right more">更多</div>
                    </header>
                    <ul class="con-new-list list clearfix">
                         <li>
                            <div class="bor-img">
                                <a href="https://music.douban.com/artists/player/" style="display:block">
                                    <img src="https://img1.doubanio.com/view/site/large/public/6a2319e9fb0dcb8.jpg" alt="">
                                </a>
                            </div>
                            <a style="display:block; font-size:20px; color:aquamarine; ">
                                刺猬
                            </a>
                            <span style="display:block; color:gray; font-size:16px;" >
                                摇滚 Rock
                            </span>
                        </li>
                    </ul>
                </div> -->
                <!-- 近期热门歌单 -->
                <!-- <Hotsongs></Hotsongs> -->
                <!-- <div class="con-songfrom">
                    <header class="con-song-head con-left-head ">
                        <span class="fl" style="margin-right:15px;">新碟榜</span>
                        <div class="con-new-head-nav clearfix fl">
                            <a href="javascrript:;">最热|</a>
                            <a href="javascrript:;">流行|</a>
                            <a href="javascrript:;">摇滚|</a>
                            <a href="javascrript:;">民谣|</a>
                            <a href="javascrript:;">原生</a>
                        </div>
                        <div class="right more">更多</div>
                    </header>
                    <ul class="con-songfrom">
                        <li>
                            <div class="con-songfrom-left fl">
                                <a href="">
                                    <img src="https://img3.doubanio.com/img/songlist/large/478914-1.jpg" alt="">
                                </a>
                            </div>
                            <div class="fl con-songfrom-name">
                                <a href="">有些路，要一个人走完。</a>
                                <span>(30)</span>
                            </div>
                            <div class="fl con-songfrom-oth">
                                <a href="">偶然的南方</a>
                                <span>制作|22收藏</span>
                            </div>
                            <div class="con-songfrom-text fl">
                                <p>Now it’s a brave time</p>
                                <p>Now it’s a brave time</p>
                                <p>Now it’s a brave time</p>
                            </div>
                        </li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div> -->
            </div>
            <!-- 右侧 -->
            <!-- <div class="con-right fl">
                <div class="con-right-head">
                    <div class="con-right-song fl">
                        <a href="">44081</a>
                        <span style="display:block;">音乐人</span>
                    </div>
                    <div class="con-right-song fl">
                        <a href="">44081</a>
                        <span style="display:block;">音乐人</span>
                    </div>
                    <div class="con-right-song fl no-mar">
                        <a href="">44081</a>
                        <span style="display:block;">音乐人</span>
                    </div>
                </div>
            </div> -->
        </div>
    </section>
</template>
<script>
import Singer from '../singer/singer'
import Edit from '../edit/edit'
// import Newsongs from '../newsongs/newsongs'
// import Hotsongs from '../hotsongs/hotsongs'
import Banner from '../banner/banner'

export default {
   components:{
       Singer,
       Edit,
    //    Newsongs,
    //    Hotsongs,
       Banner,
   }
}
</script>

