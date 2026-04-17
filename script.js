document.addEventListener("DOMContentLoaded", () => {

    // ლინკებზე გადასვლა
    document.querySelectorAll("[data-link]").forEach(el => {
        el.addEventListener("click", () => {
            window.location.href = el.getAttribute("data-link");
        });
    });

    // CAPTCHA
    generateCaptcha();

});

let captchaText = "";

function generateCaptcha() {
    const canvas = document.getElementById("captchaCanvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    captchaText = Math.random().toString(36).substring(2, 7);

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = "20px Arial";
    ctx.fillText(captchaText, 10, 25);
}
