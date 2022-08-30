# Maintenance Tracker Application

## The Back Story

I manage a household of 6 people and 1 dog. There are constantly projects, repairs, and general maintenance that needs to be completed. I wanted to create an application to store all pertinent information. Things like warrenties, light bulb sizes, model numbers, dates of repairs, cost of parts...etc. I designed this tracker to sort and store this information in a logical and accessible way. My beginning point was for personal use in a household, but this SPA could be used to track data for a small business or companies as well. 



## Using this Repository and working in Development Mode

## Getting Started
First, fork and clone this repository into a local directory. Once you navigate into the correct file, run:

### `bundle install`
to install the required gems

### `rails s`
will run the server on port http://localhost:3000

### `npm start --prefix client`
will start the frontend on port http://localhost:4000



### Features
The user can:
* Signup, Login, and Logout. Each user's data is password protected using bcrypt.
* Personalize design options that will be reflected throughout the site.
* View a list of all people associated with the account and add people to the database. 
    * View a show page for each person where you can update their data, see a rendering of all repairs associated with them, and delete them if they have no repairs.

* View a list of all items and add items to the database.
    * View a show page for each item where you can update its data and view all details associated with the item. You also see a list of associated parts, have the ability to update those parts, or add new parts.

* View a list of all repairs. These can be filted by status of complete or ongoing. Repairs can be updated or deleted at any time. 

* View a list of locations and categories. Each of these come with the ability to add more and update those already listed. For locations and categories with items assigned to them, you can view a list of those items. If there are no items assigned, the location or category can be deleted from the database. 



## Additional Information:

This project has been deployed via [heroku](https://project-maintenance-tracker.herokuapp.com/) 
* There is no seeded data, so to visit a dummy site populated with information, login in with:
    * username: Rosie
    * password: 1234
    * Heroku just announced changes effective 11/28/22 which may alter the availability of this application.



* Please check out the [YouTube](https://youtu.be/QWsiBidTEes) walk through video to see a highlight of some of the SPA features. 

* I also wrote multiple blogs regarding this project:
    * [Project Blog]()
    * [Redux Toolkit: createAsyncThunk]()
    * [Rails: accepts_nested_attributes_for](https://medium.com/@bremarotta/rails-accepts-nested-attributes-for-f0a588d88a2)
    * [React: Styled Components](https://medium.com/@bremarotta/react-styled-components-440cc25004cf)

##
#### License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
