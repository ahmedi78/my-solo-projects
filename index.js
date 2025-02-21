let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");

let homeScore = 0;
let guestScore = 0;

function increasehomescroe(points) {
    homeScore += points;
    homeScoreEl.textContent = homeScore;
}

function increaseguestscore(points) {
    guestScore += points;
    guestScoreEl.textContent = guestScore;
}
