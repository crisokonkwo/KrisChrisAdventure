import { util } from './util.js';
import { audio } from './audio.js';

export const progress = (() => {

    const assets = document.querySelectorAll('img');
    const info = document.getElementById('progress-info');
    const bar = document.getElementById('progress-bar');
    
    const total = assets.length;

    console.log(total);
    console.log(assets);
    console.log(info);
    
    let loaded = 0;

    const progress = () => {
        loaded += 1;

        bar.style.width = Math.min((loaded / total) * 100, 100).toString() + "%";
        info.innerText = `Loading assets (${loaded}/${total}) [${parseInt((loaded / total) * 100).toFixed(0)}%]`;

        if (loaded == total) {
            // util.show();
            util.showDate();

            if (window.location.pathname.includes('invitation.html')) {
                setTimeout(function () {
                    audio.play();
                }, 1000);
    
                confetti({
                    origin: { y: 1 },
                    zIndex: 1057,
                });
    
                setTimeout(function () {
                    util.animation();
                }, 3000);
            }
            
        }
    };

    info.style.display = 'block';
    assets.forEach((asset) => {
        if (asset.complete && asset.naturalWidth !== 0) {
            progress();
        } else {
            asset.addEventListener('load', () => progress());
        }
    });
})();