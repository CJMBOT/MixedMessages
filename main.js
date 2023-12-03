console.log(`Hello!`);
function spiritAnimal() {
    let animals = ["dog", "cat", "tiger", "monkey", "wolf", "bear", "horse", "hippo", "lion", "giraffe", "elephant", "cow", "gorilla", "chimpanzee", "deer", "zebra", "panda", "camel", "bat", "cheetah", "kangaroo", "fox", "crocodile", "rabbit", "squirrel", "pig", "goat", "horse", "panther", "donkey", "leopard", "tortoise", "chicken", "albatross", "fish", "dolphin", "frog", "whale", "eagle", "ostrich", "armadillo", "beaver", "badger", "giraffe", "crab", "chameleon", "cobra", "koala", "dodo", "jellyfish", "llama", "rhinoceros", "hedgehog", "zebra", "wombat", "bull", "sheep", "meerkat", "otter", "sloth", "owl", "vulture", "flamingo", "swan", "peacock", "whale", "unicorn", "dragon", "phoenix", "chimera", "manticore", "yeti", "basilisk", "kraken", "hydra", "pikachu", "charizard", "greymon", "blue eyes white dragon", "grogu"]
    console.log(animals.length)
    let anan = "";
    let chosen = animals[Math.floor(Math.random()*80)]
    if (chosen[0] === "a" | chosen[0] === "e" | chosen[0] === "i" | chosen[0] === "o" | chosen[0] === "u") {
        anan = "an"
    } else {anan = "a"}
    let chosenAnimal = `${anan} ${chosen}`
    /*let chosenStrength = `${anan} ${chosen}`
    let chosenWeakness = `${anan} ${chosen}`
    let chosenAdvice = `${anan} ${chosen}`*/
    console.log(chosenAnimal)
    //console.log(`${anan} ${chosen}`)

};
spiritAnimal();
