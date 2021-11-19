import React, { useState, useEffect } from "react";
import { Formulario } from "./components/Formulario";
import { Cita } from "./components/Cita";

function App() {
	//citas en local storage
	let citasIniciales = JSON.parse(localStorage.getItem("citas"));
	if (!citasIniciales) {
		citasIniciales = [];
	}
	//crear arreglo de citas
	const [citas, setCitas] = useState([]);

	// useEffect para realizar ciertas operaciones cuando el state cambia
	useEffect(() => {
		let citasIniciales = JSON.parse(localStorage.getItem("citas"));

		if (citasIniciales) {
			localStorage.setItem("citas", JSON.stringify(citas));
		} else {
			localStorage.setItem("citas", JSON.stringify([]));
		}
	}, [citas]);

	//funcion que tome las citas actuales y agregue la nueva
	const crearCita = (cita) => {
		setCitas([...citas, cita]);
	};
	const eliminarCita = (id) => {
		setCitas(citas.filter((cita) => cita.id !== id));
	};

	return (
		<>
			<h1>Administrador de Pacientes</h1>
			<div className="container">
				<div className="row">
					<div className="one-half column">
						<Formulario crearCita={crearCita} />
					</div>
					<div className="one-half column">
						{citas.length === 0 ? (
							<h2>Agregar nuevas citas</h2>
						) : (
							<h2>Administra tus citas</h2>
						)}
						{citas.map((cita) => (
							<Cita cita={cita} key={cita.id} eliminarCita={eliminarCita} />
						))}
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
