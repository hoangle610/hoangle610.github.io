# MangaOCR Translator Privacy Policy

**Last Updated:** June 2026

Welcome to MangaOCR Translator. Your privacy is critically important to us. This Privacy Policy outlines how the MangaOCR Chrome Extension ("we", "our", or "the Extension") collects, handles, stores, and shares your information. This policy is written to strictly comply with the Google Chrome Web Store User Data Privacy policies.

## 1. Extension Permissions & Justification
To function correctly, the extension requests the following permissions. 
*   **`<all_urls>` (Access to all websites):** Required to capture and translate manga/text on any website you visit. The extension is dormant until manually invoked by the user.
*   **`identity`:** Required to facilitate secure sign-in via your Google account for quotas and premium features.
*   **`storage`:** Required to save your local extension settings (e.g., preferred target language) on your device.

## 2. User Data Collection
We collect only the bare minimum amount of data required to provide our services. The types of data we collect are:
*   **Personally Identifiable Information (PII):** When you sign in, we collect your email address.
*   **Authentication Information:** We generate and collect a unique User ID and authentication state when you log in.
*   **Website Content (User-Generated):** When you actively select a speech bubble or text area on a webpage, we temporarily collect the specific cropped image of that selection to translate it.
*   *What we DO NOT collect:* We do not monitor, track, or collect your web browsing history, search queries, the URLs you visit, or your financial/credit card details.

## 3. Data Handling and Usage
We strictly use the collected data for the sole purpose of operating the extension's core features:
*   **Image Processing:** The cropped images (Website Content) are transmitted securely to our backend to perform Optical Character Recognition (OCR) and text translation.
*   **Account Management:** Your email address and User ID are used strictly to manage your account, authenticate logins, track daily translation limits, and verify Premium subscription status.

## 4. Data Storage and Retention
We are committed to data minimization and secure storage:
*   **Zero Image Retention:** We do **NOT** store, log, or save any images you process. Cropped images sent to our server are processed entirely in-memory and are permanently discarded immediately after the translated text is returned.
*   **Account Data Storage:** Your email address, User ID, and quota statistics are stored securely in our cloud database (Supabase) using strict access controls. This data is retained only as long as your account remains active.
*   **Security:** All data is transmitted over secure, encrypted connections (HTTPS/SSL).

## 5. Data Sharing and Third Parties
We do not sell, rent, trade, or transfer your personal data to any unauthorized third parties for marketing, advertising, or any other purposes. 

We **only** share your data with the following essential third-party service providers required for the extension to function:
1.  **Supabase:** We share your email and authentication state to provide secure login and database management.
2.  **Google Gemini API:** We transmit the cropped images to the Google Gemini API solely to execute the OCR and translation. (Google processes these API requests under enterprise terms; your data is not used to train public AI models).
3.  **Lemon Squeezy:** If you upgrade to a Premium plan, your email address is shared with Lemon Squeezy to process your transaction and manage your subscription.

## 6. Limited Use Disclosure
The MangaOCR Translator extension's use and transfer to any other app of information received from Google APIs will adhere to the Chrome Web Store User Data Policy, including the Limited Use requirements.

## 7. User Rights & Data Deletion
You have the right to access, modify, or delete your personal data at any time. If you wish to delete your account and have all associated email and quota data permanently removed from our database, please contact us at the email provided below.

## 8. Contact Us
If you have any questions, concerns, or data deletion requests, please contact the developer at: hle019dn@gmail.com
