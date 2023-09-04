import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bike1, bike2, bigShoe3, customer1, customer2, bike4, bike5, bike6, bike7, smallredbike,smallblackbike,smallbluebike} from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const bikes = [
    {
        thumbnail:smallredbike,
        bigShoe: bike1,
      },
    {
        thumbnail: smallblackbike,
        bigShoe: bike2,
    },
    {
        thumbnail: smallbluebike,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '20+', label: 'Brands' },
    { value: '50+', label: 'Showrooms' },
    { value: '1k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: bike4,
        name: "ACTIVA STD,DLX",
        price: "10000rs",
    },
    {
        imgURL: bike5,
        name: "Honda CB350RS",
        price: "$210.20",
    },
    {
        imgURL: bike6,
        name: "Shine Disc - OBD2",
        price: "$220.20",
    },
    {
        imgURL: bike7,
        name: "Honda Dio",
        price: "$230.20",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy the safe delivary experince "
    },
    {
        imgURL: shieldTick,
        label: "Low downpayment",
        subtext: "Low cost emi at very reasonable rate of intrest."
    },
    {
        imgURL: support,
        label: "custamor Support",
        subtext: "very genuine guidence to the customers."
    },
    {
        imgURL: support,
        label: "Loan availability",
        subtext: "can be ordered all around hyderabad"
    }
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Nike Waffle Racer", link: "/" },
            { name: "Nike Cortez", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@nike.com", link: "mailto:customer@nike.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];