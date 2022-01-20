function loadEvent() {
    console.log ("az oldal betoltodott")

    const list = document.querySelectorAll("section")

    for (const elem of list) {
        elem.insertAdjacentHTML("beforeend", `
        <p>text</p>
        ` )
        }
}
window.addEventListener("load", loadEvent) 