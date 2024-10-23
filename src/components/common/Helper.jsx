import team from "../../assets/images/png/team.png";
import office from "../../assets/images/png/office.png";
import gallery from "../../assets/images/png/gallery-img.png";
import work from "../../assets/images/png/work-img.png";
import home from "../../assets/images/png/home-work.png";
import officeWork from "../../assets/images/png/office-work.png";
import google from "../../assets/images/png/google.png";
import tokopedio from "../../assets/images/png/tokopedio.png";
import upwork from "../../assets/images/png/upwork.png";
import microsoft from "../../assets/images/png/microsoft.png";
import shopify from "../../assets/images/png/shopify.png";
import stripe from "../../assets/images/png/stripe.png";
export const HEADER_DATA = [
    { heading: "Home", url: "/" },
    { heading: "Workspace", url: "#Workspace" },
    { heading: "Service", url: "#Service" },
    { heading: "Events", url: "#Events" },
    { heading: "Reviews", url: "#Reviews" },
    { heading: "Contact Us", url: "#Contact Us" },
]
export const LOCATION_DATA = [
    {
        data: "Location", location: [
            { text: "Malang, Indonesia" },
            { text: "USA" },
            { text: "India" },
        ]
    },
    {
        data: "Type", location: [
            { text: "Private Office" },
            { text: "Public Office" },
        ]
    },
    {
        data: "Date", text: "9 Aug 2020",
    }
]
export const SWIPER_DATA = [
    { img: team, text: "Working with team" },
    { img: office, text: "Private Space" },
    { img: office, text: "Custom Office" },
    { img: team, text: "Working with team" },
    { img: office, text: "Private Space" },
    { img: team, text: "Working with team" },
]
export const WORKSPACE_DATA = [
    {
        data: [
            { icon: "meetingIcon", title: "500+", text: "Meeting rooms" },
            { icon: "flagIcon", title: "60+", text: "Countries" },
            { icon: "userIcon", title: "5k+", text: "Startup mentors" },

        ]
    },
    {
        data: [
            { icon: "eventIcon", title: "100+", text: "Event spaces" },
            { icon: "wifiIcon", title: "500 Mbps", text: "Internet speed" },
            { icon: "usersIcon", title: "200+", text: "Communities inside" },
        ]
    },
]
export const GALLERY_DATA = [
    { img: gallery },
    { img: work },
    { img: home },
    { img: officeWork },
    { img: gallery },
    { img: work },
    { img: home },
    { img: officeWork },
]
export const IMAGES_DATA = [
    { img: google },
    { img: tokopedio },
    { img: upwork },
    { img: microsoft },
    { img: shopify },
    { img: stripe },
]