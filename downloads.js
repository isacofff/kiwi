    let repoName = "kyberturvakirja/kyberturvakirja"; // Repository name
let url = `https://api.github.com/repos/${repoName}/releases?per_page=100`;
let request = new XMLHttpRequest();
request.open('GET', url, true);
request.onload = function () {
let releases = JSON.parse(this.response);
let sum = 0;
// Count downloads for each asset of every release
if (Array.isArray(releases)) {
for (const release of releases) {
for(const asset of release['assets']) {
sum += asset['download_count'];
}
}
} else if (releases['assets'] !== undefined) {
for(const asset of releases['assets']) {
sum += asset['download_count'];
}
}
let output = "Downloaded " + sum
document.getElementById('downloads').innerHTML = output;
};
request.send();
