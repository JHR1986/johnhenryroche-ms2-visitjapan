# Visit Japan

- [Travel Website - Milestone Project 2](#travel-website---milestone-project-2)
- [User Experience](#user-experience)
  * [User stories](#user-stories)
  * [First Time Visitor Goals](#first-time-visitor-goals)
  * [Returning Visitor Goals](#returning-visitor-goals)
  * [Frequent Visitor Goals](#frequent-visitor-goals)
- [Design](#design)
  * [Colour Scheme](#colour-scheme)
  * [Typography](#typography)
  * [Imagery](#imagery)
  * [Wireframes](#wireframes)
- [Features](#features)
- [Technologies Used](#technologies-used)
  * [Languages Used](#languages-used)
  * [Frameworks, Libraries & Programs Used](#frameworks--libraries---programs-used)
- [Testing](#testing)
- [Deployment](#deployment)
  * [GitHub Pages](#github-pages)
  * [Forking the GitHub Repository](#forking-the-github-repository)
  * [Making a Local Clone](#making-a-local-clone)
- [Credits](#credits)
  * [Code](#code)
  * [Content](#content)
  * [Media](#media)
  * [Acknowledgements](#acknowledgements)

## Travel Website - Milestone Project 2

[View the Live Website Here](https://jhr1986.github.io/johnhenryroche-ms2-visitjapan/)

This project comprises the development of a 3-page fictional website prepared by the Japanese embassy in Dublin, which is aimed at encouraging Irish people to visit Japan. The website has three pages, (i) Home, (ii) Experiences and (iii) Enquiries, and the aim of these pages is to provide an overview of what Japan has to offer, including places to visit and activities to take part in, while also allowing visitors to request a pdf brochure on Japan prepared by the Japanese embassy.    

In respect of the construction of the website, it has been designed to be fully responsive, intuitive and accessible on a range of media devices (e.g. mobile, tablet & desktop), in order to make it easy for visitors to the website to navigate it and source the information that they require.

Photo of Site Represented on Various Media to highlight responsive design:

![Responsive-photo](https://user-images.githubusercontent.com/71781554/110772746-de652880-8253-11eb-8952-f943fe1eead1.png)

## User Experience 

### User stories

### First Time Visitor Goals
1.	As a First Time Visitor, I want to quickly establish what information the website contains in respect of visiting Japan.
2.	As a First Time Visitor, I want to be able to easily navigate throughout the site pages and find key information about places to visit and activities to do when you visit Japan.
3.	As a First Time Visitor, I want to be able to go to the enquiries page and fill out the contact form in order to receive a brochure about Japan (this process can also be completed by the returning visitor). 

### Returning Visitor Goals
1.	As a Returning Visitor, I want to request a brochure and email the Visit Japan team with any queries that I have about visiting Japan.
2.	As a Returning Visitor, I want to be able to easily access the key information in respect of contacting the Japanese Embassy in Dublin and their opening hours and location (all contained within the footer).

### Frequent Visitor Goals
1.	As a Frequent/Returning Visitor, I want to see if any additional information about Japan has been added to the Experiences page (e.g. are they focusing on other areas cities in Japan that the person may wish to visit). 
2.	As a Frequent/Returning Visitor, I want to able to contact the Japanese embassy with further queries (e.g. visa issues) about visiting Japan and all of the relevant contact information is in the footer.

## Design

### Colour Scheme
- In line with the Bootstrap dark theme that I used for the Navbar and Footer, I used the colour of the Japanese flag (red and white), while contrasting this with shades of grey, pink, yellow and black. These colours were also used to match the logo that I created for the site. 
- The colours that I used for the website are detailed in the colour chart below which I prepared on coolors.co;

![colors-photo](https://user-images.githubusercontent.com/71781554/110777604-38b4b800-8259-11eb-833c-acbcf0c25706.png)
 
### Typography
- The Lato font (which I downloaded from Google Fonts) is the main font used throughout the whole website with Sans Serif as the fallback font in case for any reason the Lato font fails to be imported correctly.
- As per its description on the Google Fonts website, Lato is a sans serif typeface family started in the summer of 2010 by Warsaw-based designer Łukasz Dziedzic (“Lato” means “Summer” in Polish). The semi-rounded details of the letters give Lato a feeling of warmth, while the strong structure provides stability and seriousness.

### Imagery
- The imagery within the website is an important feature for outlining why Japan is a place that people wish to visit. On this basis, the large background hero image on the Home Page of the historic Kyoto skyline, with two figures in traditional dress in the foreground, is designed to be striking and catch the user's attention (see image below), while also highlighting the history of the country. The Enquiries page has five images highlighting nature in Japan (cherry blossom flowers and trees in a forest), the people and the history (traditional dress and a temple and street in Kyoto). 

![optimized-kyoto](https://user-images.githubusercontent.com/71781554/110809589-f1402300-827c-11eb-936f-e455bda72eba.jpg)

### Wireframes
- My general site map and wireframes are saved to PDF and can be found [here](assets/images/wireframes.pdf). I designed them at the start of the project and they served as the basis for this project. 
- In review, the wireframes stayed generally consistent with the finished design (especially in respect of the Index.html page) but I amended the proposed layout for page 2 and page 3, by containing all of the places to see and things to do information within one page (experiences.html), while creating a new page (enquiries.html) in order to utilise EmailJs through having a form and additional images on that page.

## Features
- The website is responsive on all device sizes (and has been tested through Chrome Dev Tools on various devices including iPhone 6, iPhone X, iPad and Desktop).
- The website has several interactive elements, including two Bootstrap buttons on the Homepage which can be clicked to navigate to the Experiences and Enquiries Pages. 
- Each page in the website features a responsive bootstrap navigation bar with the site logo featured to the left and the three page links to the right, and these pages also each contain a 4 column footer with a copyright message, address, opening hours and contact information (email and phone). The Homepage features a large hero image, while there are various smaller images inputted in Enquiries and a large Google Map in the Experiences page. Each page has been designed to be intuitive and easy to follow, with text prepared in a concise and to the point structure, and flows in a logical manner from the Home Page to the Enquiries Page:
    - Home Page: Hero Image with Heading Text detailing the purpose of the website.
    - Experiences Page: Google Map with four markers and information about activities in four cities (Tokyo, Osaka, Kyoto & Sapporo) detailed below.
    - Enquiries Page: Contact Form with images of life in Japan (see screenshot below).

Enquiry page images:
![photos-new](https://user-images.githubusercontent.com/71781554/110811257-71b35380-827e-11eb-8523-a600c76bb3ce.png)


## Technologies Used

### Languages Used
- [HTML5](https://en.wikipedia.org/wiki/HTML5)
- [CSS3](https://en.wikipedia.org/wiki/CSS)
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

### Frameworks, Libraries & Programs Used
1.	[Bootstrap 4](https://getbootstrap.com/docs/4.6/getting-started/introduction/): Bootstrap was utilised to assist with the responsiveness and styling of the website, specifically in respect of the Navigation and Footer Sections and the rows/columns used for experiences.html and enquires.html.
2.	[Google Fonts](https://fonts.google.com/): Google Fonts was utilised to import the 'Lato' font into the style.css file and this font is used on all pages throughout the website.
3.	[Font Awesome](https://fontawesome.com/): Font Awesome was utilised in the Index.html and experiences.html pages, as well as in the Footer, for aesthetic and UX purposes. I matched the icons with the activity or place (e.g. Kyoto represented by a temple icon as it is the historic capital) that they most closely represented.
4.	[Git](https://git-scm.com/): Git was used for version control throughout the project by utilizing the Gitpod terminal to Commit to git and Push to the GitHub repository.
5.	[GitHub](https://github.com/): GitHub was used to store the code for the project after being pushed from Gitpod.
6.	[FreeLogoDesign](https://www.freelogodesign.org/): MyFreeLogo was used to create the Visit Japan logo.
7.	Favicon: I used a Favicon image of the logo and added it to all three pages.
8.	[Free Image Optimiser](http://www.imageoptimizer.net/Pages/Home.aspx): I utilised photo optimiser to ensure that the high quality images that I used from the Unsplash website would load in a fast time.
9.	[Balsamiq](https://balsamiq.com/wireframes/?gclid=Cj0KCQiAnKeCBhDPARIsAFDTLTJ5qmGTj2XQK_FoiFP6eKlzn-5oxqsh5N5hjjYKaGvx1AKPc1wb48EaAoSYEALw_wcB): Balsamiq was used to create the wireframes during the initial design phase.
10.	[Coolors](https://coolors.co/): I prepared the screenshot included in this Readme of the colours I had selected for this project using the Coolors template.

## Testing

- Testing information can be found in separate Testing file [here](testing.md). 

## Deployment
### GitHub Pages
This project was developed using Gitpod. I planned the site outline and structure over several weeks and then committed the code to git and pushed to Github.

To deploy this page to GitHub Pages, the following steps need to be followed;
1.	Log in to the GitHub website and locate the GitHub Repository containing the project.
2.	At the top of the Repository, locate the "Settings" Button in the menu area.
3.	Scroll down the Settings page until you come to the "GitHub Pages" Section.
4.	Under the section named "Source", click the dropdown menu called "None" and select "Master Branch".
5.	The page will automatically refresh and the website is now deployed and is able to be viewed as a web page.
6.	Scroll back down the page to locate the now published site link in the "GitHub Pages" section.

### Forking the GitHub Repository
By forking the GitHub Repository, this enables you to make a copy of the original Repository on the GitHub account to view and/or make changes without affecting the original repository;
1.	Log in to GitHub and locate the GitHub Repository which contains the project.
2.	At the top of the Repository (as opposed to the top of page) just above the "Settings" Button on the menu, locate and then select the "Fork" Button.
3.	You should now have a copy of the original Repository in your GitHub account which you can inspect.

### Making a Local Clone
1.	Log in to your GitHub account and locate the GitHub Repository which contains the project.
2.	Under the Repository name, click "Clone or download".
3.	If you wish to clone the Repository using HTTPS, you should copy the link under "Clone with HTTPS".
4.	Proceed to open Git Bash.
5.	Change the current working directory to the location where you want the cloned directory to be made.
6.	Type git clone, and then paste the URL you copied from the link that is detailed in Step 3 above.
7.	```$ git clone https://github.com/USERNAME/REPOSITORY```
8.	Press Enter and your local clone will then be created and available to be inspected and reviewed.

## Credits
### Code
- [Background Colour for Hero Image Text](https://stackoverflow.com/questions/14310154/how-do-i-set-a-background-color-for-the-width-of-text-not-the-width-of-the-enti): I studied this post in order to fully understand how to input a background colour into the text on the hero image for index.html, in order that the text would be clear to the viewer and would not be obscured. 
- [Google Map with Markers and Pop Up Text](https://stackoverflow.com/questions/11106671/google-maps-api-multiple-markers-with-infowindows): I utilised the basic code from this post in order to create an API Map with markers which had popup text with the city name, and then amended it to centre over Japan with the right zoom, focus on four cities in Japan (Tokyo, Kyoto, Osaka and Sapporo) and included additional text relating to facts about these places. 
- [Dropdown List of Activities Using JavaScript](https://stackoverflow.com/questions/16308779/how-can-i-hide-show-a-div-when-a-button-is-clicked): I studied this code in order to understand how to create a hypertext reference within each of the 4 Divs listed in the Experiences page, to create dropdown lists of activities which show when the title (e.g. Tokyo – Click for Activities) is clicked, as I wished to add more JavaScript functionality to my website.
- [Modal Pop Up for Enquiries Page](https://getbootstrap.com/docs/4.6/components/modal/): I used the code in the Bootstrap documentation as a basis for my modal popup in the enquiries page, while editing the text, style and buttons within the modal. 
- [Modal Absolute Positioning](https://stackoverflow.com/questions/33010497/how-do-i-create-bootstrap-modal-popup): I studied this code to understand how to correctly position the modal popup within the enquiries page.
- I used the Bootstrap Library throughout the project to make the site more responsive through using the Bootstrap Grid System and employing Bootstrap elements for the Navbar, Footer, Jumbotron, Sections and Query Form.
- I studied the Code Institute lesson on Sending Emails Using EmailJS in order to setup this system, while rearranging the code from the lesson to adapt it to my website (e.g. the recipient of the email and all of the text within the email was amended). 
- [Responsive Bootstrap Website Start To Finish with Bootstrap 4, HTML5 & CSS3](https://www.youtube.com/watch?v=9cKsq14Kfsw&t=929s): I watched this Youtube tutorial before I commenced my project to gain a more detailed understanding of how to construct the Navbar, Footer and Jumbotron for my site.
- [Table of Contents for Readme] (https://ecotrust-canada.github.io/markdown-toc/): I utilised this tool to understand how to construct a table of contents section for my Readme file.

### Content
- All content within this project was written by the developer.

### Media
- The images used in this project have all been sourced from Unsplash, which is a stock photography site which contains a large catalogue of high-quality free to use images which are not the subject of copyright. The attributions for these images are listed below;
    - [Index Page Kyoto Landscape Img – Sorasak](https://unsplash.com/photos/_UIN-pFfJ7c)
    - [Enquiries Page Kyoto Street Img – Andre Benz](https://unsplash.com/photos/MsMISAIe8Qw)
    - [Enquiries Page Cherry Blossom Img – AJ](https://unsplash.com/photos/McsNra2VRQQ)
    - [Enquiries Page Kimono Women Img – Adrien Bruneau](https://unsplash.com/photos/fCIfYiv_ZiI)
    - [Enquiries Page Crowd at Temple Img - Martijn Baudoin](https://unsplash.com/photos/jV3yHEqmCYY)
    - [Enquiries Page Trees in Forest Img – Nathan Truong](https://unsplash.com/photos/23J7oNGZoRs) 
- The logo for Visit Japan was created using a template which I made on a design website called FreeLogoDesign, and which I amended in respect of colour scheme and design to match the proposed styling of my site. FreeLogoDeisgn is a website which allows people to make brand logos for free and download them to their own media.
- The map on the Experiences Page was input from Google Maps, by way of an API Key.

### Acknowledgements
- I want to thank my Mentor, Maranatha Ilesanmi, for providing me with very detailed feedback and support during the various processes of this project.
- I also wish to thank Tutor Support and Student Care at Code Institute for their support and advice during my second term and while working on my MS2 project.
