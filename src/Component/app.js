import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { ApplicationStore } from '../mobxStore';
import styled from 'styled-components';


@inject('ApplicationStore')
@observer
class App extends Component {
	render() {
		const Title = styled.h1`
			font-size: 3em;
			text-align: center;
			color: palevioletred;
		`;
		return (
			<Title>Hello {ApplicationStore.applicationName} </Title>
		)
	}
}

export default App;