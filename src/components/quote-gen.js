import { useState, useEffect } from "react";

const philosophers = [
  {
    name: "aurelius",
    quotes: [
        "The happiness of your life depends upon the quality of your thoughts.",
        "You have power over your mind — not outside events. Realize this, and you will find strength.",
        "Waste no more time arguing about what a good man should be. Be one.",
        "It is not death that a man should fear, but he should fear never beginning to live.",
        "Our life is what our thoughts make it.",
        "The best revenge is to be unlike him who performed the injury.",
        "When you arise in the morning think of what a privilege it is to be alive, to think, to enjoy, to love.",
        "The soul becomes dyed with the colour of its thoughts.",
        "If it is not right do not do it; if it is not true do not say it.",
        "The universe is change; our life is what our thoughts make it.",
        "You could leave life right now. Let that determine what you do and say and think.",
        "Dwell on the beauty of life. Watch the stars, and see yourself running with them.",
        "Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth.",
        "How much time he gains who does not look to see what his neighbour says or does or thinks.",
        "The impediment to action advances action. What stands in the way becomes the way.",
        "To love only what happens, what was destined. No greater harmony.",
        "He who lives in harmony with himself lives in harmony with the universe.",
        "Accept the things to which fate binds you, and love the people with whom fate brings you together, but do so with all your heart.",
        "The art of living is more like wrestling than dancing.",
        "Life is neither good nor evil, but only a place for good and evil."
    ],
  },
  {
    name: "confucius",
    quotes: [
        "Everything has beauty, but not everyone sees it.",
        "They must often change who would be constant in happiness or wisdom.",
        "What the superior man seeks is in himself; what the small man seeks is in others.",
        "In a country well governed, poverty is something to be ashamed of. In a country badly governed, wealth is something to be ashamed of.",
        "It does not matter how slowly you go so long as you do not stop.",
        "When anger rises, think of the consequences.",
        "By three methods we may learn wisdom: First, by reflection, which is noblest; second, by imitation, which is easiest; and third by experience, which is the bitterest.",
        "The superior man is modest in his speech but exceeds in his actions.",
        "Ignorance is the night of the mind, but a night without moon and star.",
        "He who learns but does not think, is lost! He who thinks but does not learn is in great danger.",
        "The superior man understands what is right; the inferior man understands what will sell.",
        "Real knowledge is to know the extent of one's ignorance.",
        "To see what is right and not do it is the want of courage.",
        "The strength of a nation derives from the integrity of the home.",
        "When we see men of a contrary character, we should turn inwards and examine ourselves.",
        "The cautious seldom err.",
        "He who speaks without modesty will find it difficult to make his words good.",
        "The superior man acts before he speaks, and afterwards speaks according to his actions.",
        "To go beyond is as wrong as to fall short.",
        "If you make a mistake and do not correct it, this is called a mistake."
    ],
  },
  {
    name: "plato",
    quotes: [
        "The heaviest penalty for declining to rule is to be ruled by someone inferior to yourself.",
        "Thinking: the talking of the soul with itself.",
        "Ignorance, the root and stem of all evil.",
        "Science is nothing but perception.",
        "When men speak ill of thee, live so as nobody may believe them.",
        "A hero is born among a hundred, a wise man is found among a thousand, but an accomplished one might not be found even among a hundred thousand men.",
        "We are twice armed if we fight with faith.",
        "Be kind, for everyone you meet is fighting a harder battle.",
        "Every heart sings a song, incomplete, until another heart whispers back.",
        "Those who are able to see beyond the shadows and lies of their culture will never be understood, let alone believed, by the masses.",
        "At the touch of love, everyone becomes a poet.",
        "When the mind is thinking it is talking to itself.",
        "The beginning is the most important part of the work.",
        "Courage is knowing what not to fear.",
        "The price good men pay for indifference to public affairs is to be ruled by evil men.",
        "The first and best victory is to conquer self.",
        "Knowledge which is acquired under compulsion obtains no hold on the mind.",
        "The direction in which education starts a man will determine his future in life.",
        "A good decision is based on knowledge and not on numbers.",
        "Wise men speak because they have something to say; fools because they have to say something."
    ],
  },
  {
    name: "laozi",
    quotes: [
        "Knowing others is intelligence; knowing yourself is true wisdom.",
        "Mastering others is strength; mastering yourself is true power.",
        "If you realize that you have enough, you are truly rich.",
        "A journey of a thousand miles begins with a single step.",
        "The way that can be told is not the eternal way; the name that can be named is not the eternal name.",
        "He who is satisfied with his lot is rich.",
        "The more laws and order are made prominent, the more thieves and robbers there will be.",
        "When there is no desire, all things are at peace.",
        "A good traveler has no fixed plans and is not intent on arriving.",
        "The flame that burns twice as bright burns half as long.",
        "To see things in the seed, that is genius.",
        "The best fighter is never angry.",
        "A leader is best when people barely know he exists.",
        "Those who know do not speak. Those who speak do not know.",
        "The truth is not always beautiful, nor beautiful words the truth.",
        "The wise man does not hoard. The more he helps others, the more he benefits himself.",
        "The Tao is the center of the universe; the good man is the center of the people.",
        "He who is contented is rich.",
        "The Tao never does anything, yet through it all things are done.",
        "A good man is one who, while he has not yet attained the Tao, is still able to act in accordance with it."
    ],
  },
  {
    name: "doctor",
    quotes: [
        "In 900 years of time and space, I've never met anyone who wasn't important.",
        "We’re all stories, in the end. Just make it a good one, eh?",
        "The way I see it, every life is a pile of good things and bad things. The good things don’t always soften the bad things, but vice versa, the bad things don’t necessarily spoil the good things or make them unimportant.",
        "Some people live more in twenty years than others do in eighty. It's not the time that matters, it’s the person.",
        "Time is not the boss of me.",
        "Never cruel or cowardly. Never give up. Never give in.",
        "Human progress isn't measured by industry, it's measured by the value you place on a life. An unimportant life. A life without privilege. That's what defines an age. That's what defines a species.",
        "The only rules that really matter are these: what a man can do and what a man can’t do.",
        "People assume that time is a strict progression of cause to effect, but actually, from a non-linear, non-subjective viewpoint, it's more like a big ball of wibbly-wobbly, timey-wimey... stuff.",
        "The universe is always speaking to us. Sometimes we just don’t listen.",
        "Run when you can, fight when you must.",
        "Life is what happens when you’re busy avoiding it.",
        "We all change, when you think about it. We’re all different people all through our lives.",
        "Fear makes companions of us all, and love separates us.",
        "You want a second chance? No. You want a new beginning.",
        "Everything ends, and it's always sad. But everything begins again too, and that's always happy. Be happy.",
        "Remember, hate is always foolish. and love is always wise. Always try to be nice, but never fail to be kind. ",
        "The moment you doubt whether you can fly, you cease forever to be able to do it.",
        "Laugh hard, run fast, be kind.",
        "Sometimes the only choices you have are bad ones, but you still have to choose."
    ],
  }
];

function QuoteGen({ author }) {
    // Find the philosopher object in the array
    const philosopher = philosophers.find(p => p.name.toLowerCase() === author.toLowerCase());

    // Get the quotes array (or empty array if not found)
    const quotes = philosopher ? philosopher.quotes : [];

    // State to store current quote
    const [currentQuote, setCurrentQuote] = useState(
        quotes.length > 0 ? quotes[Math.floor(Math.random() * quotes.length)] : ""
    );
    // State for the text being typed
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        let i = 0;
        setDisplayedText(""); // clear previous text
        if (!currentQuote) return;

        const speed = 25; // milliseconds per character

        const typingInterval = setInterval(() => {
            setDisplayedText(currentQuote.slice(0, i + 1));
            i++;
            if (i === currentQuote.length) {
                clearInterval(typingInterval);
            }
        }, speed);

        return () => clearInterval(typingInterval); // cleanup if component unmounts
    }, [currentQuote]);

    // Handler for new quote
    const handleNewQuote = () => {
        if (quotes.length === 0) return;

        let random;
        do {
        random = quotes[Math.floor(Math.random() * quotes.length)];
        } while (random === currentQuote && quotes.length > 1);

        setCurrentQuote(random);
    };

    return (
    <>
        <p className="quote leading-normal text-xl sm:text-3xl md:text-4xl lg:text-5xl" style={{ fontFamily: "'Caveat', cursive" }}>"{displayedText}"</p>
        <button id="newQuote" className="block mx-auto mt-6 bg-green-900 text-white px-4 py-2 rounded hover:bg-green-950 transition duration-500 cursor-pointer" onClick={handleNewQuote}>
            New Quote
        </button>
    </>
    );
}



export default QuoteGen;