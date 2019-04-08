var app = new Vue({
	el: '#app',
	data: {
		columns: [
			{title: '姓名',key: 'name'},
			{title: '年龄',key: 'age',sortable: true},
			{title: '出生日期',key: 'birthday',sortable: true},
			{title: '地址',key: 'address'}
		],
		data: [
			{name: '王小明', age: 23,birthday: '1999-12-01',address: '北京市海淀区'},
			{name: '张晓刚', age: 19,birthday: '1995-12-01',address: '北京市朝阳区'},
			{name: '李晓红', age: 18,birthday: '1994-12-01',address: '北京市大兴区'},
			{name: '周小薇', age: 26,birthday: '2002-12-01',address: '南京市'}
		]
		},
		methods: {
			handleAddData: function(){
				this.data.push({name: '刘小天', age: 28,birthday: '1988-12-01',address: '天津市'});
			}
		}
	});