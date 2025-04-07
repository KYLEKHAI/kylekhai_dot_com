// Allow redirection to top from navbar when on current page
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
});

// Allows parallax effect on scroll
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".parallax-section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
        }
      });
    },
    { threshold: 0.2 }
  );

  sections.forEach((section) => {
    observer.observe(section);
    section.classList.add("scroll-transition");
  });
});

// Allows real-time to be displayed in about section
function updateTime() {
  const now = new Date();
  const formattedTime = now.toLocaleString();
  document.getElementById("real-time").textContent = formattedTime;
}

updateTime();
setInterval(updateTime, 1000);

// Allows email to be copied and notification to appear
function copyEmail() {
  const email = "kylekhai04@gmail.com";
  const tempInput = document.createElement("input");
  tempInput.value = email;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);

  const notification = document.createElement("div");
  notification.innerText = "Email copied! ⸜(˃ ᵕ ˂ )⸝";
  notification.style.position = "fixed";
  notification.style.bottom = "20px";
  notification.style.right = "20px";
  notification.style.backgroundColor = "rgba(9, 9, 12, 0.9)";
  notification.style.color = "rgba(255, 255, 255, 0.7)";
  notification.style.padding = "12px 20px";
  notification.style.borderRadius = "0.375rem";
  notification.style.boxShadow =
    "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)";
  notification.style.border = "1px solid rgba(255, 255, 255, 0.1)";
  notification.style.backdropFilter = "blur(4px)";
  notification.style.zIndex = "1000";
  document.body.appendChild(notification);

  setTimeout(() => {
    document.body.removeChild(notification);
  }, 2500);
}

// Allows modal to be opened and closed for experience section
function openModal(index) {
  document.getElementById(`modal-${index}`).classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal(index) {
  document.getElementById(`modal-${index}`).classList.remove("active");
  document.body.style.overflow = "auto";
}

document.addEventListener("click", function (event) {
  const modals = document.querySelectorAll(".experience-modal.active");
  modals.forEach((modal) => {
    if (event.target === modal) {
      modal.classList.remove("active");
      document.body.style.overflow = "auto";
    }
  });
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    const modals = document.querySelectorAll(".experience-modal.active");
    modals.forEach((modal) => {
      modal.classList.remove("active");
      document.body.style.overflow = "auto";
    });
  }
});

// Bongo cat easter egg
document.addEventListener("DOMContentLoaded", function () {
  console.log("Bongo Cat script loading...");
  const bongoCat = document.querySelector('img[alt="Bongo Cat"]');

  if (bongoCat) {
    const catContainer = document.createElement("div");
    catContainer.style.position = "relative";
    catContainer.style.display = "inline-block";
    bongoCat.parentNode.insertBefore(catContainer, bongoCat);
    catContainer.appendChild(bongoCat);

    // Speech bubble meow
    const speechBubble = document.createElement("div");
    speechBubble.className = "speech-bubble";
    speechBubble.textContent = "meow!";
    speechBubble.style.position = "absolute";
    speechBubble.style.top = "-40px";
    speechBubble.style.left = "50%";
    speechBubble.style.transform = "translateX(-50%)";
    speechBubble.style.backgroundColor = "white";
    speechBubble.style.color = "black";
    speechBubble.style.padding = "5px 10px";
    speechBubble.style.borderRadius = "15px";
    speechBubble.style.fontSize = "14px";
    speechBubble.style.display = "none";
    speechBubble.style.zIndex = "100";
    speechBubble.style.textAlign = "center";
    speechBubble.style.whiteSpace = "nowrap";
    catContainer.appendChild(speechBubble);

    // JRPG dialog box
    const dialogBox = document.createElement("div");
    dialogBox.className = "jrpg-dialog";
    dialogBox.style.position = "fixed";
    dialogBox.style.bottom = "20px";
    dialogBox.style.left = "50%";
    dialogBox.style.transform = "translateX(-50%)";
    dialogBox.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    dialogBox.style.border = "3px solid #fff";
    dialogBox.style.borderRadius = "10px";
    dialogBox.style.padding = "15px";
    dialogBox.style.color = "white";
    dialogBox.style.fontFamily = "monospace, sans-serif";
    dialogBox.style.fontSize = "16px";
    dialogBox.style.zIndex = "1000";
    dialogBox.style.width = "300px";
    dialogBox.style.display = "none";
    dialogBox.style.boxShadow = "0 0 10px rgba(255, 255, 255, 0.3)";
    document.body.appendChild(dialogBox);

    const dialogHeader = document.createElement("div");
    dialogHeader.innerHTML = "<strong>Bongo Cat</strong>";
    dialogHeader.style.borderBottom = "1px solid rgba(255, 255, 255, 0.3)";
    dialogHeader.style.paddingBottom = "5px";
    dialogHeader.style.marginBottom = "10px";
    dialogBox.appendChild(dialogHeader);

    // Options
    const optionsList = document.createElement("ul");
    optionsList.style.listStyle = "none";
    optionsList.style.padding = "0";
    optionsList.style.margin = "0";
    dialogBox.appendChild(optionsList);

    // Back to top
    const backToTopOption = document.createElement("li");
    backToTopOption.innerHTML = "1. Back to top";
    backToTopOption.style.padding = "5px 0";
    backToTopOption.style.cursor = "pointer";
    backToTopOption.addEventListener("mouseenter", () => {
      backToTopOption.innerHTML = "► 1. Back to top";
    });
    backToTopOption.addEventListener("mouseleave", () => {
      backToTopOption.innerHTML = "1. Back to top";
    });
    backToTopOption.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      dialogBox.style.display = "none";
    });
    optionsList.appendChild(backToTopOption);

    // meow
    const meowOption = document.createElement("li");
    meowOption.innerHTML = "2. Meow";
    meowOption.style.padding = "5px 0";
    meowOption.style.cursor = "pointer";
    meowOption.addEventListener("mouseenter", () => {
      meowOption.innerHTML = "► 2. Meow";
    });
    meowOption.addEventListener("mouseleave", () => {
      meowOption.innerHTML = "2. Meow";
    });
    meowOption.addEventListener("click", () => {
      dialogBox.style.display = "none";

      speechBubble.style.display = "block";

      setTimeout(() => {
        speechBubble.style.display = "none";
      }, 2000);
    });
    optionsList.appendChild(meowOption);

    bongoCat.style.cursor = "pointer";
    bongoCat.addEventListener("click", function () {
      if (
        dialogBox.style.display === "none" ||
        dialogBox.style.display === ""
      ) {
        dialogBox.style.display = "block";
      } else {
        dialogBox.style.display = "none";
      }
    });

    document.addEventListener("click", function (event) {
      if (!dialogBox.contains(event.target) && event.target !== bongoCat) {
        dialogBox.style.display = "none";
      }
    });
  }
});
