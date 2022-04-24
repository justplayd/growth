import { Component } from 'react';

import config from '../../config.json';

export default class ModulePage extends Component {
	componentDidMount() {
		this.updatePageTitle();
	}
	componentDidUpdate() {
		this.updatePageTitle();
	}
	updatePageTitle() {
		const { title } = this.props;

		document.title = [title, config.application.name].filter(Boolean).join(' - ');
	}
}
