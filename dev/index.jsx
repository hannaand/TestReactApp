import React, { Component }  from "react";
import ReactDOM from "react-dom";
// Import routing components
import { Router, Route, hashHistory, IndexRoute, IndexLink, Link } from 'react-router';
import Home from './components/home.jsx'
import TodoList from './components/todolist.jsx'
import Card from './components/card.jsx'
import LightningCounterDisplay from './components/counter.jsx'
import CounterParent from './components/click.jsx'
import TheBase from './components/thebase.jsx'
import IPAddressContainer from './components/data.jsx'
import * as firebase from 'firebase'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAyBvFrbjLZMvpGzFeqzsBDXlX1sms0Xjc",
  authDomain: "reactapp-c7c73.firebaseapp.com",
  databaseURL: "https://reactapp-c7c73.firebaseio.com",
  storageBucket: "reactapp-c7c73.appspot.com",
  messagingSenderId: "111590817556"
};
firebase.initializeApp(config);

var App = React.createClass({
	render: function() {
		return (
			<div>
				<h1>Reactappen</h1>
				<ul className="header">
					<li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
					<li><Link to="/card" activeClassName="active">Card</Link></li>
					<li><Link to="/todolist" activeClassName="active">TodoList</Link></li>
					<li><Link to="/new" activeClassName="active">Counter</Link></li>
					<li><Link to="/click" activeClassName="active">Click</Link></li>
					<li><Link to="/thebase" activeClassName="active">TheBase</Link></li>
					<li><Link to="/data" activeClassName="active">Data</Link></li>
				</ul>
				<div className="content">
					{this.props.children}
				</div>
			</div>
		)
	}
});
var destination = document.querySelector("#container");

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home}/>
			<Route path="/card" component={(function() { return <Card color="#FFA737" /> })} />
			<Route path="/todolist" component={TodoList} />
			<Route path="/new" component={LightningCounterDisplay} />
			<Route path="/click" component={CounterParent} />
			<Route path="/thebase" component={TheBase} />
			<Route path="/data" component={IPAddressContainer} />
		</Route>
	</Router>,
	destination
);

