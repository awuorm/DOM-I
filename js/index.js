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
    "h1": "DOM Is Awesome",
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

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// navigation anchors
let nav = document.querySelectorAll("a");
nav[0].textContent = siteContent["nav"]["nav-item-1"];
nav[1].textContent = siteContent["nav"]["nav-item-2"];
nav[2].textContent = siteContent["nav"]["nav-item-3"];
nav[3].textContent = siteContent["nav"]["nav-item-4"];
nav[4].textContent = siteContent["nav"]["nav-item-5"];
nav[5].textContent = siteContent["nav"]["nav-item-6"];

//header section
let ctaText = document.querySelectorAll(".cta .cta-text h1");
ctaText[0].textContent = siteContent["cta"]["h1"];

let ctaButton = document.querySelectorAll(".cta .cta-text button");
ctaButton[0].textContent = siteContent["cta"]["button"];

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

// main section
let mainContent = document.querySelectorAll(".main-content  .text-content h4");
mainContent[0].textContent = siteContent["main-content"]["features-h4"];
mainContent[1].textContent = siteContent["main-content"]["about-h4"];
mainContent[2].textContent = siteContent["main-content"]["services-h4"];
mainContent[3].textContent = siteContent["main-content"]["product-h4"];

let mainContentP = document.querySelectorAll(".main-content  .text-content p");
mainContentP[0].textContent = siteContent["main-content"]["features-content"];
mainContentP[1].textContent = siteContent["main-content"]["about-content"];
mainContentP[2].textContent = siteContent["main-content"]["services-content"];
mainContentP[3].textContent = siteContent["main-content"]["product-content"];

let mainContentImg = document.getElementById("middle-img");
mainContentImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//contact section
let contact = document.querySelectorAll(".contact h4");
contact[0].textContent = siteContent["contact"]["contact-h4"];
let contactAddress = document.querySelectorAll(".contact p");
contactAddress[0].textContent = siteContent["contact"]["address"];
contactAddress[1].textContent = siteContent["contact"]["phone"];
contactAddress[2].textContent = siteContent["contact"]["email"];

//footer section
let footer = document.getElementsByTagName("footer");
footer[0].textContent =siteContent["footer"]["copyright"];

// stretch
let addedNav = document.querySelector("nav");

let newAnchor = document.createElement("a");
newAnchor.textContent = "Login";
addedNav.appendChild(newAnchor);


let firstAnchor = document.createElement("a");
firstAnchor.textContent = "New users";
addedNav.prepend(firstAnchor);

let secAnchor = document.createElement("a");
secAnchor.textContent = "Old users";
addedNav.prepend(secAnchor);

let greenNav = document.querySelectorAll("a");
greenNav.forEach((arr) => arr.style.color = 'green');

let greenCta = document.querySelector(".cta");
greenCta.style.backgroundColor = "green";

let greenH4 = document.querySelectorAll(".main-content .text-content h4");
greenH4.forEach((arr) => arr.style.color = "green");










