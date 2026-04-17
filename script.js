// NAVIGATION (data-link ელემენტებისთვის)
document.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll("[data-link]").forEach(el => {
        el.addEventListener("click", () => {
            const link = el.getAttribute("data-link");
            if (link) {
                window.location.href = "./" + link;
            }
        });
    });

    // CAPTCHA გაშვება მხოლოდ თუ არსებობს canvas
    generateCaptcha();
});


// CAPTCHA
let captchaText = "";

function generateCaptcha() {
    const canvas = document.getElementById("captchaCanvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    // გაწმენდა
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // ახალი კოდის გენერაცია
    captchaText = Math.random().toString(36).substring(2, 7);

    ctx.font = "30px Arial";
    ctx.fillText(captchaText, 20, 40);
}


// LOGIN ფუნქცია
function login() {
    const capInput = document.getElementById("captchaInput");
    const codeInput = document.getElementById("code");

    if (!capInput || !codeInput) return;

    const cap = capInput.value.trim();
    const code = codeInput.value.trim();

    if (cap !== captchaText) {
        alert("Captcha არასწორია");
        generateCaptcha(); // თავიდან გენერაცია
        return;
    }

    if (code !== "12345678901") {
        alert("კოდი არასწორია");
        return;
    }

    // წარმატება → გადაყვანა
    window.location.href = "./next.html";
}
