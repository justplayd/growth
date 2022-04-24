import React from 'react';
import classNames from 'classnames';

import chunkRight from '../../../../../helpers/chunkRight';

function Sidebar(props) {
	const {
		items,
		keyItem
	} = props;
	const filterItems = Object.keys(items).reverse();

	return (
		<div className="sidebar">
			<div className="sidebar-i_list">
				{
					filterItems && Array.isArray(filterItems) && filterItems.length ? (
						filterItems.map((i) => (
							<div
								key={i}
								className={classNames('sidebar-i', {
									disabled: Number(i) < Number(keyItem) && Number(i) !== Number(keyItem),
									'icons-selected': Number(i) === Number(keyItem)
								})}
							>
								<div className="sidebar-i_content">
									<div className="sidebar-i_content-text">
										{'$ '}
										{chunkRight(i)}
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
