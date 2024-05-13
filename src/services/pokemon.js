const url = 'https://pokeapi.co/api/v2/pokemon/';


async function getPokemons(url, num){
    return new Promise(async (resolve, reject) =>{
    
    let pokemon = [];
    for(let i = 1; i <= num; i++ ){
            const res = await fetch(`${url}${i}`);
            const data = JSON.parse(await res.text());
            pokemon.push(data);
        }
        resolve(pokemon);
    })
}

async function pokemons(cant){
    let pokemons = await getPokemons(url, cant)
    let data = [];

    for(let i = 0; i < pokemons.length; i++){
        data.push({
            name: pokemons[i].forms[0].name,
            id: pokemons[i].id,
            weight: pokemons[i].weight, 
            img: pokemons[i].sprites.front_default    
        })
        //console.log(pokemons[i].weight, pokemons[i].id, pokemons[i].sprites.front_default, pokemons[i].forms[0].name)
    }
    return data;
}

export {pokemons}