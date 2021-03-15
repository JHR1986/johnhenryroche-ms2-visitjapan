# Visit Japan Website - Testing details

## [Main Readme File](README.md).

[View the Live Website Here](https://jhr1986.github.io/johnhenryroche-ms2-visitjapan/)

- [Testing](#testing)
  * [Client Stories Testing](#client-stories-testing)
  * [Testing Client Stories from UX Section of Main Readme File](#testing-client-stories-from-ux-section-of-main-readme-file)
    + [First Time Visitor Goals](#first-time-visitor-goals)
    + [Returning Visitor Goals](#returning-visitor-goals)
    + [Frequent Visitor Goals](#frequent-visitor-goals)
  * [Manual Logical Testing of all Elements and Functionality on every Page](#manual-logical-testing-of-all-elements-and-functionality-on-every-page)
    + [Home Page](#home-page)
    + [Experiences Page](#experiences-page)
    + [Enquiries Page](#enquiries-page)
- [Further Testing](#further-testing)
  * [Further Testing Details](#further-testing-details)
  * [Known Bugs](#known-bugs)

## Testing
- The W3C Markup Validator and W3C CSS Validator Services were used to validate every page of the project (3 html pages and 1 css page) in order to ensure that there were no syntax errors in the project (e.g. the code was fully accurate and correctly structured throughout). 
![testing-photos-new](https://user-images.githubusercontent.com/71781554/111032364-b4526880-8403-11eb-80df-10194d934e6b.png)
- The JavaScript files were also tested in JSHint and no errors were recorded (as well as no errors being recorded in DevTools). There was a message presented in respect of the Maps JavaScript code as follows; “Functions declared within loops referencing an outer scoped variable may lead to confusing semantics. (closeOtherInfo, infoObject)”, but having queried this comment with Code Institute Tutor Support they advised that the code needed to be written in this form in order for it to work correctly and that there was no issue with having this message. 
![testing-js-new](https://user-images.githubusercontent.com/71781554/111032585-d6001f80-8404-11eb-9ffd-6769764c50ed.png)
- Alt tags were added to all images for accessibility purposes. I checked to see if an alt tag should be added to the Google Map API, but it was noted in this [post](https://mlitzinger.com/blog/making-google-maps-controls-more-accessible/) that Google Maps does not include alt attributes (blank or otherwise). 

### Client Stories Testing
The most direct path through the website is as follows:
- Home – Experiences – Enquiries
- On the Home page, the visitor is presented with the option of going directly to the Enquiries page to complete the contact form and request a pdf brochure or to go to the Experiences page if they wish to find out more about places to visit and things to do in Japan. The home page points to the Experiences and Enquiries pages through two call to action buttons (as detailed below); 
    1. "Request Brochure": From Home – Enquiries
    2. "What to do in Japan": From Home – Experiences

The Home page also provides a brief introduction to Japan (with general information about its history, geography, people and culture) and the information is kept very concise and to the point in order that the user does not feel overwhelmed with information.

### Testing Client Stories from UX Section of Main Readme File

#### First Time Visitor Goals
As a First Time Visitor, I want to quickly establish what information the website has in respect of visiting Japan:
- The Home page has a general synopsis of Japan and a striking hero image of Kyoto, and there is a prominent navigation bar for clicking to the Experiences and Enquiries pages. 

As a First Time Visitor, I want to be able to easily navigate throughout the site pages and find key information about places to visit and activities to do when you visit Japan:
- The Home page has a prominent call to action button at the bottom of the page which leads to the experiences page, which details four major cities to visit on a map of Japan and 5 activities in each place for the visitor to do when they are there.

As a First Time Visitor, I want to be able to access and fill out a form in order to receive a pdf brochure about Japan (this process can also be completed by the returning visitor):
- The call to action button on the Home page brings the visitor to the Enquiries page which contains a form, which when filled out results in an automatic email from Visit Japan (confirmed by a popup modal) being submitted, which advises that the visitor's query has been received and a pdf brochure will shortly be issued. 

#### Returning Visitor Goals
As a Returning Visitor, I want to request a brochure and email the Visit Japan team with any queries that I have about visiting Japan:
- The contact form also offers the visitor to include any queries that they may have about their proposed trip to Japan which will be answered by the Visit Japan team.

As a Returning Visitor, I want to be able to easily access the key information in respect of contacting the Japanese Embassy in Dublin and their opening hours and location (all contained within the footer):
- The footer to each of the three pages lists the Japanese embassy’s address in Dublin, their opening hours and phone/email address, so that any subsequent queries can be addressed.

#### Frequent Visitor Goals
As a Frequent/Returning Visitor, I want to be able to contact the Japanese embassy with further queries (e.g. visa issues or Covid restrictions etc) about visiting Japan.
- As highlighted in the frequent visitor section, contact information for the Japanese embassy in Dublin is listed in the footer of each of the three pages.

As a Frequent/Returning Visitor, I want to see if any additional information about Japan has been added to the Experiences page (e.g. are they focusing on other areas cities in Japan that the person may wish to visit).
- With the site being updated on a regular basis, the experiences page will list different Japanese cities and activities to do, so that the user can find out more about Japan when they return to the site on a regular basis. 

### Manual Logical Testing of all Elements and Functionality on every Page

This is a complete account of the testing process for the site from start to finish which I completed when the site had been ready for submission.

#### Home Page
1.	Navigation bar:
    - Go to the "Home" page from a desktop.
    - Amend the screen size from desktop to tablet (e.g. iPad) to verify that the navigation bar is fully responsive and switches from the inline menu to the hamburger icon dropdown menu at the appropriate place on the right of the navbar.
    - When checking the responsiveness of navbar, verify that there is no overflow and that all of the items are in their correct places. 
    - Click on the Visit Japan logo in the left section of the navigation bar and verify that it links correctly to the Home page.
    - Click on every navigation menu item (Home, Experiences, Enquiries) and verify that they link to the correct page and that the active page is correctly highlighted.
    - Hover over the "Request Brochure" and “What to Do in Japan” call to action buttons and verify the hover colour change features work as expected.
    - Click on the "Request Brochure" and “What to Do in Japan” buttons and verify that they go correctly to the Enquiries and Experiences pages.
    - Change the screen size to mobile and tablet, and click the hamburger icon in order to verify that the menu drops down correctly and that the menu items are fully visible.
    - Conclude by verifying that functionality and responsiveness is all working correctly on mobile phone and tablet.

2.	Hero Image:
    - Go to "Home" page from a desktop.
    - Confirm that the Hero Image (kyoto skyline with two people in Kimonos) is correctly appearing on screen and that the main hero image text over it is fully responsive when the width of the window is reduced to mobile.
	
3. Introduction Text:
    - Reduce and expand the width of the window to confirm that the text in this section responds correctly and appears appropriately on all device widths, and that the Font Awesome icons and background color are working as inputted.
	
4. Footer:
    - Confirm that the Font Awesome icons in the footer are visible and correctly formatted and that all text is spaced and clearly visible.
    - Reduce and expand the width of window to verify that the Footer is responsive and looks as it should on all devices, in line with the Bootstrap grid system.
    - Confirm that Footer items are correctly stacked on top of one another in mobile view.

5.	Review all functionality and responsiveness on my mobile phone and tablet for the Home Page and confirm that everything on this page is correct.

#### Experiences Page
1.	Navigation bar:
    - Repeat the verification steps that I completed for the Navbar on the Home page.
    - Confirm that the Navbar is appearing as identical on all three html pages.

2.	Heading:
    - Reduce and expand the width of the window to verify that the heading behaves and centres the way expected, that it looks good on all device widths and that the background color and font size is appropriate.

3.	Map:
    - Confirm that the map is correctly centred over Japan and that all four markers are visible to the user, and ensure that the Google Map is responding fully (API is working).
    - Click into all four markers to confirm that the name of the city and summary information are visible, and that they open and close correctly.
    - Reduce and expand the width of the window to verify that the map responds as expected, and that it reacts appropriately on all device widths.

4.	Activities:
    - Click into the four href links to confirm that the lists of activities open and close correctly in line with JavaScript code.
    - Reduce and expand the width of the window to verify that the text in the heading and list behaves the way it is expected, and that the text arrangement looks good on all device widths, with the format changing to four Divs stacked on top of one another in mobile view.

5.	Footer:
    - Repeat the verification steps completed for the footer on the Home page.
    - Confirm that the appearance of the Footer is identical on all html pages.

6.	Review all functionality and responsiveness on my mobile phone and tablet for the Experiences Page and confirm that everything on this page is correct.

#### Enquiries Page
1.	Navigation bar:
    - Repeat the verification steps completed for the Navbar on Home & Experiences page.
    - Confirm that the Navbar is identical on all html pages.

2.	Bootstrap Form
    - Enter details into all form inputs, ensuring that email will not be sent if an input is blank (see Known Bugs section below for summary).
    - Hit submit button (when all fields are completed) and confirm that modal appears correctly for all device widths, confirming that the request has been issued.
    - Receive email from Visit Japan (jhrdevelopment1@gmail.com - the email I set up for testing) detailing that request has been sent and a reply with brochure will be issued shortly.
    - Reduce and expand width of window to verify that the form responds as expected, and that it fits correctly on all device widths from mobile to tablet to desktop.

3.	Images:
    - Confirm that the five images on the page (one beside the form and four beside each other) are correctly aligned.
    - Reduce and expand the width of the window to verify that the images respond as expected, and that they fit appropriately on all device widths.
    - Confirm that the alt text is correctly inputted for all five images in order to confirm readability.

4.	Footer:
    - Repeat verification steps completed for the Footer on Home and Experiences page.
    - Confirm that the Footer is identical on all html pages.

5.	Review all functionality and responsiveness on my mobile phone and tablet for the Enquiries Page and confirm that everything on this page is correct.

## Further Testing

### Further Testing Details

- The website was tested on Google Chrome, Internet Explorer, Microsoft Edge and Safari browsers, and was found to operate satisfactorily on all of these.
- I also tested the website in Google Lighthouse, which returned the following scores; (i) Performance: 74, (ii) Accessibility: 88, (iii) Best Practices: 80 & (iv) SEO: 92.
![lighthouse-new](https://user-images.githubusercontent.com/71781554/111155478-66b53780-858c-11eb-9852-f2bb6569ec22.png)
- The website was viewed on a variety of devices such as Desktop, iPad, iPhone 6 & iPhone X. All formats were in order with no sections out of line or overlapping.
- I completed a large amount of detailed testing to ensure that all links were working correctly and that external links opened (as detailed in Manual Testing section above), and was happy that there were no broken links. This involved going into every page of the site and clicking every link/button that is available to a user (as part of their journey through the site) to ensure that everything was fully functional. 
- I checked the console in Devtools and confirmed that there were no error reports in respect of any of the pages.
- As part of the testing process, my family members were asked to review the site and documentation to point out any bugs and/or user experience issues, and I also listed the project on the Peer Review channel on Slack to take on board any suggestions offered from that.

### Known Bugs
- No bugs were found during testing, however I wished to summarise the following overview of the Bootstrap Modal in the Enquiries page to highlight an issue I encountered and my solution for same: As per the Sending Emails Using EmailJS lesson in Code Institute, I included "Return False" at the end of the JavaScript code in emailjs.js in order that the form would not refresh when the submit button was clicked, as this would prevent the EmailJS email from being issued.
On this basis, I created a modal for the form where a text popup would show when the "Request Information" button is clicked. I noted when testing that the "required" attribute (that I had inserted into each input for Name, Email & Query) would highlight when a field was missing required information, but that the modal popup text would still be seen when the button was clicked. 
Therefore, I amended the wording to confirm to the user that their Name, Email & Query is required for them to receive an email; "Thank you for expressing your interest in Visit Japan. If you have inputted your Name, Email and Query (all 3 fields are required), you will shortly receive an
email from Visit Japan!". I reviewed several online posts to see if I could amend the code to only show the popup box when the form was fully validated, but was not able to find a suitable answer, so I chose to confirm to the user (in the popup text) that submitting their Name, Email and Query is required for receiving an email from Visit Japan.
Additionally, I also added an oninvalid Event as a further warning that all 3 fields need to be completed for the EmailJS service to work correctly. 





