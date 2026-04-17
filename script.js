document.addEventListener("DOMContentLoaded", () => {

    // --- DOWNLOAD ---
    window.downloadFile = function () {
        const link = document.createElement("a");
        link.href = "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";
        link.download = "results.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    // --- CARD CLICK ---
    document.querySelectorAll(".card").forEach(card => {
        card.addEventListener("click", () => {
            const link = card.getAttribute("data-link");
            if (link) window.location.href = link;
        });
    });

    // --- ROW CLICK ---
    document.querySelectorAll(".row").forEach(row => {
        row.addEventListener("click", () => {
            const link = row.getAttribute("data-link");
            if (link) window.location.href = link;
        });
    });

    // --- CAPTCHA ---
    generateCaptcha();

});


// ================= CAPTCHA =================

let captchaText = "";

function generateCaptcha() {
    const canvas = document.getElementById("captchaCanvas");

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    canvas.width = 200;
    canvas.height = 60;

    captchaText = Math.random().toString(36).substring(2,7);

    ctx.clearRect(0,0,200,60);

    ctx.font = "28px Georgia";
    ctx.fillStyle = "#000";

    for(let i=0;i<captchaText.length;i++){
        let angle = (i-2)*0.2;
        ctx.save();
        ctx.translate(30 + i*30,30);
        ctx.rotate(angle);
        ctx.fillText(captchaText[i],0,0);
        ctx.restore();
    }
}

function login(){
    const capInput = document.getElementById("captchaInput");
    const codeInput = document.getElementById("code");
    const error = document.getElementById("error");

    if (!capInput || !codeInput || !error) return;

    const cap = capInput.value.trim();
    const code = codeInput.value.trim();

    if(cap !== captchaText){
        error.innerText = "ქაპჩა არასწორია";
        return;
    }

    if(code !== "983817247"){
        error.innerText = "საიდენტიფიკაციო კოდი არასწორია";
        return;
    }

    error.innerText = "";
    window.location.href = "next.html";
}
