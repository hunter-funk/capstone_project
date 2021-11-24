var article = document.getElementById("about_game");
var title = document.getElementById("game_head");

// changes the information on the products page to match what was selected on the 2nd navbar
// each item on the navbar has an onclick with a number in the parameter
// that number is used to fill in the about_game and game_head with the correlating info from the gameInfo array
function change(x){
    article.innerHTML = gameInfo[x];
    title.innerHTML = gameHead[x];
}


var gameInfo = [
    // CyberPunk
    `
    <i>CyberPunk 2077</i> was CD Projekt RED's highly anticipated first-person, open-world RPG shooter released in
    December 2020. After countless delays and gameplay trailers, expectations were set extrememly high, by investors
    and players alike. However, soon after release, it was blatantly obvious that the game being advertised was not the
    one being delivered. With bugged artificial intelligence, taxing computer system requirements, surface level 
    storytelling, and mediocre gameplay, <i>CyberPunk 2077</i> was a commercial failure. So much so that Playstation and Microsoft
    had removed the digital copy from their online marketplaces and even offered full refunds. 
    <img src="pictures/CP2077_review.png" width=80% >
    
    `,

    // No Man's Sky
    `
    <i>No Man's Sky</i> was advertised as a vast open-world, online multiplayer title where players could explore an endless
    expanse of unique planets. Misleading interviews and promises made by Sean Murray, a developer on the game, left players 
    feeling cheated on release as environments were baren and void of engaging content. Our promise is to create a dialogue
    between our developers and you with evidence to support our promises. Both ourselves and you will hold us accountable to 
    our promises. 

    `,

    // Hollow Knight
    `
    Another Indie Game developer, Team Cherry, made excellent use of their platforms through social media and crowdfunding. 
    Through rewards for those who supported the game financially, <i>Hollow Knight</i> engaged its community on a much more personal
    level, allowing followers to leave their own mark in a game they eagerly awaited for. Our strategies will be similar, with
    tiered rewards for those who support us on Kickstarter, which ranges from your name in the credits, dedicated characters, 
    and early copies of the game already paid in full. 
    <div class="embed-responsive embed-responsive-16by9">
    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/UAO2urG23S4" allowfullscreen></iframe>
    </div>
    `,

    // BloodStained
    `
    Koji Igarashi is one of the founding fathers of the Metroidvania genre with his original series, Castlevania, while working 
    at Konami. Fans were eager for his comeback as an independent developer with <i>Bloodstained: Ritual of the Night</i>. The
    project was crowdfunded as well and looked promising. However, after a reveal trailer for the game, fans were less than happy
    about the state of the game. Complaints were posted on all outlets about fans disproval. In a bold move, the release 
    trailer for the game puts on full display the feedback from fans and Igarashi vowing to prove them wrong as the trailer 
    proceeds to answer all of their grievances with the original version of the game. We intend to do the same and hope you
    will give us your feedback as to expectations we should meet. 
    <div class="embed-responsive embed-responsive-16by9">
    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/d79KArgmgcc" allowfullscreen></iframe>
    </div>
    `,

    // WarFrame
    `
    <i>Warframe</i> is a free-to-play 3rd-person looter shooter. While the game has microtransactions, and hefty price tags on some
    of the content in their shop, pay-to-win has not been a serious accusation against the developers. Everything in the game
    is obtainable through free methods, and spending money is the alternative for those who do not wish to spend the time.
    What we intend to replicate are their developer streams in which they engage with fans and play through the game, showcasing
    new content and addressing player feedback.
    <img src="pictures/devStream.png" width=80% >
    `
];

// array to change the game_head title
var gameHead = [
    "<i>CyberPunk 2077's</i> Poor Management", "<i>No Man's Sky</i> Marketing", "<i>Hollow Knight's</i> Crowdfund", 
    "<i>Bloodstained's</i> Player Feedback", "<i>Warframe's</i> Developer Streams"
]