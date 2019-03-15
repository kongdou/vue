var app = new Vue({
	el: '#app',
	data: {
		goods: [
		  {
				id: 1,
				name: 'iphone 8',
				price: 6188,
				count: 1
			},
			{
				id: 2,
				name: 'ipad pro',
				price: 2132,
				count: 2
			},
			{
				id: 3,
				name: 'Mac Book Pro',
				price: 12322,
				count: 1
			}]
		},
	computed: {
		totalPrice: function(){
			var total = 0
			for(var i = 0;i<this.goods.length;i++){
				total += this.goods[i].price * this.goods[i].count;
			}
			return total;
		}
	},
	methods: {
		handleReduce: function(index){
			if(this.goods[index].count === 1) return;
			this.goods[index].count --;
		},
		handleAdd: function(index){
			this.goods[index].count ++;
		},
		handleRemove: function(index) {
			this.goods.splice(index,1);
		}
	}
	});