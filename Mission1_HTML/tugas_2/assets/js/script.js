var nouns = ["Mobile", "Web", "IoT", "Laravel", "AI", "Flutter", "Desktop", "UI/UX", "SEO", "Arduino"];
var verbs = ["Making", "Creating", "Inovating", "Finding", "Programming", "Developing", "Searching", "Finding", "Analyzing", "Evaluating"];
var adjectives = ["Hard", "Beautyfull", "Easy", "From Scratch", "Nice", "Awesome"];
var adverbs = ["fast", "slow", "precisely", "quickly", "proudly"];

var sentences= [
    'so fat not even Dora can explore her',
    'so  fat I swerved to miss her and ran out of gas',
    'so smelly she put on Right Guard and it went left',
    'so fat she hasn’t got cellulite, she’s got celluheavy',
    'so fat she don’t need no internet – she’s already world wide',
    'so hair her armpits look like Don King in a headlock',
    'so classless she could be a Marxist utopia',
    'so fat she can hear bacon cooking in Canada',
    'so fat she won “The Bachelor” because she all those other bitches',
    'so stupid she believes everything that Brian Williams says',
    'so ugly she scared off Flavor Flav',
    'is like Domino’s Pizza, one call does it all',
    'is twice the man you are',
    'is like Bazooka Joe, 5 cents a blow',
    'is like an ATM, open 24/7',
    'is like a championship ring, everybody puts a finger in her'
];

var names = [ 'Lois Hamilton', 'Ruby Dawson', 'Hedy Caldwell', 'Ebony Woodward', 'Ima Kennedy', 'Beatrice Farrell'];


const generateRandomNumber = (max, min) =>  Math.round(Math.random() * (max - min) + min);

const createCardThumb = (srcImg, altText) => {
    const thumb = document.createElement('div');
    thumb.classList.add('thumb');

    const a = document.createElement('a');
    a.setAttribute('href', '#');

    const img = document.createElement('img');
    img.setAttribute('src', srcImg);
    img.setAttribute('alt', altText);

    a.appendChild(img);
    thumb.appendChild(a);

    return thumb;
}

const createButton = (btnText) => {
    const a = document.createElement('a');
    a.setAttribute('href', '#');
    a.innerHTML = btnText;
    a.classList.add('btn', 'btn-white', 'text-decoration-none', 'text-black');

    return a;
}

const createAuthor = (authorName, authorImg, authorAlt) => {
    const author = document.createElement('div');
    author.classList.add('author');

    const p = document.createElement('p');
    p.innerHTML = authorName;
    p.classList.add('text-gray'); 

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('photo-profile');

    const img = document.createElement('img');
    img.setAttribute('src', authorImg);
    img.setAttribute('alt', authorAlt);
    
    imgContainer.appendChild(img);
    author.appendChild(p);
    author.appendChild(imgContainer);

    return author;
}

const createContentFooter = (btnText, authorName, authorImg, authorAlt) => {
    const contentFooter = document.createElement('div');
    contentFooter.classList.add('content-footer');

    const btn = createButton(btnText);

    contentFooter.appendChild(btn);

    const author = createAuthor(authorName, authorImg, authorAlt);

    contentFooter.appendChild(author);

    return contentFooter;
}

const createCardContent = (title, description, btnText, authorName, authorImg, authorAlt) => {
    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');

    const a = document.createElement('a');
    a.setAttribute('href', '#');
    a.innerHTML = title;
    a.classList.add('title', 'text-title', 'text-decoration-none');

    const p = document.createElement('p');
    p.innerHTML = description;
    p.classList.add('description');

    const contentFooter = createContentFooter(btnText, authorName, authorImg, authorAlt);

    cardContent.appendChild(a);
    cardContent.appendChild(p);
    cardContent.appendChild(contentFooter);

    return cardContent;
}

const createCard = (thumbImg, title, description, btnText, authorName, authorImg, authorAlt) => {
    const card = document.createElement('div');
    card.classList.add('card');

    const thumb = createCardThumb(thumbImg, 'photos')
    
    card.appendChild(thumb);

    const cardContent = createCardContent(title, description, btnText, authorName, authorImg, authorAlt);

    card.appendChild(cardContent);

    const mainSection = document.getElementById('content');
    mainSection.appendChild(card);
}

const generateAuthorImg = () => `https://picsum.photos/id/${generateRandomNumber(0, 50)}/40/40`;
const generateAuthorName = () => names[generateRandomNumber(0, names.length - 1)];

const generateThumb = () => `https://picsum.photos/id/${generateRandomNumber(01, 100)}/128/128`;

const generateTitle = () => {
    let verb = verbs[generateRandomNumber(0, verbs.length - 1)]
    let noun = nouns[generateRandomNumber(0, nouns.length - 1)]
    let adjective = adjectives[generateRandomNumber(0, adjectives.length - 1)]
    let adverb = adverbs[generateRandomNumber(0, adverbs.length - 1)]

    return `${verb} ${noun} ${adjective} ${adverb}`;
};

const generateDescription = () => {
    let rand = generateRandomNumber(4, 8);
    let desc = '';
    for(let i = 0; i < rand; i++) {
        desc += sentences[generateRandomNumber(0, sentences.length - 1)] + '. ';
    }

    return desc;
};

window.addEventListener('DOMContentLoaded', (event) => {
    const randPostAmount = generateRandomNumber(1, 20);
    for(let i = 0; i < randPostAmount; i++) {
        createCard(
            generateThumb(), 
            generateTitle(), 
            generateDescription(), 
            'Read Lesson', 
            generateAuthorName(), 
            generateAuthorImg(), 
            'author'
        );
    }
});