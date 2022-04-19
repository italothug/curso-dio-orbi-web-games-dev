const BASE_URL = 'https://thatcopy.pw/catapi/rest/'
const catButton = document.getElementById('change-cat');
const catImg = document.getElementById('cat')

const getCat = async () => {
    try {
        const data = await fetch(BASE_URL); //DADOS
        const json = await data.json(); 

        return json.webpurl;
    }   catch (e) {
        console.log(e.message);
    }
};

const loadImg = async () => { //Await no getcats
    catImg.src = await getCat();
}

catButton.addEventListener('click', loadImg);

loadImg();