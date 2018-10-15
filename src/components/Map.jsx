import React, {Component} from 'react'
import './Map.css'
import Header from './Header'

export default class Map extends Component {

	render() {
		return (
			<div className="map-component" >
			<Header />
        	<div className= "map" id = "map"></div>
			</div>
  	)
	}
}
