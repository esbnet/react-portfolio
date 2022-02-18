import React from "react";
import { Col, Row } from "react-bootstrap";
import {
	DiJavascript1,
	DiReact,
	DiNodejs,
	DiMongodb,
	DiGit,
	DiSass,
	DiMysql,
} from "react-icons/di";

import {
	SiRedux,
	SiTypescript,
	SiTailwindcss,
	SiPostgresql,
	SiNextDotJs,
  SiAmazonaws,
  SiNodeDotJs,
  SiDocker,
  SiJest,
} from "react-icons/si";

function Techstack() {
	return (
		<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
			<Col xs={4} md={2} className="tech-icons">
				<DiJavascript1 />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiNodeDotJs />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiReact />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiRedux />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiTypescript />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiNextDotJs />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiJest />
			</Col>

			<Col xs={4} md={2} className="tech-icons">
				<SiTailwindcss />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiSass />
			</Col>


			<Col xs={4} md={2} className="tech-icons">
				<DiMongodb />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiPostgresql />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiMysql />
			</Col>
		</Row>
	);
}

export default Techstack;
