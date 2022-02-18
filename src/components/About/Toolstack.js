import React from "react";
import { Col, Row } from "react-bootstrap";
import {
	SiLinux,
	SiVisualstudiocode,
	SiVercel,
	SiPostman,
	SiHeroku,
	SiAmazonaws,
	SiDocker,
} from "react-icons/si";

import { DiGit } from "react-icons/di";

function Toolstack() {
	return (
		<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
			<Col xs={4} md={2} className="tech-icons">
				<SiLinux />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiVisualstudiocode />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiPostman />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiHeroku />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiAmazonaws />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiDocker />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiGit />
			</Col>
		</Row>
	);
}

export default Toolstack;
