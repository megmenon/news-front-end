import React, { Component } from 'react';
import Lightbox from 'react-images';


const images = [
	'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/golden-gate-fireworks-brooks-creative-photography-and-artwork-by-anthony-brooks.jpg',
	'https://images.unsplash.com/photo-1512248805576-c1b31f6fcab1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
	'https://images.unsplash.com/photo-1456313662881-afa112263c32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1047&q=80'
]

class Article extends Component {
	constructor(props){
		super(props);

		this.state = {
			open: false,
			image1: false,
			image2: false,
			image3: false,
			index: 0
		}
	}

	handleOpen = e => {
		this.setState({
			open: true
		})
	}

	open1 = e => {
		this.setState({
			image1: true
		})
	}

	open2 = e => {
		this.setState({
			image2: true
		})
	}

	open3 = e => {
		this.setState({
			image3: true
		})
	}


	close1 = e => {
		this.setState({
			image1: false
		})
	}

	close2 = e => {
		this.setState({
			image2: false
		})
	}

	close3 = e => {
		this.setState({
			image3: false
		})
	}

	handleClose = e => {
		this.setState({
			open: false
		})
	}

	handleNext = () => {
		this.setState({
			index: (this.state.index + 1) % images.length
		})
	}

	render() {
		const { open, isOpen, index } = this.state
		return (
			<div className="article">
			<article className="container">
				<h1><b>New Year's Eve in San Francisco</b></h1>
				<h6>"Estimated 200,000 people were expected for the midnight fireworks, because 2018 comes along only once."</h6>
				 <div className="article-author">
				 	<span><b>By Richard Hansen</b></span>
				 </div>
				  <div className="date">
				 	<span>December 31, 2017</span>
				 </div>
				<div className="photo-container">
					<div onClick={this.handleOpen}> 
					  <div id="myCarousel" class="carousel slide" data-ride="carousel">
					    <ol class="carousel-indicators">
					      <li data-target="#myCarousel" data-slide-to="0"></li>
					      <li data-target="#myCarousel" data-slide-to="1"></li>
					      <li data-target="#myCarousel" data-slide-to="2"></li>
					    </ol>

					    <div class="carousel-inner">
					      <div class="item active">
					        <img src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/golden-gate-fireworks-brooks-creative-photography-and-artwork-by-anthony-brooks.jpg" style={{ width: '100%'}}/>
					      </div>

					      <div class="item">
					        <img src="https://images.unsplash.com/photo-1512248805576-c1b31f6fcab1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"  style={{ width: '100%'}} />
					      </div>
					    
					      <div class="item">
					        <img src="https://images.unsplash.com/photo-1456313662881-afa112263c32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1047&q=80" style={{ width: '100%'}} />
					      </div>
					    </div>
					  </div>
					</div>
					<Lightbox
						images={[
							{src: images[index]},
							{src: images[index + 1]},
							{src: images[index + 2]}
						]}
						isOpen={this.state.open}
						onClickNext={this.handleNext}
						onClose={this.handleClose}
						showImageCount={false}
						width={2500}
					 />
				</div>
				 <div className="photo-caption">
				 	<span className="text-muted"> Rob Smith for The San Francisco Chronicle </span>
				 </div>
				<p>
					It wasn’t 2017’s fault, but a lot of people on Sunday were ready for it to scram.

					They filled up Embarcadero Plaza in San Francisco, where the bidding of good riddance to old years takes place. 

					<div className="space"></div>


					That’s what was happening on Sunday. An estimated 200,000 people were expected for the midnight fireworks, because 2018 comes along only once. The wrinkle in time between Sunday and Monday is when it does, at least this year.

					“2018 will be good, I hope,” said Michael Czerny, a visitor from Singapore, as he prepared to strap a pair of ice skates on his feet for the last time of the year. 

					<div className="space"></div>
					<div className="space"></div>

					<span class="citation">“We all need hope. 2017 was pretty OK but we can do better.”</span>

					<div className="space"></div>
					<div className="space"></div>

					The things that bothered folks in 2017 — fires, climate change, the president — will still be around in 2018, people in the giant plaza acknowledged. But turning a calendar page on all that just feels good. The resolutions flowed like IPA.

					“Less smoking and drinking, that’s mine,” said skateboarder Landro Alferez, who had just executed a nose grind in the plaza. He was among two dozen skateboarders doing flips, jumps and spins for the benefit of the tourists.

					<div className="space"></div>

					“Next year, maybe I’ll be able to do a tail grab and a nose grind at the same time,” Alferez said. “There’s no limit to what you can do in a new year.”

					Ice skater Stacy Johnson said she had resolved to drink more water.

					“Eight glasses a day,” she said. “It’s supposed to get the toxins out.”

					<div className="space"></div>

					
					Early in the evening, with the libations yet to take effect, the gathering crowd was in a tranquil mood. Cops were out in numbers, walking around and making sure that whatever was being carried in paper bags was OK, penal codewise.

					Restaurants were texting last-minute cancellation alerts to their wait lists. Servers, bartenders, cooks and Lyft drivers were girding up for a long and lucrative night.

					Officer Martin Covarrubias said it was a “nice crowd” and that there were still parking places to be had, though not many. He spent his last $20 bill of 2017 on a necklace from vendor Jonathan Guilliams, who carved “SFPD” into a quarter with a jeweler’s saw.

					<div className="space"></div>

					Guilliams said he was nearly all out of quarters for 2017, and was expecting a new shipment. When you carve two dozen quarters a day, Guilliams said, you go through a lot of quarters. He’s just ordered $500 worth of shiny 2018 quarters from the mint, which he said should hold him for the first six months of the new year.

					Nearby, Walter Molina and Bo Bixler were playing their last game of chess of 2017, on a folding table in the plaza. Bixler lost a rook to a dumb move. 

					“That’s the last time I’m doing that,” he said, “this year.” <br/><br/>

					 <img src="https://s.hdnux.com/photos/70/27/32/14775953/3/gallery_xlarge.jpg" style={{ width: '100%'}} onClick={this.open1} />
					 <Lightbox
						images={[
							{src: 'https://s.hdnux.com/photos/70/27/32/14775953/3/gallery_xlarge.jpg'}
						]}
						isOpen={this.state.image1}
						onClose={this.close1}
						showImageCount={false}
						width={2500}
					 />

					<div className="space"></div>


					A big sign urged revelers to text NYESF17 to 888777, to receive police safety alerts. To those who did, the message came back that there weren’t any alerts. Sending a text cost a dime or so, which is cheap for good news.

					<div className="space"></div>


					The plaza was ready for a long evening of fireworks, fun seekers and festivities. Police barricades were ready for deployment and the outhouses were already in place — 23 to the south of the Ferry Building and 12 to the north.

					Revelers were saying goodbye to 2017 all over the Bay Area throughout the day. Before noon at Oakland’s Chabot Space and Science Center, a crowd of little kids was getting antsy and gazing skyward. Like most club-goers on New Year’s Eve, they had endured a long line to enter the cordoned-off area. Sparkly hats and flashing shoes were in abundance.

					<div className="space"></div>


					For 18 years, the center has held a daytime balloon drop for children, said Liz Austerman, director of visitor experience. This year, in fact, there were three drops: celebrating the new year in Karachi (11 a.m.), Nairobi (1 p.m.) and London (4 p.m.), each release aimed at older and older children.

					The rest of the Bay Area was welcome to prepare for wild revelry, Austerman said. “Ours is the most magical,” she said.

					<div className="space"></div>

					<img src="https://s.hdnux.com/photos/70/27/30/14775847/3/gallery_xlarge.jpg" style={{ width: '100%'}} onClick={this.open2} /><br/><br/>
					<Lightbox
						images={[
							{src: 'https://s.hdnux.com/photos/70/27/30/14775847/3/gallery_xlarge.jpg'}
						]}
						isOpen={this.state.image2}
						onClose={this.close2}
						showImageCount={false}
						width={2500}
					 />


					Standing on the periphery of the crowd, Allison Duffy of Lafayette waved at her husband, who had sneaked inside the ring with the couple’s 1-year-old and 4-year-old. Was her oldest psyched to watch 2017 graduate to 2018?

					“He’s still working on Monday through Friday,” she said.

					This was the Duffys’ big outing for the day. Other parents claimed more ambitious plans: drinks and a concert at Yoshi’s, a birthday party for adults, staying up until midnight.

					<div className="space"></div>

					As the clock struck 11 a.m., hundreds of balloons spilled down to a soundtrack of chiming clocks (Pink Floyd’s “Time”). Adults cheered. Hundreds of tiny hands waved around in the air, grasping wildly, as if the crowd had morphed into a balloon-eating sea anemone.

					With every hour across the region, the celebrations escalated. At noon in downtown Novato, children wearing plastic hard hats stood under a crane that loosed 18,000 bouncy balls into the crowd. In Golden Gate Park, the Sunday roller disco party coalesced at its regular afternoon time, but prepared to migrate over to the waterfront in the early evening. 

					<div className="space"></div>

					 <img src="https://s.hdnux.com/photos/70/27/30/14775837/5/gallery_xlarge.jpg" style={{ width: '100%'}} onClick={this.open3} /><br/><br/>
					 <Lightbox
						images={[
							{src: 'https://s.hdnux.com/photos/70/27/30/14775837/5/gallery_xlarge.jpg'}
						]}
						isOpen={this.state.image3}
						onClose={this.close3}
						showImageCount={false}
						width={2500}
					 />

					The healthier-minded dashed out for New Year’s Eve bike rides, hikes, meditations and runs.

					<div className="space"></div>

					At five minutes before the dawn of 2018 — in Dubai, or noon Pacific time — Gengo Akiba of Oakland’s Kojin-an Temple and Zenshu-ji Temple in Los Angeles led two other Buddhist priests to the 485-year-old temple bell hanging in the Asian Art Museum’s Samsung Hall in San Francisco.

					They had chanted the Heart Sutra and lit incense. Now, for the 32nd year, they were kicking off the museum’s annual New Year’s Eve bell-ringing ceremony, reminiscent of Japanese Joya No Kane celebrations.

					<div className="space"></div>

					The priests clutched at a log suspended from the ceiling by an elaborate lattice of ropes and swung it, like a battering ram, into the massive bell.

					The sound, deep and tinged with melancholy, gushed up to the ceiling and cascaded down onto the hundreds of onlookers, causing spines and skulls to hum in sympathy. Small groups, each of whom had scored a ticket to ring the bell one time, approached the bell in turn, smiled for a photo, and repeated the act. In all, the bell would be struck 108 times, each ring dispelling darkness and evil thoughts.

					<div className="space"></div>

					As their own strike still vibrated in the air, Jeanelle Chang and Angela Pang made their way out through the crowd. Chang had worked at the Asian Art Museum six years ago, and so when she returned from Chicago for a visit with Pang, she brought her friend to the ceremony.

					“It’s a great way to end a year and start a new year,” Pang said.

					“2017 was a very challenging year,” Chang added. “I’m looking forward to a better 2018.”

					Later on, the two planned to celebrate the new year with another tradition of theirs: bacon-wrapped hot dogs in the Mission.

				</p>
			</article>
			</div>
		);
	}
}

export default Article;