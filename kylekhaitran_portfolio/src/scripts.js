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
