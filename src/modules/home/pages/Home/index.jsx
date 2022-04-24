import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Layout from './../../../../layouts';
import Intro from '../../../../components/Intro/Intro';
import ModulePage from './../../../../components/ModulePage';

import { resetState } from '../../../../actions/game';

class HomePage extends ModulePage {
	componentDidMount() {
		super.componentDidMount();

		const { actions } = this.props;
		actions.resetState();
	}
	componentDidUpdate() {
		super.componentDidUpdate();
	}
	render() {
		const {
			introTitle,
			linkTo
		} = this.props;

		return (
			<Layout
				classBlock="intro"
			>
				<Intro
					introTitle={introTitle}
					linkUrl={linkTo}
				/>
			</Layout>
		);
	}
}

HomePage.propTypes = {};
HomePage.defaultProps = {};

const mapDispatchToProps = (dispatch) => ({
	actions: {
		resetState: bindActionCreators(resetState, dispatch)
	}
});

export default connect(null, mapDispatchToProps)(HomePage);
