# Anders Lundback's portfolio

Hi! Welcome to my portfolio. Here you can read about my experience as a developer and how to get in touch with me.

**Live version**: [https://anderslundback.com](https://anderslundback.com)

## Stack

I've followed a mobile-first approach, based on a modern stack that incorporates some of the most popular technologies these days.
The project runs on top of [Create React App](https://github.com/facebook/create-react-app),
the official app bootstrapping tool offered by Facebook. 

* HTML
* CSS
* Sass
* JavaScript
* React
* TypeScript

The setup is quite standard. Simply checkout the repo, install the dependencies with `npm install` and start the server with `npm start`.

## Testing

Even though the test coverage isn't any impressive at all, at least the project incorporates most of layers testing of the testing pyramid, for reference purposes:

* Linting with [ESLint](https://eslint.org/) (`npm run lint`).
* Unit & component testing with [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/) (`npm run test:unit`).
* End to End testing with [Cypress](https://www.cypress.io/) (`npm run test:e2e:local`).
* Visual Regression Testing with [BackStopJS](https://github.com/garris/BackstopJS) (`npm run test:visual:test`).


## Known issues

1. [ESLint doesn't run in watch mode locally](https://github.com/facebook/create-react-app/issues/8683).
2. Visual Regression Testing runs fine locally, but it doesn't on CircleCI. That's because the [official Orb](https://circleci.com/orbs/registry/orb/reload/backstop) runs btoh the "Generate" and "Test" tasks sequentially - but we'd only want to run the latter!

## Questions

Feel free to drop me a message at [lundback.anders@gmail.com](mailto:lundback.anders@gmail.com)

## License

This project is [MIT licensed](./LICENSE).