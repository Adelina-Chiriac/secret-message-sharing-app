document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();

    const input = document.querySelector("#message-input");
    const encrypted = btoa(input.value);

    // Generate a link with the encrypted message appended to the current URL
    const linkInput = document.querySelector("#link-input");
    linkInput.value = `${window.location}#${encrypted}`;
    // Auto-select the link
    linkInput.select();
});