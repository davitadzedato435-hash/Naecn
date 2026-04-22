// ================= SAFE LOAD =================
document.addEventListener("DOMContentLoaded", () => {

    // ================= PAGE 1 (cards) =================
    document.querySelectorAll(".card").forEach(card => {
        card.addEventListener("click", () => {
            const link = card.getAttribute("data-link");
            if (link) window.location.href = link;
        });
    });

    // ================= PAGE 2 & 3 (rows) =================
    document.querySelectorAll(".row").forEach(row => {
        row.addEventListener("click", () => {

            // თუ კონკრეტული ლინკი აქვს → გადადი
            const link = row.getAttribute("data-link");
            if (link) {
                window.location.href = link;
                return;
            }

            // თუ ლინკი არ აქვს → გავაკეთოთ მოქმედება ტექსტის მიხედვით
            const title = row.querySelector(".title")?.innerText;

            if (title === "შედეგები") {
                downloadFile();
            }

            if (title === "აპელაცია") {
                alert("აპელაცია მალე დაემატება");
            }

        });
    });

    // ================= CAPTCHA INIT =================
    if (document.getElementById("captchaCanvas")) {
        generateCaptcha();
    }

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


// ================= LOGIN =================
function login(){
    const capInput = document.getElementById("captchaInput");
    const codeInput = document.getElementById("code");
    const error = document.getElementById("error");

    if (!capInput || !codeInput) return;

    const cap = capInput.value;
    const code = codeInput.value;

    if(cap !== captchaText){
        if (error) error.innerText = "ქაპჩა არასწორია";
        return;
    }

    if(code !== "983817247"){
        if (error) error.innerText = "საიდენტიფიკაციო კოდი არასწორია";
        return;
    }

    if (error) error.innerText = "";

    // ✔️ აქ არის ჩასწორებული
    window.location.href = "next.html";
}


// ================= DOWNLOAD =================
function downloadFile() {
    const link = document.createElement("a");
    link.href = "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";
    link.download = "results.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
