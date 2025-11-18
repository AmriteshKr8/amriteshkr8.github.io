async function loadRepos() {
    const res = await fetch("/data/repos.json");
    console.log(res);
    const repos = await res.json();
    console.log(repos.length);
    const container = document.getElementById("div2");
/*
    repos.forEach(repo => {
        const card = document.createElement("div");
        card.className = "repo-card";

        card.innerHTML = `
            <h2>${repo.name}</h2>
            <p>${repo.description || "No description available."}</p>
            <a href="${repo.html_url}" target="_blank">GitHub Repo</a><br>
            ${repo.homepage ? `<a href="${repo.homepage}" target="_blank">Live Website</a>` : ""}
        `;

        container.appendChild(card);
    });
*/
}

window.addEventListener("DOMContentLoaded", loadRepos);
