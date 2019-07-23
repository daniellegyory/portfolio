import React, { Component } from 'react';
import './App.css';
import Preloader from './components/Preloader';
import Intro from './components/Intro';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Footer from './components/Footer';
import FloatingText from './components/FloatingText';
import FloatingText2 from './components/FloatingText2';

class App extends Component {
  render() {
    return (
		<div className="App">
			<Preloader/>
			<div className="parallax-window" data-z-index="0" data-parallax="scroll" data-image-src="img/background.jpg">
				<div className="content-area">
					<div className="content-area-inner">
						<Intro/>
					</div>
				</div>
			</div>

			<div className="content-area">
				<div className="content-area-inner">
					<About/>
					<Skills/>
					<Work/>
				</div>
			</div>

			<div className="parallax-window-top" data-z-index="0" data-parallax="scroll" data-image-src="img/background2.jpg">
				<div className="content-area">
					<div className="content-area-inner">
						<FloatingText/>
					</div>
				</div>
			</div>
			<div className="parallax-window" data-z-index="0" data-parallax="scroll" data-image-src="img/background3.jpg">
				<div className="content-area">
					<div className="content-area-inner">
						<FloatingText2/>
					</div>
				</div>
			</div>

			<div className="content-area">
				<div className="content-area-inner">
					<Footer/>
				</div>
			</div>

		</div>
      );
  }
}

export default App;
