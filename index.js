function loadRepos() {
    fetch("https://api.github.com/users/guesttox/repos")
        .then((response) => response.json())
        .then((data) => {
            data.forEach((repo) => {
                if (repo.language == null) {repo.language = "Undefined"}
                if (repo.description == null) {repo.description = "Undefined"}

                document.getElementsByClassName("projects")[0].innerHTML += `
                    <div class="project">
                        <div class="project-title">
                            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                        </div>
                        <div class="project-description">
                            ${repo.description}
                        </div>
                        <div class="project-language">
                            <div class="project-language-name"">${repo.language}</div>
                        </div>
                    </div>
                `;
        });
    });
}

loadRepos()