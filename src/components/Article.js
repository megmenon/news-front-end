import React, { Component } from 'react';

class Article extends Component {
	render() {
		return (
			<div>
			<section className="container">
				<h4><b>LOCAL // BAY AREA & STATE</b></h4>
				<h1><b>New Year's Eve</b></h1>
			</section>
			<section className="container">
				<img src={require('../images/nyeve1.jpg')} />
			</section>
			<section className="container">
				<p>
					It wasn’t 2017’s fault, but a lot of people on Sunday were ready for it to scram. 

					They filled up Embarcadero Plaza in San Francisco, where the bidding of good riddance to old years takes place. 

					That’s what was happening on Sunday. An estimated 200,000 people were expected for the midnight fireworks, because 2018 comes along only once. The wrinkle in time between Sunday and Monday is when it does, at least this year.

					“2018 will be good, I hope,” said Michael Czerny, a visitor from Singapore, as he prepared to strap a pair of ice skates on his feet for the last time of the year. “We all need hope. 2017 was pretty OK but we can do better.”

					The things that bothered folks in 2017 — fires, climate change, the president — will still be around in 2018, people in the giant plaza acknowledged. But turning a calendar page on all that just feels good. The resolutions flowed like IPA.

					“Less smoking and drinking, that’s mine,” said skateboarder Landro Alferez, who had just executed a nose grind in the plaza. He was among two dozen skateboarders doing flips, jumps and spins for the benefit of the tourists.

					“Next year, maybe I’ll be able to do a tail grab and a nose grind at the same time,” Alferez said. “There’s no limit to what you can do in a new year.”

					Ice skater Stacy Johnson said she had resolved to drink more water.

					“Eight glasses a day,” she said. “It’s supposed to get the toxins out.”

					Early in the evening, with the libations yet to take effect, the gathering crowd was in a tranquil mood. Cops were out in numbers, walking around and making sure that whatever was being carried in paper bags was OK, penal codewise.

					Restaurants were texting last-minute cancellation alerts to their wait lists. Servers, bartenders, cooks and Lyft drivers were girding up for a long and lucrative night.

					Officer Martin Covarrubias said it was a “nice crowd” and that there were still parking places to be had, though not many. He spent his last $20 bill of 2017 on a necklace from vendor Jonathan Guilliams, who carved “SFPD” into a quarter with a jeweler’s saw.
				</p>
			</section>
			</div>
		);
	}
}

export default Article;