import React from 'react';
import PropTypes from 'prop-types';

const Hello = props => {
	return (
		<div>
			<p>{props.hello}</p>
		</div>
	);
};

Hello.propTypes = {
	hello: PropTypes.string
};

export default Hello;
