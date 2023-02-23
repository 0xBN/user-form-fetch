# Frontend Take-Home Exercise (Fetch)

## Recommendations / Assumptions
- First name and last name be split out in the backend database for data cleanliness. For this exercise, I have created a component that can be easily modified for this change, or if it is not possible to change the backend logic it can also be modified to just accept full name as one field. Currently it is submitting the name field with a space between the first and last name.

## Task
Build a webpage with a user creation form. Form has the following
- Full Name
- Email
- Password
- Occupation
- State

## Validation
User only able to select 1 occupation and 1 state.
Occupation and State from: 
- GET: https://frontend-take-home.fetchrewards.com/form

```json
// get data format
{
    "occupations": [
        "occupation1",
        "occupation2",
        ...
    ],
    "states": [
        {
            "name": "Alabama",
            "abbreviation": "AL"
        },
        ...
    ]
}
```

## Submission
The POST endpoint will return a 201 status code if all fields are provided. The response body will be the created user object. It does not perform any validation beyond this.
- POST: https://frontend-take-home.fetchrewards.com/form

```json
// submission format
{
    "name": "???",
    "email": "???",
    "password": "???",
    "occupation": "???",
    "state": "???"
}
```

## Minimum Requirements
- [x] Display a form with inputs for each field outlined above
- [x] Allow a user to complete and submit the form
- [x] Do not allow form submission without completing the entire form
- [x] Provide feedback upon successful form submission
- [x] Have its soure code stored in a code repository
- [x] Be hosted on the internet
- [x] Email Validation
- [x] Password Validation
- [x] Validate drop downs: Occupation, State
- [x] Error message appearing does not cause form to grow / shrink drastically

***

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
