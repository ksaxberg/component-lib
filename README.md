# Component-Lib

This is a project template meant to help you get started quickly developing components. The basic component can be viewed over in the [storybook](https://ksaxberg.github.io/component-lib). This template is designed to help you with the following:

- Have a component library ready to publish to npm
- Design, develop, and document components with [Storybook](https://storybook.js.org/)
- Make cool things quickly

## Quick-Start
If you don't have node and npm, go [install it now](https://nodejs.org/en/).

Clone the repo, navigate to the directory, then run `npm install`, then run `npm run storybook` and navigate to `localhost:9001`. You should see storybook running with a single button component. You can check out `lib/elements/index.js` to see how you can create stories with components that you create.

## Setup
### Package.json
Make sure to change the name, version, description, and author to match your new project. Also be sure to review the license and code of conduct to see if they match what your project needs.

### What do I do with this package?
Develop your components over in `lib/components`, `lib/elements`. You can provide styles for these components over in `styles` and import them appropriately. (Example with styles tbd)

Create [stories](https://storybook.js.org/basics/guide-react/#write-your-stories) for your new components over in `stories`. If you add more, these should be split out into separate files, which can be imported into `index.js`. The example provided there includes some of the cool addons that storybook has, which enable your stories to serve as live documentation of the components. Try to use `knobs` to let potential users of your package fiddle with your components to see if it will work for their use case.

### I'm ready to publish!
First let's setup your storybook on github pages for your package. This process is pretty easy due to [storybook-deployer](https://github.com/storybooks/storybook-deployer), which automatically handles a lot of this process for us. After you have setup your package folder as a git repository, run `npm run deploy-storybook` and the bot will take care of publishing storybook to the github pages for this repository. This will create a new branch, `gh-pages`, that you should probably leave alone.

Then you should be all set to publish on `npm`, which will only publish the built version of what is under `libs`.
