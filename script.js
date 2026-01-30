const API_KEY = "42b6d6dd";

const movie = document.getElementById('moviename');
const fetchbutton = document.getElementById('fetchbtn');
const errorEl = document.getElementById('error');
const posters = document.getElementById('poster');
const info = document.getElementById('info');

const showerror = (msg) => {
    errorEl.textContent = msg;
};
const clearUI = () => {
    showerror("");
    posters.style.display = "none";
    info.innerHTML = "";
};

async function fetchMovie() {
    clearUI();
    const name = movie.value.trim();
    if (!name) {
        showerror("movie name ?");
        return;
    }
    const url = `https://www.omdbapi.com/?apikey=${API_KEY}&t=${encodeURIComponent(name)}&plot=short`;
    try {
        const res = await fetch(url, { cache: "no-store" });
        const text = await res.text();
        let data;
        try {
            data = JSON.parse(text);
        }
        catch {
            throw new Error("Bad response from the server");

        }
        if (!res.ok || data.Response === "False") {
            throw new Error(data.Error || `HTTPS${res.status}`)
        }
        if (data.Poster && data.Poster !== "N/A") {
            posters.src = data.Poster;
            posters.style.display = "block";
        }
        info.innerHTML = `
        <strong>${data.Title || "-"}</strong> (${data.Year || "-"})<br>
        ⭐IMDb: ${data.imdbRating || "-"}<br>
        🎬Genre: ${data.Genre || "-"}<br>
        Language: ${data.dub || "-"}
        `;
    } catch (error){
        showerror(error.message || "something went wrong");
        console.log(errorEl);
    }
};
fetchbutton.addEventListener("click",fetchMovie);
movie.addEventListener("keydown",(e)=>e.key === "Enter" && fetchMovie());