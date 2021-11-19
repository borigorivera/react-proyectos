import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

export const Formulario = ({ crearCita }) => {
	//CREAR STATE DE CITA
	const [cita, setCita] = useState({
		mascota: "",
		propietario: "",
		fecha: "",
		hora: "",
		sintomas: "",
	});

	//CREAR STATE DE ERROR

	const [error, setError] = useState(false);

	//FUNCION QUE SE EJECTUA CADA QUE EL USUARIO ESCRIBE EN EL INPUT
	const handleChange = (e) => {
		setCita({
			...cita,
			[e.target.name]: e.target.value,
		});
	};

	//EXTRAER VALORES

	const { mascota, propietario, fecha, hora, sintomas } = cita;

	const handleSubmit = (e) => {
		e.preventDefault();

		//VALIDAR
		if (
			mascota.trim() === "" ||
			propietario.trim() === "" ||
			fecha.trim() === "" ||
			hora.trim() === "" ||
			sintomas.trim() === ""
		) {
			setError(true);
			return;
		}

		//eliminar el mensaje de error
		setError(false);
		//ASIGNAR ID
		cita.id = uuidv4();

		//CREAR LA CITA
		crearCita(cita);
		//REINICIAR EL FORM
		setCita({
			mascota: "",
			propietario: "",
			fecha: "",
			hora: "",
			sintomas: "",
		});
	};
	return (
		<>
			<h2>Crear Cita</h2>

			{error ? (
				<p className="alerta-error">Todos los campos son obligatorios</p>
			) : null}
			<form onSubmit={handleSubmit}>
				<label htmlFor="">Nombre Mascota</label>
				<input
					type="text"
					name="mascota"
					className="u-full-width"
					placeholder="Nombre Mascota"
					onChange={handleChange}
					value={mascota}
				/>
				<label htmlFor="">Nombre Dueno</label>
				<input
					type="text"
					name="propietario"
					className="u-full-width"
					placeholder="Nombre Dueno de la mascota"
					onChange={handleChange}
					value={propietario}
				/>
				<label htmlFor="">Fecha</label>
				<input
					type="date"
					name="fecha"
					className="u-full-width"
					onChange={handleChange}
					value={fecha}
				/>
				<label htmlFor="">Hora</label>
				<input
					type="time"
					name="hora"
					className="u-full-width"
					onChange={handleChange}
					value={hora}
				/>
				<label htmlFor="">Sintomas</label>
				<textarea
					className="u-full-width"
					name="sintomas"
					onChange={handleChange}
					value={sintomas}
				></textarea>
				<button type="submit" className="u-full-width button-primary">
					Agregar Cita
				</button>
			</form>
		</>
	);
};

Formulario.propTypes = {
	crearCita: PropTypes.func.isRequired,
};
