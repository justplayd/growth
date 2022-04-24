import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { BallTriangle } from 'react-loader-spinner';
import { Redirect } from 'react-router-dom';
import classNames from 'classnames';

import Layout from './../../../../layouts';
import ModulePage from './../../../../components/ModulePage';
import GameContent from './components/GameContent';
import Sidebar from './components/Sidebar';
import { nextStep, resetState } from '../../../../actions/game';

class GamePage extends ModulePage {
	constructor(props) {
		super(props);
		this.state = {
			openMenu: false,
			loading: false,
			loss: false
		};
	}
	componentDidMount() {
		super.componentDidMount();
	}
	componentDidUpdate() {
		super.componentDidUpdate();
	}
	handleChangeWrong = () => {
		setTimeout(() => {
			this.setState({ loss: true });
		}, 500);
	};
	handleChangeSuccess = () => {
		const {
			actions,
			keyItem
		} = this.props;

		this.setState({ loading: true });

		setTimeout(() => {
			actions.nextStep(keyItem);

			this.setState({ loading: false });
		}, 500);
	};
	handleMenu = () => {
		const { openMenu } = this.state;

		this.setState({ openMenu: !openMenu });
	};
	render() {
		const {
			answer,
			contentTitle,
			items,
			fullList,
			keyItem,
			linkToFinish
		} = this.props;
		const {
			openMenu,
			loading,
			loss
		} = this.state;

		if (loss || !items) return <Redirect to={linkToFinish} />;

		return (
			<Layout
				classBlock="game"
			>
				<div className="container-fluid">
					<div className="row justify-content-between">

						{
							items && loading ? (
								<div className="modal-loader">
									<BallTriangle color="#00BFFF" height={80} width={80} />
								</div>
							) : (
								<>
									<div className="col-lg-8 p-lg-0">
										<GameContent
											answer={answer}
											contentTitle={contentTitle}
											items={items}
											keyItem={keyItem}
											handleChangeSuccess={this.handleChangeSuccess}
											handleChangeWrong={this.handleChangeWrong}
										/>
									</div>
									<div
										className={
											classNames('col-lg-4 col-xl-3 p-0 sidebar-wrap', {
												active: openMenu
											})
										}
									>
										<Sidebar items={fullList} keyItem={keyItem} />
									</div>
									<div
										className={
											classNames('menu', {
												'icons-menu-open': !openMenu,
												'icons-menu-close': openMenu
											})
										}
										onClick={this.handleMenu}
										role="button"
										tabIndex="0"
										aria-label="Toggle Menu"
									/>
								</>
							)
						}
					</div>
				</div>
			</Layout>
		);
	}
}

GamePage.propTypes = {};
GamePage.defaultProps = {};

const mapStateToProps = ({
	game: {
		value,
		keyItem,
		items
	}
}) => ({
	...value,
	keyItem,
	fullList: items
});
const mapDispatchToProps = (dispatch) => ({
	actions: {
		nextStep: bindActionCreators(nextStep, dispatch),
		resetState: bindActionCreators(resetState, dispatch)
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);
