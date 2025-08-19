// Attendre que la page soit entièrement chargée
document.addEventListener('DOMContentLoaded', function() {


    // Ici tout notre code JavaScript
    console.log("JavaScript externe chargé !");


    // Trouve l'élément et change son texte

    const youtubeElement = document.getElementById('youtube-count');
    youtubeElement.textContent = '1,2K';
    
    const twitchElement = document.getElementById('twitch-count');
    twitchElement.textContent = '856';
    
    const tiktokElement = document.getElementById('tiktok-count');
    tiktokElement.textContent = '2,3K';
    
    const instaElement = document.getElementById('instagram-count');
    instaElement.textContent = '492';

    console.log("youtube mis a jours !");
});