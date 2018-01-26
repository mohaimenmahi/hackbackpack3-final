import React, { Component } from 'react';
import Router from './Router';

class Materials extends Component {
  render(){
    return(
      <div>
				<div className="App">
					<Router />
				</div>
				<h2>Course Materials: </h2>
				<ul>
					<li><h4><a href="/#">Transportation</a></h4></li>
					<li><h4><a href="/#">Foundation</a></h4></li>
					<li><h4><a href="/#">Structural</a></h4></li>
					<li><h4><a href="/#">Enviornmental</a></h4></li>
				</ul>
      </div>
    );
  }
}

export default Materials;
