<template>
    <div id="home" class="wrapper">
    <nav-bar class="home-navbar"><div slot="center">购物街</div></nav-bar>
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll" :pull-up-load="true" @pullingUp="loadMore">
         <home-swiper :banners="banners"></home-swiper>
         <recommend-view :recommends="recommends"></recommend-view>
         <future-view></future-view>
         <tab-control :titles="titles" class="tab-control" @tabClick="tabClick"></tab-control>
         <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top @click.native="rollback" v-show="isShowBackTop"></back-top>
    </div>
</template>

<script>
import BackTop from '../../components/content/backtop/BackTop'
import Scroll from '../../components/common/scroll/Scroll'
import GoodsList from '../../components/content/goods/GoodsList'
import NavBar from '../../components/common/navbar/NavBar';
import HomeSwiper from './childcomponents/HomeSwiper';
import RecommendView from './childcomponents/RecommendView'
import FutureView from './childcomponents/FutureView'
import TabControl from '../../components/common/tabcontrol/TabControl'
import {getHomeMultidata,getHomeGoods} from '../../network/home';




export default {
    name:"Home",

    components:{
        NavBar,
        HomeSwiper,
        RecommendView,
        FutureView,
        TabControl,
        GoodsList,
        Scroll,
        BackTop
    },

    data(){
        return {
            banners:[],
            recommends:[],
            titles:['流行','新款','精选'],
            goods:{
                'pop':{page:0,list:[]},
                'new':{page:0,list:[]},
                'sell':{page:0,list:[]},
            },
            currentType:'pop',
            isShowBackTop:false,
            saveY:0
        }
    },

    created(){
        this.getHomeMultidata()
        this.getHomeGoods('pop')
        this.getHomeGoods('new')
        this.getHomeGoods('sell')

    },
    // deactivated(){
    //     this.saveY = this.$refs.scroll.scroll.y
    // },
    // activated(){
        
    //     this.$refs.scroll.scrollTo(0,this.saveY,0)
    // },
    methods:{
        tabClick(index){
            switch(index){
                case 0:
                    this.currentType="pop"
                    break;
                case 1:
                    this.currentType="new"
                    break;
                case 2:
                    this.currentType="sell"
                    break;
            }
            
        },

        rollback(){
            this.$refs.scroll.scroll.scrollTo(0,0)
        },
        contentScroll(position){
            this.isShowBackTop = -position.y > 1000
        },
        loadMore(){
            this.getHomeGoods(this.currentType)
            this.$refs.scroll.scroll.refresh()
        },


        getHomeMultidata(){
             getHomeMultidata().then(res=>
            {this.banners = res.data.banner.list;
            this.recommends = res.data.recommend.list;
            })
        },
        getHomeGoods(type){
            const page = this.goods[type].page + 1
             getHomeGoods(type,page).then(res=>{
                this.goods[type].list.push(...res.data.list)
                this.goods[type].page+=1

                this.$refs.scroll.scroll.finishPullUp()
            })
        }
    
    },
    computed:{
        showGoods(){
            return this.goods[this.currentType].list
        }
    }
     
}
</script>

<style scoped>
#home{
    /* padding-top: 44px; */
    height: 100vh;
    
}
.home-navbar{
    color: white;
    background-color:var(--color-tint);
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 9;

}
.tab-control{
    position: sticky;
    top: 44px;
    z-index: 9;
    
}
.content{
    overflow: hidden;
   height: calc(100% - 93px);
    margin-top: 44px;
}
</style>