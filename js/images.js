document.addEventListener("DOMContentLoaded", function () {
    // List of photo filenames in the folder
    const chill_photos = [
        'image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg', 'image6.jpg', 'image7.jpg', 'image8.jpg', 'image9.jpg', 'image10.jpg', 'image11.jpg', 'image12.jpg', 'image13.jpg', 'image14.jpg', 'image15.jpg', 'image16.jpg', 'image17.jpg', 'image18.jpg', 'image19.jpg', 'image20.jpg', 'image21.jpg', 'image22.jpg', 'image23.jpg', 'image24.jpg', 'image25.jpg', 'image26.jpg'
    ];

    const eng_photos = [
        'image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg', 'image6.jpg', 'image7.jpg', 'image8.jpg', 'image9.jpg', 'image10.jpg', 'image11.jpg', 'image12.jpg', 'image13.jpg', 'image14.jpg', 'image15.jpg', 'image16.jpg', 'image17.jpg', 'image18.jpg', 'image19.jpg', 'image20.jpg', 'image21.jpg', 'image22.jpg', 'image23.jpg'
    ]

    // Function to shuffle the array
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Shuffle the photos array
    shuffle(chill_photos);
    const indicatorsContainer = document.getElementById('carousel-indicators');
    const innerContainer = document.getElementById('carousel-inner');

    chill_photos.forEach((photo, index) => {
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
        img.src = `./assets/images/gallery/chill_photos/${photo}`;
        img.alt = `Photo ${index + 1}`;
        img.className = 'd-block w-100';
        img.setAttribute('onclick', 'util.modal(this)');
        item.appendChild(img);
        innerContainer.appendChild(item);
    });

    shuffle(eng_photos);
    const indicatorsContainer2 = document.getElementById('carousel-indicators-2');
    const innerContainer2 = document.getElementById('carousel-inner-2');

    eng_photos.forEach((photo, index) => {
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
        indicatorsContainer2.appendChild(indicator);

        // Create carousel item
        const item = document.createElement('div');
        item.className = `carousel-item${index === 0 ? ' active' : ''}`;
        const img = document.createElement('img');
        img.src = `./assets/images/gallery/eng_photos/${photo}`;
        img.alt = `Photo ${index + 1}`;
        img.className = 'd-block w-100';
        img.setAttribute('onclick', 'util.modal(this)');
        item.appendChild(img);
        innerContainer2.appendChild(item);
    });

});