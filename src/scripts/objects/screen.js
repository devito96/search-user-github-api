const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `<div class="info">
                                        <img src="${user.avatarUrl}" alt="Foto do perfil do usuário" />
                                        <div class="data">
                                            <h1>${user.name ?? 'Não possui nome cadastrado 😢'}</h1>
                                            <p>${user.bio ?? 'Não possui bio cadastrada 😢'}</p>
                                            <p>${user.followers} Seguidores</p>
                                            <p>${user.following} Seguindo</p>
                                        </div>
                                    </div>`

        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens += `<li>
                                                                    <a href="${repo.url}" target="_blank">${repo.name}
                                                                        <ul class="infos-repo">
                                                                            <li>🍴 ${repo.forks_count}</li>
                                                                            <li>⭐ ${repo.stargazers_count}</li>
                                                                            <li>👀 ${repo.watchers}</li>
                                                                            <li>👨‍💻 ${repo.language ?? 'Nenhuma linguagem'}</li>
                                                                        </ul>
                                                                    </a>
                                                                </li>`);

        let eventsItens = ''
        user.events.forEach(event => {

            let eventRepositoryName = event.repo.name
            let description = event.payload.description;
            let message = event.payload.commits?.length > 0 ? event.payload.commits?.[0].message : null;
            let eventType = event.type;

            eventsItens += `<li><span class="repo-name">${eventRepositoryName}</span> - ${description ?? message ?? eventType}</li>`
        });

        if(user.repositories.length > 0){
            this.userProfile.innerHTML += `<div class="repositories section">
                                                <h2>Repositórios</h2>
                                                <ul>${repositoriesItens}</ul>
                                            </div>`
        }

        if(user.events.length > 0){
            this.userProfile.innerHTML += `<div class="events section">
                                                <h2>Eventos</h2>
                                                <ul>${eventsItens}</ul>
                                            </div>`
        }
        
    },
    renderNotFound(){
        this.userProfile.innerHTML = '<h3>Usuário não encontrado.</h3>'
    }
}

export { screen }