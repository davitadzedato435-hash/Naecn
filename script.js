// პირველი + მეორე გვერდი
document.querySelectorAll("[data-link]").forEach(el => {
    el.addEventListener("click", () => {
        window.location.href = el.getAttribute("data-link");
    });
});

// CAPTCHA
let captchaText = "";

function generateCaptcha() {
    const canvas = document.getElementById("captchaCanvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    captchaText = Math.random().toString(36).substring(2,7);

    ctx.font = "30px Arial";
    ctx.fillText(captchaText, 20, 40);
}

function login(){
    const cap = document.getElementById("captchaInput").value;
    const code = document.getElementById("code").value;

    if(cap !== captchaText){
        alert("Captcha არასწორია");
        return;
    }

    if(code !== "12345678901"){
        alert("კოდი არასწორია");
        return;
    }

    window.location.href = "next.html";
}

generateCaptcha();