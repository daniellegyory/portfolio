import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';

export default class Work extends Component {
	render() {
		return (

			<section id="work">
				<h3 className="headline scroll-animated">Latest Work</h3>

				<div className="showcase">

{/*SOUNDCLOUD --------------------------------------------------------------------*/}

	        		<div className="item scroll-animated">

						<a href="#work" data-featherlight="#item-1-lightbox">
							<div className="info">
								<div className="container-mid">
									<h5>Soundcloud Rebrand</h5>
									<p>UI Design, Adobe XD, Graphic Design</p>
									<p>2019</p>
								</div>
							</div>

							<div className="background-image" style={{backgroundImage: 'url(img/work/sc_mockup.jpg)'}} />
						</a>

						<div id="item-1-lightbox" className="work-lightbox">

							<h3>Soundcloud Rebrand</h3>
							<p className="subline">UI Design, Adobe XD, Graphic Design</p>
							<h5>Objective</h5>
							<p>Research a company to redefine and restate their core mission to realign the brand. Create a logo, stationary system, brand guide, and a corporate brochure.</p>
							<h5>Project Overview</h5>
							<p>A challenge with this rebrand was coming up with a new concept for the app UI. Soundcloud’s current one lacks organization and doesn’t embody one of the main reasons listeners and creators use the Soundcloud app; for music discovery. I came up with a new music player—keeping the iconic audio waves—and made the comments on songs more accessible for increased social media interaction. Additionally, the home page was redesigned so that users could discover more of what they like, find new artists on Soundcloud, and see what their friends are listening to. Another challenge of this project was coming up with a logo that truly represented the Soundcloud brand. Their old logo is good but it definitely has room for improvement. I decided to add a dark blue to their brand color palette to create a dark theme and a light theme. I kept the Soundcloud orange because it is a key identifier to their brand.</p>

							<img className="img-responsive" src="img/work/sc_mockup.jpg" alt="" />
							<img className="img-responsive" src="img/work/sc_stationary.jpg" alt="" />
							<h6>Brochure</h6>
							<img className="img-responsive" src="img/work/sc_brochure.jpg" alt="" />
							<img className="img-responsive" src="img/work/sc_brochure2.jpg" alt="" />
							<img className="img-responsive" src="img/work/sc_brochure3.jpg" alt="" />
							<img className="img-responsive" src="img/work/sc_brochure4.jpg" alt="" />
							<img className="img-responsive" src="img/work/sc_brochure5.jpg" alt="" />
							<img className="img-responsive" src="img/work/sc_brochure6.jpg" alt="" />
							<img className="img-responsive" src="img/work/sc_brochure7.jpg" alt="" />
							<h6>Brand Guide</h6>
							<img className="img-responsive" src="img/work/sc_brandguide.jpg" alt="" width="50%" height="50%"/>
							<img className="img-responsive" src="img/work/sc_brandguide2.jpg" alt="" />
							<img className="img-responsive" src="img/work/sc_brandguide3.jpg" alt="" />
							<img className="img-responsive" src="img/work/sc_brandguide4.jpg" alt="" />
							<img className="img-responsive" src="img/work/sc_brandguide5.jpg" alt="" width="50%" height="50%"/>
						</div>
	          		</div>

{/* 99DAYS OF FREEDOM --------------------------------------------------------------*/}
					<div className="item scroll-animated">

						<a href="#work" data-featherlight="#item-2-lightbox">
							<div className="info">
								<div className="container-mid">
									<h5>Interactive Animations for 99 Days of Freedom</h5>
									<p>JavaScript, Wordpress, d3.js</p>
									<p>2019</p>
								</div>
							</div>

							<div className="background-image" style={{backgroundImage: 'url(img/work/fb.jpg)'}} />
						</a>

						<div id="item-2-lightbox" className="work-lightbox">
							<h3>Interactive Animations</h3>
							<p className="subline">JavaScript, Wordpress, d3.js</p>
							<h5>Objective</h5>
							<p>Client wanted interactive visuals to highlight research data from a 2015 paper that studied the 99 Days of Freedom campaign—a campaign to see if users could stay off Facebook for 99 days. The research paper explores which factors predict increased or decreased likelihood of returning to Facebook.</p>
							<h5>Project Overview</h5>
							<p>Built responsive interactive graphs with Adobe Animate and JavaScript. Then uploaded and formatted it to the client’s Wordpress website. A large portion of this project was going through the research, finding the best data to highlight, and simplifying it into ‘layman’s terms’. It was challenging condensing a complex research paper into a simple visual communication.</p>
							<a href="https://das-lab.org/animations/" className="btn btn-info" role="button" target="_blank" rel="noopener noreferrer">Click here to see the animation.</a>
						</div>
					</div>

{/* MICROSCOPY --------------------------------------------------------------------*/}
					<div className="item scroll-animated">
						<a href="#work" data-featherlight="#item-3-lightbox">

							<div className="info">
								<div className="container-mid">
									<h5>Microscopy Interactive Gallery</h5>
									<p>Raspberry Pi 3, Electronic Circuits</p>
									<p>2018</p>
								</div>
							</div>
							<div className="background-image" style={{backgroundImage: 'url(img/work/mc_logo.jpg)'}} />
						</a>

						<div id="item-3-lightbox" className="work-lightbox">
							<h3>Microscopy Interactive Gallery</h3>
							<p className="subline">Raspberry Pi 3, Electronic Circuits</p>
							<h5>Objective</h5>
							<p>Client requested Fusion—a student run design agency at Lehigh University—to build a lighting display for a historic transmission electron microscope on campus in order to attract interaction from students.</p>
							<h5>Project Overview</h5>
							<p>As an engineer on the interactive design team in Fusion I oversaw and integrated the hardware build for this project. We used a Raspberry Pi 3 to power a strip of LEDs which we measured and soldered to fit the microscope. The software engineer and I integrated the hardware with the application running on the iPad so the lights correlated to the component described.</p>

							<h6>Lighting display with application</h6>
							<video controls="controls" width="100%" height="500px" name="Microscopy" src="img/work/mc_function.mov"></video>

						</div>
					</div>

{/* HFYT --------------------------------------------------------------------*/}
					<div className="item scroll-animated">
						<a href="#work" data-featherlight="#item-4-lightbox">
							<div className="info">
								<div className="container-mid">
									<h5>Honey For Your Tea</h5>
									<p>Package Design, Product Design</p>
									<p>2018</p>
								</div>
							</div>
							<div className="background-image" style={{backgroundImage: 'url(img/work/hfyt_logo.jpg)'}} />
						</a>
						<div id="item-4-lightbox" className="work-lightbox">
						<h3>Honey For Your Tea</h3>
						<p className="subline">Package Design, Product Design</p>
						<h5>Objective</h5>
						<p>Design three labels for a series of glass bottles containing a liquid ingredient used in cooking. The theme of the series will be based on something that inspires you, either visually, or emotionally.</p>
						<h5>Project Overview</h5>
						<p>The inspiration for this project came from honeybees themselves. The product design inspiration began with in-house type development for the logo. The typeface replicates the smooth curves of a honeybee antenna and sets the theme and feel for the entire illustration. The illustration and type are nicely integrated by adding motion to the ‘O’ which represents the flow of a honey drop into a tea cup. The brand utilizes strong color palettes to engage consumers with the product on the shelf.</p>
						<img className="img-responsive" src="img/work/hfyt_1.jpg" alt="" />
						<img className="img-responsive" src="img/work/hfyt_2.jpg" alt="" />
						<img className="img-responsive" src="img/work/hfyt_3.jpg" alt="" />
						<img className="img-responsive" src="img/work/hfyt_4.jpg" alt="" />
						</div>
					</div>

{/* POSTER DESIGN ------------------------------------------------------------------*/}
					<div className="item scroll-animated">
						<a href="#work" data-featherlight="#item-5-lightbox">
							<div className="info">
								<div className="container-mid">
									<h5>Brittany Howard & We The Bees Poster</h5>
									<p>Graphic Design</p>
									<p>2018</p>
								</div>
							</div>
							<div className="background-image" style={{backgroundImage: 'url(img/work/p_1.jpg)'}} />
						</a>
						<div id="item-5-lightbox" className="work-lightbox">
							<h3>Brittany Howard & We The Bees Poster</h3>
							<p className="subline">Graphic Design</p>
							<h5>Objective</h5>
							<p>Design two posters with a consistent style. The first design is to raise awareness for an environmental cause and the second design is for a music concert/event. Although the two posters have a different purpose and audience, they are to be executed in the same style.</p>
							<h5>Project Overview</h5>
							<p>Neonicotinoid pesticides are one of the strongest offenders contributing to the decline of honeybees. These pesticides are banned in Europe but America has done nothing to acknowledge the impact they have on our pollinators. Brittany Howard is the lead singer and guitarist of the American rock band Alabama Shakes. Her vocals are ~fierce~. Style inspired by Shepard Fairey’s “We The People” series.</p>
							<Table className="table">
								<tbody>
									<tr>
										<td>
											<img className="img-responsive" src="img/work/p_1.jpg" alt="" width="auto" max-height="600"/>
										</td>
										<td>
											<img className="img-responsive" src="img/work/p_2.jpg" alt="" width="auto" max-height="600"/>
										</td>
									</tr>
								</tbody>
							</Table>
						</div>
					</div>

{/* THE BOOK ------------------------------------------------------------------*/}
					<div className="item scroll-animated">
						<a href="#work" data-featherlight="#item-6-lightbox">
							<div className="info">
								<div className="container-mid">
									<h5>Book Cover Redesign</h5>
									<p>Graphic Design</p>
									<p>2017</p>
								</div>
							</div>
							<div className="background-image" style={{backgroundImage: 'url(img/work/b_logo.jpg)'}} />
						</a>
						<div id="item-6-lightbox" className="work-lightbox">
							<h3>Book Cover Redesign</h3>
							<p className="subline">Graphic Design</p>
							<h5>Objective</h5>
							<p>Design a new book cover to represent a reissue from an author of your choice. Is it possible to visualize an author’s vision with contemporary values? </p>
							<h5>Project Overview</h5>
							<p>I picked “The Book” by Alan Watts, a popular British-American philosopher from the 20th century. He talks about passing The Book—“a father to a son, a mother to a daughter”—as if it’s a book full of all the life advice one could need. The cover is an inside out folder inspired by the idea that one could ‘leaf-through’ the book at anytime, like a guide book, and return to a meaningful page or quote they recall.</p>
							<img className="img-responsive" src="img/work/b_1.jpg" alt="" width="600" height="100%"/>
							<img className="img-responsive" src="img/work/b_2.jpg" alt="" width="600" height="100%"/>
							<img className="img-responsive" src="img/work/b_3.jpg" alt="" width="600" height="100%"/>
							<img className="img-responsive" src="img/work/b_4.jpg" alt="" width="600" height="100%"/>
						</div>
					</div>

				</div>
			</section>
		);
	}
}