<template>
    <div class="cart">
        <nav-bar class="nav-bar">
            <div slot="center">购物车({{cartLength}})</div>
        </nav-bar>
        <cart-list></cart-list>
        <cart-bottom-bar />
    </div>
</template>
<script>
import NavBar from '../../components/common/navbar/NavBar'
import cartList from './childComponent/cartList'
import CartBottomBar from './childComponent/CartBottomBar'
export default {
    name:'shopcart',
    components:{
        NavBar,
        cartList,
        CartBottomBar
    },
    computed:{
        cartLength(){
            return this.$store.state.cartList.length;
        }
    }
}
</script>

<style scoped>
.nav-bar{
    background-color: var(--color-tint);
    color: #fff;
    /* font-weight: 700; */
}
</style>