'use strict'

const output = document.querySelector("section#superheros");
axios
.get("https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json")
.then(response => {
    const superheroSquad = response.data;
    console.log("Res:", response);

    const name = document.createElement("h3");
    name.innerText = superheroSquad.name;
    output.appendChild(name);

   
    const age = document.createElement("h3");
    age.innerText = superhero.age;
    output.appendChild(age);

    
    const hero = superheroSquad.members[0];

    const powers = document.createElement("ul");
    for (let power of hero.powers) {
        const powerItem = document.createElement("li");
        powerItem.innerText = power;
        powers.appendChild(powerItem);
    }
        output.appendChild(powers);

        const info = document.createElement("p");
        info.innerText += `ID: ${pokemon.secretID}\n`;
        info.innerText += `Name: ${pokemon.name}\n`;
        info.innerText += `Age: ${pokemon.age}\n`;
        info.innerText += `Powers: ${pokemon.powers}`;
        output.appendChild(info);

})

