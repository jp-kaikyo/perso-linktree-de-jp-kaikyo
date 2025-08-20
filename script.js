document.addEventListener('DOMContentLoaded',function() {
    console.log("JavaScript externe chargé !");

    const abonnée_stat = {
        youtube: '25',
        twitch: '38',
        tiktok: '110',
        instagram: '43',
        tiktok_second: '0',
        instagram_second: '350',
    };

    document.getElementById('youtube-count').textContent = abonnée_stat.youtube;
    document.getElementById('twitch-count').textContent = abonnée_stat.twitch;
    document.getElementById('tiktok-count').textContent = abonnée_stat.tiktok;
    document.getElementById('instagram-count').textContent = abonnée_stat.instagram;
    document.getElementById('tiktok-second-count').textContent = abonnée_stat.tiktok_second;
    document.getElementById('instagram-second-count').textContent = abonnée_stat.instagram_second;
    
    function trier(container_selector) {
        const container = document.querySelector(container_selector);
        if (!container) return;

        const blocs = Array.from(container.querySelectorAll('.button'));

        blocs.sort((a, b) => {
            const aNb = parseInt(a.querySelector('span').textContent,10) || 0;
            const bNb = parseInt(b.querySelector('span').textContent,10) || 0;
            return bNb - aNb;
        });

        blocs.forEach(bloc => container.appendChild(bloc));
    }

    trier('main');
    trier('footer');

    console.log("Tous les réseaux mis à jour et triés !")
});