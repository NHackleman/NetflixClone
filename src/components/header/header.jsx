// import React from "react";
import PrimaryNavbar from "./primary-navbar";
import SecondaryNavbar from "./secondary-navbar";
import "../../styles/header.scss";

export default function header() {
	return (
		<div className="header">
			<PrimaryNavbar />
			<SecondaryNavbar />
		</div>
	);
}
