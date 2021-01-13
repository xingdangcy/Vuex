<template>
 <div id="app">
   <div>
      <span @click="changeModule(0)">未读({{$store.state.unRead.length}})</span>
      <span @click="changeModule(1)">已读({{$store.state.read.length}})</span>
      <span @click="changeModule(2)">回收站({{$store.state.recycle.length}})</span>
   </div>
      <UnRead v-if="current == 0" />
      <Read v-if="current == 1" />
      <ReCycle v-if="current == 2" />
 </div>
</template>

<script>
  import Read from "./components/read";
  import UnRead from "./components/unread";
  import ReCycle from "./components/recycle";
export default {
// 组件参数 接收来自父组件的数据
 props: [],
// 局部注册的组件
 components: {Read,UnRead,ReCycle},
// 组件状态值
 data() {
 return {
   current:0,
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
    // 改变模块

 },
// 组件方法
 methods: {
      changeModule(index){
        console.log(this.current);
        this.current = index;
      }

 },
// 计算属性
 computed:{

 }
};
</script>

<style scoped>
#app{
  text-align: center;
  margin-top:60px
}
</style>
