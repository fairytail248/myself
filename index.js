// Navigation toggle functionality
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    });
});

// Skill buttons animation (random delays for organic movement)
document.querySelectorAll('.skill-btn').forEach((btn, index) => {
    btn.style.animationDelay = `${Math.random() * 2}s`;
});

// Video toggle functionality
const introImage = document.querySelector('.intro__img');
const introTitle = document.querySelector('.section__title--intro');
const introSection = document.querySelector('.intro');

// Get video source from data-video attribute or use fallback
const videoSource = introImage?.dataset.video || 'video/project-demo.mp4';

function toggleVideo() {
    if (introImage) {
        // Create video element
        const video = document.createElement('video');
        video.className = 'intro__video';
        video.src = videoSource;
        video.controls = true;
        video.autoplay = true;
        video.loop = true; // Optional: loop the video
        video.style.width = introImage.style.width || '100%'; // Match image dimensions
        video.style.height = introImage.style.height || 'auto';

        // Replace image with video
        introSection.replaceChild(video, introImage);
        
        // Add click event to video to toggle back to image
        video.addEventListener('click', toggleImage);
    }
}

function toggleImage() {
    const video = document.querySelector('.intro__video');
    if (video) {
        const newImage = document.createElement('img');
        newImage.className = 'intro__img';
        newImage.src = 'img/portfolio-01.png'; // Original image source
        newImage.alt = '';
        newImage.dataset.video = videoSource; // Preserve data-video attribute
        newImage.style.width = video.style.width; // Match video dimensions
        newImage.style.height = video.style.height;
        
        // Replace video with image
        introSection.replaceChild(newImage, video);
        
        // Re-attach event listener to the new image
        newImage.addEventListener('click', toggleVideo);
    }
}

// Attach event listeners to image and title
if (introImage) {
    introImage.addEventListener('click', toggleVideo);
}
if (introTitle) {
    introTitle.addEventListener('click', toggleVideo);
}