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
    // Story information
    `
    <i>CyberPunk 2077</i> was CD Projekt RED's highly anticipated first-person, open-world RPG shooter released in
    December 2020. After countless delays and gameplay trailers, expectations were set extrememly high, by investors
    and players alike. However, soon after release it was blatantly obvious that the game being advertised was not the
    one being delivered. With bugged artificial intelligence, taxing computer system requirements, surface level 
    storytelling, and mediocre gameplay, CyberPunk was a commercial failure. So much so that Playstation and Microsoft
    had removed the digital copy from their online marketplaces and even offered full refunds.
    <img src="pictures/CP2077_review.png" width=80% >
    
    `,

    // Genre information
    "True to the genre, expect hours of 2D side-scrolling action and exploration. Brave dangerous monsters, " +
    "solve complex dungeons, and discover the mystery behind Terrend and its original civilization. Inspired " +
    "by some of the dev's favorite games, such as: Hollow Knight, Legend of Zelda, and Metroid Fusion. " +
    "Metroidvania titles are 2D side-scrolling action adventure games inspired by the original Metroid and " +
    "Castelvania games. Whether you are a veteran or newcomer, Project: Cryptovania will include a multitude " +
    "of game mechanics. Through exploration, you will find new materials to upgrade your gear to make cutting " +
    "through enemies quicker, or perhaps add fire to your weapons and deal damage over time. Your upgrades " +
    "matter as your gear progresses down a large tree of skills and perks, rewarding you for finding the " +
    "secrets The Crypt has to offer.",

    // Character information
    "When you return from the Crypt, you will be able to rest on the first floor of the Mines, named \"The " +
    "Chapel.\" While their, you will be able to spend your collected materials on upgrades for your gear, buy " +
    "consumables to bring with you in The Crypt, and enjoy cutscenes with fellow Gravediggers who may reward " +
    "you for completing quests to trigger their events. ",

    // Release Date information
    "<h2>TBA</h2> <br> We thank all of those who have chosen to support us and ask for patience so we may " +
    "release a finished and worthwhile experience for all players. Consider aiding development on Kickstarter " +
    "where those who donate enough can receive in-game rewards, as well as a download before the official " +
    "release date!",

    "<h2>Support us on Kickstarter!</h2> <br>By supporting us on Kickstarter, you can reach different tiers " +
    "that will net you different rewards, such as dedicated characters, further in-depth developer posts, " + 
    "test versions of the game, a copy of the game before release, and much more. We encourage donation only " + 
    "for those who can afford it, so please do not give more than you can live without."
];

// array to change the game_head title
var gameHead = [
    "<i>CyberPunk 2077's</i> Poor Management", "<i>No Man's Sky</i> Marketing", "<i>Hollow Knight's</i> Crowdfund", 
    "<i>Bloodstained's</i> Player Feedback", "<i>Warframe's</i> Developer Streams"
]