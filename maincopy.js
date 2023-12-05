function spiritAnimal() {
    //Below are the 5 arrays that will be used. The final two (advices) share a position in the message with serious advice being given 75% of the time.
    let animals = ["dog", "cat", "tiger", "monkey", "wolf", "bear", "horse", "hippo", "lion", "giraffe", "elephant", "cow", "gorilla", "chimpanzee", "deer", "zebra", "panda", "camel", "bat", "cheetah", "kangaroo", "fox", "crocodile", "rabbit", "squirrel", "pig", "goat", "horse", "panther", "donkey", "leopard", "tortoise", "chicken", "albatross", "fish", "dolphin", "frog", "whale", "eagle", "ostrich", "armadillo", "beaver", "badger", "giraffe", "crab", "chameleon", "cobra", "koala", "dodo", "jellyfish", "llama", "rhinoceros", "hedgehog", "zebra", "wombat", "bull", "sheep", "meerkat", "otter", "sloth", "owl", "vulture", "flamingo", "swan", "peacock", "whale", "unicorn", "dragon", "phoenix", "chimera", "manticore", "yeti", "basilisk", "kraken", "hydra", "pikachu", "charizard", "greymon", "blue eyes white dragon", "grogu"]
    let strength = ["the Moon", "the Sun", "Mercury", "coffee", "the colour green", "water", "fire", "gold", "laughter", "schadenfreude", "meditation", "the darkness", "friendship", "the Earth", "nature", "chocolate", "clouds", "animal companions", "books", "pizza", "cocaine", "weed", "exercise", "sleeping, a lot", "pride", "anger", "fear", "joy", "family", "religion", "donuts", "cheese", "halloumi", "a medium-rare steak", "Jupiter", "Saturn", "Mars", "Venus", "Pluto", "Uranus", "the universe itself", "the galactic core", "Zeus", "Thor", "a soft-boiled egg", "period dramas", "art", "fossil fuels", "an origami wizard", "the internet", "magic pyjamas", "speaking Swahili", "your empathy", "your resilience", "compassion", "your courage", "your patience", "gratitude", "forgiveness", "self-awareness", "generosity", "integrity", "adaptability", "optimism", "perseverance", "altruism", "your creativity", "confidence", "humility", "hope", "sheer grit", "your tenacity", "love", "dad jokes", "sarcasm", "lucky underwear", "sweet dance moves", "constantly snacking", "Boris Johnson", "a proper tasty takeaway"]
    let weakness = ["bad smells", "the German language", "a lack of trust", "pain", "sickness", "big butts", "lies", "an Irish accent", "sabotage", "a fear of failure", "loneliness", "a fear of vulnerability", "self-doubt", "insecurity", "difficulty in expressing emotions", "a fear of abandonment", "perfectionism", "overthinking", "a lack of boundaries", "compassion", "imposter syndrome", "procrastination", "a fear of rejection", "the inability to let go of the past", "your constant comparison to others", "a fear of intimacy", "the inability to forgive yourself", "being overly self-critical", "impatience", "pride", "a need for constant validation", "your refusal to ask for help", "your constant avoidance of conflict", "fear of the unknown", "resentment", "the weight of expectations", "reluctance to embrace change", "a latex allergy", "a fear of eggs", "an inability to park straight", "a very short attention span", "tiny hands", "the DFS sale", "country music", "a short memory", "a wi-fi allergy"]
    let advice = ["\"The only thing we have to fear is fear itself.\" - Franklin D. Roosevelt", "\"Be the change that you wish to see in the world.\" - Mahatma Gandhi", "\"Don't cry because it's over, smile because it happened.\" - Dr. Seuss", "\"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.\" - Albert Einstein", "\"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.\" - Ralph Waldo Emerson", "\"The only place where success comes before work is in the dictionary.\" - Vidal Sassoon", "\"If you want to lift yourself up, lift up someone else.\" - Booker T. Washington", "\"In three words I can sum up everything I've learned about life: it goes on.\" - Robert Frost", "\"Success is not final, failure is not fatal: It is the courage to continue that counts.\" - Winston S. Churchill", "\"The best way to predict the future is to create it.\" - Peter Drucker", "\"Your time is limited, don't waste it living someone else's life.\" - Steve Jobs", "\"Happiness is not something ready-made. It comes from your own actions.\" - Dalai Lama", "\"Do not dwell in the past; do not dream of the future, concentrate the mind on the present moment.\" - Buddha", "\"Your beliefs don't make you a better person, your behavior does.\" - Unknown", "\"What lies behind us and what lies before us are tiny matters compared to what lies within us.\" - Ralph Waldo Emerson", "\"The only person you are destined to become is the person you decide to be.\" - Ralph Waldo Emerson", "\"The purpose of our lives is to be happy.\" - Dalai Lama", "\"You have within you right now, everything you need to deal with whatever the world can throw at you.\" - Brian Tracy", "\"Your value does not decrease based on someone's inability to see your worth.\" - Unknown", "\"Your life does not get better by chance, it gets better by change.\" - Jim Rohn", "\"Be kind whenever possible. It is always possible.\" - Dalai Lama", "\"The more I see, the less I know for sure.\" - John Lennon", "\"The best way to find yourself is to lose yourself in the service of others.\" - Mahatma Gandhi", "\"The mind is everything. What you think, you become.\" - Buddha", "\"Comparison is the thief of joy.\" - Theodore Roosevelt", "\"You are not a drop in the ocean. You are the entire ocean in a drop.\" - Rumi", "\"Life is really simple, but we insist on making it complicated.\" - Confucius", "\"To love oneself is the beginning of a lifelong romance.\" - Oscar Wilde", "\"The more you know who you are, and what you want, the less you let things upset you.\" - Stephanie Perkins", "\"Your present circumstances don't determine where you can go; they merely determine where you start.\" - Nido Qubein"]
    let funnyAdvice = ["\"Never trust a dog to watch your food.\"", "\"Don't take life too seriously; no one gets out alive anyway.\"", "\"If at first, you don't succeed, blame someone else and seek revenge.\"", "\"Never go to bed angry. Stay awake and plot your revenge.\"", "\"Do something every day that you don't want to do; this is the golden rule for acquiring the habit of doing your duty without pain.\"", "\"When life gives you lemons, squirt someone in the eye.\"", "\"Don't worry about what people think, they don't do it very often.\"", "\"Behind every great man, there is a woman rolling her eyes.\"", "\"If you're going to do something tonight that you'll be sorry for tomorrow morning, sleep late.\""]
    //Below are the current lengths of all lists and a calculation of how many combinations they create.
    console.log(`The array "animals" contains ${animals.length} items.`)
    console.log(`The array "strength" contains ${strength.length} items.`)
    console.log(`The array "weakness" contains ${weakness.length} items.`)
    console.log(`The array "advice" contains ${advice.length} items.`)
    console.log(`The array "funnyAdvice" contains ${funnyAdvice.length} items.`)
    let combinations = animals.length * strength.length * weakness.length * (advice.length + funnyAdvice.length)
    console.log(`There are a total of ${combinations} combinations.`);    
    //Chosen is used each time to create the selected item from each array. This one chooses the animal.
    let chosen = animals[Math.floor(Math.random()*animals.length)];
    // The anan part helps put the gramatically correct word, either "a" or "an" in front of the chosen animal.
    let anan = "";
    if (chosen[0] === "a" | chosen[0] === "e" | chosen[0] === "i" | chosen[0] === "o" | chosen[0] === "u") {
        anan = "an"
    } else {anan = "a"};
    //Puts the right word in front of the animal.
    let chosenAnimal = `${anan} ${chosen}`;
    //Chooses the strength.
    chosen = strength[Math.floor(Math.random()*strength.length)];
    let chosenStrength = `${chosen}`;
    //Chooses the weakness.
    chosen = weakness[Math.floor(Math.random()*weakness.length)]
    let chosenWeakness = `${chosen}`
    //A test of chance to choose between the serious advice and funny advice, before choosing from the winning array.
    if (Math.random() < 0.75) {chosen = advice[Math.floor(Math.random()*advice.length)]}
        else {chosen = funnyAdvice[Math.floor(Math.random()*funnyAdvice.length)]}
    let chosenAdvice = `${chosen}`
    /*console.log(`A randomised animal could be ${chosenAnimal}.`);
    console.log(`A randomised strength could be ${chosenStrength}.`);
    console.log(`A randomised weakness could be ${chosenWeakness}.`);
    console.log(`A randomised advice could be ${chosenAdvice}.`);*/

    //The final output!
    console.log(`Hello! Today your spirit animal is ${chosenAnimal}. You get your strength from ${chosenStrength} but your weakness is ${chosenWeakness}.
    Just remember: ${chosenAdvice}.`);

};
spiritAnimal();
function more() {for 
(let i = 0; i< 10; i++) {
    spiritAnimal()
}}
//more();