let url = window.location.toString();

let getUsername = (url) => {
    let urlArray = url.split('=');
    let userName = urlArray[1];
    if (userName == undefined){
        userName = 'LegertLab';
    }
    return userName
}

let name = getUsername(url)

fetch('https://api.github.com/users/' + name)
    .then(res => res.json())
    .then(json => {
        let avatar = json.avatar_url;
        let name = json.name;
        let bio = json.bio;
        let profile =json.html_url;
        // console.log(json.name);
        // let createAvatar = () => {
        //     let newAvatar = document.createElement('img');
        //     newAvatar.src = avatar;
        //     let addString = document.createElement('br');
        //     document.body.appendChild(newAvatar);
        //     document.body.appendChild(addString);
        // }
        // let createName = () => {
        //     let newName = document.createElement('h2');
        //     newName.innerHTML = name;
        //     document.body.appendChild(newName);
        // }

        // let createBio = () => {
        //     let newBio = document.createElement('p');
        //     newBio.innerHTML = bio;
        //     document.body.appendChild(newBio);
        // }

        // let createProfile = () => {
        //     let newProfile = document.createElement('a');
        //     newProfile.href = profile;
        //     document.body.appendChild(newProfile);
        //     document.body.newProfile.appendChild(createName());
        //     // document.body.newProfile.appendChild(createName());
        // }
        let createProfile = () => {
            let elementForLink = document.createElement('a');
            let elementForHeader = document.createElement('h2');
            
            document.body.appendChild(elementForLink);
            document.body.elementForLink.appendChild(elementForHeader);
            elementForHeader.innerText('hello1');
        }
        createProfile();
        // createBio();
        // createAvatar();
        // createName();

    })

    .catch(err => console.log(err));