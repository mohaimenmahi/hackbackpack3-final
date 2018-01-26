import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import './index.css';
import App from './components/App';
import Routine from './components/Routine';
import Materials from './components/Materials';
import BloodGroup from './components/BloodGroup';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route exact path='/' component={App} />
			<Route path='/routine' component={Routine}/>
			<Route path='/materials' component={Materials} />
			<Route path='/bloodgroup' component={BloodGroup} />
		</Switch>
	</BrowserRouter>,
	document.getElementById('root')
);
registerServiceWorker();
