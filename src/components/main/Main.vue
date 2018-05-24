<template>
  <div class="mains">
    <router-view/>
    <div class="food">
      <div v-for="(menu,index) in menus" @click="chooseMenu(index,menu.url_name)" v-bind:style="[menuState==index?fitems:fitem]">
        <i :class="menu.iclass" />
        <p>{{menu.text}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  const menuData = [{
    id:0,
    iclass:"iconfont icon-shouye",
    text:'主页',
    url_name:'home'
  },
  {
    id:1,
    iclass:"iconfont icon-faxian",
    text:'发现',
    url_name:'mine'
  },
  {
    id:2,
    iclass:"iconfont icon-xiaoxi",
    text:'消息',
    url_name:'count'
  },{
    id:3,
    iclass:"iconfont icon-geren",
    text:'个人中心',
    url_name:'person-center'
  }]
export default {
  name: 'mains',
  data () {
    return {
      menus:menuData,
      menuState:0,
      fitem:{
        display: "block",
        textAlign: "center",
        fontSize:13,
        width: 25
      },
      fitems:{
        display: "block",
        textAlign: "center",
        fontSize:13,
        width: 25,
        color:'blue',
      },
    }
  },
  methods:{
    chooseMenu(index,urlName){
      this.menuState = index;
      this.$router.push({path:urlName});
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .food{
    width: 100%;
    height: 40px;
    position: fixed;
    background: white;
    display: flex;
    bottom: 0;
    justify-content: space-between;
    border-top: 1px solid #cccccc;
    padding-top: 5px;
  }
  .f-item{
    display: block;
    text-align: center;
    width: 25%;
  }
  .f-item-active{
    display: block;
    text-align: center;
    width: 25%;
    color:blue;
  }
</style>
