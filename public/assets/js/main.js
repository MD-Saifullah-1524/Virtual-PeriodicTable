document.addEventListener('click', function(event) {
    const target = event.target.closest('.element_container');
    const iframeContainer = document.getElementById('iframe_container');
    const iframe = document.getElementById('very_short_description');
    const mainContainer = document.querySelector('.main_container'); // Reference to .main_container

    if (iframe && iframeContainer && mainContainer) {
        if (target && target.dataset.file) {
            iframe.src = 'very_short_descriptions/' + target.dataset.file;
            iframeContainer.style.display = 'block';  // Show the container
            iframe.style.display = 'block';  // Show the iframe
            iframeContainer.classList.add('VVS_appear');  // Add animation class
            mainContainer.style.display = 'none';  // Hide the main container
        } else {
            iframeContainer.style.display = 'none';  // Hide the container
            iframe.style.display = 'none';  // Hide the iframe
            iframeContainer.classList.remove('VVS_appear');  // Remove animation class
            mainContainer.style.display = 'block';  // Show the main container
        }
    }
});