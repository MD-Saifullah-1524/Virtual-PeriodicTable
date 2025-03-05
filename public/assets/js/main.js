document.addEventListener('click', function(event) {
    const target = event.target.closest('.element_container');
    const iframeContainer = document.getElementById('iframe_container');
    const iframe = document.getElementById('very_short_description');

    if (iframe && iframeContainer) {
        if (target && target.dataset.file) {
            iframe.src = 'very_short_descriptions/' + target.dataset.file;
            iframeContainer.style.display = 'block';  // Show the container
            iframe.style.display = 'block';  // Show the iframe
        } else {
            iframeContainer.style.display = 'none';  // Hide the container
            iframe.style.display = 'none';  // Hide the iframe
        }
    }
});