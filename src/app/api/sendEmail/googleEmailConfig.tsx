// googleEmailConfig.ts
export const googleEmailConfig = {
    email: process.env.GMAIL_EMAIL,         // Địa chỉ Gmail của bạn
    clientId: process.env.GMAIL_CLIENT_ID,  // Client ID từ Google Cloud Console
    clientSecret: process.env.GMAIL_SECRET, // Client Secret từ Google Cloud Console
    refreshToken: process.env.GMAIL_REFRESH_TOKEN, // Refresh Token cho OAuth2
};
