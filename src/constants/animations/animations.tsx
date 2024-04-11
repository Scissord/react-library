import { BsDoorOpen } from "react-icons/bs";
import { FaSliders } from "react-icons/fa6";
import { SiInstatus } from "react-icons/si";
import { MdGradient } from "react-icons/md";
import { CiViewList } from "react-icons/ci";

export const animations = [
	{ label: 'Open', link: '/open-animation', icon: <BsDoorOpen/>,  },
	{ label: 'Slider', link: '/slider-animation', icon: <FaSliders/> },
	{ label: 'StatusBar', link: '/status-bar-animation', icon: <SiInstatus/> },
	{ label: 'Gradient', link: '/gradient-animation', icon: <MdGradient/> },
	{ label: 'List', link: '/list-animation', icon: <CiViewList/> },
]
