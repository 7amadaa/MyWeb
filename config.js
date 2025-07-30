// Configuration for JSONBin.io storage
const CONFIG = {
    JSONBIN_API_KEY: '$2a$10$8PZ2/XKleazeAypDa7P6zukUR/Pk2Eay07guUQAWc1aJwbfk28Ij2',
    JSONBIN_BIN_ID: '688a35567b4b8670d8a9e718',
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
        'X-Master-Key': CONFIG.JSONBIN_API_KEY
    };
} 