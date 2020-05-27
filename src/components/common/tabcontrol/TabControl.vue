<template>
    <div class="tab-control">
        <div v-for="(item,index) in titles" :key="index" class="tab-item" :class="{active:index===currentIndex}" @click="tabClick(index)">
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name:'TabControl',
    data(){
        return{
            currentIndex:0
        }
    },
    props:{
        titles:{
            type:Array,
            default(){
                return []
            }
        }
    },
    methods:{
      tabClick(index){
          this.currentIndex=index;
          this.$emit('tabClick',index)
      }
    }
}
</script>

<style scoped>
.tab-control{
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 15px;
    background-color: #ffffff;
}
.tab-control .tab-item{
    flex:1;
}
.active{
    color: var(--color-high-text);
}
.active span{
    border-bottom: 3px solid var(--color-tint);
}
.tab-item span{
    padding: 5px;
}
</style>