// Attendre que la page soit entièrement chargée

document.addEventListener('DOMContentLoaded', function() {


    //code JavaScript

    console.log("JavaScript externe chargé !");


    // Trouve l'élément et change son texte

    fetch('https://www.youtube.com/@Joao-Paulo-Pinto-Queiros')
        .then(response => response.json())
        .then(data => {
            const youtubeElement = document.getElementById('youtube-count');
            if (data.items && data.items.length > 0) {
                youtubeElement.textContent = data.items[0].statistics.subscriberCount;
            } else {
                youtubeElement.textContent = "Non trouvé";
            }
            console.log("Données YouTube :", data);
        })

        .catch(error => {
            console.log("Erreur YouTube :", error);
            const youtubeElement = document.getElementById('youtube-count');
            youtubeElement.textContent = "Erreur API";
        });

    const twitchElement = document.getElementById('twitch-count');
    twitchElement.textContent = '856';
    
    const tiktokElement = document.getElementById('tiktok-count');
    tiktokElement.textContent = '2,3K';
    
    const instaElement = document.getElementById('instagram-count');
    instaElement.textContent = '492';

    console.log("youtube mis a jours !");
});