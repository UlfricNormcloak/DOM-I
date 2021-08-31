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
logo.setAttribute('src', siteContent["nav"]["img-src"])

//header items
document.querySelector('nav a').textContent = siteContent['nav']['nav-item-1'];
document.querySelector('nav a:nth-of-type(2)').textContent = siteContent['nav']['nav-item-2'];
document.querySelector('nav a:nth-of-type(3)').textContent = siteContent['nav']['nav-item-3'];
document.querySelector('nav a:nth-of-type(4)').textContent = siteContent['nav']['nav-item-4'];
document.querySelector('nav a:nth-of-type(5)').textContent = siteContent['nav']['nav-item-5'];
document.querySelector('nav a:nth-of-type(6)').textContent = siteContent['nav']['nav-item-6'];

//added elements, events, and style changes//
const newNavItem1 = document.createElement('a');
newNavItem1.textContent = 'Blog';
document.querySelector('nav').prepend(newNavItem1);

const newNavItem2 = document.createElement('a');
newNavItem2.textContent = 'Projects';
document.querySelector('nav').appendChild(newNavItem2);

const navItems = document.querySelectorAll('nav a');
navItems.forEach(item => item.style.color = 'green');

document.querySelector('footer p').style.color = "red";
document.querySelector('.contact h4').style.color = 'blue';

document.querySelector('.contact p').addEventListener('mouseover', event => {
  event.target.style.color = 'green';
})
document.querySelector('.contact p').addEventListener('mouseleave', event => {
  event.target.style.color = 'black';
})
///end of added elements and style changes///

//cta section
document.querySelector('h1').innerHTML = 'DOM <br> IS <br> AWESOME';
document.querySelector('button').textContent = siteContent['cta']['button'];
document.querySelector('#cta-img').src = siteContent['cta']['img-src'];

//main content: above wide image
document.querySelector('h4').textContent = siteContent['main-content']['features-h4'];
document.querySelector('p').textContent = siteContent['main-content']['features-content'];
document.querySelector('.top-content .text-content:nth-of-type(2) h4').textContent = siteContent['main-content']['about-h4'];
document.querySelector('.top-content .text-content:nth-of-type(2) p').textContent = siteContent['main-content']['about-content'];

//image between main content
const bannerImg = document.getElementById('middle-img');
bannerImg.setAttribute('src', siteContent['main-content']['middle-img-src']);


//main content: below wide image
document.querySelector('.bottom-content h4').textContent = siteContent['main-content']['services-h4'];
document.querySelector('.bottom-content p').textContent = siteContent['main-content']['services-content'];
document.querySelector('.bottom-content .text-content:nth-of-type(2) h4').textContent = siteContent['main-content']['product-h4'];
document.querySelector('.bottom-content .text-content:nth-of-type(2) p').textContent = siteContent['main-content']['product-content'];
document.querySelector('.bottom-content .text-content:nth-of-type(3) h4').textContent = siteContent['main-content']['vision-h4'];
document.querySelector('.bottom-content .text-content:nth-of-type(3) p').textContent = siteContent['main-content']['vision-content'];

//contact section
document.querySelector('.contact h4').textContent = siteContent['contact']['contact-h4'];
document.querySelector('.contact p').innerHTML = '123 Way 456 Street <br> Somewhere USA';
document.querySelector('.contact p:nth-of-type(2)').textContent = siteContent['contact']['phone'];
document.querySelector('.contact p:nth-of-type(3)').textContent = siteContent['contact']['email'];

//footer section
document.querySelector('footer p').textContent = siteContent['footer']['copyright'];