# Get crypto currency market updates with api.bittrex.com

## Features
- Context is used to share summary items between `Header` component and `SummaryGrid` component.
- Debounces by 500ms to wait for the user to finishing typing in search input before triggering `/summary` api.
- Cancels previous request if a new api request is initiated
- Uses [Material UI](https://mui.com/) for styling and design.
- Eslint and prettier linters in place
- Typescript app

## Screenshots

- Desktop
  - ![image](https://github.com/chid93/crypto-updates/assets/9027740/ca99c607-cce3-4dd4-9900-aa3256f14a6a)
  - ![image](https://github.com/chid93/crypto-updates/assets/9027740/89b51d5e-4213-44c2-ab12-1ad14938e496)

- Mobile
  - ![image](https://github.com/chid93/crypto-updates/assets/9027740/ddf5f142-2c74-416e-af42-ad0def53892f)

- Request cancellation to improve performance | Error toast message (displays at the bottom left corner)
  - ![image](https://github.com/chid93/crypto-updates/assets/9027740/babc5dc9-209e-43c3-8b99-7a6f5b5ed217)

- Test coverage
  - ![image](https://github.com/chid93/crypto-updates/assets/9027740/06430756-d5b0-4793-9e07-0e3c9c580d52)


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run test:coverage`

Prints file coverage for all the files.

### `npm run build`

Builds the app for production to the `build` folder.
