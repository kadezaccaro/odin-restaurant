# The Odin Project — Restaurant Page

<br>

## Purpose

- Gain practical experience with Webpack by building a restaurant homepage
- Deepen understanding of asset bundling and performance optimization
- Fulfill the [assignment](https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page) from The Odin Project

<br>

## Preview

![Restaurant homepage project preview](https://github.com/kadezaccaro/odin-restaurant/blob/main/odin-restaurant-preview.png)
[Visit the site](https://kadezaccaro.github.io/odin-restaurant/)

<br>

## Technologies & Tools Used

- JavaScript
- Webpack
- HTML
- CSS
- Git
- GitHub

<br>

## ✅ Outcome

Check out the project's live demo: https://kadezaccaro.github.io/odin-restaurant/

<br>

## What I Learned

- How to programatically resize and optimize images using Sharp
- How to embed Google Maps with and without the use of an API key
- How to protect API keys using a ```.env``` file, ```dotenv-webpack```, and ```.gitignore```
- GitHub Pages is not meant to host sensitive information, like API keys:
> In other words, any information we put in our code will be available to someone visiting our site. If we want to host a site with sensitive information we would need some kind of backend, or server-side code, to store our sensitive information.
- How to configure CSS in Webpack using ```style-loader``` and ```css-loader```
- How to properly use images in Webpack via ```import``` statements
- How to dynamically generate an index.html page via ```HtmlWebpackPlugin```
- How to configure the Webpack output file to have a unique hash name for browser caching:
> Once the contents of /dist have been deployed to a server, clients (typically browsers) will hit that server to grab the site and its assets. The last step can be time consuming, which is why browsers use a technique called caching. This allows sites to load faster with less unnecessary network traffic. However, it can also cause headaches when you need new code to be picked up.
