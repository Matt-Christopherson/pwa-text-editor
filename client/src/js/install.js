const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
let deferredPrompt;
// Eevent handler to the beforeinstallprompt event
window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredPrompt = event;

  butInstall.style.display = "block";
  butInstall.addEventListener("click", installApp);
});

async function installApp() {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") {
      console.log("User accepted the install prompt");
    } else {
      console.log("User dismissed the install prompt");
    }
    deferredPrompt = null;
    butInstall.style.display = "none";
  }
}

// Handler for the appinstalled event
window.addEventListener("appinstalled", (event) => {
  console.log("App installed successfully");
});