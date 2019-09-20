let url = window.location.toString();
let elementForPreloader = document.getElementById('preload');

let getUsername = (url) => {
    let urlArray = url.split('=');
    let userName = urlArray[1];
    if (userName == undefined){
        userName = 'LegertLab';
    }
    return userName
}

let name = getUsername(url);

let getNowDate = new Promise((resolve, reject) => {
    let nowDate = new Date();
    setTimeout(() => nowDate ? resolve(nowDate) : reject ('Ошибка вычисления времени'), 3000)
  });


let getUserData = fetch('https://api.github.com/users/' + name);
    
// Создали два отдельных промиса. Теперь нужно обернуть их в Promise.all

Promise.all([getUserData, getNowDate])
    .then(([ourUserData, ourNowDate]) => {
        userData = ourUserData;
        currentDate = ourNowDate;
    })

    .then(res => userData.json())
    .then(userInfo => {
        let avatar = userInfo.avatar_url;
        let name = userInfo.login;
        let bio = userInfo.bio;
        let profile = userInfo.html_url;
        if (name) {
            let createAvatar = () => {
                let newAvatar = document.createElement('img');
                newAvatar.src = avatar;
                let addString = document.createElement('br');
                document.body.appendChild(newAvatar);
                document.body.appendChild(addString);
            }

            let createBio = () => {
                let newBio = document.createElement('p');
                newBio.innerHTML = bio;
                document.body.appendChild(newBio);
            }

            let createProfile = () => {
                let elementForLink = document.createElement('a');
                let elementForHeader = document.createElement('h2');
                elementForHeader.innerText = name;
                elementForLink.href = profile;
                document.body.appendChild(elementForLink);
                elementForLink.appendChild(elementForHeader);
            }

            let createDate = () => {
                let newCurrentDate = document.createElement('p');
                newCurrentDate.innerHTML = currentDate;
                document.body.appendChild(newCurrentDate);
            }

            elementForPreloader.classList.add('hidden')
            
            createProfile();
            createBio();
            createAvatar();
            createDate()
        }
        else {
            elementForPreloader.classList.add('hidden');
            alert(' Пользователь с таким никнеймом не найден')
        }
    })

    .catch(err => {
        elementForPreloader.classList.add('hidden');
        alert(err + ' Профиль не найден'); 
    });