import React from "react";
import Card from "react-bootstrap/Card";
import { ImCheckmark2 } from "react-icons/im";

function AboutCard() {
	return (
		<Card className="quote-card-view">
			<Card.Body>
				<blockquote className="blockquote mb-0">
					<p style={{ textAlign: "justify" }}>
						Hi Everyone, I am <span className="purple">Edmilson Soares </span>
						from <span className="purple"> Salvador - Bahia - Brazil.</span>
						<br />
						<br />
						I'm a fullstack developer residing in Salvador - Bahia - Brazil and
						PROGRAMMing is my passion. I create websites, develop web and mobile
						applications focused on user experience and best practices and
						standards of architecture and design.
						<br />
						<br />
						I recently started a blog where I share knowledge acquired
						throughout my career. (www.quarksCode.com.br)
						<br />
						<br />
						I believe that digital inclusion needs to encompass everyone. With
						that, I make the most of what I do and try to share as much
						knowledge as possible.
						<br />
						<br />
						Apart from coding, some other activities that I love to do!
					</p>
					<ul>
						<li className="about-activity">
							<ImCheckmark2 /> Playing Guitar
						</li>
						<li className="about-activity">
							<ImCheckmark2 /> Writting Tech Blogs
						</li>
						<li className="about-activity">
							<ImCheckmark2 /> Travelling
						</li>
					</ul>

					<p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
						"Imagination is more important than knowledge!"{" "}
					</p>
					<footer className="blockquote-footer">Albert Einstein</footer>
				</blockquote>
			</Card.Body>
		</Card>
	);
}

export default AboutCard;
