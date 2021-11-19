import React from "react";
import styled from "@emotion/styled";

import { primeraMayuscula } from "../helper";

import PropTypes from "prop-types";

const ContenedorResumen = styled.div`
	padding: 1rem;
	text-align: center;
	background-color: #00838f;
	color: #fff;
	margin-top: 1rem;
`;

export const Resumen = ({ datos }) => {
	const { marca, anio, plan } = datos;
	console.log(marca);

	if (marca === "" || anio === "" || plan === "") return null;
	return (
		<ContenedorResumen>
			<h2>Resumen de Cotizacion</h2>
			<ul>
				<li>Marca: {primeraMayuscula(marca)} </li>
				<li>Plan: {primeraMayuscula(plan)} </li>
				<li>Anio del Auto: {anio} </li>
			</ul>
		</ContenedorResumen>
	);
};

Resumen.propTypes = {
	datos: PropTypes.object.isRequired,
};
