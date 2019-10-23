import reducer from '../reducers/reducer';

let store = {
	_state: {},

	subscribe(observer) {
		this.rerenderEntireTree = observer;
	},

	getState() {
		return this.state;
	},
	rerenderEntireTree() {
		console.log('1');
	},
	dispatch(action) {
		this.state = reducer(this.state, action);
		this.rerenderEntireTree();
	}
};

// function Store(){
// 	this.state = {
// 		list: [],
// 		fieldValue: ''
// 	}
// 	this.addPost = (message) => {
// 		this.state.list.push(message);
// 		this.state.fieldValue = '';
// 		this.rerenderEntireTree();
// 	}
// 	this.updateField = (message) => {
// 		this.state.fieldValue = message;
// 		this.rerenderEntireTree();
// 	}
// 	this.subscribe = (observer) => {
// 		this.rerenderEntireTree = observer;
// 	}
// 	this.rerenderEntireTree = () => {
// 		console.log();
//   }
//   console.log(this)
// };

// class Store {
// 	constructor() {
//     this.state = {
//       list: [],
//       fieldValue: '',
//       color: 'grey'
//     }
// 	}
// 	addPost = (message) => {
//     this.name = message
// 		this.state.list.push({text: message, color: this.name});
// 		this.state.fieldValue = '';
//     this.rerenderEntireTree();
//     console.log(this.state.list)
// 	}
// 	updateField = (message)=> {
// 		this.state.fieldValue = message;
//     this.rerenderEntireTree();
//     this.name = message
//     this.state.color = this.name
// 	}
// 	subscribe =(observer) => {
// 		this.rerenderEntireTree = observer;
// 	}
// 	rerenderEntireTree() {
// 		console.log();
//   }

//   set name(value){
//     switch(true){
//     case /^[A-Z][a-z0-9]{7,}[/*.!]{3,}/.test(value): return this.state.color = 'green'
//     case /^[A-Z][a-z0-9]{0,6}[/*.!]{2,}/.test(value): return this.state.color = 'yellow'
//       default: this.state.color = 'red'
//     }
//   }

//   get name(){
//     return this.state.color
//   }

// }

// let store = new Store()
export default store;
