# X-Press Publishing

## Project Overview

This project, is built for all of the routing and database logic for an internal tool for a comic book publishing company called X-Press Publishing.

### Database Table Properties

* **Artist**
  - id - Integer, primary key, required
  - name - Text, required
  - date_of_birth - Text, required
  - biography - Text, required
  - is_currently_employed - Integer, defaults to `1`

* **Series**
  - id - Integer, primary key, required
  - name - Text, required
  - description - Text, required

* **Issue**
  - id - Integer, primary key, required
  - name - Text, required
  - issue_number - Text, required
  - publication_date - Text, required
  - artist_id - Integer, foreign key, required
  - series_id - Integer, foreign key, required

## Testing

A testing suite has been provided for you, checking for all essential functionality and edge cases.

To run these tests, first, open the root project directory in your terminal. Then run `npm install` to install all necessary testing dependencies (if you haven't already). Finally, run `npm test`. You will see a list of tests that ran with information about whether or not each test passed. After this list, you will see more specific output about why each failing test failed.

As you implement functionality, run the tests to ensure you are creating correctly named variables and functions that return the proper values.
The tests will additionally help you identify edge cases that you may not have anticipated when first writing the application.
