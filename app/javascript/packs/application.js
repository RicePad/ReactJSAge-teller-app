
import React from 'react';
import ReactDom from 'react-dom';
import { render } from 'react-dom';
import TitleComponent from '../components/TitleComponent'


ReactDom.render(
	<TitleComponent />, document.querySelector('.index-title')
	);