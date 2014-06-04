/** @jsx React.DOM */

var GoogleMap = React.createClass({
	getDefaultProps: function () {
		return {
			disableDefaultUI: false
		};
	},
	componentWillMount: function () {
		
	},
	componentDidMount: function () {
		var options = {
			disableDefaultUI: this.props.disableDefaultUI,
			center: new google.maps.LatLng(this.props.lat, this.props.lng),
			zoom: this.props.zoom
		};
		
		this.map = new google.maps.Map(this.getDOMNode(), options);
	},
	componentWillReceiveProps: function (nextProps) {
		if (nextProps.zoom) {
			this.map.set('zoom', nextProps.zoom);
		}
	},
	
	getMap: function () {
		return this.map;
	},
	
	render: function () {
		return (
			<div className="google-map">{this.props.children}</div>
		);
	}
});

