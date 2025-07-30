// Configuration for JSONBin.io storage
const CONFIG = {
    JSONBIN_API_KEY: '$2a$10$$2a$10$8PZ2/XKleazeAypDa7P6zukUR/Pk2Eay07guUQAWc1aJwbfk28Ij2', // You'll need to replace this with your actual API key
    JSONBIN_BIN_ID: '688a2dacae596e708fbe4d60 ', // You'll need to replace this with your actual bin ID
    JSONBIN_URL: 'https://api.jsonbin.io/v3/b'
};

// Function to get the full URL for the bin
function getBinUrl() {
    return `${CONFIG.JSONBIN_URL}/${CONFIG.JSONBIN_BIN_ID}`;
}

// Function to get headers for API requests
function getHeaders() {
    return {
        'Content-Type': 'application/json',
        'X-Master-Key': CONFIG.JSONBIN_API_KEY,
        'X-Bin-Meta': 'false'
    };
} 