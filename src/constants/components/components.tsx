import { FaBoxOpen } from "react-icons/fa";
import { FiLoader } from "react-icons/fi";
import { GiButtonFinger, GiTatteredBanner } from "react-icons/gi";
import { GoCheckbox } from "react-icons/go";
import { IoIosNotifications, IoIosSwitch } from "react-icons/io";
import { IoFootsteps, IoRadioSharp } from "react-icons/io5";
import { MdLabel } from "react-icons/md";
import { RiMenuSearchLine } from "react-icons/ri";
import { TbPhotoCircle, TbTooltip } from "react-icons/tb";
import { VscListSelection } from "react-icons/vsc";

export const components = [
	{ label: 'Box', link: '/box', icon: <FaBoxOpen/> },
	{ label: 'SelectSearch', link: '/select-search', icon: <RiMenuSearchLine/> },
	{ label: 'Notification', link: '/notification', icon: <IoIosNotifications/> },
	{ label: 'Tooltip', link: '/tooltip', icon: <TbTooltip/> },
	{ label: 'Button', link: '/button', icon: <GiButtonFinger/> },
	{ label: 'Checkbox', link: '/checkbox', icon: <GoCheckbox/> },
	{ label: 'Pagination', link: '/pagination', icon: <IoFootsteps/> },
	{ label: 'Label', link: '/label', icon: <MdLabel/> },
	{ label: 'Icon', link: '/icon', icon: <TbPhotoCircle/> },
	{ label: 'Radio', link: '/radio', icon: <IoRadioSharp/> },
	{ label: 'Switch', link: '/switch', icon: <IoIosSwitch/> },
	{ label: 'Loader', link: '/loader', icon: <FiLoader/> },
	{ label: 'Modal', link: '/modal', icon: <GiTatteredBanner/> },
	{ label: 'Select', link: '/select', icon: <VscListSelection/> }
]