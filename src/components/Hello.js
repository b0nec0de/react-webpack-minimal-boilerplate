import React from 'react';
import PropTypes from 'prop-types';

const Hello = ({ hello }) => {
	return (
		<div>
			<p>{hello}</p>
		</div>
	);
};

Hello.propTypes = {
	hello: PropTypes.string
};

export default Hello;
