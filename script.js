async function listRepos(username) {
    const url = `https://api.github.com/users/${username}/repos?per_page=100&type=owner&sort=updated
`;
    const res = await fetch(url);
    const data = await res.json();

    return data.map(repo => repo.name);
}

listRepos("amriteshkr8").then(repos => console.log(repos));
