import React from 'react';
import { connect } from 'react-redux';

import Layout from './../../../../layouts';
import Intro from '../../../../components/Intro/Intro';
import ModulePage from './../../../../components/ModulePage';

class FinishPage extends ModulePage {
	componentDidMount() {
		super.componentDidMount();
	}
	componentDidUpdate() {
		super.componentDidUpdate();
	}
	render() {
		const {
			linkToStart,
			introTotalText,
			introSubTitle,
			keyItem,
			keyItemInit,
			items,
			count
		} = this.props;

		return (
			<Layout
				classBlock="finish"
			>
				<Intro
					linkToStart={linkToStart}
					introSubTitle={introSubTitle}
					introTotalText={introTotalText}
					keyItem={keyItem}
					keyItemInit={keyItemInit}
					items={items}
					count={count}
				/>
			</Layout>
		);
	}
}

FinishPage.propTypes = {};
FinishPage.defaultProps = {};

const mapStateToProps = ({
	game: {
		keyItem,
		keyItemInit,
		items,
		count
	}
}) => ({
	count,
	keyItem,
	keyItemInit,
	items
});

export default connect(mapStateToProps, undefined)(FinishPage);
