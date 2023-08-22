# Get crypto currency market updates with api.bittrex.com

## Features
- Context is used to share data between components like `Header`, `SummaryGrid` and `Page`.
- Debounces by 500ms to wait for the user to finishing typing in search input before triggering `/summary` api.
- Cancels previous request if a new api request is initiated
- Uses [Material UI](https://mui.com/) for styling and design.
- Eslint and prettier linters in place
- Typescript app

## Screenshots

- Desktop
  - ![image](https://github.com/chid93/crypto-updates/assets/9027740/1d4da6c5-ed7d-440c-b476-56dc2c968aae)
  - ![image](https://github.com/chid93/crypto-updates/assets/9027740/0da9c9d9-7b67-4ed6-9599-6e895d6aebb0)

- Mobile
  - ![image](https://github.com/chid93/crypto-updates/assets/9027740/e0bfb03a-8ba3-407e-a985-df94c3a3d7be)

- Request cancellation to improve performance | Error toast message (displays at the bottom left corner)
  - ![image](https://github.com/chid93/crypto-updates/assets/9027740/100f2a72-8570-42c0-90e1-eb3130896c48)

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
