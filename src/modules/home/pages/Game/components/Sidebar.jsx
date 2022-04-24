import React from 'react';
import classNames from 'classnames';

function Sidebar(props) {
	const {
		items,
		keyItem
	} = props;
	const filterItems = Object.keys(items)
		.filter(Number)
		.reverse();

	return (
		<div className="sidebar">
			<div className="sidebar-i_list">
				{
					filterItems && Array.isArray(filterItems) && filterItems.length ? (
						filterItems.map((i) => (
							<div
								key={i}
								className={classNames('sidebar-i', {
									disabled: Number(i) < keyItem && Number(i) !== keyItem,
									'icons-selected': Number(i) === keyItem
								})}
							>
								<div className="sidebar-i_content">
									<div className="sidebar-i_content-text">
										{'$ '}
										{i}
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

Sidebar.propTypes = {};
Sidebar.defaultProps = {};

export default Sidebar;
