document.addEventListener('click', function(event) {
    const target = event.target.closest('.element_container');
    const iframeContainer = document.getElementById('iframe_container');
    const iframe = document.getElementById('very_short_description');
    const mainContainer = document.querySelector('.main_container'); // Reference to .main_container

    if (iframe && iframeContainer) {
        if (target && target.dataset.file) {
            // Show iframe as overlay while keeping main container visible
            iframe.src = 'very_short_descriptions/template.html?element=' + target.dataset.file.replace('.htm','');
            iframeContainer.style.display = 'block';  // Show the container
            iframe.style.display = 'block';  // Show the iframe
            iframeContainer.classList.add('VVS_appear');  // Add animation class
            // Keep mainContainer visible (remove the line that hides it)
        } else {
            // Hide iframe overlay when clicking outside elements
            iframeContainer.style.display = 'none';  // Hide the container
            iframe.style.display = 'none';  // Hide the iframe
            iframeContainer.classList.remove('VVS_appear');  // Remove animation class
            // mainContainer stays visible (no need to explicitly show it)
        }
    }
});
