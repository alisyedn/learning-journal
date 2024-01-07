---
title: 'Notes about NextJS page router'
date: '2024-01-06'
image: nextjs.png
excerpt: NextJS is a react-based production ready full-stack framework.
isFeatured: true
tags: ['nextjs', 'react', 'nodejs', 'server-side-rendering', 'ssr']
---
# NextJS: 
- NextJS is a react-based production ready framework which offer alot solutions to different problems
  that developer face when working with react.

## NextJS Key Features:
- NextJS provides several very important key features
### Key Feature 1: Server-Side (Pre-)Rendering 
- **Server Side Rendering** is one of NextJS most powerful features, this features allows the server to prepare content 
  before transmitting to the client for client side rendering. 
- By default, react apps are just a single page with javascript doing alot of heavy lifting in the background. 
  The problem with doing this is that the single page is counterintuitive for SEO - making it not suited for design public facing websites.
- By default, NextJS will pre-render all content server side automatically out the box.
- However, NextJS allows us to blend both Server-Side and Client-Side rendering.

### Key Feature 2: File-based routing
- Traditional React does not have routing - routing is referred to providing the user the illusion of multiple page,
  but under the hood thr router is simply loading different pages within the javascript etc (this is done as the router monitors the current url)
- NextJS provides routing, but its routing is defined based on files and folders - similar to traditional web development.

### Key Feature 3: Fullstack Capabilities
- NextJS is an entire http request framework that we can use to build backend code. 
- We can add backend API code via NodeJS

### Public Folder: 
- The public folder us used to serve static content that can be hit directly, this makes it good for images and fonts etc.
- NextJs will not serve any other folders publicly!

## Page Pre-Rendering: 
- When a user request for a page that page is pre-rendered, this is the opposite standard React. 
  - In standard React the server sends back a js bundle, this means the page start empty, once the js bundle is loaded the client
    side js takes over and starts loading content onto the page.
  - An additional data needed outside the static bundle will need to be requested for.
- NextJS will pre-renders a page, pre-rendering a page includes all the html as well as additional data before responding to the users request.
- This makes such pre-rendered pages very good for SEO.
- NextJS will also send all the JS belonging to the page alongside the pre-rendered page - this process is called **Hydrating** a page.  
  - Once the pre-rendered page hits the browser the clint side JS will take over.
- **Hydration** is the process of using client-side JavaScript to add application state and interactivity to server-rendered HTML.
- NextJS **ONLY** pre-renders the initial page, once hydrated all page navigation and page loads are all client side.
- NextJS supports two forms of **Pre-Rendering** 
  - **Form 1**: **Static Generation** - all pages are generated during build time
  - **Form 2**: **Server-side Rendering** - pages are created **JIT** (**Just In Time**), they are computed at runtime when requested for.

### **getStaticProps** 
- `export async function getStaticProps` is a very important function signature, this function when detected by **NestJS** 
   will be executed server side **ONLY!** - when we mea server-side its not executed on the server serving the page, instead its the build time system!
- This function has access to additional APIs that are not access to the front end, it can access all API's of NodeJS. 
- This function as its content will not be sent back to the client.
- This function is used to return a object contains initial **props** to be used by the component - this makes this function very good for pre-fetching data.

### **Dynamic Pages**
- **NextJS** will not pre-generate **Dynamic Pages** server-side, this makes sense a sit does not know the all possible values.
- **Dynamic Pages** are generated Just-In-Time Server side.
- When working with such pages we must make use of a new function called `export async function getStaticPaths()`
- The `export async function getStaticPaths()` function is used to indicate to NextJS which instance of this page should be generated ahead of time
  by return a list of possible dynamic values, each used in turn to generate an instance of this page.
- When we have a large number of pages its not always feasible to generate every instance, in such a case we can make use of the **fallback** option.
- The **fallback** enabled JIT generation of a page when request is hit on the server!

### `export async function getStaticProps` vs  `export async function getStaticPaths()`
- `getStaticPaths` computes the instance that need to be build, the data is passed onto `getStaticProps`
- `getStaticProps` is the server side function that is used ot build the concrete instances. 
- `getStaticProps` can also be configured to force a server-side generation for dynamic pages. 
- both `getStaticPaths` and `getStaticProps` are executed server-side during application build time in most cases, the only
  times these will be executed at runtime is if **incremental static generation** is enabled.

### `exort async function getServerSideProps` 
- Sometimes we need access to the incoming request, an example of a time you want access is when working with cookies.
- `getStaticPaths` and `getStaticProps` do not provide access to the incoming request.
- `getServerSideProps` is a built-in function that get trigger on every incoming request. 
- `getServerSideProps` provides real server side rendering - pages will be pre-render on every incoming request. 
- `getServerSideProps` is similar to `getStaticProps` as it too returns a`props` object - this means `getServerSideProps` and `getStaticProps` clash and cant be used together.

## _app.js vs _document.js
- NextJS provides the `_app.js` file by default .. this file represents the root of our component
- All our components r render with the root component
- The `_app.js` file is used to effectivity control the html body
- NextJS also supports another file by the name of `_document.js`, this file is used to control the entire html document.
- NextJS provides us with a default implementation of `_document.js` but if we override this file we must provide the default structure.

## API
- `api` folder is a reserved folder name, all files within this folder are treated as endpoints.
- When a route is triggered the `default export function` will be executed.
- All the code within the `api` folder is treated as `server-side` code and never sent to the client.

## Deploying NextJS Application: 
- There are two ways to build our NextJS application in-order to deploy it.
- **Standard Build**: this is the default option, in this option we must deploy our application with a NodeJS 
  based Server to handle all the server side processing.
- **Full Static Build**: this is not the default way. This build option builds 100% static bundle. This build does not
  need a NodeJS server to host the application. However, with this option we cant not use any NextJS server-side features.
  This includes `getServerSideProps`, `getStaticProps`, `getStaticPaths` etcs. 