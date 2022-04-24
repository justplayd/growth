import React from 'react';

import Layout from './../../../../layouts';
import ModulePage from './../../../../components/ModulePage';

class PageNotFound extends ModulePage {
	componentDidMount() {
		super.componentDidMount();
	}
	componentDidUpdate() {
		super.componentDidUpdate();
	}
	render() {
		return (
			<Layout>
				<div>404</div>
			</Layout>
		);
	}
}

PageNotFound.propTypes = {};
PageNotFound.defaultProps = {};

export default PageNotFound;
