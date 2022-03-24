# Rosa Patient Booking

This project was generated using [Nx](https://nx.dev).

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

🔎 **Smart, Fast and Extensible Build System**

## About

This application is built with Nx and React. You can access the application without running it locally by going to: https://rosa-patient-booking.vercel.app/. The goal of the app is to display availabilities from the Rosa patient booking API by creating appointments on a calendar. The user is able to select their appointment time from a range of dates. The actual booking of the appointment is not fully implemented.

## Next Steps

- Continue with Jest and e2e tests; I only added minimum tests for the components.
- Implement the calendar resizing and adjusting the number of dates shown; I hardcoded the range to be 7 days for now.
- Implement booking the appointment after form submit and create the email page.

## To run the application

- Make sure React is installed for the workspace:

  - [React](https://reactjs.org)
    - `npm install --save-dev @nrwl/react`

- Run `nx serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

- To build: Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `nx e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understanding the workspace

Run `nx graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.
