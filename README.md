# jest-fail-on-console-client

This is an example of how to use the `shouldFailOnAssert` option of `jest-fail-on-console`

## Set up `jest-fail-on-console`

1. Installing it in `package.json`
1. Adding a `jest.config.js` file that sets `setupFilesAfterEnv`
1. Adding a `jest.setup.js` file that calls `failOnConsole({ shouldFailOnAssert: true })`

## Write the application code

Look at index.js. Note that we have two methods, assertSuccess and assertFailure. When we call assertSuccess, that doesn't fail the test because `1 === 1`, but when we call `assertFailure`, the test is failed. This is because `console.assert` doesn't log in `assertSuccess`, but it does in `assertFailure`.

## Run the tests

One of the tests, `test client › asserts failure`, fails to show you how errors are display.
