/** @jsx React.DOM */

var ListadoLineas = React.createClass({
	getInitialState: function () {
		return { linea_ids: [] };
	},
	componentWillMount: function () {
		jQuery.get('/lineas', function (linea_ids) {
			this.setState({ linea_ids: linea_ids });
		}.bind(this));
		
		this.active = [];
	},
	
	handleLineaClick: function (active, linea) {
		if (active) {
			this.active[linea.id] = linea;
		} else {
			delete this.active[linea.id];
		}
		
		var activeLineas =
			this.active.map(function (linea) {
				return linea;
			});
		
		this.props.onSelectionChange(activeLineas);
	},
	
	render: function () {
		var lineas = this.state.linea_ids.map(function (linea_id) {
			return <ItemLineaListado
						key={linea_id}
						lineaId={linea_id}
						onClick={this.handleLineaClick} />;
		}, this);
		
		return (
			<div className="listado-lineas">
				{lineas}
			</div>
		);
	}
});

