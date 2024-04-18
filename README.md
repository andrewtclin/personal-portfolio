# Portfolio Website

This project is licensed under *MIT*, feel free to reuse it with **original ownership mentioned**.

> For running version, checkout **my personal portfolio**: [TC. Lin](https://tclin.jastudio-tech.com/)

This project is built with *ReactJS*.

---

## Purpose of this Application

The purpose of this application is to create a portfolio or personal website with all information generated from *external sources*.
* With that, once the coding is completed and established, the website will require *minimum effort to maintain* as update of information can done without needing to change the source code. 

Currently, the website is built under my personal information, serving as the **demo** of my personal work.
* To update the APIs according to the needs, make changes to *apis/api.js* file.
* For any un-needed features, read the section ***List of Features*** section.

However, this project is under *MIT License*, thus, ones are allowed to reproduce it using the source code, with **original ownership mentioned**.

---

## Contribute to this Project

To make contributions or add features to this project:
> 1. Fork this repository.
> 2. Add additional features or enhancements to the existing codes.
> 3. Make a pull request to notify me.
> 4. You are good to go!

---

## List of Features

This project or portfolio website currently has the following features:
* General features:
  * This application or portfolio page is fully **responsive**, adapted to **Responsive-Web-Design (RWD)**.
  * During the desktop view, the navigation panel will be located where the header is.
  * During the mobile view, the navigation panel will be **floating** at the bottom of the screen, with *backdrop* applied, meaning that the mobile navigation panel is a glass-looking translucent panel.
  * While navigating: the page will automatically detect the location of the page, and the *active* navigation will update accordingly.
  * By clicking on any option in the navigation panel, *smooth-scroll* is applied.

* For existing pages:
  * Home - The landing page of the website.
  * About - The page describing the description.
  * Education - This page details the education history of the background.
  * Experience - Displaying the professional work experiences.
  * Portfolio - Showcasing the past works, and documenting them accordingly.
  * Skills - Displaying the domain skills or languages you know in a clear grid.
  * Blogs - This page allows you to display all the blogs that you are doing.
  > For any of the pages that are not needed, remove them accordingly.

* Folder Structures:
  * apis - The folder where external apis will be stored, used to generate information for the page.
  * assets - The folder where media files will be stored, import them in code as needed.
  * components - *Reusable Components* for the page, import them wherever needed, such as *Button*, *Header*, etc.
  * utils - The folder where all helper information or functions are stored, can be reused in multiple code places.

* Generate Information from External APIs
  * If you are using an external API that requires *an API key*, create a *.env* file to store your secret key or token.
    * **Create your API key with the format:** REACT_APP_XXX (Starting with *REACT_APP*) as this project uses *React*, and it is a naming convention when creating a .env key.

* Others
  * In package.json, the building command is set with *cross-env GENERATE_SOURCEMAP=false* to hide the source code / map, so that it is not available to view via browser in the production state.
   
---

## List of Dependencies

For details of the dependencies, check *package.json*.

In general, this project uses:
* tailwindcss - for modern css styling
* react-particles - for background decoration
* framer-motion - for animation throughout the page
* react-hook-form - to incorporate forms in react
* react-simple-typewriter - to create the typewriter effect in the home page
* swiper - the component that allows swiper effect, applied in *education*, *experience*, *portfolio*, *blogs*.
* ag-grid-react - the robust component that organizes data into tabular format / grid.

**To install:** install via *package.json*.
> If you are using `npm`, run `npm install`
> If you are using `yarn`, run `yarn`

---

### Description of Architecture

This project is designed with the following architecture:

Component-related:
* The outer-most wrapper: App.js
  * Contains both *pages* and *components*
     * Pages: Home, About, Education, Experience, Portfolio, Skills, Blogs
     * Components: Header, Nav, Footer
   * For every page, it shares the same style of the title, which the component title is reused across all pages.
     * Component: PageTitle.jsx
    
 
Data-related:
* As stated in the *List of Dependencies* section, the folder structure is the architecture of the data-related elements:
  * apis - The folder where external apis will be stored, used to generate information for the page.
  * assets - The folder where media files will be stored, import them in code as needed.
  * components - *Reusable Components* for the page, import them wherever needed, such as *Button*, *Header*, etc.
  * utils - The folder where all helper information or functions are stored, can be reused in multiple code places.

---

### Reporting Issues

To report issues or bugs, **create a new issue** via *Issue* tab, it will be reviewed as soon as possible.
* Be sure to write description for the issue that you are facing, so that it can be dealt efficiently.
