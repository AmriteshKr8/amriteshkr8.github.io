async function loadRepos() {
    const res = await fetch("/data/repos.json");
    console.log(res);
    const repos = await res.json();
    console.log(repos.length);
    const container = document.getElementById("div2");
    repos.forEach(repo => {
        const card = document.createElement("div");
        card.className = "repo-card";

        card.innerHTML = `
            <a href="${repo.html_url}" target="_blank">
            <h2>${repo.name}</h2>
            <p>${repo.description || "^~^"}</p>
            </a>
        `;

        container.appendChild(card);
    });
}

window.addEventListener("DOMContentLoaded", loadRepos);
//${repo.homepage ? `<a href="${repo.homepage}" target="_blank">Live Website</a>` : ""}