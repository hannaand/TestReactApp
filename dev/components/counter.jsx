import React from "react";
import ReactDOM from "react-dom";

var LightningCounter = React.createClass({
	getInitialState: function() {
    return {
      strikes: 0
    };
  },
  timerTick: function() {
    this.setState({
      strikes: this.state.strikes + 100
    });
  },
  componentDidMount: function() {
    setInterval(this.timerTick, 1000);
  },
  render: function () {
  	var counterStyle = {
      color: "#66FFFF",
      fontSize: 50
    };
 
    var count = this.state.strikes.toLocaleString();
 
    return (
      <h1 style={counterStyle}>{count}</h1>
    );
  }
});

var LightningCounterDisplay = React.createClass({
  render: function() {
  	 var commonStyle = {
        margin: 0,
        padding: 0
      }
 			var divStyle = {
        width: 250,
        textAlign: "center",
        backgroundColor: "black",
        padding: 40,
       	fontFamily: "sans-serif",
        color: "#999",
        borderRadius: 10
      };

      return(
        <div style={divStyle}>
            <LightningCounter/>
        </div>
      );
    }
});

export default LightningCounterDisplay