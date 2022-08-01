let API_key = "api_key=CPJXDP7JTKOPKzzFpQsE00vBRVcjz9Ns"
    let BASE_API = `https://api.giphy.com/v1/stickers/trending?`
    let API_URL = BASE_API + API_key;

    debounce = (func, delay) => {
        let debounceTimer
        return function () {
            const context = this
            const args = arguments
            clearTimeout(debounceTimer)
            debounceTimer
                = setTimeout(() => func.apply(context, args), delay)
        }
    }

     document.querySelector("input").addEventListener('input', debounce(function() {
        BASE_API = "https://api.giphy.com/v1/gifs/search?"
        let SearchIn =`&q=${document.querySelector('input').value}` + '&limit=25&offset=0&rating=g&lang=en'
        API_URL = BASE_API + API_key + SearchIn
        Search(API_URL)
     }, 3000))
   

    function Search(url) {
        fetch(url).then(res => res.json()).then(data => {
            console.log(data)
            data.data.map((item) => {
                document.getElementById("cover").innerHTML +=
                    `
                <div class="main">
                 <img id="images" src="${item.images.original.url}" alt="" width="100% " height="100% ">
                 </div >
                `
            })
            
        })
    }