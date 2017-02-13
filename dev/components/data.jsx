import React from "react";
import ReactDOM from "react-dom";

		var xhr;

		var IPAddressDisplay = React.createClass({
			render: function() {
				return (
					<div>
						<h3>{this.props.ip}</h3>
						<h4>( This is your IP address...probably :P)</h4>
					</div>
				);
			}
		});
		 
		var IPAddressContainer = React.createClass({
		  getInitialState: function() {
		    return {
		      ip_address: "..."
		    };
		  },
		  componentDidMount: function() {
		    xhr = new XMLHttpRequest();
		    xhr.open('GET', "https://ipinfo.io/json", true);
		    xhr.send();
		 
		    xhr.addEventListener("readystatechange", this.processRequest, false);
		  },
		  processRequest: function() {
		      if (xhr.readyState == 4 && xhr.status == 200) {
		          var response = JSON.parse(xhr.responseText);
		 
		          this.setState({
		            ip_address: response.ip
		          });
		      }
		  },
		  render: function() {
		      return (
		          <IPAddressDisplay ip={this.state.ip_address}/>
		      );
		    }
		});

export default IPAddressContainer