const btnLoad = document.querySelector('.main__loadPictures')
const URL = "https://api.thecatapi.com/v1/images/search?limit=10"
const mainContent = document.querySelector('.main__content')

const loadGallery = async () => {
    let data = await fetch(URL).catch((e) => {console.error("Error:", e)})
    let response = await data.json()
    if (response) {
        response.forEach((post) => {
                const postElement = document.createElement("img");
                postElement.classList.add("main__pictureInside");
                postElement.src = `${post.url}`;
                mainContent.appendChild(postElement)
            }
        )
    }
}

btnLoad.addEventListener('click', loadGallery)
