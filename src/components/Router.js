import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Router extends Component {
  render(){
    return(
      <div className="App">
				<h3 className="link"><Link to='/'>Home</Link></h3>
				{' '}
				<h3 className="link"><Link to='/routine'>Routine</Link></h3>
				{' '}
				<h3 className="link"><Link to='/materials'>Materials</Link></h3>
				{' '}
				<h3 className="link"><Link to='/bloodgroup'>Blood Group</Link></h3>
        {' '}
      </div>
    );
  }
}

export default Router;
