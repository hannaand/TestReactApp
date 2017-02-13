import React from "react";
import ReactDOM from "react-dom";

var Square = React.createClass({
  render: function() {
    var squareStyle = {
      height: 150,
      backgroundColor: this.props.color
        };

        return(
          <div style={squareStyle}>
            
          </div>
        );
      }
    });
     
    var Label = React.createClass({
      render: function() {
        var labelStyle = {
          fontFamily: "sans-serif",
          fontWeight: "bold",
          padding: 13,
          margin: 0
        };

        return (
          <p style={labelStyle}>{this.props.color}</p>
        );
      }
    });
     
    var Card = React.createClass({
      render: function() {
        var cardStyle = {
          height: 200,
          width: 150,
          padding: 0,
          backgroundColor: "#FFF",
          WebkitFilter: "drop-shadow(0px 0px 5px #666)",
          filter: "drop-shadow(0px 0px 5px #666)"
        };

        return (
          <div style={cardStyle}>
            <Square color={this.props.color || "#FFA737"}/>
            <Label color={this.props.color}/>
          </div>
        );
      }
    });

export default Card