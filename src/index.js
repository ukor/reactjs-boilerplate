import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import App from './Component/App'
const Root = (
	<BrowserRouter>
		<Provider>
			<App />
		</Provider>
	</BrowserRouter>
);

ReactDom.render(Root, document.getElementById('app'));