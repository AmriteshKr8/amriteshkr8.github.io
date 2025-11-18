async function loadRepos() {
    const res = await fetch("/data/repos.json");
    console.log(res);
    const repos = await res.json();
    console.log(repos.length);
    const container = document.getElementById("div2");
    repos.forEach(repo => {
        const card = document.createElement("div");
        card.className = "repo-card";
        let page = "";
        if(repo.homepage !== null){
            page = repo.homepage;
        } else if (repo.has_pages){
            page = `https://amriteshkr8.github.io/${repo.name}`;
        }

        card.innerHTML = `
            <h2>${repo.name}</h2>
            <p>${repo.description || "^~^"}</p>
            <a href="${repo.html_url}" target="_blank"></a>
            ${(page !== "") ? `<a href="${page}" target="_blank">Live Website</a>` : ""}
        `;

        container.appendChild(card);
    });
}

window.addEventListener("DOMContentLoaded", loadRepos);
