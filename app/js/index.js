import React, {Component, PropTypes} from 'react'
import {render} from 'react-dom'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actionCreators from '../action/action'

import Head from './head'
import Body from './body'
import Foot from './foot'

class Index extends Component {
	render () {
		//debugger
		return (
			<div>
				<Head {...this.props.actions}></Head>
				<Body {...this.props}></Body>
				<Foot {...this.props}></Foot>
			</div>
		)
	}
}

function mapStateToProps(state) {
  return { todos: state.todoApp.todos };
}

function mapDispatchToProps(dispatch){
	return {actions:bindActionCreators(actionCreators,dispatch)}
}


export default connect(mapStateToProps,mapDispatchToProps)(Index);