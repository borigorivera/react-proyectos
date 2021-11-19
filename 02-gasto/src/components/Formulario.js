import React, { useState } from "react";
import PropTypes from "prop-types";
import { Error } from "./Error";
import shortid from "shortid";

export const Formulario = ({ setGasto, setCreargasto }) => {
	const [nombre, setNombre] = useState("");
	const [cantidad, setCantidad] = useState(0);
	const [error, setError] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();

		//validar
		if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === "") {
			setError(true);
			return;
		}

		setError(false);

		//construir gasto
		const gasto = {
			nombre,
			cantidad,
			id: shortid.generate(),
		};
		//pasar el gasto al componente principal
		setGasto(gasto);
		setCreargasto(true);
		//resetear el form

		setNombre("");
		setCantidad(0);
	};

	return (
		<form onSubmit={handleSubmit}>
			<h2>agrega tus gastos aqui</h2>

			{error ? <Error mensaje="El Gasto es incorrecto." /> : null}

			<div className="campo">
				<label htmlFor="">Nombre Gasto</label>
				<input
					type="text"
					className="u-full-width"
					placeholder="Ej. Transporte"
					value={nombre}
					onChange={(e) => setNombre(e.target.value)}
				/>
				<label htmlFor="">Cantidad Gasto</label>
				<input
					type="number"
					className="u-full-width"
					placeholder="Ej. 300"
					value={cantidad}
					onChange={(e) => setCantidad(parseInt(e.target.value), 10)}
				/>
			</div>

			<input
				type="submit"
				className="button-primary u-full-width"
				value="agregar gasto"
			/>
		</form>
	);
};

Formulario.propTypes = {
	setGasto: PropTypes.func.isRequired,
	setCrearGasto: PropTypes.func.isRequired,
};
