## Todo

- &#9744; Move up <Box /> component to page/index.tsx component
- &#9744; change grid content to fill height of the page?
- &#9744; Api
  - Websockets. Stream data.
    - should update the summary at a regular interval?
  - Authentication
    - for all rest calls
    - store creds securely
    - refresh every 10 minutes
- &#9744; docker build files
- &#9744; backend health check and version info/pages
- &#9744; Additional features?
  - ErrorBoundary
- &#9745; Documentation. Readme with screenshots, instructions to start the app and features.
- &#9745; Toast supports only error messages for now, informed decision.
- &#9745; performance
  - Analyze bundle
    - Mui has tree shaking built in for named exports https://mui.com/material-ui/guides/minimizing-bundle-size/
  - Check for unnecessary loops
  - sx props works for most cases https://mui.com/system/getting-started/usage/#performance-tradeoffs
- &#9745; move test utils to utils
- &#9745; useFetch hook
- &#9745; valueGetter methods for table
- &#9745; fix valueGetter format 0 value sort
- &#9745; Display market summary for all currencies
  - pagination
  - display color for percent change
- &#9745; error handling
  - maybe some logger?
- &#9745; progressive web app
- &#9745; debounce search input
- &#9745; header
  - Search tab to find details on specific currency (desktop/mobile) - (ctrl + k)
    - Recent searches?
  - TDD
- &#9745; footer
  - What should I place in the footer? Copyright stuff? ©2023
- &#9745; package.json
- &#9745; typescript
- &#9745; material UI
- &#9745; project structure
  - hooks - consits of common hooks
  - pages - page level components
  - components - reusable components used by multiple pages
- &#9745; linters

## Questions

- redux/redux-saga? A: Not required. Too much for a small project.
- single page? No routes? A: Yes.

## References

- https://economictimes.indiatimes.com/markets/cryptocurrency
- https://global.bittrex.com/explore
