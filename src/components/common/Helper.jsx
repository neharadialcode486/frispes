import team from "../../assets/images/webp/team.webp";
import office from "../../assets/images/webp/office.webp";
import gallery from "../../assets/images/webp/gallery.webp";
import work from "../../assets/images/webp/work.webp";
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
import coffee from "../../assets/images/webp/coffee-shop.webp";
export const NAVBAR_DATA_LIST = [
    { title: "Home", URL: "/" },
    { title: "Workspace", URL: "#workspace" },
    { title: "Service", URL: "#service" },
    { title: "Events", URL: "#events" },
    { title: "Reviews", URL: "#reviews" },
    { title: "Contact Us", URL: "#contact" },
]
export const FIND_YOUR_SPACE_LIST = [
    {
        title: "Location", location: [
            { text: "Malang, Indonesia" },
            { text: "USA" },
            { text: "India" },
        ]
    },
    {
        title: "Type", location: [
            { text: "Private Office" },
            { text: "Public Office" },
        ]
    },
    {
        title: "Date", text: "9 Aug 2020",
    }
]
export const OUR_SPACE_DATA_LIST = [
    { image: team, title: "Working with team" },
    { image: office, title: "Private Space" },
    { image: office, title: "Custom Office" },
    { image: team, title: "Working with team" },
    { image: office, title: "Private Space" },
    { image: team, title: "Working with team" },
]
export const WHY_FRISPES_DATA_LIST = [
    {
        list: [
            { icon: "meetingIcon", title: "500+", description: "Meeting rooms" },
            { icon: "flagIcon", title: "60+", description: "Countries" },
            { icon: "userIcon", title: "5k+", description: "Startup mentors" },

        ]
    },
    {
        list: [
            { icon: "eventIcon", title: "100+", description: "Event spaces" },
            { icon: "wifiIcon", title: "500 Mbps", description: "Internet speed" },
            { icon: "usersIcon", title: "200+", description: "Communities inside" },
        ]
    },
]
export const IMMERSIVE_BEAUTIFUL_DATA_LIST = [gallery, work, home, officeWork, gallery, work, home, officeWork,]
export const BRANDS_DATA = [
    { image: google, URL: "https://www.google.com/" },
    { image: tokopedia, URL: "https://www.tokopedia.com/" },
    { image: upwork, URL: "https://www.upwork.com/" },
    { image: microsoft, URL: "https://www.microsoft.com/en-in/" },
    { image: shopify, URL: "https://www.shopify.com/" },
    { image: stripe, URL: "https://stripe.com/in" },
]
export const FOOTER_DATA = [
    {
        heading: "Spaces", data: [
            { subHeading: "Co-working spaces", URL: "" },
            { subHeading: "Meeting rooms", URL: "" },
            { subHeading: "Event spaces", URL: "" },
            { subHeading: "Child playground", URL: "" },
            { subHeading: "Cafe & resto", URL: "" },
        ]
    },
    {
        heading: "Company", data: [
            { subHeading: "About Us", URL: "" },
            { subHeading: "Pricing", URL: "" },
            { subHeading: "Careers", URL: "" },
            { subHeading: "Press", URL: "" },
        ]
    },
    {
        heading: "Support", data: [
            { subHeading: "FAQs", URL: "" },
            { subHeading: "Privacy Policy", URL: "" },
            { subHeading: "Help", URL: "" },
        ]
    },
]
export const FOOTERCONTACT_DATA = [
    { text: "E.", subHeading: "Hello@frispes.com", URL: "mailto:Hello@frispes.com" },
    { text: "A.", subHeading: "Jalan Jayakatwang  No.301 Ngasem, Kediri", URL: "https://www.google.com/maps/place/Jl.+Jaya+Katwang+No.301,+Karangrejo,+Kec.+Ngasem,+Kabupaten+Kediri,+Jawa+Timur+64182,+Indonesia/@-7.7953201,112.037584,877m/data=!3m2!1e3!4b1!4m5!3m4!1s0x2e785753db52fefb:0xb1882e6f0a6f34b5!8m2!3d-7.7953201!4d112.0401589?entry=ttu&g_ep=EgoyMDI0MTAyMS4xIKXMDSoASAFQAw%3D%3D" },
    { text: "P.", subHeading: "(+62) 82334670000", URL: "callto:82334670000" },
]
export const ICON_DATA = [
    { icon: "instaIcon", URL: "https://www.instagram.com/accounts/login/?hl=en" },
    { icon: "youTubeIcon", URL: "https://www.youtube.com/" },
    { icon: "faceBookIcon", URL: "https://www.facebook.com/" },
]
export const REVIEWS_DATA = [
    { text: "Our team has been working at frispes for almost 2 months because our office still closed. During working at frispes, we feel a new experience, we can feel working with a beautiful, modern, and comfortable space. And cozy cafe with high-speed internet  in there. Thank you for frispes and team.", image: pedro, title: "Pedro Ibanez", data: "UI Designer at Google" },
    { text: "The high-speed internet at frispes was so amazing. I can get best experience when running video call with my clients. Frispes has spacious and safe parking area, that’s what i need because i used to work as freelancer for a long time.", image: raymond, title: "Raymond Thual", data: "Professional Freelancer" },
    { text: "Just three words : Frispes is Awesome!", image: berlian, title: "Yuli Berlian", data: "IOS Dev at Tokopedia" },
    { text: "Our team has been working at frispes for almost 2 months because our office still closed. During working at frispes, we feel a new experience, we can feel working with a beautiful, modern, and comfortable space. And cozy cafe with high-speed internet  in there. Thank you for frispes and team.", image: pedro, title: "Pedro Ibanez", data: "UI Designer at Google" },
    { text: "The high-speed internet at frispes was so amazing. I can get best experience when running video call with my clients. Frispes has spacious and safe parking area, that’s what i need because i used to work as freelancer for a long time.", image: raymond, title: "Raymond Thual", data: "Professional Freelancer" },
    { text: "Just three words : Frispes is Awesome!", image: berlian, title: "Yuli Berlian", data: "IOS Dev at Tokopedia" },
    { text: "Our team has been working at frispes for almost 2 months because our office still closed. During working at frispes, we feel a new experience, we can feel working with a beautiful, modern, and comfortable space. And cozy cafe with high-speed internet  in there. Thank you for frispes and team.", image: pedro, title: "Pedro Ibanez", data: "UI Designer at Google" },
]
export const CARD_DATA = [
    { image: pichai, title: "Google I / O 2020 news update", text: "Anthony Masional", heading: "Google I / O 2020 news update", data: "Out of concern for the health and safety of our developers, employees, and local communities — and in line with recent ...", icon: ceo, name: "Sundar pichai", work: "CEO at Google" },
    { image: pichai, title: "Minimal workspace for inspirations", text: "Anthony Masional", heading: "Google I / O 2020 news update", data: "Out of concern for the health and safety of our developers, employees, and local communities — and in line with recent ...", icon: pedro, name: "Pedro Ibanez", work: "UI Designer at Google" },
    { image: minimal, title: "Minimal workspace for inspirations", text: "Anthony Masional", heading: "Minimal for inspirations", data: "Our team has been working at frispes for almost 2 months because our office still closed", icon: raymond, name: "Raymond Thual", work: "Professional Freelancer" },
    { image: franck, title: "Does productivity increase when working remotely ? ", text: "Franck Martin", heading: "Does increase when working", data: "Our team has been working at frispes for almost 2 months because our office still closed", icon: berlian, name: "Yuli Berlian", work: "IOS Dev at Tokopedia" },
    { image: elizabeth, title: "Morning routine to boost your mood", text: "Elizabeth swan", heading: "Morning routine to boost your", data: "The high-speed internet at frispes was so amazing. I can get best experience I can get best experience", icon: pedro, name: "Pedro Ibanez", work: "UI Designer at Google" },
    { image: mykola, title: "5+ tips to find comfortable co-working space", text: "Mykola Ilschenko", heading: "5+ tips to find comfortable", data: "The high-speed internet at frispes was so amazing. I can get best experience I can get best experience", icon: berlian, name: "Yuli Berlian", work: "IOS Dev at Tokopedia" },
]
export const TABS_DATA = [
    { title: "parking", text: "Spacious parking area" },
    { title: "spaces", text: "Comfortable spaces" },
    { title: "cafe", text: "Cozy cafe" },
    { title: "playground", text: "Child playground" },
    { title: "outdoor", text: "Outdoor spaces" },
    { title: "parking", text: "Spacious parking area" },
    { title: "spaces", text: "Comfortable spaces" },
];

export const FACILITIES_DATA = [
    { image: coffee },
    { image: team },
    { image: gallery },
    { image: work },
    { image: coffee },
    { image: coffee },
    { image: coffee },
]