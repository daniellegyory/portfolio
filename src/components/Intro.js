import React, { Component } from 'react'

export default class Intro extends Component {
	render() {
		return (

			<section id="intro">

				<div className="container-mid">

					<div className="animation-container animation-fade-right" data-animation-delay={0}>
						<h1>Hi, I’m Danielle Gyory.</h1>
					</div>

					<div className="animation-container animation-fade-right" data-animation-delay={200}>
						<a href="#about" className="smooth-scroll" style={{color: "#13C4A3"}}>Learn More<div className="circle"><i className="fa fa-angle-down" aria-hidden="true" /><i className="fa fa-angle-down" aria-hidden="true" /></div></a>
					</div>

				</div>

	        </section>
	    );
	}
}