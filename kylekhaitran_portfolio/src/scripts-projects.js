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

// Bongo cat easter egg
document.addEventListener("DOMContentLoaded", function () {
  // debug
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

  // Set array of images for each proj
  const projectGalleries = {
    fordward: [
      "assets/imgs/project-imgs/fordward-img1.png",
      "assets/imgs/project-imgs/fordward-img2.png",
      "assets/imgs/project-imgs/fordward-img3.png",
      "assets/imgs/project-imgs/fordward-img4.png",
      "assets/imgs/project-imgs/fordward-img5.png",
      "assets/imgs/project-imgs/fordward-img6.png",
      "assets/imgs/project-imgs/fordward-img7.png",
      "assets/imgs/project-imgs/fordward-img8.png",
      "assets/imgs/project-imgs/fordward-img9.png",
      "assets/imgs/project-imgs/fordward-img10.png",
      "assets/imgs/project-imgs/fordward-img11.png",
    ],
    outtatown: [
      "assets/imgs/project-imgs/outtatown-img1.png",
      "assets/imgs/project-imgs/outtatown-img2.png",
    ],
  };

  // Allows gallery modal to open and close
  function openGalleryModal(project) {
    const modal = document.getElementById("gallery-modal");
    modal.classList.add("active");
    document.body.style.overflow = "hidden";

    const thumbnailsContainer = modal.querySelector(".gallery-thumbnails");
    const mainImage = modal.querySelector(".gallery-main-image");

    const images = projectGalleries[project] || [];

    if (images.length > 0) {
      mainImage.src = images[0];
    }

    thumbnailsContainer.innerHTML = "";

    images.forEach((imageSrc, index) => {
      const thumbnail = document.createElement("div");
      thumbnail.classList.add("gallery-thumbnail");

      const img = document.createElement("img");
      img.src = imageSrc;
      img.addEventListener("click", () => {
        mainImage.src = imageSrc;

        thumbnailsContainer
          .querySelectorAll(".gallery-thumbnail")
          .forEach((t) => t.classList.remove("active"));

        thumbnail.classList.add("active");
      });

      thumbnail.appendChild(img);
      thumbnailsContainer.appendChild(thumbnail);
    });

    if (thumbnailsContainer.firstChild) {
      thumbnailsContainer.firstChild.classList.add("active");
    }
  }

  function closeGalleryModal() {
    const modal = document.getElementById("gallery-modal");
    modal.classList.remove("active");
  }

  // Create modal HTML
  const galleryModal = document.createElement("div");
  galleryModal.id = "gallery-modal";
  galleryModal.classList.add("experience-modal", "gallery-modal");
  galleryModal.innerHTML = `
    <div class="experience-modal-content gallery-modal-content">
      <div class="modal-close" onclick="closeGalleryModal()"></div>
      <div class="experience-content gallery-content">
        <img class="gallery-main-image" src="" alt="Gallery Image">
        <div class="gallery-thumbnails"></div>
      </div>
    </div>
  `;
  document.body.appendChild(galleryModal);

  // Event listeners for gallery
  document
    .getElementById("fordward-gallery-id")
    .addEventListener("click", (e) => {
      e.preventDefault();
      openGalleryModal("fordward");
    });

  document
    .getElementById("outtatown-gallery-id")
    .addEventListener("click", (e) => {
      e.preventDefault();
      openGalleryModal("outtatown");
    });

  const modalCloseButton = document.querySelector(".modal-close");
  modalCloseButton.addEventListener("click", closeGalleryModal);

  // Clicking outside will close modal
  document.addEventListener("click", function (event) {
    const modal = document.getElementById("gallery-modal");
    if (event.target === modal && modal.classList.contains("active")) {
      closeGalleryModal();
    }
  });

  // Close modal on esc key press
  document.addEventListener("keydown", function (event) {
    const modal = document.getElementById("gallery-modal");
    if (event.key === "Escape" && modal.classList.contains("active")) {
      closeGalleryModal();
    }
  });
});
