document.addEventListener('mouseover', function(event) {
    const target = event.target.closest('#e');  // Find the closest element with id 'e'
    
    if (target && target.dataset.file) {  // Check if the target has a data-file attribute
        const iframe = document.getElementById('very_short_description');  // Find the iframe
        iframe.src = 'very_short_descriptions/' + target.dataset.file;  // Load the respective file
    }
});

document.addEventListener('mouseout', function(event) {
    const target = event.target.closest('#e');  // Check if the target is an element
    
    if (target && target.dataset.file) {
        const iframe = document.getElementById('very_short_description');  // Find the iframe
        iframe.src = '';  // Optionally clear the iframe content
    }
});