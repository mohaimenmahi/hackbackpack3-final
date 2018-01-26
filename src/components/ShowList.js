import React, { Component } from 'react';

class ShowList extends Component {
  render(){
		console.log(this.props);
    return(
      <div className="col-md-6">
				{
					this.props.name.map((name, id) => {
						return <div key={id}><h4>{name}</h4></div>;
					})
				}
			</div>
    );
  }
}

export default ShowList;
