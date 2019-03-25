Vue.component('input-number',{
	template: '<div class="input-number">\
	           <input type="text" :value="currentValue" @change="handleChange">\
	           <button @click="handleUp" :disabled="currentValue >= max">+</button>\
	           <button @click="handleDown" :disabled="currentValue <= min">-</button>\
	</div>',
	props: {
		max: {
			type: Number,
			default: Infinity
		},
		min: {
			type: Number,
			default: -Infinity
		},
		value: {
			type: Number,
			default: 0
		}
		},
		data: function(){
			return {
				currentValue: this.value
			}
		},
		watch: {
			currentValue: function(val){
				this.$emit('input',val);
				this.$emit('on-message',val);
			},
			value: function(val){
				this.updateValue(val);
			}
		},
		methods: {
			updateValue: function(val){
				if (val > this.max) val = this.max;
				if (val < this.min) val = this.min;
				this.currentValue = val;
			},
			handleUp: function(){
				if(this.currentValue>this.max) return;
				this.currentValue +=1;
			},
			handleDown: function(){
				if(this.currentValue<this.min) return;
				this.currentValue -=1;
			},
			handleChange: function(event){
				var val = event.target.value.trim();
				var max = this.max;
				var min = this.min;
				
				if(isValueNumber(val)){
					val = Number(val);
					if(val>max){
						this.currentValue = max;
					}else if(val < min){
						this.currentValue = min;
					}
				}else{
					event.target.value = this.currentValue;
				}
			}
		},
		mounted: function(){
			this.updateValue(this.value);
		}
	}
	);

function isValueNumber(val){
	return (/(^-?[0-9]+\.{1}\d+$)|(^-?[1-9][0-9]*$)|(^-?0{1}$)/).test(val+'');
}