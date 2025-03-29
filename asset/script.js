const table = [
    'Hello, beautiful soul!',
    'Thank you for being awesome and visiting!',
    'You are amazing just the way you are!',
    'Wishing you happiness and success today!',
    'You brighten up this world!',
    'Keep shining, the world needs your light!',
    'Believe in yourself, you’ve got this!',
    'Every day is a new opportunity for greatness!',
    'Sending positive vibes your way!',
    'You are loved and appreciated!'
];

function SetRandomText() {
    var randomtext = Math.floor(Math.random() * table.length)
    var found = table[randomtext]
    document.getElementById('Looptext').innerHTML = found
}

setInterval(() => {
    SetRandomText()
}, 2000);

const tables = [
    'Yenix Hub',
    'Sunbite',
    'Thanos',
    "Emerald",
    "Tee",
    "Pongsathon"
];


function SetRandomTitle() {
    var randomtext = Math.floor(Math.random() * tables.length)
    var found = tables[randomtext]
    document.title = found
}

setInterval(() => {
    SetRandomTitle()
}, 1500);


function Typing() {
    const text = "Sunbite."
    let index = 0
    const speed = 100 

    function typechat() {
        if (index < text.length) {
            document.getElementById('Mu').innerHTML += text.charAt(index); 
            index++;
            setTimeout(typechat, speed); 
        }
    }

    typechat(); 
}

window.onload = function() {
    Typing()
}