🎥 Movie Finder & Reviewer
A simple movie search web app built using HTML, CSS, and JavaScript that fetches real-time movie data from the OMDb API.

Users can search for any movie and instantly see:

Poster

Release year

IMDb rating

Genre

✨ Features
Real-time movie search

Uses public OMDb API

Displays movie poster

Shows IMDb rating & details

Error handling for invalid searches

Enter key support

Responsive modern UI

No frameworks used

📂 Project Structure
/movie-reviewer
│
├── index.html
├── style.css
├── script.js
└── img/
    └── OIP.jpg (favicon)
🛠️ Technologies Used
HTML5

CSS3

JavaScript (Async/Await)

OMDb API

⚙️ How It Works
User enters a movie name.

App sends request to:

https://www.omdbapi.com/
Data is fetched using fetch().

UI updates dynamically.

📸 UI Description
Dark themed interface

Search box with glowing button

Poster appears dynamically

Movie info shown below poster

Smooth hover effects

⚙️ How to Run
Download or clone the project.

Open index.html in browser.

Type a movie name (e.g. Inception).

Click Find It or press Enter.

🔑 API Used
OMDb API
Free movie database API.

Current key used in project:

const API_KEY = "42b6d6dd";
(You can replace it with your own key if needed.)

🧠 Learning Outcomes
This project teaches:

Working with APIs

Async/Await

Error handling

DOM manipulation

Dynamic UI updates

User input validation

🎯 Future Improvements
Add cast & director

Add movie plot

Save search history

Loading spinner

Mobile UI optimization

⚠️ Note
This project depends on internet connection to fetch movie data.

🧑‍💻 Author
Created by [Deepaksriram K]
IT Student | JavaScript Developer
