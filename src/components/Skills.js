import React, { Component } from 'react'
import ProgressBar from './ProgressBar'

export default class Skills extends Component {
	render() {
		return (
			<section id="service">
				<h3 className="headline scroll-animated">Skills</h3>
				
				<table>
					<tbody>
						<tr className="scroll-animated">
							<td><h5>Coding</h5></td>
							<td><h5>Graphic Design</h5></td>
						</tr>
						<tr className="scroll-animated">
							<td>
								<p>HTML</p>
								<ProgressBar percentage={90} />
							</td>
							<td>
								<p>Adobe Illustrator</p>
								<ProgressBar percentage={100} />
							</td>
						</tr>
						<tr className="scroll-animated">
							<td>
								<p>CSS</p>
								<ProgressBar percentage={60} />
							</td>
							<td>
								<p>Adobe Photoshop</p>
								<ProgressBar percentage={90} />
							</td>
						</tr>
						<tr className="scroll-animated">
							<td>
								<p>JavaScript</p>
								<ProgressBar percentage={60} />
							</td>
							<td>
								<p>Adobe InDesign</p>
								<ProgressBar percentage={80} />
							</td>
						</tr>
						<tr className="scroll-animated">
							<td>
								<p>React</p>
								<ProgressBar percentage={60} />
							</td>
							<td>
								<p>Adobe XD</p>
								<ProgressBar percentage={75} />
							</td>
						</tr>
						<tr className="scroll-animated">
							<td>
								<p>d3.js</p>
								<ProgressBar percentage={30} />
							</td>
							<td>
								<p>Invision</p>
								<ProgressBar percentage={80} />
							</td>
						</tr>
						<tr className="scroll-animated">
							<td>
								<p>C/C++ </p>
								<ProgressBar percentage={30} />
							</td>
							<td>
								<p>Sketch</p>
								<ProgressBar percentage={75} />
							</td>
						</tr>
					</tbody>
				</table>

			</section>
		);
	}
}