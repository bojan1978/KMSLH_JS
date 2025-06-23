Test Specifications

Here are some details of the test.

File names per test cases:
Test case 1: Validate "Book a Demo" Link navigation.
Test file: book-demo.spec.ts      (or spec.js, if you opened the Javascript version) 
Test case 2: Validate Default State of the Accessibility Toggles.
Test file: accessibilityToggles.spec.ts 
Test case 3: Validate Header Menu Links.
Test file: headerLinks.spec.ts 
Test case 4: Validate Tabs and Buttons on Homepage.
Test file: homePageButtons.spec.ts 

Commands for calling the scripts:
Calling  "Book a Demo" test case: 
command: npm run book_a_demo 
Calling  "Validate Toggles" test case: 
command: npm run validate_toggles
Calling  "Test Header links" test case: 
command: npm run header_links
Calling  "Test Tabs and Buttons" test case: 
command: npm run buttons
Calling all tests in chromium: 
command: npm run all_tests-chrome
Calling all tests in chromium and firefox: 
command: npm run all_tests


Language of the tests:

Automated tests are written in both JavaScript and Typescript. 
Both are very similar, there are just differences in the language particulars. 
The main difference would be Page Object modals:
For JavaScript I used Page Object Modal used mostly on plain functions;
For TypeScript Page Object Modals are defined in classes.

Test structure and pattern:
I used the usual test pattern, based on Page Object modal.
Each test has its Page Object Modal in page-objects folder. 
In cases where we need test data for the test, I have put them in json files in the test-data folder.


Possible issues:
By default in Playwright the test execution is run on three browser types: chromium, firefox and webkit.

Webkit based browsers:
Webkit is primarily used for Safari browser,  and if you are running tests on Windows machine it will not work. I have tested it manually and the page is inactive (on Mac in Safari it is working properly).
Recommendation: do not enable it.

Firefox browser:
Firofox is working correctly in manual mode, but because of the speed that Playwright executes it tests it will have some race conditions during the test. 
The issue I found is basically when I run parallel testing. If I include 6 tests per run (which is default for Playwright) there were conflicts and failed tests due to some race conditions
If you set it in configuration that we run only one test after another (and not in parallel) the tests are passing.
But it takes a lot more time then parallel testing.

You can set number of parallel runs in playwright configuration file: playwright.config.ts
in defineConfig  look for line: 
workers: process.env.CI ? 1 : undefined
Change the undefined to 1 and you should have your tests running one after another. (undefined is setting default to 6)

Chromium browsers:
The best performance is on chromium based browsers. Hardly any test failed when running on chromium. 
The commands that are listed above for running tests are in chromium.
Highly recommend running in chromium browsers.
