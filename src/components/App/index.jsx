import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';

import theme from './../../theme';
import store, { history } from './../../store';
import modules from '../../modules';
import PrivateRoute from '../../components/PrivateRoute';

function App() {
	const routes = [].concat(...(modules.map((module) => module.routes || [])));

	return (
		<MuiThemeProvider theme={createTheme(theme)}>
			<Provider store={store}>
				<Router history={history}>
					<Switch>
						{routes.map((route) => <PrivateRoute exact {...route} />)}
					</Switch>
				</Router>
			</Provider>
		</MuiThemeProvider>
	);
}

App.propTypes = {};
App.defaultProps = {};

export default App;
