Vue.component('v-table',{
	props: {
		columns: {
			type: Array,
			default: function(){return []}
		},
		data: {
			type: Array,
			default: function(){return []}
		}
		},
		data: function(){
			return {
				currentColumns: [],
				currentData: []
			}
		},
		render: function(createElement){
			
			var ths = [];
			this.currentColumns.forEach(function(col,index){
				if(col.sortable){
					ths.push(createElement('th',[
						createElement('span',col.title),
						createElement('a',{class: })
						]));
				}
				});
			
		}
	}
	);