import React from 'react';

function Layout(props) {
	const { children, classBlock } = props;

	return (
		<main
			className={classBlock}
		>
			{children}
		</main>
	);
}

Layout.propTypes = {};
Layout.defaultProps = {};

export default Layout;
