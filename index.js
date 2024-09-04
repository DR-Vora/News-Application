let headlines = document.getElementById('headlines');
let fetchheadlines = async function(){
    let result = await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=378b9d17eb614e5da5ea5c4c700f0a5f');
    let data = await result.json();
    displayheadlines(data.articles);
}

fetchheadlines();

let displayheadlines = (data) =>{
    console.log(data)
    data.forEach(element => {
        let subdiv = document.createElement('div');
        subdiv.style.backgroundImage=`url(${element.urlToImage})`;
        subdiv.innerHTML=`<p>${element.title}</p>`
        headlines.appendChild(subdiv);

    });
}

let business = document.getElementById('business')
let fetchbusiness = async() =>{
    let result = await fetch('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=378b9d17eb614e5da5ea5c4c700f0a5f');
    let data = await result.json();
    displaybusiness(data.articles);
}

fetchbusiness();
let displaybusiness = (data) =>{
    
    
    data.forEach(element=>{
        for(let key in element){
            if(element[key]===null){
                element[key] = `${key} will be updated soon`
            }
        }
        let subdiv = document.createElement('div');
        subdiv.innerHTML = `<h2>${element.source.name}</h2>
        <h4>${element.title}</h4>
        <img src = ${element.urlToImage}>
        <p>${element.discription}</p>
        <a href = ${element.url} target = '_blank'><Button>Explore official Website</Button></a>`;
        business.appendChild(subdiv);
    })
}

let entertainment = document.getElementById('ent');
let fetchEntertainment=async function(){
    let result=await fetch('https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=378b9d17eb614e5da5ea5c4c700f0a5f');
    let data=await result.json();
    displayEntertainment(data.articles);
}
fetchEntertainment();

let displayEntertainment=(data)=>{
    data.forEach(element => {
        let subdiv=document.createElement('div');
        
        for(let key in element){
            if(element[key]===null){
                element[key]=`${key} will be updated soon`
            }
        }
        
        subdiv.innerHTML=`<h2>${element.source.name}</h2>
        <h4>${element.title}</h4>
        <img src=${element.urlToImage} alt="Updating Image soon">
        <p>${element.description}</p>
        <a href=${element.url} target='_blank'><button>Explore Official Website</button></a>`
        
        entertainment.appendChild(subdiv);
    });
}

//----------------------------------------------
let health = document.getElementById('health');
let fetchHealth=async function(){
    let result=await fetch('https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=378b9d17eb614e5da5ea5c4c700f0a5f');
    let data=await result.json();
    displayHealth(data.articles);
}
fetchHealth();

let displayHealth=(data)=>{
    data.forEach(element => {
        let subdiv=document.createElement('div');
        
        for(let key in element){
            if(element[key]===null){
                element[key]=`${key} will be updated soon`
            }
        }
        
        subdiv.innerHTML=`<h2>${element.source.name}</h2>
        <h4>${element.title}</h4>
        <img src=${element.urlToImage} alt="Updating Image soon">
        <p>${element.description}</p>
        <a href=${element.url} target='_blank'><button>Explore Official Website</button></a>`
        
        health.appendChild(subdiv);
    });
}

//----------------------------------------------
let technolgy = document.getElementById('tech');
let fetchtechnolgy=async function(){
    let result=await fetch('https://newsapi.org/v2/top-headlines?country=in&category=technolgy&apiKey=378b9d17eb614e5da5ea5c4c700f0a5f');
    let data=await result.json();
    displaytechnolgy(data.articles);
}
fetchtechnolgy();

let displaytechnolgy=(data)=>{
    data.forEach(element => {
        let subdiv=document.createElement('div');
        
        for(let key in element){
            if(element[key]===null){
                element[key]=`${key} will be updated soon`
            }
        }
        
        subdiv.innerHTML=`<h2>${element.source.name}</h2>
        <h4>${element.title}</h4>
        <img src=${element.urlToImage} alt="Updating Image soon">
        <p>${element.description}</p>
        <a href=${element.url} target='_blank'><button>Explore Official Website</button></a>`
        
        technolgy.appendChild(subdiv);
    });
}

//----------------------------------------------
let science = document.getElementById('science');
let fetchscience=async function(){
    let result=await fetch('https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=378b9d17eb614e5da5ea5c4c700f0a5f');
    let data=await result.json();
    displayscience(data.articles);
}
fetchscience();

let displayscience=(data)=>{
    data.forEach(element => {
        let subdiv=document.createElement('div');
        
        for(let key in element){
            if(element[key]===null){
                element[key]=`${key} will be updated soon`
            }
        }
        
        subdiv.innerHTML=`<h2>${element.source.name}</h2>
        <h4>${element.title}</h4>
        <img src=${element.urlToImage} alt="Updating Image soon">
        <p>${element.description}</p>
        <a href=${element.url} target='_blank'><button>Explore Official Website</button></a>`
        
        science.appendChild(subdiv);
    });
}

//----------------------------------------------
let sports = document.getElementById('sports');
let fetchsports=async function(){
    let result=await fetch('https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=378b9d17eb614e5da5ea5c4c700f0a5f');
    let data=await result.json();
    displaysports(data.articles);
}
fetchsports();

let displaysports=(data)=>{
    data.forEach(element => {
        let subdiv=document.createElement('div');
        
        for(let key in element){
            if(element[key]===null){
                element[key]=`${key} will be updated soon`
            }
        }
        
        subdiv.innerHTML=`<h2>${element.source.name}</h2>
        <h4>${element.title}</h4>
        <img src=${element.urlToImage} alt="Updating Image soon">
        <p>${element.description}</p>
        <a href=${element.url} target='_blank'><button>Explore Official Website</button></a>`
        
        sports.appendChild(subdiv);
    });
}