# How to access protected endpoints for the events API in Postman

- Assuming the API is up and running, and you are able to get responses from unprotected endpoints, follow these instructions

## Create a new user

- on endpoint POST: /api/users
- add a username and password to the body in JSON format. Make sure you select `raw` and `JSON`

## Login the new user

- on endpoint POST: /api/auth/login
- Add the same username and password to the body
- copy the token you get in the response

## Access protected route

- endpoint used in example (but will work for all protected routes) GET: /api/auth/profile
- add a new header
  - Key: `Authorization`
  - Value: `Bearer <paste_the_token_here>`
