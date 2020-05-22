<template>
    <tabbar>
      <tab-bar-item path="/Home" activeColor="red">
          <img slot="item-icon" src="../../../assets/images/tabbar/home.svg" alt="">
          <img slot="item-icon-active" src="../../../assets/images/tabbar/home_active.svg" alt="">
          <div slot="item-text">首页</div>
      </tab-bar-item>
       <tab-bar-item path="/Category" activeColor="red">
          <img slot="item-icon" src="../../../assets/images/tabbar/category.svg" alt="">
          <img slot="item-icon-active" src="../../../assets/images/tabbar/category_active.svg" alt="">
          <div slot="item-text">分类</div>
      </tab-bar-item>
       <tab-bar-item  path="/Shopcart" activeColor="red">
          <img slot="item-icon" src="../../../assets/images/tabbar/shopcart.svg" alt="">
          <img slot="item-icon-active" src="../../../assets/images/tabbar/shopcart_active.svg" alt="">
          <div slot="item-text">购物车</div>
      </tab-bar-item>
       <tab-bar-item path="/Profile" activeColor="red">
          <img slot="item-icon" src="../../../assets/images/tabbar/profile.svg" alt="">
          <img slot="item-icon-active" src="../../../assets/images/tabbar/profile_active.svg" alt="">
          <div slot="item-text">我的</div>
      </tab-bar-item>
    </tabbar>
</template>

<script>
import tabbar from '../../common/Tabbar/tabbar'
import TabBarItem from '../../common/Tabbar/TabBarItem'
export default {
    name:'MainTabBar',
    components:{
        tabbar,
        TabBarItem
    }
}
</script>

<style  scoped>

</style>