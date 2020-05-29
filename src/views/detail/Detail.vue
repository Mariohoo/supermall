<template>
    <div id="detail">
         <detail-nav-bar @titleClick="titleClick" class="atTopBack"></detail-nav-bar>
        <detail-swiper :topImages="topImages" class="atShop"></detail-swiper>
        <detail-base-info :goods="goods"></detail-base-info>
        <detail-shop-info :shop="shop"></detail-shop-info>
        <detail-goods-info :detailInfo="detailInfo"></detail-goods-info>
        <detail-param-info :paramInfo="paramInfo" class="atParam"></detail-param-info>
        <detail-comment-info :commentInfo="commentInfo" class="atComment"></detail-comment-info>
        <goods-list :goods="recommends" class="atGoods" />
        <back-top v-on:click.native="clickTop"></back-top>
        <detail-bottom-bar  @addCart="addToCart" />
    </div>
</template>

<script>
import DetailBottomBar from './childcomponents/DetailBottomBar'
import GoodsList from '../../components/content/goods/GoodsList'
import DetailCommentInfo from './childcomponents/DetailCommentInfo'
import DetailParamInfo from './childcomponents/DetailParamInfo'
import DetailGoodsInfo from './childcomponents/DetailGoodsInfo'
import DetailShopInfo from './childcomponents/DetailShopInfo'
import DetailNavBar from './childcomponents/DetailNavBar'
import DetailSwiper from './childcomponents/DetailSwiper'
import DetailBaseInfo from './childcomponents/DetailBaseInfo'
import {getDetail,Goods,Shop,GoodsParam,getRecomment} from '../../network/detail'
import Scroll from '../../components/common/scroll/Scroll'
import BackTop from './childcomponents/TopBack'
export default {
    name:'Detail',
    components:{
        DetailNavBar,
        DetailSwiper,
        DetailBaseInfo,
        DetailShopInfo,
        DetailGoodsInfo,
        DetailParamInfo,
        DetailCommentInfo,
        GoodsList,
        BackTop,
        DetailBottomBar
    },
    methods:{
        titleClick(index){
            switch(index){
                case 0:
                    this.$el.querySelector('.atShop').scrollIntoView();
                    break;
                case 1:
                    this.$el.querySelector('.atParam').scrollIntoView();
                    break;
                case 2:
                    this.$el.querySelector('.atComment').scrollIntoView();
                    break;
                case 3:
                    this.$el.querySelector('.atGoods').scrollIntoView();
                    break;
            }
        },
        clickTop(){
            console.log(123);
            
            this.$el.querySelector('.atTopBack').scrollIntoView();
        },
        addToCart(){
            const product ={}
            product.image = this.topImages[0];
            product.title = this.goods.title;
            product.desc = this.goods.desc;
            product.price = this.goods.realPrice;
            product.iid = this.iid;

            this.$store.commit('addCart',product)
           
            

        }
    },
    data(){
        return {
            iid: null,
            topImages:[],
            goods:{},
            shop:{},
            detailInfo:{},
            paramInfo:{},
            commentInfo:{},
            recommends:[]
        }
    },
    created(){
        this.iid = this.$route.params.iid

        getDetail(this.iid).then(res=>{
            console.log(res);
            const data = res.result
            this.topImages =  data.itemInfo.topImages
            
            this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
            console.log(this.goods);
            
            this.shop = new Shop(data.shopInfo)
            
            this.detailInfo = data.detailInfo;

            this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)

            if(data.rate.cRate!== 0){
                this.commentInfo = data.rate.list[0]
            }
        })
        
        getRecomment().then(res=>{
            this.recommends = res.data.list
            
        })

    }
}
</script>

<style scoped>
#detail{
    position: relative;
    z-index: 9;
    background-color: #fff;
}
</style>