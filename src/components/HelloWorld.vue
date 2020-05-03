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
                    <button name="1-2" @click="loaduserinfo()">Option 2</button>
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
						<h1>用户基本信息表</h1>
						<div style="text-align: left"><Button type="primary" size="small" style="margin-left: 5px; margin: left" @click="modal7 = true">创建用户</Button></div>
						<Modal
        							v-model="modal7"
        							title="Title"
        							@on-ok="insertOK()">
        							<div>
										<p>Id</p>
										<Input v-model="inputId" type="textarea" :autosize="true" placeholder="Enter Id..." />
										<p>Name</p>
										<Input v-model="inputName" type="textarea" :autosize="true" placeholder="Enter Name..." />
										<p>Password</p>
										<Input v-model="inputPassword" type="textarea" :autosize="true" placeholder="Enter Password..." />
										<p>Role</p>
										<Input v-model="inputRole" type="textarea" :autosize="true" placeholder="Enter Role..." />

									</div>
    							</Modal>
						<br><br>
						<Table border :columns="columns12" :data="userinfo">
       						<template slot-scope="{ row }" slot="id">   
            					<strong>{{ row.id }}</strong>
        					</template>
        					<template slot-scope="{ row, index }" slot="action">
            					<Button type="primary" size="small" style="margin-left: 5px" @click="modal6 = true">Update</Button>
								<Modal
        							v-model="modal6"
        							title="Title"
        							@on-ok="asyncOK(index)">
        							<div>
										<p>Name</p>
										<Input v-model="inputName" type="textarea" :autosize="true" placeholder="Enter Name..." />
										<p>Password</p>
										<Input v-model="inputPassword" type="textarea" :autosize="true" placeholder="Enter Password..." />
										<p>Role</p>
										<Input v-model="inputRole" type="textarea" :autosize="true" placeholder="Enter Role..." />

									</div>
    							</Modal>
            					<Button type="error" size="small" @click="remove(index)">Delete</Button>
        					</template>
							
    					</Table>
						<Page :total="100" show-elevator />
					</div>
                </Card>
            </Content>
        </Layout>
    </div>
</template>

<script>
import axios from 'axios'
import qs from "qs"
export default {	
  name: 'HelloWorld',
  data () {
    return {
	  userinfo:[],
	  id:'',
	  modal6: false,
	  modal7: false,
	  inputId: '',
	  inputName: '',
	  inputPassword: '',
	  inputRole: '',
	  columns12: [
                    {
						title: 'Id',
						align: 'center',
                        slot: 'id'
                    },
                    {
						title: 'Name',
						align: 'center',
                        key: 'name'
                    },
                    {
						title: 'Password',
						align: 'center',
                        key: 'password'
					},
					{
						title: 'Role',
						align: 'center',
                        key: 'role'
					},
                    {
                        title: 'Action',
                        slot: 'action',
                        width: 240,
                        align: 'center'
                    }
                ],
      msg: 'Welcome to Your Vue.js App'
    }
  },
    　　methods: {
    　　　　toNewsPage() {
        　　this.$router.push({path: 'test'})
	　　　　},
			loaduserinfo () {
                var _this = this
                this.$axios.get('/test').then(resp => {
                if (resp && resp.status === 200) {
                    _this.userinfo = resp.data
          			}
        		})
	 		 },
	  		remove (index){
				var _this = this
				var id = this.userinfo[index].id
				var param = {"id":id}
				console.log("hit 1"+id)
			
                this.$axios.delete('/delete',{params:param}).then(resp => {
                if (resp && resp.status === 200) {
					console.log("hit 2")
					this.loaduserinfo()
          			}
				})

				console.log("hit 3")
			  },
			  update (){
				 modal6 = true

			  },
			  asyncOK (index) {
				var _this = this
				var id = this.userinfo[index].id  
				var param = qs.stringify({"id":id,"name":this.inputName,"password":this.inputPassword,"role":this.inputRole})
				console.log(param)
				this.$axios.put('/update',param).then(resp => {
                if (resp && resp.status === 200) {
					console.log("hit 2")
					this.loaduserinfo()
          			}
				})
				console.log("hit 3")
			   },
			  insert (){
				 modal7 = true

			  },
			  insertOK () {
				var _this = this
				
				var param = qs.stringify({"id":this.inputId,"name":this.inputName,"password":this.inputPassword,"role":this.inputRole})
				console.log(param)
				this.$axios.post('/insert',param).then(resp => {
                if (resp && resp.status === 200) {
					console.log("hit 2")
					this.loaduserinfo()
          			}
				})
				console.log("hit 3")
            }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
