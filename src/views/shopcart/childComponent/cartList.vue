<template>
    <div class="cart-list">
        <cart-list-item  v-for="(item,index) in $store.state.cartList" :key="index" :item-info="item">
            {{item}}
        </cart-list-item>
    </div>
</template>

<script>
import CartListItem from './CartListItem'
export default {
    name:'cartList',
    components:{
        CartListItem
    }
}
</script>

<style scoped>

</style>