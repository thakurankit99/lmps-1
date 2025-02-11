// Get references to the button and iframe
const switch360Button = document.getElementById('Switch360');
const mapIframe = document.querySelector('.google-map iframe'); // Get the iframe within the container

// Iframe URLs
const mappedInURL = "https://app.mappedin.com/map/66484e878004177ee42bcf68";
const healthCenterURL = "https://iitm360.ankitthakur.eu.org/?media-index=4";

let currentIframe = mappedInURL; // Track the current iframe 

switch360Button.addEventListener('click', () => {
    // Show loading message
    document.getElementById('loadingMessage').style.display = 'block';

    // Toggle between the two iframe URLs
    if (currentIframe === mappedInURL) {
        mapIframe.src = healthCenterURL;
        currentIframe = healthCenterURL;
    } else {
        mapIframe.src = mappedInURL;
        currentIframe = mappedInURL;
    }
});

// Event listener for when the iframe has finished loading
mapIframe.onload = function() {
    // Hide loading message
    document.getElementById('loadingMessage').style.display = 'none';
};