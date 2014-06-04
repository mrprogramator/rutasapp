/** @jsx React.DOM */

var Marker = React.createClass({
	componentWillMount: function () {
		this.marker = new google.maps.Marker({
			map: this.props.map.getMap(),
			position: this.getLatLng()
		});
	},
	componentWillReceiveProps: function (nextProps) {
		
	},
	componentDidUpdate: function () {
		
	},
	componentWillUnmount: function () {
		this.marker.setMap(null);
		delete this.marker;
	},
	
	getLatLng: function () {
		return { lat: this.props.lat, lng: this.props.lng };
	},
	
	render: function () {
		return (
			<div className="map-overlay marker">
				<span className="lat">{this.props.lat}</span>
				<span className="lng">{this.props.lng}</span>
			</div>
		);
	}
});

