const json = {
	
    "name": "R2-D2",
    "height": "96",
    "mass": "32",
    "hair_color": "n/a",
    "skin_color": "white, blue",
    "eye_color": "red",
    "birth_year": "33BBY",
    "gender": "n/a",
    "homeworld": "https://swapi.py4e.com/api/planets/8/",
    "films": [
        "https://swapi.py4e.com/api/films/1/",
        "https://swapi.py4e.com/api/films/2/",
        "https://swapi.py4e.com/api/films/3/",
        "https://swapi.py4e.com/api/films/4/",
        "https://swapi.py4e.com/api/films/5/",
        "https://swapi.py4e.com/api/films/6/",
        "https://swapi.py4e.com/api/films/7/"
    ],
    "species": [
        "https://swapi.py4e.com/api/species/2/"
    ],
    "vehicles": [],
    "starships": [],
    "created": "2014-12-10T15:11:50.376000Z",
    "edited": "2014-12-20T21:17:50.311000Z",
    "url": "https://swapi.py4e.com/api/people/3/"

}

console.log(typeof json);
for (const key in json){
console.log(key);
}


function FetchStarWars(){
let xhr = new XMLHttpRequest();
let starId = document.getElementById[`starid`].value
let url = `https://swapi.py4e.com/api/people/${starId}`;
xhr.open ('GET', url, true)
xhr.onreadystatechange = function (){
    if( this.readyState === 4 && this.status === 200){
        let response = JSON.parse(this.responseText) 
        console.log(response);
    } else if (this.readyState === 1){
        console.log('Error:', this.statusText);
    }

};
xhr.send();


}

function displayWars(data){
let warsInfo = document.getElementById(`StarWarsInfo`);
}