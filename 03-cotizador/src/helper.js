//OBTENER DIFERENCIA DE AÑOS

export function obtenerDiferenciaAnio(anio) {
	return new Date().getFullYear() - anio;
}

//OBTENER INCREMENTO POR MARCA

export function obtenerIncrementoMarca(marca) {
	let incremento;

	switch (marca) {
		case "europeo":
			incremento = 1.3;
			break;
		case "americano":
			incremento = 1.15;
			break;
		case "asiatico":
			incremento = 1.05;
			break;
		default:
			break;
	}

	return incremento;
}

//CALCULAR TIPO DE SEGURO

export function obtenerPlan(plan) {
	return plan === "basico" ? 1.2 : 1.5;
}

//MUESTRA LA PRIMER LETRA MAYUSCULA

export function primeraMayuscula(texto) {
	return texto.charAt(0).toUpperCase() + texto.slice(1);
}
