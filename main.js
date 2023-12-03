console.log(`Hello!`);
function spiritAnimal() {
    let animals = ["dog", "cat", "tiger", "monkey", "wolf", "bear", "horse", "hippo", "lion", "giraffe", "elephant", "cow", "gorilla", "chimpanzee", "deer", "zebra", "panda", "camel", "bat", "cheetah", "kangaroo", "fox", "crocodile", "rabbit", "squirrel", "pig", "goat", "horse", "panther", "donkey", "leopard", "tortoise", "chicken", "albatross", "fish", "dolphin", "frog", "whale", "eagle", "ostrich", "armadillo", "beaver", "badger", "giraffe", "crab", "chameleon", "cobra", "koala", "dodo", "jellyfish", "llama", "rhinoceros", "hedgehog", "zebra", "wombat", "bull", "sheep", "meerkat", "otter", "sloth", "owl", "vulture", "flamingo", "swan", "peacock", "whale", "unicorn", "dragon", "phoenix", "chimera", "manticore", "yeti", "basilisk", "kraken", "hydra", "pikachu", "charizard", "greymon", "blue eyes white dragon", "grogu"]
    let strength = ["the Moon", "the Sun", "Mercury", "coffee", "the colour green", "water", "fire", "gold", "laughter", "schadenfreude", "meditation", "the darkness", "friendship", "the Earth", "nature", "chocolate", "clouds", "animal companions", "books", "pizza", "cocaine", "weed", "exercise", "sleeping, a lot", "pride", "anger", "fear", "joy", "family", "religion", "donuts", "cheese", "halloumi", "a medium-rare steak", "Jupiter", "Saturn", "Mars", "Venus", "Pluto", "Uranus", "the universe itself", "the galactic core", "Zeus", "Thor", "a soft-boiled egg", "period dramas", "art", "fossil fuels", "an origami wizard", "the internet", "magic pyjamas", "speaking Swahili", "your empathy", "your resilience", "compassion", "your courage", "your patience", "gratitude", "forgiveness", "self-awareness", "generosity", "integrity", "adaptability", "optimism", "perseverance", "altruism", "your creativity", "confidence", "humility", "hope", "sheer grit", "your tenacity", "love", "dad jokes", "sarcasm", "lucky underwear", "sweet dance moves", "constantly snacking", "Boris Johnson", "a proper tasty takeaway"]
    let weakness = ["bad smells", "the German language", "a lack of trust", "pain", "sickness", "big butts", "lies", "an Irish accent", "sabotage", "a fear of failure", "loneliness", "a fear of vulnerability", "self-doubt", "insecurity", "difficulty in expressing emotions", "a fear of abandonment", "perfectionism", "overthinking", "a lack of boundaries", "compassion", "imposter syndrome", "procrastination", "a fear of rejection", "the inability to let go of the past", "your constant comparison to others", "a fear of intimacy", "the inability to forgive yourself", "being overly self-critical", "impatience", "pride", "a need for constant validation", "your refusal to ask for help", "your constant avoidance of conflict", "fear of the unknown", "resentment", "the weight of expectations", "reluctance to embrace change", "a latex allergy", "a fear of eggs", "an inability to park straight", "a very short attention span", "tiny hands", "the DFS sale", "country music", "a short memory", "a wi-fi allergy"]
    let advice = ["\"The only thing we have to fear is fear itself.\" - Franklin D. Roosevelt", "\"Be the change that you wish to see in the world.\" - Mahatma Gandhi", ""]
    console.log(`The array "animals" contains ${animals.length} items.`)
    console.log(`The array "strength" contains ${strength.length} items.`)
    console.log(`The array "weakness" contains ${weakness.length} items.`)
    console.log(`The array "advice" contains ${advice.length} items.`)
    let anan = "";
    let chosen = animals[Math.floor(Math.random()*animals.length)];
    if (chosen[0] === "a" | chosen[0] === "e" | chosen[0] === "i" | chosen[0] === "o" | chosen[0] === "u") {
        anan = "an"
    } else {anan = "a"};
    let chosenAnimal = `${anan} ${chosen}`;
    chosen = strength[Math.floor(Math.random()*strength.length)];
    let chosenStrength = `${chosen}`;
    chosen = weakness[Math.floor(Math.random()*weakness.length)]
    let chosenWeakness = `${chosen}`
    chosen = advice[Math.floor(Math.random()*advice.length)]
    let chosenAdvice = `${chosen}`
    console.log(`A randomised animal could be ${chosenAnimal}.`);
    console.log(`A randomised strength could be ${chosenStrength}.`);
    console.log(`A randomised weakness could be ${chosenWeakness}.`);
    console.log(`A randomised piece of advice could be ${chosenAdvice}.`);
    //console.log(`${anan} ${chosen}`)

};
spiritAnimal();
