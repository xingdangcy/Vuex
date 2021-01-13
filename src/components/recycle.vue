<template>
 <div>
    <div :key="item.id" v-for="item in $store.state.recycle">
    <span>{{item.id}}</span>
    <span style="margin:0 30px">{{item.name}}</span>
    <span @click="restoreById(item.id)">还原</span>
</div>
<input type="button" value="还原所有" @click="restoreAll">
 </div>
</template>

<script>
export default {
// 组件参数 接收来自父组件的数据
 props: [],
// 局部注册的组件
 components: {},
// 组件状态值
 data() {
 return {

 };
 },
// 侦听器
 watch:{},
// 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
 created() {

 },
// el 被新创建的 vm.$ el 替换，并挂载到实例上去之后调用该钩子。
// 如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.$ el 也在文档内。
 mounted() {

 },
// 组件方法
 methods: {
    //  根据ID还原
    restoreById(id){
        this.$store.commit('restore',id)
    },
    // 还原所有
    restoreAll(){
        this.$store.commit('restoreAll')
    }
 },
// 计算属性
 computed:{

 }
};
</script>

<style scoped>

</style>
