
import Vue from 'vue'
import axios from 'axios'
import jsonp from 'jsonp'


let cn = axios.create({
    baseURL: 'https://www.easy-mock.com/mock/5aec2e91ee6807193758b039/banner',
    //timeout: 3000
  })

//轮播及详细信息
export function getBanner(){
    return cn.get('/banner')
}
//歌曲
export function getSongs(){
    return cn.get('/singer')
}
//新歌
export function getNewSong(){
    return cn.get('/newsong')
}
//歌单
export function getSongList(){
    return cn.get('/songlist')
}
//歌手信息

export function getSingerList(params){
    return axios('/proxy/singer/list/'+params.id+'?json=true')
}
//歌单信息
// http://m.kugou.com/plist/list/404750?json=true
export function getSongListSort(params){
    return axios('/proxy/plist/list/'+params.id+'?json=true')
}
// http://www.kugou.com/yy/singer/home/3520
//搜索框
// http://searchtip.kugou.com/getSearchTip?MusicTipCount=5&MVTipCount=2&albumcount=2&keyword=${this.value}
export function searchSong(params){
    return axios(`http://searchtip.kugou.com/getSearchTip?MusicTipCount=5&MVTipCount=2&albumcount=2&keyword=${params}`)
}

//  http://m.kugou.com/singer/info/3520?json=true
export function singersNameList(params){
    return axios('/proxy/singer/info/'+params.id+'?json=true')
}

//http://songsearch.kugou.com/song_search_v2?callback=jQuery112402722116304235871_1525314503909&keyword=纸短情长&page=1&pagesize=30&userid=-1&clientver=&platform=WebFilter&tag=em&filter=2&iscorrection=1&privilege_filter=0&_=1525314
//搜索 歌曲
export function singersName(id){
    return jsonp(`http://songsearch.kugou.com/song_search_v2`,{
        params:`?keyword=${id}`
    })
}
//歌词
export function SongC(params){
    return axios(`http://www.kugou.com/yy/index.php?r=play/getdata&hash=${params}`)
}

