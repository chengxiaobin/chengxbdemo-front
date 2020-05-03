<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-header-bar{
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
</style>
<template>
    <div class="layout">
        <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
            <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']">
                <Submenu name="1">
                    <template slot="title">
                        <Icon type="ios-navigate"></Icon>
                        Item 1
                    </template>
                    <menu-item name="1-1" @click="toNewsPage()">Option 1</menu-item>
                    <menu-item name="1-2">Option 2</menu-item>
                    <menu-item name="1-3">Option 3</menu-item>
                </Submenu>
                <Submenu name="2">
                    <template slot="title">
                        <Icon type="ios-keypad"></Icon>
                        Item 2
                    </template>
                    <menu-item name="2-1">Option 1</menu-item>
                    <menu-item name="2-2">Option 2</menu-item>
                </Submenu>
                <Submenu name="3">
                    <template slot="title">
                        <Icon type="ios-analytics"></Icon>
                        Item 3
                    </template>
                    <menu-item name="3-1">Option 1</menu-item>
                    <menu-item name="3-2">Option 2</menu-item>
                </Submenu>
            </Menu>
        </Sider>
        <Layout :style="{marginLeft: '200px'}">
            <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}"></Header>
            <Content :style="{padding: '0 16px 16px'}">
                <Breadcrumb :style="{margin: '16px 0'}">
                    <BreadcrumbItem>Home</BreadcrumbItem>
                    <BreadcrumbItem>Components</BreadcrumbItem>
                    <BreadcrumbItem>Layout</BreadcrumbItem>
                </Breadcrumb>
                <Card>
					<div style="height: 600px">
						<h1>{{ msg }}</h1>
						<h2>Essential Links</h2>
						<ul>
						  <li>
							<a
							  href="https://vuejs.org"
							  target="_blank"
							>
							  Core Docs
							</a>
						  </li>
						  <li>
							<a
							  href="https://forum.vuejs.org"
							  target="_blank"
							>
							  Forum
							</a>
						  </li>
						  <li>
							<a
							  href="https://chat.vuejs.org"
							  target="_blank"
							>
							  Community Chat
							</a>
						  </li>
						  <li>
							<a
							  href="https://twitter.com/vuejs"
							  target="_blank"
							>
							  Twitter
							</a>
						  </li>
						  <br>
						  <li>
							<a
							  href="http://vuejs-templates.github.io/webpack/"
							  target="_blank"
							>
							  Docs for This Template
							</a>
						  </li>
						</ul>
						<h2>Ecosystem</h2>
						<ul>
						  <li>
							<a
							  href="http://router.vuejs.org/"
							  target="_blank"
							>
							  vue-router
							</a>
						  </li>
						  <li>
							<a
							  href="http://vuex.vuejs.org/"
							  target="_blank"
							>
							  vuex
							</a>
						  </li>
						  <li>
							<a
							  href="http://vue-loader.vuejs.org/"
							  target="_blank"
							>
							  vue-loader
							</a>
						  </li>
						  <li>
							<a
							  href="https://github.com/vuejs/awesome-vue"
							  target="_blank"
							>
							  awesome-vue
							</a>
						  </li>
						</ul>
					</div>
                </Card>
            </Content>
        </Layout>
    </div>
</template>

<script>
export default {
  name: 'UserInfo',
  data () {
    return {
      userinfo:[],  
      msg: 'Welcome to Your Vue.js App'
    }
  },
    　　methods: {
    　　　　toNewsPage() {
        　　this.$router.push({path: 'test'})
    　　　　},
            loaduserinfo () {
                var _this = this
                this.$axios.get('/userinfo/test').then(resp => {
                if (resp && resp.status === 200) {
                    _this.userinfo = resp.data
          }
        })
      },
    　　}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
