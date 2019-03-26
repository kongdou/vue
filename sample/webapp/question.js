Vue.component('question',{
	props: ['value'],
	template: '<div>\
						   <div style="width:100%" v-if="this.page == 1">\
						     <span>1.请问您的性别是：</span>\
						     <div class="options" v-for="(item,index) in sex_list">\
						     	<input type="radio" :value="item.name" @change="radio_change($event,index)" name="sexy" :checked="item.checked">{{item.name}}\
						     </div>\
						     <div class="setp_bottom">\
						     	<button :disabled="disabledOne" :class="[{disabledColor: disabledOne},buttonone,greycolor]" @click="nextQuestionTwo">下一步</button>\
						     	<button class="[buttonone]" @click="restartQuestionOne">重置</button>\
						     </div>\
						   </div>\
						   <div style="width:100%" v-else-if="this.page == 2">\
						     <span>2.请选择您的兴趣爱好：</span>\
						     <div class="options" v-for="(item,index) in hobbies">\
						     	<input type="checkbox" :value="item.name" @change="checkboxChange($event,index)" name="hobbies" :checked="item.checked">{{item.name}}<br>\
						     </div>\
						     <div class="setp_bottom second_quesiton">\
						     	<button :disabled="disabledTwo" :class="[greycolor,{disabledColor: disabledTwo}]" @click="nextQuestionThree">下一步</button>\
						     	<button @click="lastStepOne">上一步</button>\
						     	<button @click="restartQuestionTwo">重置</button>\
						     </div>\
						   </div>\						   
						   <div style="width:100%" v-else="this.page == 2">\
						     <span>3.请介绍一下自己：</span>\
						     <div>\
						     	<textarea name="introduction" autofocus rows="10" cols="40" @blur="checkLength" :value="text"></textarea>\
						     </div>\
						     <div class="setp_bottom second_quesiton">\
						     	<button :disabled="disabledThree" :class="[greycolor,{disabledColor: disabledThree}]" @click="submit">提交</button>\
						     	<button @click="lastStepTwo">上一步</button>\
						     	<button @click="restartQuestionThree">重置</button>\
						     </div>\
						   </div>\								   
	           </div>',
	data: function(){
		return {
			sex_list: [
			{name: '男'},
			{name: '女'},
			{name: '保密'}
			],
			hobbies: [
			{name: '看书'},
			{name: '游泳'},
			{name: '羽毛球'},
			{name: '电影'},
			{name: '音乐'}
			],
			disabledOne: true,
			disabledTwo: true,
			disabledThree: true,
			buttonone: 'buttonOne',
			greycolor:'greyColor',
			text:'',
			page: this.value,
			user_data:{
            }
		}
	},
	methods: {
		radio_change: function(el,index){
			var radio_value = el.target.value;
			if(typeof radio_value != 'undefined' && radio_value != ''){
				this.disabledOne = false;
				this.sex_list[index].check = true;
			}else{
				this.disabledOne = true;
			}
		},
	}
	})