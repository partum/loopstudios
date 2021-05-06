# Frontend Mentor - Loopstudios landing page solution

This is a solution to the [Loopstudios landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/loopstudios-landing-page-N88J5Onjw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](finished.png)

### Links

- Live Site URL: [https://ja-loopstudios.netlify.app/](https://ja-loopstudios.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- [React](https://reactjs.org/) - JS library

### What I learned

I found this really cool [React responsive module](https://github.com/contra/react-responsive). I used it to conditionally return an array for the tiles section based on if the user is in mobile version or not. If I had done this without react I would have had to add all the pictures by making rules for each tile in CSS, then rewriting all those rules in the mobile version. So finally I have saved time by using React.

```js
const PictureArray = () => {
  const mobile = useMediaQuery({ query: "(max-width: 375px)" });
  return mobile ? mobile_projects : projects;
};
```

I also learned more about responsive design. I know the technical concepts of how to make a design responsive, but I don't know how to _design_ responsively. For example I spent a long time on the grid because flex-box made it look weird at larger sizes and making the space between the tiles resize made it look sloppy. Eventually I settled with changing the number of columns based on screen size.

### Continued development

As mentioned above, I want to get better at responsive design. I also want to get better at React. I learned a lot about the framework in this project, and I'm excited to learn more.
