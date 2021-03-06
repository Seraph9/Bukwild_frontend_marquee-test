Project Test published with GitHub Pages @: https://seraph9.github.io/Bukwild_frontend_marquee-test/

* This goes in the package.json (after "private" and before "dependencies" ideally) file if deploying with github pages: `"homepage": "https://seraph9.github.io/Bukwild_frontend_marquee-test",`

* Installing the library React Transition Groups for adding React animation effects when the state changes and page re-renders: `npm install react-transition-group --save`


Thank you for applying for our Front End Developer position!  Before scheduling a Zoom interview, we’d like you to complete this test of your front end dev abilities (https://paper.dropbox.com/doc/Component-Dev-Test-2021-Sr9amGD0gzowVQChD1cQh).  This is very relevant to this position because the majority of your time will be spent taking Zeplin-ified designs and turning them into components that accept data from a CMS. If you have any questions, please email robert.reinhard@bukwild.com.


# Bukwild_frontend_marquee-test
* Frontend coding test to engineer a Marquee Component using React.js for Bukwild Studio Sacramento
Component Dev Test (2021)
* This is a test of your ability to build a component-based stack (Vue or React) featuring a layout and a page that renders a marquee component that reacts to page state changes. 
* Being able to dependably take a design and turn it into clean, maintainable code is foundational to working for Bukwild.

![](https://paper-attachments.dropbox.com/s_447AE59A7F28FBA4D4FDD63E6F289C3FE4799B3EA79D3A6AB9E292B846850F6C_1566846068646_Marquee_Comp.png)
![](https://paper-attachments.dropbox.com/s_447AE59A7F28FBA4D4FDD63E6F289C3FE4799B3EA79D3A6AB9E292B846850F6C_1566847172767_image.png)

## Assets
- You can view the Zeplin (https://app.zeplin.io/login) project using:
        - email: `applicant@bkwld.com`
        - pass: `i-got-this`
- SVG of the logo (https://yo.bkwld.com/nOuozoYR)
- Background images (https://yo.bkwld.com/140c547cb322)
- Content as JSON (https://yo.bkwld.com/d14ccae029a9)
## Requirements
- This component should have a minimum height of `100vh` but, if the browser is sufficiently short or the content is long, should be able to push past `100vh`.
- Any of the text placements should accommodate any length of text without breaking. “Breaking” means text overlapping other text of being clipped (like by `overflow: hidden`).  In other words, the marquee should just get taller if the text gets long.
- The component should responsively adjust from `320px` up to `1920px` wide without any content breaking.  Everything but the background image should be constrained by a `max-width` of `1440px`.
- The headline and subhead text need to be vertically centered between the menu and the call to action (CTA) box along the bottom.
- The logo, menu, and contact button should all live at the layout level whereas the headline, subhead, CTA box, and background image should all be contained by a marquee component at the page level.  In other words, if one were to navigate to a new page that used this same marquee component, the marquee content would change (new copy, new images, etc) but the layout (logo, menu, etc) would be unaffected.
- The content for the component should be loaded from the provided JSON file and bound to the template via the component’s state/props.  In other words, the content is not hardcoded as template strings.
- Interacting with the upper left menu should change the content in the marquee.
## Judging criteria
- First and foremost, the build should match the design when the browser is the same width as the design.  The design intent should be preserved as the component’s elements scale down for narrower browser widths.
- Using of scaling units (vw, %, rem) over fixed units (px) and media queries is preferred.  We would typically use our `fluid()` Stylus function when building with Vue to accomplish this. Ideally, your build uses no media queries except for when changing columns (for instance, moving the subhead under the headline on narrower viewports).
- Elegant handling of the loading of content and image assets will be considered.
- Build-in animation of the component’s elements on the initial render will be considered.
- Easy to understand variable names and comments will be considered.
How to submit
- Upload a build somewhere where we can review the frontend build. For instance, GitHub Pages, Netlify, Zeit, Codepen, etc.
- Upload the source code somewhere we can read it.  For instance, Github, GitLab, etc.
- Send links for both to careers@bukwild.com along with any information or context you think is relevant.

Thank you so much!  Your time is valuable and we appreciate the effort we’re asking of you.

## Screenshots of Completed Frontend Developer Coding Test Assignment:
![Bukwild Industries](/screenshots/Bukwild1.png)
![Bukwild Services](/screenshots/Bukwild2.png)
![Bukwild About Us](/screenshots/Bukwild3.png)
![Bukwild Scroll Down Bottom Page](/screenshots/Bukwild4.png)
![Bukwild Laptop](/screenshots/Bukwild-laptop.png)
![Bukwild Narrow Screen](/screenshots/Bukwild-narrow.png)
![Bukwild iPad](/screenshots/Bukwild-iPad.png)
![Bukwild iPhone](/screenshots/Bukwild-iPhone.png)
![Bukwild Android](/screenshots/Bukwild-android.png)

