# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

-   [Overview](#overview)
    -   [The challenge](#the-challenge)
    -   [Screenshot](#screenshot)
    -   [Links](#links)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
    -   [Continued development](#continued-development)
    -   [Useful resources](#useful-resources)
-   [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

-   View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
-   View the optimal layout for the content depending on their device's screen size
-   See hover states for all interactive elements on the page

### Screenshot

![](./screenshot.png)

### Links

-   Solution URL: [Add solution URL here](https://github.com/dylan-dot-c/Intro-Section-Responsive-Frontend-Mentor.git)
-   Live Site URL: [Add live site URL here](https://main--intro-section-react-dropdown.netlify.app/)

## My process

### Built with

-   Semantic HTML5 markup
-   TailwindCSS
-   Flexbox
-   Tailwind Grid
-   Desktop-first workflow
-   [React](https://reactjs.org/) - JS library
-   [TailwindCSS](https://tailwindcss.com/) - CSS Framework

### What I learned

An interesting thing that I learnt was to actally use the group modifier in tailwindCSS.
So thats how I implemented the hover dropdown using an hover on the group element and then display block of the child dropdown

```html
<div className="group md:relative block">
    <div className="flex gap-2 items-center">
        <a href="#" className="group-hover:font-bold"></a>
        {...}
    </div>
</div>
```

### Continued development

I think how I implemented the navbar could have been better so ill be making sure to upgrade my responsive navbars skills.

### Useful resources

-   [TailwindCSS Docs](https://tailwindcss.com/docs) - Really useful to have when using tailwindCSS

## Author

-   Website - [Dylan Heslop](https://github.com/dylan-dot-c)
-   Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/sharkcoder)
-   LinkedIn - [@DylanHeslop](https://www.linkedin.com/in/dylan-heslop-7223b0186/)
