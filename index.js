// Extract the hash from the URL containing the secret message
const { hash } = window.location;
// Decode the message from the hash
const message = atob(hash.replace("#", ""));

if (message) {
    // hide the div element containing the form
    document.querySelector("#message-form").classList.add("hide");
    // reveal the div element containing the secret message
    document.querySelector("#message-show").classList.remove("hide");

    document.querySelector("h1").innerHTML = message;
}

document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();

    // hide the secret message input form
    document.querySelector("#message-form").classList.add("hide");
    // reveal the link input
    document.querySelector("#link-form").classList.remove("hide");

    const input = document.querySelector("#message-input");
    const encrypted = btoa(input.value);

    // Generate a link with the encrypted message appended to the current URL
    const linkInput = document.querySelector("#link-input");
    linkInput.value = `${window.location}#${encrypted}`;
    // Auto-select the link
    linkInput.select();
});