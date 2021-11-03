import React from "react";
import "./Header.css";

export default function Header({ title }) {
	return (
		<>
			{/*Line 8 data-testid is used for getById in Header.test.js  */}
			<h1 className="header" data-testid="header-1">
				{title}
			</h1>
			{/* Line 12 title is used to test getByTitle in Header.test.js */}
			{/* <h3 title="Header" className="header">
				Cat
			</h3> */}
		</>
	);
}
