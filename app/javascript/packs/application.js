
import React from 'react';
import ReactDom from 'react-dom';
import { render } from 'react-dom';
import App from '../components/App';
import TitleComponent from '../components/TitleComponent'

const indexTitle = document.querySelector('.index-title');

ReactDom.render(
	<App />, document.querySelector('.index-title')
	);