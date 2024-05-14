const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  installBtn.style.visibility = "visible";
  textHeader.textContent = "Click the button to install!";

  butInstall.addEventListener("click", async () => {
    event.prompt();
    butInstall.setAttribute("disabled", true);
    butInstall.textContent = "Installed!";
  });
});

// Handler for the appinstalled event
window.addEventListener("appinstalled", (event) => {
  textHeader.textContent = "Successfully installed!";
  console.log("👍", "appinstalled", event);
});