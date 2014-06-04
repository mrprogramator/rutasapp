/** @jsx React.DOM */

var Polyline = React.createClass({
	componentWillMount: function () {
		this.marker = new google.maps.Polyline({
			map: this.props.map.getMap(),
			path: this.props.points
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
	
	render: function () {
		var points = this.props.points.map(function (point) {
			return (
				<div className="point">
					<span className="lat">{point.lat}</span>
					<span className="lng">{point.lng}</span>
				</div>
			);
		});
		
		return (
			<div className="map-overlay polyline">
				{points}
			</div>
		);
	}
});

