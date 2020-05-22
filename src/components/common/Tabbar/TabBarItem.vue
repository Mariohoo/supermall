<template>
     <div class="tabbar-item" @click="itemclick">
         <div v-if="!isactive"><slot name="item-icon"></slot></div>
         <div v-else> <slot name="item-icon-active"></slot></div>
         <div :style="activeStyle"><slot name="item-text"></slot></div>
     </div>
</template>

<script>
export default {
    name:'TabBarItem',
    props:{
            path:String,
            activeColor:{
                type:String,
                default:'red'
            }
    },
        computed:{
            isactive(){
                return this.$route.path.indexOf(this.path) !== -1
            },
            activeStyle(){
                return this.isactive ? {color:this.activeColor}:{}
            }
        },
    data(){
        return {
            // isactive:true
        }
    },
    methods:{
        itemclick(){
            this.$router.replace(this.path).catch(err=>err)
        }
    }
}
</script>

<style scoped>
 .tabbar-item{
    flex:1;
    text-align: center;
    font-size: 14px;
}
.tabbar-item img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
}


</style>