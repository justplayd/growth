import React from 'react';
import { Link } from 'react-router-dom';

function Intro(props) {
	const {
		introTitle,
		linkUrl,
		introTotalText,
		introSubTitle,
		keyItem,
		keyItemInit,
		linkToStart
	} = props;
	const total = (keyItem / 2 >= keyItemInit) ? String(keyItem / 2) : String(keyItemInit);
	const totalWithPoint = total.length > 3 ? `${total.slice(0, 1)},${total.slice(1)}` : total;
	const finalValue = keyItem === keyItemInit ? 0 : totalWithPoint;

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
									{introSubTitle && <div className="intro-title-score">{introSubTitle}</div> }
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
