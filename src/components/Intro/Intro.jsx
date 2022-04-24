import React from 'react';
import { Link } from 'react-router-dom';

import chunkRight from '../../helpers/chunkRight';

function Intro(props) {
	const {
		introTitle,
		linkUrl,
		introTotalText,
		introSubTitle,
		keyItem,
		keyItemInit,
		linkToStart,
		items,
		count
	} = props;
	/* Used in final page */
	let finalValue = 0;

	if (items && count && keyItem && keyItemInit) {
		const keys = Object.keys(items);
		const isLast = count && keys[count] ? keys[count - 1] : keys[keys.length - 1];
		finalValue = keyItem === keyItemInit ? 0 : chunkRight(String(isLast));
	}
	/* End used in final page */

	return (
		<div className="container">
			<div className="row align-items-center">
				<div className="col-lg-6">
					<img src="/src/assets/images/hand.svg" alt="hand" className="intro-hand img-fluid" />
				</div>
				<div className="col-lg-6">
					<div className="intro-content">
						{
							introTotalText && introSubTitle ? (
								<div className="intro-title-wrap">
									{introSubTitle && <div className="intro-title-score">{introSubTitle}</div>}
									{introTotalText && <div className="intro-title intro-title-2">{`$ ${finalValue} ${introTotalText}`}</div>}
								</div>
							) : null
						}

						{
							introTitle ? (
								<div className="intro-title">{introTitle}</div>
							) : null
						}

						{
							linkToStart ? (
								<Link to={linkToStart} className="btn-orange intro-btn">Try again</Link>
							) : null
						}

						{
							linkUrl ? (
								<Link to={linkUrl} className="btn-orange intro-btn">Start</Link>
							) : null
						}
					</div>
				</div>
			</div>
		</div>
	);
}

Intro.propTypes = {};
Intro.defaultProps = {};

export default Intro;
