// Registering Example

// var username = 'Sean'
// var password = '123'

// var username = 'Abbas'
// var password = 'BIHQNQIV12'

// const send_data = {"username":username,'password':password};

// fetch("http://127.0.0.1:5000/register",{
//     method:'POST',
//     headers:{'Content-Type':'application/json'},
//     body:JSON.stringify(send_data)
// })
// .then(response=>response.json())

// Login Example

// var username = 'Sean'
// var password = '123'

// var username = 'Abbas'
// var password = 'BIHQNQIV12'

// const send_data = {"username":username,'password':password};

// fetch("http://127.0.0.1:5000/login",{
//     method:'POST',
//     headers:{'Content-Type':'application/json'},
//     body:JSON.stringify(send_data)
// })
// .then(response=>response.json())

// Get All Music Genres

// fetch("http://127.0.0.1:5000/SetUp/GetGenres",{
//     method:'GET'
// })
// .then(response=>response.json())

// Set Music Genres

// const send_genres = {"hip-hop": 0, "k-pop": 1, "pop": 2};

// fetch("http://127.0.0.1:5000/SetUp/SetGenres",{
//     method:'POST',
//     headers:{'Content-Type':'application/json'},
//     body:JSON.stringify(send_genres)
// })
// .then(response=>response.json())

// Get All Artists

// fetch("http://127.0.0.1:5000/SetUp/GetArtists",{
//     method:'GET'
// })
// .then(response=>response.json())

// Set Artists

// const send_artists = {"Lizzo": 0, "J-Cole": 1, "The Kid LAROI": 2, "Justin Bieber":3,
// "IVE":4, "Crush":5, "Jack Harlow": 6, "21 Savage": 7, "Harry Styles": 8, "SEULGI":9,
// "BLACKPINK":10, "Drake": 11, "LE SSERAFIM": 12, "Eminem": 13, "Charlie Puth": 14,
// "The Weeknd":15, "Lil Nas X": 16, "OneRepublic": 17, "Joji":18, "Nate Dogg": 19, "Halsey": 20,
// "Sam Smith": 21, "aespa": 22, "Chris Brown": 23, "TWICE": 24, "BTS": 25};

// fetch("http://127.0.0.1:5000/SetUp/SetArtists",{
//     method:'POST',
//     headers:{'Content-Type':'application/json'},
//     body:JSON.stringify(send_artists)
// })
// .then(response=>response.json())

// Get Setup Songs

// fetch("http://127.0.0.1:5000/SetUp/GetSongs",{
//     method:'GET'
// })
// .then(response=>response.json())

// Set Setup Songs

// const send_songs = {0:1, 1:1, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0, 8:0, 9:0, 10:0, 11:1, 12:1,
// 13:0, 14:1, 15:1, 16:1, 17:0, 18:1, 19:1, 20:0, 21:1, 22:1, 23:0, 24:1, 25:0, 26:1, 27:1,
// 28:1, 29:1, 30:0, 31:1, 32:0, 33:1, 34:1, 35:0, 36:1, 37:1, 38:1, 39:0};

// fetch("http://127.0.0.1:5000/SetUp/SetSongs",{
//     method:'POST',
//     headers:{'Content-Type':'application/json'},
//     body:JSON.stringify(send_songs)
// })
// .then(response=>response.json())

// Train Model

// const send_songs = {0:0};

// fetch("http://127.0.0.1:5000/SetUp/TrainModel",{
//     method:'POST',
//     headers:{'Content-Type':'application/json'},
//     body:JSON.stringify(send_songs)
// })
// .then(response=>response.json())

// Get Recommendations!

fetch("http://127.0.0.1:5000/UserHome/GetRecommendations", {
  method: "GET",
}).then((response) => response.json());
