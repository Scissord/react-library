// icons
import { FaBoxOpen } from "react-icons/fa";
import { RiMenuSearchLine } from "react-icons/ri";
import { IoIosNotifications, IoIosSwitch  } from "react-icons/io";
import { TbTooltip, TbPhotoCircle } from "react-icons/tb";
import { GiButtonFinger, GiTatteredBanner } from "react-icons/gi";
import { GoCheckbox } from "react-icons/go";
import { IoFootsteps, IoRadioSharp } from "react-icons/io5";
import { MdLabel } from "react-icons/md";
import { FiLoader } from "react-icons/fi";
import { VscListSelection } from "react-icons/vsc";

export const firstLibraryColumn = [
	{ label: 'Box', icon: <FaBoxOpen/> },
	{ label: 'SelectSearch', icon: <RiMenuSearchLine/> },
	{ label: 'Notification', icon: <IoIosNotifications/> },
	{ label: 'Tooltip', icon: <TbTooltip/> },
]

export const secondLibraryColumn = [
	{ label: 'Button', icon: <GiButtonFinger/> },
	{ label: 'Checkbox', icon: <GoCheckbox/> },
	{ label: 'Pagination', icon: <IoFootsteps/> },
]

export const thirdLibraryColumn = [
	{ label: 'Label', icon: <MdLabel/> },
	{ label: 'Icon', icon: <TbPhotoCircle/> },
	{ label: 'Radio', icon: <IoRadioSharp/> },
	{ label: 'Switch', icon: <IoIosSwitch/> },
]

export const fourthLibraryColumn = [
	{ label: 'Loader', icon: <FiLoader/> },
	{ label: 'Modal', icon: <GiTatteredBanner/> },
	{ label: 'Select', icon: <VscListSelection/> },
]