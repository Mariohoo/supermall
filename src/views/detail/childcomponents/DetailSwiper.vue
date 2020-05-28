<template>
    <div class="detail-swiper">
        <swiper class="swiper1">
            <swiper-item v-for="(item,index) in topImages" :key="index" class="swiper-item">
                <img :src="item" alt="">
            </swiper-item>
        </swiper>
    </div>
</template>

<script>
import Swiper from '../../../components/common/swiper/Swiper'
import SwiperItem from '../../../components/common/swiper/SwiperItem'

export default {
    name:'DetailSwiper',
    components:{
        Swiper,
        SwiperItem
    },
    props:{
        topImages:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style scoped>
.swiper1{
    height: 300px;
    overflow: hidden;
}
</style>