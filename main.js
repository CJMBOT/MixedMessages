console.log(`Hello!`);
function spiritAnimal() {
    let animals = ["dog", "cat", "tiger", "monkey", "wolf", "bear", "horse", "hippo", "lion", "giraffe", "elephant", "cow", "gorilla", "chimpanzee", "deer", "zebra", "panda", "camel", "bat", "cheetah", "kangaroo", "fox", "crocodile", "rabbit", "squirrel", "pig", "goat", "horse", "panther", "donkey", "leopard", "tortoise", "chicken", "albatross", "fish", "dolphin", "frog", "whale", "eagle", "ostrich", "armadillo", "beaver", "badger", "giraffe", "crab", "chameleon", "cobra", "koala", "dodo", "jellyfish", "llama", "rhinoceros", "hedgehog", "zebra", "wombat", "bull", "sheep", "meerkat", "otter", "sloth", "owl", "vulture", "flamingo", "swan", "peacock", "whale"]
    console.log(animals.length)
    let anan = "";
    let chosen = "eel"
    if (chosen[0] === "a" | chosen[0] === "e" | chosen[0] === "i" | chosen[0] === "o" | chosen[0] === "u") {
        anan = "an"
    } else {anan = "a"}
    console.log(`${anan} ${chosen}`)
};
spiritAnimal();
