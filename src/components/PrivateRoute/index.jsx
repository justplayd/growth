import React from 'react';
import { Redirect, Route } from 'react-router-dom';

function PrivateRoute({
	redirect,
	component: Component,
	path,
	...rest
}) {
	const RouteComponent = redirect ? Redirect : Route;

	return (
		<RouteComponent
			{...rest}
			render={(props) => {
				const { match: { params } } = props;

				return <Component {...props} {...rest} {...params} />;
			}}
		/>
	);
}

export default PrivateRoute;
