# Privacy Policy for MangaOCR Translator
**Last Updated: June 2026**

Welcome to MangaOCR Translator! Your privacy is critically important to us. This Privacy Policy outlines how the MangaOCR Chrome Extension ("we", "our", or "the Extension") handles your information to strictly comply with Google Chrome Web Store User Data Privacy policies. 

In accordance with Google's requirements, this policy explicitly details our practices regarding the **collection, handling, storage, and sharing** of user data, as well as the permissions requested by the extension.

---

## 1. Extension Permissions & Justification
To function correctly, the extension requests the following permissions. Here is how they are used and how they relate to your privacy:

*   **`<all_urls>` (Access to all websites):** This permission is required so you can use the translation tool on any manga-reading website. **We DO NOT monitor, track, or collect your web browsing history.** The extension remains dormant until you actively invoke it (e.g., clicking the extension icon or using the keyboard shortcut) and manually select an area to translate.
*   **`identity`:** Used to facilitate secure sign-in via your Google account, allowing you to access your translation quotas and premium features.
*   **`storage`:** Used to save your local extension settings (e.g., preferred target language).

## 2. Data Collection
We collect the bare minimum amount of data required to provide our translation services:

*   **Authentication & Account Data:** When you sign in, we collect your email address and generate a unique User ID. 
*   **User-Generated Content (Cropped Images):** When you actively select a speech bubble on a webpage to translate, we temporarily collect the specific cropped image of that selection.
*   **What we DO NOT collect:** We absolutely do not collect your browsing history, the URLs of the web pages you visit, the manga you read, your search queries, or your financial/credit card details.

## 3. Data Handling (How we use your data)
We only use the data we collect for the sole purpose of operating the extension:

*   **Image Processing:** The cropped images you manually select are transmitted exclusively to our secure backend API to perform Optical Character Recognition (OCR) and text translation. 
*   **Account Management:** Your email address and User ID are used strictly to manage your account, authenticate your login, track your daily translation limits, and verify your Premium subscription status.
*   **Payments:** All subscription and payment processing is handled entirely by our merchant of record (Lemon Squeezy). We do not handle, process, or see your financial information.

## 4. Data Storage
We are committed to keeping your data secure and minimizing data retention:

*   **Account Data Storage:** Your email address, User ID, and quota usage statistics are stored securely using **Supabase**, a cloud database provider with strict access controls and row-level security. Your data is kept only as long as your account is active.
*   **Local Storage (No Cookies):** We use Chrome's Local Storage mechanism exclusively to store your app preferences (like target language) and authentication tokens locally on your device. We DO NOT use cookies, trackers, or any third-party analytics (like Google Analytics/Meta Pixels) to track your web activity across sites.
*   **Image Storage (Zero Retention):** **We do NOT store, log, or save any images you process.** Cropped images sent to our server are processed entirely in-memory and are instantaneously and permanently discarded by our server the moment the translated text is returned to your browser. 
*   **Security:** We transmit all data (including images and account data) over secure, encrypted connections (HTTPS/SSL).

## 5. Data Sharing & Limited Use Disclosure
We **do not** sell, rent, or trade your personal information to any third parties for marketing, advertising, or any other purposes. We only share data with the following trusted third-party service providers strictly necessary for the extension to function:

*   **Supabase:** We share your email and authentication state with Supabase to provide secure login and database management.
*   **Google Gemini API:** We transmit the cropped images to the Google Gemini API solely for the purpose of executing the OCR and translation. Google processes these API requests under enterprise terms, meaning your data is **not** used to train their public AI models.
*   **Lemon Squeezy:** If you upgrade to a Premium plan, your email is shared with Lemon Squeezy to process your transaction and manage your subscription.

**Limited Use Compliance:**
The MangaOCR Translator extension's use and transfer to any other app of information received from Google APIs will adhere to the [Chrome Web Store User Data Policy](https://developer.chrome.com/docs/webstore/user_data/), including the Limited Use requirements. 
Specifically, we affirm that:
1. We do not use or transfer your data to determine creditworthiness or for lending purposes.
2. We do not use or transfer your data for purposes that are unrelated to the item's core functionality.
3. We do not sell your data to third parties.

## 6. User Rights & Data Deletion
You have the right to access, modify, or delete your personal data at any time. If you wish to delete your account and have all associated email and quota data permanently removed from our database, please contact us using the email below.

## 7. Children's Privacy (COPPA)
Our extension is not directed to children under the age of 13 (or 16 in certain jurisdictions), and we do not knowingly collect personal information from children. If we become aware that we have inadvertently received personal information from a visitor under the designated age, we will delete the information from our records immediately.

## 8. Contact Us
If you have any questions, concerns, or data deletion requests regarding this Privacy Policy, please contact the developer at:
**hle019dn@gmail.com**
