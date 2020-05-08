<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
		height: 900px;
    }
    .layout-header-bar{
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
</style>
<template>
    <div class="layout">
        <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
            <Menu active-name="1-1" theme="dark" width="auto" :open-names="['1']" @on-select="navigateTo">
                <Submenu name="1">
                    <template slot="title">
                        <Icon type="ios-navigate"></Icon>
                        Item 1
                    </template>
                    <menu-item name="1-1">Option 1</menu-item>
                    <menu-item name="userinfo">Option 2</menu-item>
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
                </Card>
            </Content>
        </Layout>
    </div>
</template>

<script>
import axios from 'axios'
import qs from "qs"
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import UserInfo from '@/components/UserInfo'
export default {	
  name: 'HelloWorld',
  data () {
    return {                  
      msg: 'Welcome to Your Vue.js App'
    }
  },
    　　methods: {
    　　　　toNewsPage() {
        　　this.$router.push({path: 'test'})
	　　　　},
	 		navigateTo (name) {
				this.$router.push(name);
				console.log(name)
    		}
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
