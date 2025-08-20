import type { GiphyRandomResponse } from "../data/giphy.response";


const API_KEY = 'HHkdGMRILhjiaXQhv2D2KQqk3hKKWhJU';

const myRequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`


);

const createImageDOM = (url:string) =>{
        const imgElement = document.createElement('img');
        imgElement.src = url;
        document.body.append(imgElement)
}

myRequest
    .then((Response) => Response.json())
    .then(({data}: GiphyRandomResponse) => {
    const imageUrl = data.images.original.url;
    // const imageUrl = data.data.images.original.url;
    // console.log(imageUrl);
        createImageDOM(imageUrl)

} )
.catch( err =>{
    console.log(err)
})