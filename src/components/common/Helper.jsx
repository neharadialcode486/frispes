import team from "../../assets/images/webp/team.webp";
import office from "../../assets/images/webp/office.webp";
import gallery from "../../assets/images/webp/gallery-img.webp";
import work from "../../assets/images/webp/work-img.webp";
import home from "../../assets/images/webp/home-work.webp";
import officeWork from "../../assets/images/webp/office-work.webp";
import google from "../../assets/images/webp/google.webp";
import tokopedia from "../../assets/images/webp/tokopedia.webp";
import upwork from "../../assets/images/webp/upwork.webp";
import microsoft from "../../assets/images/webp/microsoft.webp";
import shopify from "../../assets/images/webp/shopify.webp";
import stripe from "../../assets/images/webp/stripe.webp";
import pedro from "../../assets/images/webp/pedro.webp";
import raymond from "../../assets/images/webp/raymond.webp";
import berlian from "../../assets/images/webp/berlian.webp";
import pichai from "../../assets/images/webp/sunder-pichai.webp";
import minimal from "../../assets/images/webp/minimal.webp";
import franck from "../../assets/images/webp/franck.webp";
import elizabeth from "../../assets/images/webp/elizabeth.webp";
import mykola from "../../assets/images/webp/mykola.webp";
import ceo from "../../assets/images/webp/google-ceo.webp";
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
    { img: google, url: "https://www.google.com/" },
    { img: tokopedia, url: "https://www.tokopedia.com/" },
    { img: upwork, url: "https://www.upwork.com/" },
    { img: microsoft, url: "https://www.microsoft.com/en-in/" },
    { img: shopify, url: "https://www.shopify.com/" },
    { img: stripe, url: "https://stripe.com/in" },
]
export const FOOTER_DATA = [
    {
        heading: "Spaces", data: [
            { subHeading: "Co-working spaces", url: "" },
            { subHeading: "Meeting rooms", url: "" },
            { subHeading: "Event spaces", url: "" },
            { subHeading: "Child playground", url: "" },
            { subHeading: "Cafe & resto", url: "" },
        ]
    },
    {
        heading: "Company", data: [
            { subHeading: "About Us", url: "" },
            { subHeading: "Pricing", url: "" },
            { subHeading: "Careers", url: "" },
            { subHeading: "Press", url: "" },
        ]
    },
    {
        heading: "Support", data: [
            { subHeading: "FAQs", url: "" },
            { subHeading: "Privacy Policy", url: "" },
            { subHeading: "Help", url: "" },
        ]
    },
    {
        heading: "Contact Us", data: [
            { subHeading: "E.  Hello@frispes.com", url: "" },
            { subHeading: "A.  Jalan Jayakatwang  No.301 Ngasem, Kediri", url: "" },
            { subHeading: "P.  (+62) 82334670000", url: "" },
        ]
    },
]
export const ICON_DATA = [
    { icon: "instaIcon", url: "https://www.instagram.com/accounts/login/?hl=en" },
    { icon: "youTubeIcon", url: "https://www.youtube.com/" },
    { icon: "faceBookIcon", url: "https://www.facebook.com/" },
]
export const REVIEWS_DATA = [
    { text: "Our team has been working at frispes for almost 2 months because our office still closed. During working at frispes, we feel a new experience, we can feel working with a beautiful, modern, and comfortable space. And cozy cafe with high-speed internet  in there. Thank you for frispes and team.", img: pedro, title: "Pedro Ibanez", data: "UI Designer at Google" },
    { text: "The high-speed internet at frispes was so amazing. I can get best experience when running video call with my clients. Frispes has spacious and safe parking area, that’s what i need because i used to work as freelancer for a long time.", img: raymond, title: "Raymond Thual", data: "Professional Freelancer" },
    { text: "Just three words : Frispes is Awesome!", img: berlian, title: "Yuli Berlian", data: "IOS Dev at Tokopedia" },
    { text: "Our team has been working at frispes for almost 2 months because our office still closed. During working at frispes, we feel a new experience, we can feel working with a beautiful, modern, and comfortable space. And cozy cafe with high-speed internet  in there. Thank you for frispes and team.", img: pedro, title: "Pedro Ibanez", data: "UI Designer at Google" },
    { text: "The high-speed internet at frispes was so amazing. I can get best experience when running video call with my clients. Frispes has spacious and safe parking area, that’s what i need because i used to work as freelancer for a long time.", img: raymond, title: "Raymond Thual", data: "Professional Freelancer" },
    { text: "Just three words : Frispes is Awesome!", img: berlian, title: "Yuli Berlian", data: "IOS Dev at Tokopedia" },
]
export const CARD_DATA = [
    { img: pichai, title: "Google I / O 2020 news update", text: "Anthony Masional", heading: "Google I / O 2020 news update", data: "Out of concern for the health and safety of our developers, employees, and local communities — and in line with recent ...", icon: ceo, name: "Sundar pichai", work: "CEO at Google" },
    { img: pichai, title: "Minimal workspace for inspirations", text: "Anthony Masional", heading: "Google I / O 2020 news update", data: "Out of concern for the health and safety of our developers, employees, and local communities — and in line with recent ...", icon: pedro, name: "Pedro Ibanez", work: "UI Designer at Google" },
    { img: minimal, title: "Minimal workspace for inspirations", text: "Anthony Masional", heading: "Minimal for inspirations", data: "Our team has been working at frispes for almost 2 months because our office still closed", icon: raymond, name: "Raymond Thual", work: "Professional Freelancer" },
    { img: franck, title: "Does productivity increase when working remotely ? ", text: "Franck Martin", heading: "Does increase when working", data: "Our team has been working at frispes for almost 2 months because our office still closed", icon: berlian, name: "Yuli Berlian", work: "IOS Dev at Tokopedia" },
    { img: elizabeth, title: "Morning routine to boost your mood", text: "Elizabeth swan", heading: "Morning routine to boost your", data: "The high-speed internet at frispes was so amazing. I can get best experience I can get best experience", icon: pedro, name: "Pedro Ibanez", work: "UI Designer at Google" },
    { img: mykola, title: "5+ tips to find comfortable co-working space", text: "Mykola Ilschenko", heading: "5+ tips to find comfortable", data: "The high-speed internet at frispes was so amazing. I can get best experience I can get best experience", icon: berlian, name: "Yuli Berlian", work: "IOS Dev at Tokopedia" },
]