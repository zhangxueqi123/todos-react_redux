import React, {Component, PropTypes} from 'react'
import {render} from 'react-dom'
import {ACTIVE}from '../type/liType'
class Foot extends Component {
	clearAll(){
		this.props.actions.clearAll();
	}
	showAll(){
		this.props.actions.showAll();
	}
	active(e){
		this.props.actions.active();
		//this.props.callBack(ACTIVE,this.props.sid);
	}
	completed(){
		this.props.actions.completed();
	}
	render () {
		let todos=this.props.todos;
		let canDisplay = {display: todos.length ? 'block':'none'};
		let checkedNum=0;
		this.props.todos.map((todo,index)=>{
			todo.completed ? checkedNum++ : void(0);
			//todos:state.todos.filter(todo => todo.completed===false)  onClick={this.active.bind(this)}
		});
		// let activeTodos = [];
		// this.props.todos.map((todo,index)=>{
        // if(todo.completed===false){
        //      activeTodos.push(todo);
		// }
		// });
		return (
			<div id="foot" style={canDisplay}>
		 		<b>{todos.length-checkedNum} items left </b>
				 <a id='footlabel1' 
		 		onClick={this.showAll.bind(this)}>
		 		All
		 		</a>
				 <a id='footlabel2' 
		 		onClick={this.active.bind(this)}>
		 		Active
		 		</a>
				 <a id='footlabel3' 
		 		onClick={this.completed.bind(this)}>
		 		Completed
		 		</a>
		 		<a id='footlabel' 
		 		onClick={this.clearAll.bind(this)}>
		 		Clear {checkedNum} completed item
		 		</a>
		 	</div>
		)
	}
}
module.exports=Foot;