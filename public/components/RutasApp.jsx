/** @jsx React.DOM */

var RutasApp = React.createClass({
	getInitialState: function () {
		return { activeLineas: [], position: null };
	},
	componentWillMount: function () {
		this.activeLineasPolys = {};
		
		if (navigator.geolocation) {
			this.positionWatch = navigator.geolocation.watchPosition(this.handlePositionChange);
		}
	},
	
	handlePositionChange: function (pos) {
		this.setState({
			position: {
				lat: pos.coords.latitude,
				lng: pos.coords.longitude
			}
		});
	},
	hangleSelectionChange: function (activeLineas) {
		this.setState({ activeLineas: activeLineas });
	},
	
	render: function () {
		function f() { return Math.floor(0xFF * Math.random()); }
		
		var overlays = this.state.activeLineas.map(function (linea) {
			return (
				<Polyline
					key={linea.id}
					map={this.refs.map}
					strokeColor={'rgba('+[f(),f(),f()].join(',')+',1)'}
					points={linea.points} />
			);
		}, this);
		
		if (this.state.position) {
			overlays.push(
				<Marker
					key="position"
					map={this.refs.map}
					lat={this.state.position.lat}
					lng={this.state.position.lng} />
			);
		}
		
		return (
			<div className="rutas-app">
				<ListadoLineas
					onSelectionChange={this.hangleSelectionChange} />
				<GoogleMap
					ref="map"
					disableDefaultUI={true}
					lat={-17.781862}
					lng={-63.178105}
					zoom={13}>{overlays}</GoogleMap>
			</div>
		);
	}
});

