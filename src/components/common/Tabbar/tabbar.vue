<template>
     <div id="tabbar">
       <slot></slot>
   </div>
</template>

<script>
export default {
    name:'tabbar'
}
</script>

<style scoped>
#tabbar{
    display: flex;
    height: 49px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #f6f6f6;
    box-shadow: 0 -1px 1px rgba(100,100,100,.2);
}
 
</style>
