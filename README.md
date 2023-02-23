# Frontend Take-Home Exercise (Fetch)

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
- [ ] Display a form with inputs for each field outlined above
- [ ] Allow a user to complete and submit the form
- [ ] Do not allow form submission without completing the entire form
- [ ] Provide feedback upon successful form submission
- [ ] Have its soure code stored in a code repository
- [ ] Be hosted on the internet

***

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
