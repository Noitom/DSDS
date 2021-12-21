<template>
  <div class="menubar-div">
    <Layout>
      <Layout.Header :style="{ position: 'fixed', zIndex: 1, width: '100%', background: '#fefefe', padding: '20px 0 0 0' }">
        <div class="logo-col">
          <img src="@/assets/snf-logo.png">
        </div>
        <a-menu  v-model="Current" mode="horizontal" >
            <a-menu-item v-for="menu in Menus" :key="menu.menuKey" @click="handleClick"> {{ menu.name }} </a-menu-item>
        </a-menu>
      </Layout.Header>
    </Layout>
  </div>
</template>

<script>
import { Icon, Layout } from 'ant-design-vue'
export default {
  name: 'menuBar',
  components: {
    'a-icon': Icon,
    Layout,
    'Layout.Header': Layout.Header
  },
  data () {
    return {
      Menus: [
        {menuKey: 'homePage', name: '首页'},
        {menuKey: 'dataSearch', name: '数据检索'},
        {menuKey: 'dataCenter', name: '数据中心'},
        {menuKey: 'dataStatistics', name: '统计分析'},
        {menuKey: 'equipmentCenter', name: '装备中心'},
        {menuKey: 'scientificOnline', name: '科考在线'},
        {menuKey: 'systemManage', name: '系统管理'},
        {menuKey: 'personalCenter', name: '个人中心'}
      ],
      Current: ['homePage']
    }
  },
  methods: {
    handleClick (e) {
      if (this.$route.name === e.key) return
      this.$router.push(e.key)
    }
  },
  mounted: function () {
    this.$router.onReady(() => { this.Current = [this.$route.name] })
    // request auth
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  margin: 0 0 0px 0;
  /* padding: 0 0 0 0; */
  box-sizing:border-box；
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.logo-col {
  width: 165px;
  height: 52px;
  background: rgba(255, 255, 255, 0.2);
  margin: -9px 0 0 8%;
  float: left;
}
</style>
