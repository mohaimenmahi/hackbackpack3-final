import React, { Component } from 'react';
import { Form, FormControl, FormGroup, Button } from 'react-bootstrap';
import Router from './Router';
import ShowList from './ShowList';
import blood_json from '../data/blood-group.json';

class BloodGroup extends Component {
	constructor(props){
	  super(props);

		this.searchByGroup = this.searchByGroup.bind(this);

	  this.state = {
			searchGroup: '',
			list: []
		};
	}
	searchByGroup() {
		const newList = this.searchName(this.state.searchGroup);
		console.log(newList);
		this.setState({
			list : newList
		}, () => {
			console.log('State has updated');
			console.log(this.state);
		})
	}
	searchName(group) {
		let name = blood_json.find((ch) => ch.group === group);
		return name.names;
	}
  render(){
    return(
      <div>
				<Router />
				<Form inline className="col-md-6">
					<FormGroup>
						<FormControl
							type="text"
							placeholder="Search Blood Group"
							onChange={event => this.setState({searchGroup: event.target.value})}
						/>
					</FormGroup>
					<Button onClick={this.searchByGroup}>Submit</Button>
				</Form>
				{' '}
				<ShowList name={this.state.list} />
      </div>
    );
  }
}

export default BloodGroup;
