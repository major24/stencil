
# MN - See my dev comments at the bottom of this page

# Stencil Component Starter

This is a starter project for building a standalone Web Component using Stencil.

Stencil is also great for building entire apps. For that, use the [stencil-app-starter](https://github.com/ionic-team/stencil-app-starter) instead.

# Stencil

Stencil is a compiler for building fast web apps using Web Components.

Stencil combines the best concepts of the most popular frontend frameworks into a compile-time rather than run-time tool.  Stencil takes TypeScript, JSX, a tiny virtual DOM layer, efficient one-way data binding, an asynchronous rendering pipeline (similar to React Fiber), and lazy-loading out of the box, and generates 100% standards-based Web Components that run in any browser supporting the Custom Elements v1 spec.

Stencil components are just Web Components, so they work in any major framework or with no framework at all.

## Getting Started

To start building a new web component using Stencil, clone this repo to a new directory:

```bash
git clone https://github.com/ionic-team/stencil-component-starter.git my-component
cd my-component
git remote rm origin
```

and run:

```bash
npm install
npm start
```

To build the component for production, run:

```bash
npm run build
```

To run the unit tests for the components, run:

```bash
npm test
```

Need help? Check out our docs [here](https://stenciljs.com/docs/my-first-component).


## Naming Components

When creating new component tags, we recommend _not_ using `stencil` in the component name (ex: `<stencil-datepicker>`). This is because the generated component has little to nothing to do with Stencil; it's just a web component!

Instead, use a prefix that fits your company or any name for a group of related components. For example, all of the Ionic generated web components use the prefix `ion`.


## Using this component

### Script tag

- [Publish to NPM](https://docs.npmjs.com/getting-started/publishing-npm-packages)
- Put a script tag similar to this `<script src='https://unpkg.com/my-component@0.0.1/dist/mycomponent.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

### Node Modules
- Run `npm install my-component --save`
- Put a script tag similar to this `<script src='node_modules/my-component/dist/mycomponent.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

### In a stencil-starter app
- Run `npm install my-component --save`
- Add an import to the npm packages `import my-component;`
- Then you can use the element anywhere in your template, JSX, html etc

## My Notes
REF:
https://www.twilio.com/blog/2018/02/creating-and-publishing-web-components-with-stencil.html
https://stenciljs.com/docs/vue


 ## Testing StencilJS by creating npm package (locally) and consuming via vue component
 Avoiding npm registry for faster development

 ## First build in PROD mode for stencilJS project 
 ## Windows: use gitbash terminal (must) 
 ## Incase of error, always delete node_modues, package-json and dist folders. In consumer app, delete public/dist folder as well

# Example
$ cd ~/Documents/projects/stencil/progress-bar/mn-progress-bar
$ - npm run build
## dist folder will be created. ENSURE LOADER file is available. If not run in build mode
$ - npm pack    // this will create package <<pkg-name>>-n.n.n.tgz in local machine, instead of  publising in npm registery

npm notice === Tarball Details ===
npm notice name:          mn-progress-bar
npm notice version:       1.0.1
npm notice filename:      mn-progress-bar-1.0.1.tgz


## IN VUE
Cd to consumer app and install it

$ cd ~/Documents/projects/stencil/progress-bar-consumer-vue

// run below to add to node modules and save to pacakage.json file

## DO this in GIT BASH terminal.. 
 $ cd ~/Documents/projects/stencil/progress-bar-consumer-vue  
 $ npm install '../progress-bar/mn-progress-bar/mn-progress-bar-1.0.1.tgz' --save  
 // THIS will inclde node project, but will not download all required pkgs  
 $ npm install   // This should download the pkg to node_modules  

 (npm uninstall before installing a newer version. remove package.json ref, if not removed and delete node_modules) 

 In code, main.js 
 Add below lines 

	import  { defineCustomElements }  from 'mn-progress-bar/dist/loader';

	Vue.config.productionTip = false
	// let vue know to ignore custom elements...
	Vue.config.ignoredElements = [/mn-progress-bar-\w*/];
	// Bind the custom elements to the window object ...
	defineCustomElements(window);


In component (hello.vue)

	<template>
  	    <div class="hello">
    		 <mn-progress-bar value="20"></mn-progress-bar>
	    </div>
	</template>


If error, delete all node_modules and public dist in vue


