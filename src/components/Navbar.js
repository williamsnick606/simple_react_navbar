import Fullmenu from './Fullmenu.js';
import Hamburger from './Hamburger.js';
import { useState } from 'react';

/**
 * This navbar conditionally renders either a fullscreen menu bar, 
 * or a Hamburger menu for mobile screens.
 */
const Navbar = () => {


	let [width, setWidth] = useState(0);
	let [height, setHeight] = useState(0);
  
	window.addEventListener('load', () => {
	  setWidth(window.innerWidth);
	  setHeight(window.innerHeight);
	});

	window.addEventListener('resize', () => {
		setWidth(window.innerWidth);
		setHeight(window.innerHeight);
	  });

	if (width <= 800){
		return (<Hamburger />);
	}
	return(
		<Fullmenu />
	);
};

export default Navbar;