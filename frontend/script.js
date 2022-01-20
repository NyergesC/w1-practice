/*  const data = [
    "Gergely Kiss",
    "Krisztian Bui",
    "Buczko Balazs",
    "Andras Varga",
    "Borbala Terez"
];
 */ 

const data = [
    {
        name: "Gergely Kiss",
        favoritefood: "csirke"
    },
    {
        name: "Krisztian Bui",
        favoritefood: "banan"
    },
    {
        name: "Buczko Balazs",
        favoritefood: "rajas pizza"
    },
    {
        name: "Andras Varga",
        favoritefood: "brassoi"
    },
    {
        name: "Borbala Terez",
        favoritefood: "avokado"
     },

]
function loadEvent() {
    console.log ("az oldal betoltodott")

    const root = document.querySelector("#root")

    for (const frontendstudent of data) {
        root.insertAdjacentHTML("beforeend",`
            <section>
                <h1>${frontendstudent.name}</h1>
                <p>${frontendstudent.favoritefood}</p>
            </section>
        `)
    }
}
window.addEventListener("load", loadEvent) 