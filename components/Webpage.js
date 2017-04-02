const React = require('react')
const FillerText = require('./FillerText')

class Webpage extends React.Component {
	render(){
		return (
			<title>The world's coolest webpage</title>
			<FillerText />
			<FillerText />
		)
	}
}

module exports = Webpage