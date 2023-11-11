var cookies = 0;

function GetCookie() {
    cookies += 1;
    document.getElementById('text').innerText = CallCookies();
};
function CallCookies() {
    if (cookies != 1) {return`You have ${cookies} cookies`;}else{return`You have ${cookies} cookie`;};
};

document.getElementById('text').innerText = CallCookies();
