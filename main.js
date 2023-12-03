console.log(`Hello!`);
function spiritAnimal() {
    let animals = ["dog", "cat", "tiger", "monkey", "wolf", "bear", "horse", "hippo", "lion", "giraffe", "elephant", "cow", "gorilla", "chimpanzee", "deer", "zebra", "panda", "camel", "bat", "cheetah", "kangaroo", "fox", "crocodile", "rabbit", "squirrel", "pig", "goat", "horse", "panther", "donkey", "leopard", "tortoise", "chicken", "albatross", "fish", "dolphin", "frog", "whale", "eagle", "ostrich", "armadillo", "beaver", "badger", "giraffe", "crab", "chameleon", "cobra", "koala", "dodo", "jellyfish", "llama", "rhinoceros", "hedgehog", "zebra", "wombat", "bull", "sheep", "meerkat", "otter", "sloth", "owl", "vulture", "flamingo", "swan", "peacock", "whale", "unicorn", "dragon", "phoenix", "chimera", "manticore", "yeti", "basilisk", "kraken", "hydra", "pikachu", "charizard", "greymon", "blue eyes white dragon", "grogu"]
    let strength = ["the Moon", "the Sun", "Mercury", "coffee", "the colour green", "water", "fire", "gold", "laughter", "schadenfreude", "meditation", "the darkness", "friendship", "the Earth", "nature", "chocolate", "clouds", "animal companions", "books", "pizza", "cocaine", "weed", "exercise", "sleeping, a lot", "pride", "anger", "fear", "joy", "family", "religion", "donuts", "cheese", "halloumi", "a medium-rare steak", "Jupiter", "Saturn", "Mars", "Venus", "Pluto", "Uranus", "the universe itself", "the galactic core", "Zeus", "Thor", "a soft-boiled egg", "period dramas", "art", "fossil fuels", "an origami wizard", "the internet", "magic pyjamas", "speaking Swahili"]
    console.log(`The array "animals" contains ${animals.length} items.`)
    console.log(`The array "strength" contains ${strength.length} items.`)
    //console.log(`The array "weakness" contains ${animals.length} items.`)
    //console.log(`The array "advice" contains ${animals.length} items.`)
    let anan = "";
    let chosen = animals[Math.floor(Math.random()*animals.length)]
    if (chosen[0] === "a" | chosen[0] === "e" | chosen[0] === "i" | chosen[0] === "o" | chosen[0] === "u") {
        anan = "an"
    } else {anan = "a"}
    let chosenAnimal = `${anan} ${chosen}`
    chosen = strength[Math.floor(Math.random()*strength.length)]
    let chosenStrength = `${anan} ${chosen}`
    //chosen = weakness[Math.floor(Math.random()*weakness.length)]
    //let chosenWeakness = `${anan} ${chosen}`
    //chosen = advice[Math.floor(Math.random()*advice.length)]
    //let chosenAdvice = `${anan} ${chosen}`
    console.log(chosenAnimal)
    //console.log(`${anan} ${chosen}`)

};
spiritAnimal();
