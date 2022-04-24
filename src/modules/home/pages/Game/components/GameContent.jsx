import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

function GameContent(props) {
	const {
		handleChangeWrong,
		handleChangeSuccess,
		contentTitle,
		items,
		answer
	} = props;
	const [selected, setSelected] = useState(0);
	const [done, setDone] = useState(false);
	const [wrong, setWrong] = useState(false);

	const handleClick = (value) => () => {
		setSelected(value);
	};

	useEffect(() => {
		if (!selected) return;

		setTimeout(() => {
			if (answer.includes(selected)) {
				setDone(true);
			} else {
				setWrong(true);
			}
		}, 500);
	}, [selected, answer]);

	useEffect(() => {
		setTimeout(() => {
			if (wrong) {
				handleChangeWrong();
			}
		}, 500);
	}, [wrong, handleChangeWrong]);

	useEffect(() => {
		setTimeout(() => {
			if (done) {
				handleChangeSuccess();
			}
		}, 500);
	}, [done, handleChangeSuccess]);

	return (
		<div className="game-content">
			{
				contentTitle ? (
					<div className="game-content_title">{contentTitle}</div>
				) : null
			}
			<div className="game-i_wrap">
				{
					items && Array.isArray(items) && items.length ? (
						items.map(({
							key,
							text,
							value
						}) => (
							<div
								key={text}
								className={classNames('game-i', {
									disabled: selected && selected !== value,
									'icons-selected': selected === value && !done && !wrong,
									'icons-done': selected === value && done && !wrong,
									'icons-wrong': selected === value && wrong && !done
								})}
							>
								<div
									className="game-i_content"
									onClick={handleClick(value)}
									role="button"
									tabIndex="0"
								>
									<div className="game-i_content-a">
										{key}
									</div>
									<div className="game-i_content-text">
										{text}
									</div>
								</div>
							</div>
						))
					) : null
				}
			</div>
		</div>
	);
}

GameContent.propTypes = {};
GameContent.defaultProps = {};

export default GameContent;
