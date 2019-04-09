Vue.component('list',{
	props: {
		list: {
			type: Array,
			default: function(){return []}
		},
	render: function(createElement){
			var _this = this;
			var list = [];
			this.list.forEach(function(msg,index){
				var node = createElement('div',{
																	attrs: {
																		class: 'list-item'
																	}
																	},[
																	createElement('span',msg.name+":"),
																	createElement('div',{
																		             attrs: {
																		             	class: 'list-msg'
																		             }
																		             },[
																		             createElement('p',msg.message),
																		             createElement('a',{
																		             								attrs: {
																		             									class: 'list-reply'
																		             								},
																		             								on: {
																		             									click: function(){
																		             										_this.handleReply(index)
																		             									}
																		             								}
																		             	},'回复')
																		             ])
																	]);
			list.push(node);
				});
			if(this.list.length){
				return createElement('div',{attrs: {class: 'list'}},list);
			}else{
				return createElement('div',{attrs: {class: 'list-nothing'}},'留言列表为空');
			}
	},
	methods: {
		handleReply: function(index){
			this.$emit('reply',index);
		}
	}
	}
	});