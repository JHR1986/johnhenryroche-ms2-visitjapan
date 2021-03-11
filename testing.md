# Visit Japan Website - Testing details

## [Main Readme File](README.md).

[View the Live Website Here](https://jhr1986.github.io/johnhenryroche-ms2-visitjapan/)

## Testing
- The W3C Markup Validator and W3C CSS Validator Services were used to validate every page of the project (3 html pages and 1 css page) in order to ensure that there were no syntax errors in the project (e.g. the code was fully accurate and correctly structured throughout). This testing confirmed that the code was fully in order (no errors found in testing). The JavaScript files were also tested in JSHint and no errors were recorded. There was a warning message in respect of the Maps JavaScript code as follows; “Functions declared within loops referencing an outer scoped variable may lead to confusing semantics. (closeOtherInfo, InforObj)”, but having queries this with Tutor Support they advised that the code needed to be written this way to work correctly and that this was not an error. 

### Client stories testing:
The most direct path through the website is as follows:
- Home – Experiences – Enquiries
- On the Home page, the visitor is presented with the option of going directly to the Enquiries page to complete the contact form and request a brochure or to go to the Experiences page if they wish to find out more about places to visit and things to do in Japan. The home page points to the experiences and enquiries pages through two call to action buttons (as detailed below); 
    1. From Home – Enquiries
    2. From Home – Experiences

The Home page also provides a brief introduction to Japan and the information is kept very concise in order that the user does not feel overloaded.

### Testing client stories from UX section of main Readme File:

#### First Time Visitor Goals:
As a First Time Visitor, I want to quickly establish what information the website has in respect of visiting Japan:
- The home page has a general synopsis of Japan and a striking hero image of Kyoto, and there is a prominent navigation bar for clicking to the Experiences page. 

As a First Time Visitor, I want to be able to easily navigate throughout the site pages and find key information about places to visit and activities to do when you visit Japan:
- The home page has a prominent call to action button at the bottom of the page which leads to the experiences page, which details four cities to visit on a map and activities to do when there.

As a First Time Visitor, I want to be access and fill out a form in order to receive a brochure about Japan (this process can also be completed by the returning visitor):
- The call to action button on the Home page brings the visitor to the enquiries page which contains a form, which offers the visitor the path to receive a brochure on Japan by email which is confirmed by a modal Pop Up. 

#### Returning Visitor Goals
As a Returning Visitor, I want to request a brochure and email the Visit Japan team with any queries that I have about visiting Japan:
- The contact form also offers the visitor to include any queries that they may have about their proposed trip to Japan which will be answered by the Visit Japan team.

As a Returning Visitor, I want to be able to easily access the key information in respect of contacting the Japanese Embassy in Dublin and their opening hours and location (all contained within the footer):
- The footer to each of three pages lists the Japanese embassy’s address in Dublin, their opening hours and phone/email address so any subsequent queries can be addressed.

#### Frequent/Returning Visitor Goals
As a Frequent/Returning Visitor, I want to able to contact the Japanese embassy with further queries (e.g. visa issues) about visiting Japan.
- As highlighted in the frequent visitor section, contact information for the Japanese embassy in Dublin is listed in the footer of each of the three pages.
As a Frequent/Returning Visitor, I want to see if any additional information about Japan has been added to the Experiences page (e.g. are they focusing on other areas cities in Japan that the person may wish to visit).
- With the site being updated on a regular basis, the experiences page will list different Japanese cities and activities to do, so that the user can find out more about Japan when they return to the site. 

### Manual (logical) testing of all elements and functionality on every page.

## Home Page:
1.	Navigation bar:
    - Go to the "Home" page from a desktop.
    - Change the screen size from desktop to tablet to verify that the navigation bar is responsive and switches from in line menu to burger icon dropdown menu at the appropriate place.
    - When checking responsiveness of navbar, verify that there is no overflow. 
    - Click on the logo in the navigation bar and verify that it links to the home page.
    - Click on each navigation menu item and verify that it links to the correct page.
    - Hover over the "Request Brochure" and “What to Do in Japan” call to action buttons and verify the hover colour change works as expected.
    - Click on the "Request Brochure" and “What to Do in Japan” buttons and verify that they go correctly to the enquiries and experiences page.
    - Change screen size to small and click burger icon, verify that the menu drops down and that the menu items are fully visible.
    - Repeat verification of functionality and responsiveness on my mobile phone and tablet.

2.	Hero Image:
    - Go to "Home" page from a desktop.
    - Confirm hero image is correctly appearing and that main text is fully responsive when the width of the window is reduced to mobile.
	
3. Introduction Text:
    - Reduce and expand width of window to confirm that the text in this section responds correctly and looks good on all device widths, and that the font-awesome icons and background color are working as stated.
	
4. Footer:
    - Confirm that Font-awesome icons are shown and that all text is spaced and clearly visible.
    - Reduce and expand width of window to verify that the footer is responsive and looks good on all device widths.
    - Confirm that footer items are stacked in mobile view.

5.	Review all functionality and responsiveness on my mobile phone and tablet.

## Experiences:
1.	Navigation bar:
    - Repeat verification steps done for navbar on Home page.
    - Confirm that navbar code is identical on all html pages.

2.	Heading:
    - Reduce and expand width of window to verify that the heading behaves and centres the way expected, and that it looks good on all device widths.

3.	Map:
    - Confirm that the map is correctly centred over Japan and that all four markers are visible.
    - Click into markers to confirm that name of city and details of text are visible.
    - Reduce and expand width of window to verify that the map responds as expected, and that it looks good on all device widths.

4.	Activities:
    - Click into four href links to confirm that lists of activities open and close in line with JavaScript code.
    - Reduce and expand width of window to verify that each line of text behaves the way expected, and that the text arrangement looks good on all device widths, with the format changing to two rows of two Divs in mobile view.

5.	Footer:
    - Repeat verification steps done for footer on Home page.
    - Confirm that footer code is identical on all html pages.

6.	Review all functionality and responsiveness on my mobile phone and tablet.

### Enquiries:
1.	Navigation bar:
    - Repeat verification steps done for navbar on Home & Experiences page.
    - Confirm that navbar code is identical on all html pages.

2.	Bootstrap Form
    - Enter details into all form inputs, ensuring that form will not send if an input is blank.
    - Hit submit button and confirm that modal comes up confirming that request has been issued.
    - Receive email from Visit Japan detailing that request has been sent and a reply with brochure will be issued shortly.
    - Reduce and expand width of window to verify that the form responds as expected, and that it looks good on all device widths.

3.	Images:
    - Confirm that the five images on the page are correctly aligned.
    - Reduce and expand width of window to verify that the images respond as expected, and that it looks good on all device widths.
    - Confirm that alt text is correctly inputted for all images.

4.	Footer:
    - Repeat verification steps done for footer on Home page.
    - Confirm that footer code is identical on all html pages.

5.	Review all functionality and responsiveness on my mobile phone and tablet.

## Further Testing:

### Further Testing:

- The website was tested on Google Chrome, Internet Explorer, Microsoft Edge and Safari browsers, and was found to operate satisfactorily on all of these.
- I also tested the website in Google Lighthouse, which returned the following scores; (i) Performance: 60, (ii) Accessibility: 88, (iii) Best Practices: 80 & (iv) SEO: 92.
- The website was viewed on a variety of devices such as Desktop, iPad, iPhone 6 & iPhone X. All formats were in order with no sections out of line or overlapping.
- I completed a large amount of detailed testing to ensure that all links were working correctly and that external links opened, and was happy that there were no broken links. This involved going into every page of the site and clicking every link/button that is available to a user (as part of their journey through the site) to ensure that everything was fully functional (see manual testing section above). I also checked the console in Devtools and there were no error reports on any of the pages.
- As part of the testing process, my family members were asked to review the site and documentation to point out any bugs and/or user experience issues, and I also listed the project on the Peer Review channel on Slack to take on board any suggestions offered from that.

### Known Bugs
- N/A – There are no known bugs that I have recorded while testing the website.
