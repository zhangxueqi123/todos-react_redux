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
	CHECK_TODO,
	COUNT_NUM} from '../type/acType'
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};
export function addTodo(text){
	return{
		type:ADD_TODO,
		text
	}
}

export function countNum(arr){
	return{
		type:COUNT_NUM,
		arr
	}
}

export function blurTodo(sid){
	return{
		type:BLUR_TODO,
		sid
	}
}

export function inputTodo(sid,text){
	return{
		type:INPUT_TODO,
		sid,
		text
	}
}

export function deleteTodo(sid){
	return{
		type:DELETE_TODO,
		sid
	}
}

export function clearAll(){
	return{
		type:CLEAR_COMPLETED
	}
}
export function showAll(){
	return{
		type:SHOWALL
	}
}
export function active(){
	return{
		type:ACTIVE,
		
	}
}
export function completed(){
	return{
		type:COMPLETED
	}
}

export function completeAll(bool){
	return{
		type:COMPLETE_ALL,
		bool
	}
}

export function completeTodo(sid,bool){
	return{
		type:COMPLETE_TODO,
		sid,
		bool
	}
}

export function editTodo(sid,text){
	return{
		type:EDIT_TODO,
		sid,
		text
	}
}