const res = fetch("data/repos.json");
const repos = res.json();

repos.forEach(e => {
    console.log(e.name);
});