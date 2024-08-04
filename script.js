// =========Typed Js========== //
var typed = new Typed(".typing", {
  strings: ["suka-makan", "suka tidur", "menyala abangku!!"],
  typeSpeed: 100,
  loop: true,
});
// =============Typed Js selesai============== //

//  =======Start===== //
const nav = document.querySelector(".nav");
(navList = nav.querySelectorAll("li")), (totalNavList = navList.length), (allSection = document.querySelectorAll(".section")), (totalSection = allSection.length);
for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    removeBackSection();
    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        addBackSection(j);
      }
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showSection(this);
    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  });
}
function removeBackSection() {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("back-section");
  }
}
function addBackSection(num) {
  allSection[num].classList.add("back-section");
}
function showSection(element) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}

function updateNav(element) {
  for (let i = 0; i < totalNavList; i++) {
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];
    if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
      navList[i].querySelector("a").classList.add("active");
    }
  }
}
document.querySelector(".hire-me").addEventListener("click", function () {
  const sectionIndex = this.getAttribute("data-section-index");
  showSection(this);
  updateNav(this);
  removeBackSection();
  addBackSection(sectionIndex);
});
const navTogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
});
function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.toggle("open");
  }
}
// kirim pesan melalui contact form
function sendMessage() {
  (function () {
    emailjs.init("jrpXZZFtub_6el1y_"); //Account public key
  })();
  var serviceID = "service_2t1lmlj"; //email service id
  var templateID = "template_tdtfs72"; //email template id

  var params = {
    senderName: document.querySelector("#name").value,
    senderEmail: document.querySelector("#email").value,
    subject: document.querySelector("#subject").value,
    message: document.querySelector("#message").value,
  };



  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      alert("Thank You, " + params["senderName"] + "! Your Message has been sent.");
    })
    .catch();
}
