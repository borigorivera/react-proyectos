import React, { useState, useEffect } from "react";
import { Pregunta } from "./components/Pregunta";
import { Formulario } from "./components/Formulario";
import { Listado } from "./components/Listado";
import { ControlPresupuesto } from "./components/ControlPresupuesto";

function App() {
	//definir el state
	const [presupuesto, setPresupuesto] = useState(0);
	const [restante, setRestante] = useState(0);
	const [mostrarpregunta, setMostrarpregunta] = useState(true);
	const [gastos, setGastos] = useState([]);
	const [gasto, setGasto] = useState({});
	const [creargasto, setCreargasto] = useState(false);

	useEffect(() => {
		if (creargasto) {
			setGastos([...gastos, gasto]);

			const presupuestoRestante = restante - gasto.cantidad;
			setRestante(presupuestoRestante);

			setCreargasto(false);
		}
	}, [gasto, creargasto, gastos, restante]);

	return (
		<>
			<div className="container">
				<header>
					<h1>gasto semanal</h1>
					<div className="contenido-principal contenido">
						{mostrarpregunta ? (
							<Pregunta
								setPresupuesto={setPresupuesto}
								setRestante={setRestante}
								setMostrarpregunta={setMostrarpregunta}
							/>
						) : (
							<div className="row">
								<div className="one-half column">
									<Formulario
										setGasto={setGasto}
										setCreargasto={setCreargasto}
									/>
								</div>
								<div className="one-half column">
									<Listado gastos={gastos} />
									<ControlPresupuesto
										presupuesto={presupuesto}
										restante={restante}
									/>
								</div>
							</div>
						)}
					</div>
				</header>
			</div>
		</>
	);
}

export default App;
