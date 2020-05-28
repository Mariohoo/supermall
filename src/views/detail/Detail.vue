<template>
    <div id="detail">
         <detail-nav-bar></detail-nav-bar>
        <detail-swiper :topImages="topImages"></detail-swiper>
        <detail-base-info :goods="goods"></detail-base-info>
        <detail-shop-info :shop="shop"></detail-shop-info>
        <detail-goods-info :detailInfo="detailInfo"></detail-goods-info>
        <detail-param-info :paramInfo="paramInfo"></detail-param-info>
    </div>
</template>

<script>
import DetailParamInfo from './childcomponents/DetailParamInfo'
import DetailGoodsInfo from './childcomponents/DetailGoodsInfo'
import DetailShopInfo from './childcomponents/DetailShopInfo'
import DetailNavBar from './childcomponents/DetailNavBar'
import DetailSwiper from './childcomponents/DetailSwiper'
import DetailBaseInfo from './childcomponents/DetailBaseInfo'
import {getDetail,Goods,Shop,GoodsParam} from '../../network/detail'
import Scroll from '../../components/common/scroll/Scroll'
export default {
    name:'Detail',
    components:{
        DetailNavBar,
        DetailSwiper,
        DetailBaseInfo,
        DetailShopInfo,
        DetailGoodsInfo,
        DetailParamInfo
    },
    data(){
        return {
            iid: null,
            topImages:[],
            goods:{},
            shop:{},
            detailInfo:{},
            paramInfo:{}
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