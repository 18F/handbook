import { encryptFile, decryptFile } from "./crypto";

const disableDefaultDrag = (e) => {
  e.preventDefault();
};

let file = null;

// Show an error message, as appropriate. If no message, hides the error alert.
const error = (() => {
  const box = document
    .getElementById("password-encryption-container")
    .querySelector(".usa-alert");

  const text = box.querySelector(".usa-alert__text");

  return (errorMessage) => {
    if (errorMessage) {
      box.classList.remove("hidden");
      text.innerText = errorMessage;
    } else {
      box.classList.add("hidden");
    }
  };
})();

const drop = async (e) => {
  // Browser default behavior is to open the file, but we don't want that. We
  // want to actually get our grubby little mitts on that file. (If your mitts
  // are grubby, please be sure to wash them before touching your eyes, nose,
  // or mouth.)
  e.preventDefault();

  // Get the dropped file. The drag/drop interface can happily handle multiple
  // files at once, but for now, we're just going to operate on one file at a
  // time, so just get the first one.
  file = e.dataTransfer.files[0];

  if (file) {
    document.getElementById("drop-zone").innerText = file.name;
  } else {
    document.getElementById("drop-zone").innerText = "drop file here";
  }
};

const encrypt = async (e) => {
  // Don't submit the form. That'd be silly.
  e.preventDefault();

  // Clear any error messages, just in case.
  error();

  const password = document.getElementById("password").value;

  // Only proceed if there is a password and a file.
  if (password.length > 0 && file) {
    try {
      // Get the encrypted file.
      const cipher = await encryptFile(file, password);

      // Create a link with the appropriate download filename, set its target
      // to an object URL of the encrypted data, and click it so it'll download.
      const link = document.createElement("a");
      link.setAttribute("download", `${file.name}.enc`);
      link.setAttribute("href", URL.createObjectURL(new Blob([cipher])));
      link.click();
    } catch (_) {
      error("There was an error encrypting this file");
    }
  } else if (password.length === 0) {
    error("You must enter a password to encrypt a file.");
  } else {
    error("No file selected.");
  }
};

const decrypt = async (e) => {
  // Don't submit the form. That'd be silly.
  e.preventDefault();

  // Clear any error messages, just in case.
  error();

  const password = document.getElementById("password").value;

  // Only proceed if there is a password and a file.
  if (password.length > 0 && file) {
    try {
      // Decrypt the file.
      const plain = await decryptFile(file, password);

      // Create a link with the appropriate download filename, set its target
      // to an object URL of the decrypted data, and click it so it'll download.
      const link = document.createElement("a");
      link.setAttribute("download", file.name.replace(/\.enc$/, ""));
      link.setAttribute("href", URL.createObjectURL(new Blob([plain])));
      link.click();
    } catch (_) {
      error(
        "There was an error decrypting this file. The two most likely causes are that the password is incorrect or the file was not encrypted using this tool."
      );
    }
  } else if (password.length === 0) {
    error("You must enter a password to decrypt a file.");
  } else {
    error("No file selected.");
  }
};

const main = () => {
  // Make sure we have an encryption container before we do anything else.
  if (document.getElementById("password-encryption-container")) {
    const dropZone = document.getElementById("drop-zone");

    // Disable the browser's default drag behavior and hook up a "drop" handler
    // for when files are dropped on our box.
    dropZone.addEventListener("dragover", disableDefaultDrag);
    dropZone.addEventListener("drop", drop);

    // Hook up the encrypt and decrypt buttons.
    document.getElementById("encrypt").addEventListener("click", encrypt);
    document.getElementById("decrypt").addEventListener("click", decrypt);
  }
};

document.addEventListener("DOMContentLoaded", main);
