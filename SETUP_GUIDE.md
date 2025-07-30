# Setup Guide for Cross-Device Data Storage

## Problem Solved
The previous localStorage solution only stored data locally in each browser/device. This meant:
- Requests from your phone weren't visible on your computer
- Data wasn't persistent across different devices
- No centralized storage for all purchase requests

## Solution: JSONBin.io
We're now using JSONBin.io, a free JSON storage service that provides:
- ✅ Cross-device data synchronization
- ✅ Persistent storage across all devices
- ✅ Real-time updates
- ✅ Free tier with generous limits

## Setup Steps

### 1. Create JSONBin.io Account
1. Go to [https://jsonbin.io/](https://jsonbin.io/)
2. Click "Sign Up" and create a free account
3. Verify your email address

### 2. Create a New Bin
1. After logging in, click "Create New Bin"
2. Name it something like "TheoBot Purchase Requests"
3. In the JSON content, add an empty array: `[]`
4. Click "Create"

### 3. Get Your API Key
1. Go to your account settings
2. Copy your "Master Key" (it starts with `$2a$10$`)

### 4. Update Configuration
1. Open `config.js` in your website folder
2. Replace the placeholder values:

```javascript
const CONFIG = {
    JSONBIN_API_KEY: '$2a$10$YOUR_ACTUAL_API_KEY_HERE', // Replace with your actual API key
    JSONBIN_BIN_ID: 'YOUR_ACTUAL_BIN_ID_HERE', // Replace with your actual bin ID
    JSONBIN_URL: 'https://api.jsonbin.io/v3/b'
};
```

### 5. Find Your Bin ID
1. After creating the bin, look at the URL
2. It will be something like: `https://jsonbin.io/v3/b/64f8a2b1c5e9f4c6b8a1b2c3`
3. The last part (`64f8a2b1c5e9f4c6b8a1b2c3`) is your Bin ID

### 6. Test the Setup
1. Upload all files to Netlify
2. Submit a test purchase request from your phone
3. Check the admin panel on your computer
4. You should now see the request!

## How It Works
- When users submit purchase requests, they're stored in JSONBin.io
- The admin dashboard fetches data from the same JSONBin.io storage
- All devices access the same centralized data
- Real-time synchronization across all devices

## Security
- Your API key is stored in the frontend (config.js)
- For production use, consider using environment variables
- JSONBin.io provides HTTPS encryption for all data

## Troubleshooting
- If requests aren't showing up, check your API key and Bin ID
- Make sure the Bin ID is correct (no extra spaces)
- Check browser console for any error messages
- Verify your JSONBin.io account is active

## Benefits
- ✅ Cross-device synchronization
- ✅ Persistent storage
- ✅ Real-time updates
- ✅ No server setup required
- ✅ Free tier available
- ✅ Reliable and fast

Now your purchase requests will be visible across all devices! 