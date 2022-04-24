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
			<Layout
				classBlock="not-found"
			>
				<div
					className="not-found_content"
				>
					<img src="/src/assets/images/404.gif" className="not-found_img img-fluid" alt="not-found" loading="lazy" />
				</div>
			</Layout>
		);
	}
}

PageNotFound.propTypes = {};
PageNotFound.defaultProps = {};

export default PageNotFound;
