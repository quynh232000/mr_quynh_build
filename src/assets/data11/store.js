import a1 from '../images/mylife/a1.jpg'
import a2 from '../images/mylife/a2.jpg'
import a3 from '../images/mylife/a3.jpg'
import a4 from '../images/mylife/a4.jpg'
import a5 from '../images/mylife/a5.jpg'

const images = [
    {
        link: a1,
        type: 'image'
    },
    {
        link: a2,
        type: 'image'
    },
    {
        link: a3,
        type: 'image'
    },
    {
        link: 'https://www.youtube.com/embed/wg9Dv5g0_WY?si=1sGhBmPzgoo1AQrX',
        type: 'video'
    },
    {
        link: a4,
        type: 'image'
    },
    {
        link: a5,
        type: 'image'
    }
]


// ------------work

import tiktok1 from "../images/tiktok1.png"
import tiktok2 from "../images/tiktok2.png"
import tiktok3 from "../images/tiktok3.png"
import tiktok4 from "../images/tiktok4.png"
import fpt1 from "../images/fpt1.png"
import fpt2 from "../images/fpt2.png"
import fpt3 from "../images/fpt3.png"
import fpt4 from "../images/fpt4.png"
import quin1 from "../images/quin1.png"
import quin2 from "../images/quin2.png"
import quin3 from "../images/quin3.png"
import quin4 from "../images/quin4.png"
import quin5 from "../images/quin5.png"
import quin6 from "../images/quin6.png"
import js1 from "../images/js1.png"
import js2 from "../images/js2.png"
import js3 from "../images/js3.png"
import js4 from "../images/js4.png"

import gpt1 from "../images/gpt1.png"
import gpt2 from "../images/gpt2.png"
import gpt3 from "../images/gpt3.png"

import fb1 from "../images/fb1.png"
import fb2 from "../images/fb2.png"
import fb3 from "../images/fb3.png"
import fb4 from "../images/fb4.png"
import fb5 from "../images/fb5.png"

import tra1 from "../images/travel1.png"
import tra2 from "../images/travel2.png"
import tra3 from "../images/travel3.png"
import tra4 from "../images/travel4.png"

import course1 from "../images/course1.png"
import course2 from "../images/course2.png"
import course3 from "../images/course3.png"
import course4 from "../images/course4.png"
import course5 from "../images/course5.png"

import e1 from "../images/e1.png"
import e2 from "../images/e2.png"
import e3 from "../images/e3.png"
import e4 from "../images/e4.png"
import e6 from "../images/e6.png"


const DataWorks =
    [
        {
            "id": "1001",
            "title": "Quin - Ecommerce (ReactJs - Laravel)",
            "slug": "quin-ecommerce",
            "description": "Quin ecommerce: Sell and Shopping online in Quin Ecommerce.",
            "isHome": true,
            "featured": [
                "User: Find product and buy",
                "Shop: Add , manage product in shop.",
                "Admin: CRUD course, category, user, setting, banners,..."
            ],
            "category": ["ReactJS", "TypeScript", "TailwindCSS", "Laravel"],
            "thumbnail": e1,
            "images": [
                e1,
                e2,
                e3,
                e4,
                e6
            ],
            "demo": "https://ecommerce.mr-quynh.com",
            "source": "https://gitlab.com/quynh232000/quin_ecommerce",
        },
        {
            "id": "1000",
            "title": "Quin - Course",
            "slug": "quincourse",
            "description": "Course learning: React and Laravel Api.",
            "isHome": true,
            "featured": [
                "Find course",
                "Find, filter, search...",
                "User: buy course, learning course, payment banking, create blog,...",
                "Teacher: create course, manage course, dashboard...",
                "Admin: CRUD course, category, user, setting, banners,..."
            ],
            "category": ["ReactJS", "TypeScript", "TailwindCSS", "Laravel"],
            "thumbnail": course1,
            "images": [
                course1,
                course2,
                course3,
                course4,
                course5
            ],
            "demo": "https://course.mr-quynh.com",
            "source": "https://github.com/quynh232000/quin_course_api",
        },
        {
            "id": "0000",
            "title": "Quin - Travel",
            "slug": "quintravel",
            "description": "Webtravel: Angular and Laravel Api.",
            "isHome": true,
            "featured": [
                "Find tour",
                "Story: create, view",
                "User: Login, create account with google, manage profile, order,...",
                "Booking: booking tour,orderhistory..."
            ],
            "category": ["Angular", "TypeScript", "Bootstrap", "Laravel"],
            "thumbnail": tra1,
            "images": [
                tra2,
                tra3,
                tra4,
                tra1

            ],
            "demo": "https://travel.mr-quynh.com",
            "source": "https://github.com/quynh232000/angular_travel",
        },
        {
            "id": "000",
            "title": "QuinSocial - (Facebook Clone)",
            "slug": "quinsocail-facebook-clone",
            "description": "I have clone design web on Facebook with features:create register, login, upload post, view profile, create story, create  group, join ,add friend, chatbox realtime, notifications realtime,... with Reactjs and Laravel.",
            "isHome": true,
            "featured": [
                "Create account, login",
                "Post: like, save, comment",
                "Story: create, view",
                "User: add friend, chatbox realtime, notifications realtime",
                "Group: create, join, post group,..."
            ],
            "category": ["ReactJS", "TypeScript", "TailwindCSS", "Laravel"],
            "thumbnail": fb1,
            "images": [
                fb2,
                fb3,
                fb4,
                fb5,
                fb1

            ],
            "demo": "https://facebook.mr-quynh.com",
            "source": "https://github.com/quynh232000/facebook_api",
        },
        {
            "id": "001",
            "title": "Tiktok Clone - ReactJs",
            "slug": "tiktok-clone-reactjs",
            "description": "I have clone design web on Tiktok with features:follow, searching, register, login, upload post, view profile with Reactjs.",
            "isHome": true,
            "featured": [
                "Follow users",
                "Create account, login",
                "Post video",
                "View profile",
                "Search user",
            ],
            "category": ["ReactJS", "HTML/CSS"],
            "thumbnail": tiktok1,
            "images": [
                tiktok1,
                tiktok2,
                tiktok3,
                tiktok4,

            ],
            "demo": "https://tiktok.mr-quynh.com",
            "source": "https://github.com/quynh232000/tiktok",
        },
        {
            "id": "003",
            "title": "Shopping EConomic (Like Shope)",
            "slug": "shopping-economic",
            "isHome": true,

            "description": "I have developed a multilingual ecommerce website that allows customers to shop online for consumer products. The website is built using php for the user interface and Mysql for database.",
            "category": ["PHP", 'MySQL'],
            "features": [
                "Multilingual product and category management",
                "Product search and filters",
                "Shopping cart",
                "Order tracking",
                "User management and access control"
            ],
            "thumbnail": quin1,
            "images": [
                quin1,
                quin2,
                quin3,
                quin4,
                quin5,
                quin6,
            ],
            "source": "https://github.com/quynh232000/quin_shop_group",
            "demo": "https://quin.mr-quynh.com/",
        },
        {
            "id": "002",
            "title": "FPT SHOP CLONE - Reactjs/Nodejs",
            "slug": "fpt-shop-clone-reactjs-nodejs",
            "isHome": true,

            "description": "A website EConomic buying product with full feature clone on FPT Shop",
            "featured": [
                "Fillter, search products",
                "Integration of personal social media",
                "Technologies used: ReactJS, CSS"
            ],
            "category": ["ReactJS", "NodeJS", "MySQL"],
            "thumbnail": fpt1,
            "images": [
                fpt1,
                fpt2,
                fpt3,
                fpt4,
            ],
            "demo": "https://store.mr-quynh.com",
            "source": "https://github.com/quynh232000/storebackend1",
        },

        {
            "id": "008",
            "title": "Html, css, Js basic",
            "slug": "html-css-js-basic",
            "isHome": true,

            "description": "Course about html,css, js basic; Build small feature with jsbasic",
            "category": ["HTML/CSS", "JS"],
            "features": [
                "Learning about html css jsbasic"
            ],
            "thumbnail": js1,
            "images": [
                js1,
                js2,
                js3,
                js4,
            ],
            "demo": "http://jsbasic.mr-quynh.com/",
            "source": "https://github.com/quynh232000/javascript-basic",
        },
        {
            "id": "009",
            "title": "Landingpage ChatGPT",
            "slug": "landingpage-chatgpt",
            "isHome": true,

            "description": "Course about html,css, js basic; Build a landingpage for contest",
            "category": ["HTML/CSS", "JS"],
            "features": [
                "Learning about layout of the landingage"
            ],
            "thumbnail": gpt1,
            "images": [
                gpt1,
                gpt2,
                gpt3,
            ],
            "demo": "http://chatgpt.mr-quynh.com/",
            "source": "https://github.com/quynh232000/landingpagechatgpt",
        },

    ]


// info ==================
import cv from "../../../public/cv.pdf"
import img_background from "../../assets/images/user.png"

import avatar from "../../assets/images/avatar.jpg";
const DataInfo = {
    avatar: avatar,
    name: 'Nguyen Van Quynh',
    age: 24,
    birthday: "02/03/2000",
    major: 'Web ',
    position: 'Developer',
    cv: cv,
    img_background: img_background,
    location: 'D.12,  Ho Chi Minh City',
    bio: 'I am an web developer. I love to build a website and I am always looking for new projects to work on.',
    description: `I am passionate about Web development to create user-friendly
            websites. With 1 years of experience working with HTML/CSS,
            JavaScript and ReactJS, I have developed strong capabilities in
            these technologies. I pride myself on my ability to quickly learn
            new skills, work effectively in teams, and communicate well.`,
    email: "quynh232000@gmail.com",
    socials: [
        {
            type: 'facebook',
            link: 'https://www.facebook.com/quynh232000/'
        },
        {
            type: 'github',
            link: 'https://github.com/quynh232000'
        },
        {
            type: 'youtube',
            link: 'https://www.youtube.com/channel/UCAL4wSnUi2q4ueJWTObgdTw'
        },
        {
            type: 'instagram',
            link: 'https://www.facebook.com/quynh232000/'
        },
        // {
        //     type: 'behance',
        //     link: 'https://www.facebook.com/quynh232000/'
        // },
    ],
    phone: "0358723520",

    languages: [{ name: 'English', content: " Read, basic listening, reading and comprehension" }],
    skills: [
        {
            name: 'HTML, CSS, JavaScript',
            content: "dfgdg",
        },
        {
            name: 'ReactJs, Angular ( Typescript)',
            content: "",
        },
        {
            name: 'PHP (OOP), Laravel (MVC, API), Lumen',
            content: "",
        },
        {
            name: 'NodeJS (ExpressJS)',
            content: "",
        },
        {
            name: 'MySQL, MongoDB',
            content: "",
        },
        {
            name: 'Docker, Github, Gitlab',
            content: "",
        },

    ],
    extra_skills: [
        'Bootstrap, Tailwind , Sass/Scss',
        'Git, Github'
    ],
    reviews: [
        {
            avatar: 'https://www.mymac.com/wp-content/uploads/2011/10/steve_jobs135148.jpg',
            name: 'Steve Jobs',
            username: 'SteveJobs',
            content: `The only way to do great work is to love what you do.`
        },
        {
            avatar: 'https://www.mymac.com/wp-content/uploads/2011/10/steve_jobs135148.jpg',
            name: 'Steve Jobs',
            username: 'SteveJobs',
            content: `The code you write makes you a programmer. The code you delete makes you a good one.`
        },
        {
            avatar: 'https://stevemaraboli.net/wp-content/uploads/2016/02/stevemarabolivet.jpg',
            name: 'Steve Maraboli',
            username: 'scott.windon',
            content: `Change starts from within. Be your own source of motivation.`
        },
    ],
    educations: [
        {
            time: '2023 - 12/2024',
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/FPT_Polytechnic.png/1200px-FPT_Polytechnic.png",
            name: 'FPT Polytechnic',
            content: `I'm a student at FPT Polytechnic`,
            address: 'HCM city'
        },
        {
            time: '2025 - Now',
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUTWEA6AUhGx2IpCISufD-JWl0u2aIp5u9aA&s",
            name: 'Viet Nam Booking',
            content: `I'm a Backend developer at Viet Nam Booking company.`,
            address: 'HCM city'
        },
    ]
}

// icon ==================
const icons = {
    facebook: "https://cdn-icons-png.flaticon.com/512/174/174848.png",
    instagram: "https://cdn-icons-png.flaticon.com/512/174/174855.png",
    github: "https://cdn-icons-png.flaticon.com/512/174/174855.png",
    youtube: "https://cdn-icons-png.flaticon.com/512/174/174855.png",
    download: "https://cdn-icons-png.flaticon.com/512/174/174855.png",
    ReactJS: "https://cdn.icon-icons.com/icons2/2415/PNG/512/react_original_logo_icon_146374.png",
    TailwindCSS: "https://cdn.icon-icons.com/icons2/2699/PNG/512/tailwindcss_logo_icon_167923.png",
    NodeJS: "https://cdn.icon-icons.com/icons2/2415/PNG/512/nodejs_plain_logo_icon_146409.png",
    ExpressJS: "https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169186.png",
    Firebase: "https://cdn.icon-icons.com/icons2/2699/PNG/512/firebase_logo_icon_171157.png",
    Laravel: "https://cdn.icon-icons.com/icons2/2248/PNG/512/laravel_icon_135451.png",
    "HTML/CSS": "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_html_icon_130541.png",
    PHP: "https://cdn.icon-icons.com/icons2/2415/PNG/512/php_plain_logo_icon_146397.png",
    Wordpress:"https://cdn.icon-icons.com/icons2/2699/PNG/512/wordpress_logo_icon_167953.png",
    Bootstrap:"https://cdn.icon-icons.com/icons2/2415/PNG/512/bootstrap_plain_logo_icon_146619.png",
    JS:"https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_js_icon_130510.png",
    MySQL:"https://cdn.icon-icons.com/icons2/2415/PNG/512/mysql_original_wordmark_logo_icon_146417.png",
    Angular:"https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_angular_icon_130754.png",
    TypeScript:"https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_typescript_icon_130108.png"
}
// category ==========================
const categories = [
    {
        id:1,
        name:"ReactJS",
        icon:"https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
    },
   
    {
        id:4,
        name:"NodeJS",
        icon:"https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
    },
    {
        id:8,
        name:"HTML/CSS",
    },
]
export const StoreData = {
    images,
    DataWorks,
    DataInfo,
    icons,
    categories
}


