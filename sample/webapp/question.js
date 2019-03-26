Vue.component('question',{
	props: ['value'],
	template: '<div>\
						   <div style="width:100%" v-if="this.page == 1">\
						     <span>1.���������Ա��ǣ�</span>\
						     <div class="options" v-for="(item,index) in sex_list">\
						     	<input type="radio" :value="item.name" @change="radio_change($event,index)" name="sexy" :checked="item.checked">{{item.name}}\
						     </div>\
						     <div class="setp_bottom">\
						     	<button :disabled="disabledOne" :class="[{disabledColor: disabledOne},buttonone,greycolor]" @click="nextQuestionTwo">��һ��</button>\
						     	<button class="[buttonone]" @click="restartQuestionOne">����</button>\
						     </div>\
						   </div>\
						   <div style="width:100%" v-else-if="this.page == 2">\
						     <span>2.��ѡ��������Ȥ���ã�</span>\
						     <div class="options" v-for="(item,index) in hobbies">\
						     	<input type="checkbox" :value="item.name" @change="checkboxChange($event,index)" name="hobbies" :checked="item.checked">{{item.name}}<br>\
						     </div>\
						     <div class="setp_bottom second_quesiton">\
						     	<button :disabled="disabledTwo" :class="[greycolor,{disabledColor: disabledTwo}]" @click="nextQuestionThree">��һ��</button>\
						     	<button @click="lastStepOne">��һ��</button>\
						     	<button @click="restartQuestionTwo">����</button>\
						     </div>\
						   </div>\						   
						   <div style="width:100%" v-else="this.page == 2">\
						     <span>3.�����һ���Լ���</span>\
						     <div>\
						     	<textarea name="introduction" autofocus rows="10" cols="40" @blur="checkLength" :value="text"></textarea>\
						     </div>\
						     <div class="setp_bottom second_quesiton">\
						     	<button :disabled="disabledThree" :class="[greycolor,{disabledColor: disabledThree}]" @click="submit">�ύ</button>\
						     	<button @click="lastStepTwo">��һ��</button>\
						     	<button @click="restartQuestionThree">����</button>\
						     </div>\
						   </div>\								   
	           </div>',
	data: function(){
		return {
			sex_list: [
			{name: '��'},
			{name: 'Ů'},
			{name: '����'}
			],
			hobbies: [
			{name: '����'},
			{name: '��Ӿ'},
			{name: '��ë��'},
			{name: '��Ӱ'},
			{name: '����'}
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