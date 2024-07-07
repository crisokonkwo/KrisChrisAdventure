document.addEventListener("DOMContentLoaded", function () {
    // List of photo filenames in the folder
    const photos = [
        'DSC00095_1.JPG', 'DSC00167.JPG', 'DSC01083.JPG', 'DSC01178.JPG', 'DSC01209.JPG', 'DSC01212.JPG', 'DSC01214.JPG', 'DSC01221.JPG', 'DSC01222.JPG', 'DSC01360.JPG', 'DSC01373.JPG', 'DSC00169.JPG', 'DSC00334.JPG', 'DSC00387.JPG', 'DSC00388.JPG', 'DSC00389.JPG', 'DSC00392.JPG', 'DSC00016.JPG', 'DSC00434.JPG', 'DSC00435.JPG', 'DSC00436.JPG', 'DSC00438.JPG', 'DSC00456.JPG', 'DSC00461.JPG', 'DSC00475.JPG', 'DSC00476.JPG', 'DSC00485.JPG', 'DSC00502.JPG', 'DSC00505.JPG', 'DSC00506.JPG', 'DSC00507.JPG', 'DSC00513.JPG', 'DSC00520.JPG', 'DSC00630.JPG', 'DSC00631.JPG', 'DSC00642.JPG', 'DSC00647.JPG', 'DSC00654.JPG', 'DSC00695.JPG', 'DSC00707.JPG', 'DSC00808.JPG', 'DSC00839.JPG', 'DSC00849.JPG', 'DSC00857.JPG', 'DSC00860.JPG', 'DSC01035.JPG', 'DSC01408.JPG', 'DSC01412.JPG', 'DSC01414.JPG', 'DSC01415.JPG', 'IMG_0522.jpg', 'IMG_1143.jpg', 'IMG_2408.jpg', 'DSC00175.JPG', 'DSC00212.JPG', 'DSC00312.JPG', 'DSC00314.JPG', 'DSC00315.JPG', 'DSC00316.JPG', 'DSC00317.JPG', 'DSC00320.JPG', 'DSC00333.JPG', 'IMG_4077.jpg', 'IMG_4732.jpg', 'IMG_4830.JPG', 'IMG_5510.jpg', 'IMG_6430.jpg', 'IMG_6840.jpg', 'IMG_8278.jpg'
    ];

    // Function to shuffle the array
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Shuffle the photos array
    shuffle(photos);

    const indicatorsContainer = document.getElementById('carousel-indicators');
    const innerContainer = document.getElementById('carousel-inner');

    photos.forEach((photo, index) => {
        // Create carousel indicator
        const indicator = document.createElement('button');
        indicator.type = 'button';
        indicator.setAttribute('data-bs-target', '#carousel-image-one');
        indicator.setAttribute('data-bs-slide-to', index);
        indicator.setAttribute('aria-label', `Slide ${index + 1}`);
        if (index === 0) {
            indicator.className = 'active';
            indicator.setAttribute('aria-current', 'true');
        }
        indicatorsContainer.appendChild(indicator);

        // Create carousel item
        const item = document.createElement('div');
        item.className = `carousel-item${index === 0 ? ' active' : ''}`;
        const img = document.createElement('img');
        img.src = `./assets/images/gallery/${photo}`;
        img.alt = `Photo ${index + 1}`;
        img.className = 'd-block w-100';
        img.width = 1280;
        img.height = 720;
        img.setAttribute('onclick', 'util.modal(this)');
        item.appendChild(img);
        innerContainer.appendChild(item);
    });
});