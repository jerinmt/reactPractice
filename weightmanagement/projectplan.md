Weight loss management app in React

Aim
1 - The user can signup in the website(no database or backend currently, need to implement using local storage or redux store)
2 - Logged in users can add their weight, the current date should automatically be added.
3 - User should only be able to add weight once per day, after which if tried an error should be displayed
4 - Logged in user can view the list of weights they added, along with the added time.
5 - The listing page should have pagination of 7 days
6 - Users should be able to find the weight loss between two dates by selecting two dates. If there is no weight added on that day display a message mentioning the missing day.
7 - Logged in users can edit/delete weight details.
8 - Logged in users can logout of website
9 - While logging in generate a token and use redux store and local storage to implement persistence.
10 - Use bootstrap cdn for styling.
11 - Required pages:
    a) Landing page - App.jsx
    b) Register page - Register.jsx
    c) Login page - Login.jsx
    d) Profile page - Profile.jsx (viewing the weight list and the form tool to find the weight difference)
    e) Error page - Error.jsx (for handling 404 and other errors)