# Hotel Reservation System


## Persist User after Logged in.
In this project, we used localStorage to store the loggedIn user details, because we are not using Header Authorization as we did in the previous Projects - for example if you look in the Advanced Ticketing System Project, When the user log in, In the Header Authorization we stored our access token, and from the access token we get the user id using jwt.verify, and and then fetch user data providing that user._id.

However, here we user another approach. Once user log in, the API is sending two types of data; user details, and access token. Access token is saved in the sessionStorage the moment login API is called, and then we used redux and localStorage to store user details.
