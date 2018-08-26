import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';


class FilterMenu extends Component {
	static propTypes = {
	}

	static defaultProps = {
	}

	render() {
		return(<div>
			<span>timestamp</span>
			<span>company</span>
			<span>city</span>
			<span>country</span>
			<span>sector</span>
			<span>company</span>
			</div>)
	}
}

export default FilterMenu;