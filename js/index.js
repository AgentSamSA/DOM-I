const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM <br> Is <br> Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

//Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

const navLink = document.querySelectorAll("header nav a");
navLink.forEach((link, i) => link.textContent = siteContent["nav"][`nav-item-${i + 1}`]);

const cta = document.querySelector(".cta");
cta.querySelector("h1").innerHTML = siteContent["cta"]["h1"];

const codeImg = document.getElementById("cta-img");
codeImg.setAttribute("src", siteContent["cta"]["img-src"]);

const button = document.querySelector(".cta button");
button.textContent = siteContent["cta"]["button"];

const topContent = document.querySelector(".top-content");

const h4Text = topContent.querySelector(".text-content:nth-of-type(1) h4");
h4Text.textContent = siteContent["main-content"]["features-h4"];
const h4Text2 = topContent.querySelector(".text-content:nth-of-type(2) h4");
h4Text2.textContent = siteContent["main-content"]["about-h4"];

const pText = topContent.querySelector(".text-content:nth-of-type(1) p");
pText.textContent = siteContent["main-content"]["features-content"];
const pText2 = topContent.querySelector(".text-content:nth-of-type(2) p");
pText2.textContent = siteContent["main-content"]["about-content"];

const codeSnippets = document.getElementById("middle-img");
codeSnippets.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

const bottomContent = document.querySelector(".bottom-content");

const h4Text3 = bottomContent.querySelector(".text-content:nth-of-type(1) h4");
h4Text3.textContent = siteContent["main-content"]["services-h4"];
const h4Text4 = bottomContent.querySelector(".text-content:nth-of-type(2) h4");
h4Text4.textContent = siteContent["main-content"]["product-h4"];
const h4Text5 = bottomContent.querySelector(".text-content:nth-of-type(3) h4");
h4Text5.textContent = siteContent["main-content"]["vision-h4"];

const pText3 = bottomContent.querySelector(".text-content:nth-of-type(1) p");
pText3.textContent = siteContent["main-content"]["services-content"];
const pText4 = bottomContent.querySelector(".text-content:nth-of-type(2) p");
pText4.textContent = siteContent["main-content"]["product-content"];
const pText5 = bottomContent.querySelector(".text-content:nth-of-type(3) p");
pText5.textContent = siteContent["main-content"]["vision-content"];

