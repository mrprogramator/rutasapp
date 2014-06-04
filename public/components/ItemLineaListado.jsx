/** @jsx React.DOM */

var ItemLineaListado = React.createClass({
	getInitialState: function () {
		return { linea: null, active: false };
	},
	componentWillMount: function () {
		jQuery.get('/lineas/' + this.props.lineaId, function (linea) {
			linea.points.forEach(function (point) {
				point.lat = Number(point.lat);
				point.lng = Number(point.lng);
			});
			
			this.setState({ linea: linea });
		}.bind(this));
	},
	
	handleClick: function () {
		var active = !this.state.active;
		
		this.setState({ active: active });
		this.props.onClick(active, this.state.linea);
	},
	
	render: function () {
		var linea = this.state.linea;
		
		if (linea === null) {
			return (
				<div className="linea loading">
					<p>Cargando...</p>
				</div>
			);
		}
		
		var classes = React.addons.classSet({
			'linea': true,
			'active': this.state.active
		});
		
		return (
			<div className={classes} onClick={this.handleClick}>
				<header>
					<p>{linea.name}</p>
				</header>
			</div>
		);
	}
});

