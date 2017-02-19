
import {ADD_TODO,
	DELETE_TODO,
	EDIT_TODO,
	COMPLETE_TODO,
	COMPLETE_ALL,
	ACTIVE,
	SHOWALL,
	COMPLETED,
	CLEAR_COMPLETED,
	INPUT_TODO,
	BLUR_TODO,
	VisibilityFilters,
	CHECK_TODO} from '../type/acType'

const initialState = {
	visibilityFilter: VisibilityFilters.SHOW_ALL,
    todos: [],
	allTodos:[]
}
const initialProps = {
	atodos:[]
}
//const alltodos = props.todos;
// const all={
// 	allTodos: []
// }
//const SHOW_ALL = 
function todoApp(state=initialState,action){
	// let allTodos=[];
	//alert(todos);
	switch(action.type){
		case ADD_TODO:
		return Object.assign({},state,{
			todos:[
				...state.todos,
				{
					text:action.text,
					completed:false,
					edit:false
				}
			],

          allTodos:[
			  ...state.todos,
			  	{
					text:action.text,
					completed:false,
					edit:false
				}

		  ]
//,showall.push(todos)    showall=all,
		} );

		//alert(todos);
		//allTodos.push(todos)
		case DELETE_TODO:
		return Object.assign({},state,{
			todos:[
				...state.todos.slice(0,action.sid),
				...state.todos.slice(action.sid+1)
				
			]
		});
		case EDIT_TODO:
		return Object.assign({},state,{
			todos:[
				...state.todos.slice(0,action.sid),
				Object.assign({}, state.todos[action.sid], {
					edit: true
				}),
				...state.todos.slice(action.sid+1)
				
			]
		});
		case COMPLETE_TODO:
		return Object.assign({},state,{
			todos:[
				...state.todos.slice(0,action.sid),
				Object.assign({}, state.todos[action.sid], {
					completed: action.bool
				}),
				...state.todos.slice(action.sid+1)
				
			],
			allTodos:[
				...state.allTodos.slice(0,action.sid),
				Object.assign({}, state.allTodos[action.sid], {
					completed: action.bool
				}),
				...state.allTodos.slice(action.sid+1)
			]
		});
		case COMPLETE_ALL:
			let temTodos = [];
			state.todos.map(function(todo,index){
				todo.completed=action.bool;
				temTodos.push(todo);
			})
		return Object.assign({},state,{
			todos: temTodos
		});
		case CLEAR_COMPLETED:
		return Object.assign({},state,{
				todos: state.todos.filter(todo => todo.completed===false)
			});
			// case visibilityFilters.SHOW_ACTIVE:
			//  return todos.filter(todo => !todo.completed)
		case ACTIVE:
		// let activeTodos = [];
		// state.allTodos.map(function(todo,index){
		// 	if(todo.completed===false){
		// 		//todo.completed===true;
        //     activeTodos.push(todo);
		// 	}
		// })
		// for(let i = 0;i<state.allTodos.length;i++){
        //       if(todo.completed===false){
        //            activeTodos.push(todo);
		// 	  }
		// }
		//alert(state);
		//alert(allTodos.length);
		// let todos=this.props.todos;
		// let activeTodos =[];
		// 	this.props.todos.map((todo,index)=>{
		// 	//todo.completed ? checkedNum++ : void(0);
		// 	//todos:state.todos.filter(todo => todo.completed===false)
		// 	if(todo.completed===false){
        //          activeTodos.push(todo);
		// 	}
		// });
		//debugger
		// let newState=[];
		// newState.push(state.todo);
		// newState.push(state.allTodos);
		let result = Object.assign({},state,{
				
				todos:[ ...state.allTodos.filter(todo => todo.completed===false)],
				allTodos:[ ...state.allTodos]
					// ...state.todos.filter(todo => todo.completed===false)
					//todos:activeTodos
					
			});

			return result;
			
		//let activeTodos = [];
		//let activeTodos = this.props.todos ;
			// this.props.todos.map(function(todo,index){
			// 	todo.completed=action.bool;
				
			// })
		
			// return Object.assign({},state,{
			// 	todos:[...state.todos,
			// 	 state.todos.filter(todo => todo.completed===false)
			// 	]
				
			// });
		case COMPLETED:
		// 	let comTodos = [];
		// state.todos.map(function(todo,index){
        //     	if(todo.completed===true){
		// 		//todo.completed===true;
        //     comTodos.push(todo);
		// 	}
		// })
		//todos:[ ...state.allTodos.filter(todo => todo.completed===true)]
		//debugger
		// let newState2=[];
		// newState2.push(state.todo);
		// newState2.push(state.allTodos)
		return Object.assign({},state,{
				//todos: comTodos
				
				todos:[ ...state.allTodos.filter(todo => todo.completed===true)],
				allTodos:[ ...state.allTodos],
					//todos:state.todos.filter(todo => todo.completed===true)
					
			});
		case SHOWALL:
		let allTodos = [];
		allTodos.push(...state.allTodos);
		return Object.assign({},state,{
				//todos: comTodos
				
				todos: allTodos,
				//allTodos:[ ...state.allTodos],
				//todos:[ ...state.allTodos.filter(todo => todo.completed===true)],
				
					//todos:state.todos.filter(todo => todo.completed===true)
					
			});
		case INPUT_TODO:
		return Object.assign({},state,{
			todos:[
				...state.todos.slice(0,action.sid),
				Object.assign({}, state.todos[action.sid], {
					text: action.text
				}),
				...state.todos.slice(action.sid+1)
				
			]
		});
		case BLUR_TODO:
		return Object.assign({},state,{
			todos:[
				...state.todos.slice(0,action.sid),
				Object.assign({}, state.todos[action.sid], {
					edit: false
				}),
				...state.todos.slice(action.sid+1)
				
			]
		});
		
		default:
		return state;
	}
}

module.exports=todoApp;