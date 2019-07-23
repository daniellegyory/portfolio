import React, { Component } from 'react'

export default class Footer extends Component {
	render() {
		return (
			<section id="footer">
			
				<h3 className="headline scroll-animated">Lets connect!</h3>
				<ul className="social-icons scroll-animated">
					<li><a href="https://www.linkedin.com/in/danielle-gyory-76a62712b/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin" aria-hidden="true" /><i className="fa fa-linkedin" aria-hidden="true" /></a></li>
				</ul>
				<p className="scroll-animated"> 2019 | Special thanks to npm <span role="img" aria-label="halo emoji">&#128519;</span></p>
			</section>
		);
	}
}