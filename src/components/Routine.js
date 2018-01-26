import React, { Component } from 'react';
import Router from './Router';
import { Table } from 'react-bootstrap';
import { heads, day1, day2, day3, day4, day5 } from '../data/routine_data';
import '../App.css';

class Routine extends Component {
  render(){
    return(
      <div className="App">
				<Router />
				<Table striped bordered condensed hover className="table-sz">
					<tr>
						{heads.map((item, i) => <th key={i}>{item}</th>)}
					</tr>
					<tr>
            {day1.map((item, i) => <td key={i}>{item}</td>)}
					</tr>
					<tr>
						{day2.map((item, i) => <td key={i}>{item}</td>)}
					</tr>
					<tr>
						{day3.map((item, i) => <td key={i}>{item}</td>)}
					</tr>
					<tr>
						{day4.map((item, i) => <td key={i}>{item}</td>)}
					</tr>
					<tr>
						{day5.map((item, i) => <td key={i}>{item}</td>)}
					</tr>
				</Table>
      </div>
    );
  }
}

export default Routine;
