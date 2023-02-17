import { MdKeyboardArrowRight, MdLocationOn } from "react-icons/md"
import { HiOutlineMailOpen } from "react-icons/hi"
import { BsTelephoneForward } from "react-icons/bs"
import { SiFacebook } from "react-icons/si"
import { AiOutlineInstagram } from "react-icons/ai"
import { FaLinkedin, FaTwitterSquare } from "react-icons/fa"

export const listItems = [
    {
        id: 1,
        link: "Home",
        Icon: MdKeyboardArrowRight
    },
    {
        id: 2,
        link: "Our Shop",
        Icon: MdKeyboardArrowRight
    },
    {
        id: 3,
        link: "Shop Details",
        Icon: MdKeyboardArrowRight
    },
    {
        id: 4,
        link: "Shopping Cart",
        Icon: MdKeyboardArrowRight
    },
    {
        id: 5,
        link: "Checkout",
        Icon: MdKeyboardArrowRight
    },
    {
        id: 6,
        link: "Contact",
        Icon: MdKeyboardArrowRight
    }
]

export const getInTouch = [
    {
        id: 1,
        content: "8 charlestown Avenue, Finglas, Ireland",
        Icon: MdLocationOn
    },
    {
        id: 2,
        content: "mail@multishop.info",
        Icon: HiOutlineMailOpen
    },
    {
        id: 3,
        content: "+35398373736367",
        Icon: BsTelephoneForward
    },

]

export const followUs = [
    {
        id: 1,
        Icon: SiFacebook
    },
    {
        id: 2,
        Icon: AiOutlineInstagram
    },
    {
        id: 3,
        Icon: FaLinkedin
    },
    {
        id: 4,
        Icon: FaTwitterSquare
    },
]