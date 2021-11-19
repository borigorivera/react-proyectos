import React, { useState } from "react";
import { Error } from "./Error";
import PropTypes from "prop-types";

export const Pregunta = ({
	setRestante,
	setPresupuesto,
	setMostrarpregunta,
}) => {
	const [cantidad, setCantidad] = useState(0);
	const [error, setError] = useState(false);

	const handleChange = (e) => {
		setCantidad(parseInt(e.target.value, 10));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		//validar
		if (cantidad < 1 || isNaN(cantidad)) {
			setError(true);
			return;
		}

		//si se pasa la validacion

		setError(false);

		setPresupuesto(cantidad);
		setRestante(cantidad);
		setMostrarpregunta(false);
	};
	return (
		<>
			<h2>Coloca tu presupuesto</h2>

			{error ? <Error mensaje="El Presupuesto es incorrecto." /> : null}
			<form onSubmit={handleSubmit}>
				<input
					type="number"
					className="u-full-width"
					placeholder="Coloca tu presupuesto"
					onChange={handleChange}
				/>
				<input
					type="submit"
					className="button-primary u-full-width"
					value="definir el presupuesto"
				/>
			</form>
		</>
	);
};

Pregunta.propTypes = {
	setRestante: PropTypes.func.isRequired,
	setPresupuesto: PropTypes.func.isRequired,
	setMostrarpregunta: PropTypes.func.isRequired,
};
