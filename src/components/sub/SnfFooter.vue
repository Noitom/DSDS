<template>
  <div class="sny-footer-color">
    <div class="BottomBox">
      <Row class="sny-bok1">
        <Col v-for="BottomMenu in mBottomMenus" :key="BottomMenu.title" span="6">
        <ul>
          <h4>{{ BottomMenu.title }}</h4>
          <li v-for="menu in BottomMenu.menu" :key="menu.text">{{ menu.text }}</li>
        </ul>
        </Col>
      </Row>
      <Row class="sny-bok2">
        <Col span="16">
        <p>{{mBottomExtraData.record}}</p>
        </Col>
        <Col span="8">
        <p class="snf-font-10">{{mBottomExtraData.telephone}}</p>
        </Col>
      </Row>
    </div>
  </div>
</template>
<script>
import { Row, Col } from 'ant-design-vue'
export default {
  name: 'bottomBox',
  data () {
    return {
      mBottomMenus: [
        {title: '狮子鱼科技', menu: [{text: 'Menu1'}, {text: 'Menu2'}, {text: 'Menu3'}, {text: 'Menu4'}]},
        {title: '资源', menu: [{text: 'API'}, {text: '用户案例'}]},
        {title: '关于', menu: [{text: 'Menu1'}, {text: 'Menu2'}, {text: 'Menu3'}, {text: 'Menu4'}]},
        {title: '支持', menu: [{text: 'Menu1'}, {text: 'Menu2'}, {text: 'Menu3'}, {text: 'Menu4'}]}
      ],
      mBottomExtraData: {record: 'xxx-xxxxxx', telephone: '027-xxxxxx'}
    }
  },
  watch: {
    openKeys (val) {
      console.log('openKeys', val)
    }
  },
  methods: {
    handleClick (e) {
      console.log('click', e)
    },
    titleClick (e) {
      console.log('titleClick', e)
    }
  },
  components: {
    Row,
    Col
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li {
    font-family: Noto Sans SC;
    font-size: 10px;
    padding-top: 5px;
    font-weight: 400;
}
p {
    margin-top: 5px;
}
h4 {
    font-family: Noto Sans SC;
    font-size: 12px;
}
.sny-bok1 {
    padding-top: 20px;
}
.sny-bok2 {
    height: 50px;
    border-top:1px solid rgb(212, 210, 210);
    margin-top:20px;
}
.BottomBox {
  background: #202226;
}
</style>
