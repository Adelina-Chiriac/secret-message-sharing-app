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