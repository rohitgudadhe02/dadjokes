let btn = document.querySelector("#jokeBtn");
let content = document.getElementById("joke");

btn.addEventListener("click", async ()=> {
    console.log("button clicked");
     let mainline = await getjokes();
     content.innerText =mainline;
})

let url ="https://icanhazdadjoke.com/";

async function getjokes() {
try {
    let response = await axios.get(url,{ headers : {
        Accept : "application/json" }
        
    })
    console.log(response.data.joke);
    return response.data.joke;
}
catch(err) {
    console.log("error occured");
}

    
}