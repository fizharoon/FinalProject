// Registering Example

// var username = 'Abbas'
// var password = 'BIHQNQIV12'

// var username = 'Sean'
// var password = '123'

// const send_data = {"username":username,'password':password};

// fetch("http://127.0.0.1:5000/register",{
//     method:'POST',
//     headers:{'Content-Type':'application/json'},
//     body:JSON.stringify(send_data)
// })
// .then(response=>response.json())

// Login Example

// var username = 'Abbas'
// var password = 'BIHQNQIV12'

// var username = 'Sean'
// var password = '123'

// const send_data = {"username":username,'password':password};

// fetch("http://127.0.0.1:5000/login",{
//     method:'POST',
//     headers:{'Content-Type':'application/json'},
//     body:JSON.stringify(send_data)
// })
// .then(response=>response.json())

// Get All Music Genres

fetch("http://127.0.0.1:5000/UserHome",{
    method:'GET'
})
.then(response=>response.json())

