import React from 'react';
import PropTypes from 'prop-types';

const TabContent = ({ children }) => <div className='c-tab-content'>{children}</div>;

TabContent.propTypes = {
	children: PropTypes.element.isRequired
};

export default TabContent;
