import {useState, useEffect} from 'react'
import StoreEnhancer from 'Store/enhancer'
import enhancer from './enhancer'
import { http } from 'Services/http'

import './index.styl'

const Artigos = ({ content }) => {
	console.log(content)
	return (
		<div className="artigos-holder">
			<div className="container">
				
			</div>
		</div>
	)
}
export default enhancer(StoreEnhancer(Artigos))