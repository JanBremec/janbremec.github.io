# Privacy Policy for Infinite Minesweeper: Premium

**Effective Date:** January 20, 2026  
**Last Updated:** January 20, 2026

**Developer:** Jan Bremec  
**Developer Name:** Nexpeer  
**Contact Email:** nexpeer@gmail.com  
**App Name:** Infinite Minesweeper: Premium

---

## 1. Introduction

Thank you for choosing Infinite Minesweeper: Premium ("the App"). This Privacy Policy explains how we collect, use, store, and protect your information when you use our mobile application.

**Note on "Premium" and Ads:** While the app is titled "Premium," it is supported by optional rewarded video advertisements (watch an ad to revive after game over). The app does not charge for download or in-app purchases, but displays ads for monetization. This is fully disclosed in app store listings.

We are committed to protecting your privacy and ensuring transparency about our data practices. By using the App, you agree to the collection and use of information in accordance with this policy.

---

## 2. Information We Collect

### 2.1 Information You Provide Directly

**Optional Account Information:**
- **Display Name:** If you choose to set a custom username (default is auto-generated "MINER #XXXX")
- **Email Address:** Only if you sign in with Google or create an email/password account
- **Profile Photo:** Only if you sign in with Google

**Note:** You can use the App with anonymous authentication, which does not collect directly identifying information such as your name or email address. However, anonymous authentication still creates a unique user identifier (Firebase UID) which is considered personal data under GDPR and other privacy laws.

### 2.2 Automatically Collected Information

**Game Progress Data (Local and Cloud):**
- Experience points (XP) and user level
- Game statistics (endless mode high score, classic games solved, tiles uncovered, flags placed)
- Campaign level progress
- Game save states (for resuming games)
- Achievement and streak data
- Master League points and tier
- Daily challenge completions
- Academy/tutorial progress

**Device and Technical Information (Collected by Third Parties):**
- Device type and model (collected by Unity Ads)
- Operating system version (collected by Unity Ads)
- Device push notification token (collected by Firebase Cloud Messaging)
- Installation-specific ID (collected by Unity Ads)

**App Preferences (Local Only):**
- App preferences (theme, sound, haptics, visual settings) - stored locally on device

### 2.3 Information from Third-Party Services

When you use optional sign-in methods:

**Google Sign-In:**
- Email address
- Display name
- Profile photo URL

This information is provided directly by Google when you authorize the connection.

---

## 3. How We Use Your Information

We use the collected information for the following purposes:

### 3.1 Core App Functionality
- Saving and syncing game progress across devices
- Displaying leaderboards and rankings
- Managing user accounts and authentication
- Resuming games from saved states
- Tracking achievements and streaks

### 3.2 Social Features
- Enabling friend connections
- Displaying friend leaderboards
- Allowing user search by display name

### 3.3 Notifications
- Sending push notifications for daily challenge reminders
- Notifying about tournament events
- Sending achievement unlock notifications

### 3.4 Monetization
- Displaying rewarded video advertisements
- Enabling ad-supported game revival feature

**We do NOT:**
- Sell your personal information to third parties
- Use your data for purposes other than those described in this policy
- Track you across third-party websites or apps

---

## 4. How We Store Your Information

### 4.1 Local Storage
The following data is stored locally on your device using SharedPreferences:
- User profile and game statistics
- App preferences and settings
- Game save states
- Achievement progress

This data remains on your device and is not automatically transmitted to our servers unless you are signed in (anonymous or authenticated) and have internet connectivity.

### 4.2 Cloud Storage (Firebase Firestore)
When you use the App with internet connectivity, your game progress is synchronized to Google's Firebase Firestore database:
- User profile (name, level, XP, statistics)
- Endless mode game snapshots
- Leaderboard entries (publicly visible)
- Daily challenge results
- Campaign level progress

**Data Security:**
- All data transmitted to Firebase is encrypted in transit using HTTPS
- Data stored in Firebase is encrypted at rest
- Access to your personal data is restricted to your user account only
- Leaderboards and daily challenge rankings are publicly visible by design

---

## 5. Third-Party Services

We use the following third-party services that may collect information:

### 5.1 Firebase (by Google LLC)

**Services Used:**
- **Firebase Authentication:** User authentication and account management
- **Cloud Firestore:** Cloud database for game data synchronization
- **Firebase Cloud Messaging:** Push notifications

**Data Collected by Firebase:**
- User ID (UID) - including for anonymous users
- Email address (optional, only if you sign in with email or Google)
- Display name (if provided)
- Device push notification token (FCM token)
- Game data you generate (game progress, statistics, leaderboard entries)

**Firebase Privacy Policy:** https://firebase.google.com/support/privacy

### 5.2 Unity Ads (by Unity Technologies ApS)

**Purpose:** Display rewarded video advertisements (watch ad to revive after game over)

**Data Collected by Unity Ads:**
- Device information (model, OS version)
- Installation-specific identifier
- Ad interaction data (views, clicks, completions)

**Ad Personalization and Consent:**
- **Default:** Non-personalized ads are shown by default (based only on context, not user data)
- **Personalized Ads:** Unity Ads may request consent to show personalized ads based on device identifiers
- **Under Age 13:** Non-personalized ads only (no tracking for children)
- **Opt-Out:** You can opt out of personalized advertising through device settings:
  - **Android:** Settings > Google > Ads > Opt out of Ads Personalization

**GDPR/EEA Users:** Personalized ads require explicit consent. If consent is not provided, only contextual (non-personalized) ads are shown.

**Unity Ads Privacy Policy:** https://unity.com/legal/privacy-policy  
**Unity Ads Opt-Out:** https://unity.com/legal/privacy-policy#optout

### 5.3 Google Sign-In

**Purpose:** Optional authentication method

**Data Collected:**
- Email address
- Display name
- Profile photo URL

This information is obtained directly from your Google account with your explicit consent.

**Google Privacy Policy:** https://policies.google.com/privacy

---

## 6. Data Sharing and Disclosure

### 6.1 Public Information

The following information is publicly visible within the App:
- Display names on leaderboards
- Endless mode high scores on leaderboards
- Daily challenge completion times and rankings
- Campaign level progress (on friend leaderboards)

### 6.2 Third-Party Service Providers

We share data with third-party service providers only to the extent necessary to provide App functionality:

| Service Provider | Purpose | Data Shared |
|-----------------|---------|-------------|
| Google (Firebase) | Authentication, database, notifications | User ID, email (optional), game data, device tokens |
| Unity Technologies | Ad monetization | Device identifiers, ad interactions |

### 6.3 Legal Requirements

We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., court orders, subpoenas, government investigations).

### 6.4 Business Transfers

In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity. We will notify you via email and/or prominent notice in the App before your information is transferred.

**We do NOT:**
- Sell your personal information to data brokers or advertisers
- Share your information for marketing purposes unrelated to the App
- Provide your information to third parties for their own commercial use

---

## 7. Data Retention

### 7.1 Local Data
- Data stored locally on your device is retained until you uninstall the App or manually clear the app data
- You can clear local data at any time through your device's app settings

### 7.2 Cloud Data
- Firebase data is retained for as long as your account is active or until you request deletion
- When you delete your account or request data deletion, your data is removed from Firebase within 30 days
- Anonymized leaderboard entries may be retained for historical ranking integrity

### 7.3 Unity Ads
- Unity Ads retains data in accordance with their privacy policy (typically 90 days for ad interaction data)

---

## 8. Your Rights and Choices

You have the following rights regarding your personal information:

### 8.1 Access and Portability
You can view your data within the App (profile statistics, progress, settings). To request a copy of your data stored in Firebase, contact us at nexpeer@gmail.com.

### 8.2 Correction
You can update your display name at any time within the App settings.

### 8.3 Deletion
- **Local Data:** Clear app data through your device settings or uninstall the App
- **Cloud Data & Account Deletion:** Email **nexpeer@gmail.com** to request deletion of your account and all associated cloud data. We will delete your Firebase data within 30 days of verification.
- **What Gets Deleted:** User profile, game statistics, leaderboard entries, saved game states, and all personal information

### 8.4 Opt-Out of Personalized Advertising
You can opt out of personalized ads:
- **Android:** Settings > Google > Ads > Opt out of Ads Personalization
- Ads will still be shown, but they will not be personalized based on your data

### 8.5 Push Notifications
You can disable push notifications at any time through your device settings:
- **Android:** Settings > Apps > Infinite Minesweeper > Notifications

### 8.6 Anonymous Usage
You can use the App without creating an account or signing in. Game progress will be saved locally, but will not sync across devices.

---

## 9. Children's Privacy

The App is rated for users aged **13 and older**. We do not knowingly collect personal information from children under 13.

**Age Restrictions:**
- Google Play age rating: **Teen (13+)**
- Unity Ads is configured to serve **non-personalized ads only** to users under 13 (if age is detected)
- No targeted advertising or behavioral tracking for minors

**If you are a parent or guardian and become aware that your child has provided us with personal information, please contact us at nexpeer@gmail.com.** We will delete any data from children under 13 within 30 days of verification.

**Note:** While the app does not implement an age gate at launch, the app store age ratings restrict downloads to appropriate age groups.

---

## 10. International Data Transfers

Your information may be transferred to and processed in countries other than your own, including the United States and other countries where Google (Firebase) and Unity Technologies operate data centers.

These countries may have data protection laws that are different from the laws of your country. By using the App, you consent to the transfer of your information to these countries.

**For Users in the European Economic Area (EEA):**
- Google (Firebase) complies with the EU-U.S. Data Privacy Framework
- Unity Ads is GDPR-compliant
- We ensure that appropriate safeguards are in place for international data transfers

---

## 11. Security

We take the security of your information seriously and implement appropriate technical and organizational measures:

### 11.1 Encryption
- All data transmitted over the internet (to Firebase, Unity Ads) is encrypted using HTTPS/TLS
- Firebase data is encrypted at rest on Google's servers

### 11.2 Authentication
- Firebase Authentication uses industry-standard security practices
- Passwords (if used) are hashed and never stored in plain text

### 11.3 Access Controls
- Your personal data in Firebase can only be accessed by your authenticated user account
- We follow the principle of least privilege for data access

**However, please note that no method of electronic transmission or storage is 100% secure.** While we strive to protect your information, we cannot guarantee absolute security.

---

## 12. Changes to This Privacy Policy

We may update this Privacy Policy from time to time. When we do:
- We will update the "Last Updated" date at the top of this policy
- We will notify you of significant changes via:
  - In-app notification
  - Email notification (if you provided an email address)
  - Prominent notice on our app store listing

**Your continued use of the App after changes are posted constitutes your acceptance of the updated Privacy Policy.**

We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.

---

## 13. GDPR Compliance (For EU/EEA Users)

If you are located in the European Economic Area (EEA), you have additional rights under the General Data Protection Regulation (GDPR):

### 13.1 Legal Basis for Processing
We process your personal data based on:
- **Consent:** 
  - When you sign in with Google or email/password authentication
  - When you opt in to personalized advertising (Unity Ads)
  - When you enable push notifications
- **Contractual Necessity:** To provide core app functionality (game progress, leaderboards, cloud sync)
- **Legitimate Interest:** 
  - To display non-personalized contextual ads (ads based on game context, not user tracking)
  - To maintain app security and prevent fraud

**Important:** Personalized ads require explicit consent. By default, only non-personalized ads are shown unless you consent to ad personalization through device settings.

### 13.2 Your GDPR Rights
- **Right to Access:** Request a copy of your personal data
- **Right to Rectification:** Correct inaccurate or incomplete data
- **Right to Erasure ("Right to be Forgotten"):** Request deletion of your data
- **Right to Restrict Processing:** Limit how we use your data
- **Right to Data Portability:** Receive your data in a structured, machine-readable format
- **Right to Object:** Object to processing based on legitimate interests
- **Right to Withdraw Consent:** Withdraw consent at any time (does not affect past processing)

**To exercise these rights, email nexpeer@gmail.com** with your request. For account deletion, we will remove all your data within 30 days.

### 13.3 Data Protection Officer
For GDPR inquiries, contact: nexpeer@gmail.com

### 13.4 Supervisory Authority
You have the right to lodge a complaint with your local data protection authority if you believe we have violated GDPR.

---

## 14. CCPA Compliance (For California Residents)

If you are a California resident, you have rights under the California Consumer Privacy Act (CCPA):

### 14.1 Categories of Personal Information Collected
- **Identifiers:** Email, device IDs
- **Usage Data:** Game statistics, app interactions
- **Device Information:** Device model, OS version

### 14.2 Your CCPA Rights
- **Right to Know:** Request disclosure of what personal information we collect, use, and share
- **Right to Delete:** Request deletion of your personal information
- **Right to Opt-Out of Sale:** We do NOT sell your personal information

**To exercise your CCPA rights, email nexpeer@gmail.com.** For data deletion requests, we will remove all your personal information within 30 days. We will not discriminate against you for exercising your rights.

---

## 15. Contact Us

If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:

**Developer:** Jan Bremec  
**Business Name:** Nexpeer  
**Email:** nexpeer@gmail.com

**For Privacy Requests:**
- Data access requests
- Data deletion requests
- GDPR/CCPA inquiries
- General privacy questions

We aim to respond to all privacy inquiries within 30 days.

---

## 16. Data Controller and Processor Roles

**Data Controller:** Jan Bremec (Nexpeer) is the data controller for personal information collected directly through the App.

**Data Processors:**
- Google LLC (Firebase services)
- Unity Technologies ApS (Unity Ads)

As data processors, these companies process your information on our behalf according to our instructions and their respective privacy policies.

---

## 17. Consent

By downloading, installing, or using Infinite Minesweeper: Premium, you acknowledge that you have read and understood this Privacy Policy.

**For processing that requires consent (such as personalized advertising or optional account features), you provide explicit consent** through:
- Signing in with Google or email/password
- Opting in to personalized ads through device settings
- Enabling push notifications

**You may withdraw your consent at any time** by:
- Uninstalling the App
- Signing out and clearing local data
- Requesting data deletion via nexpeer@gmail.com
- Opting out of personalized ads through device settings

---

## 18. Additional Information

### 18.1 Cookies
The App does not use cookies. However, Firebase and Unity Ads may use similar technologies (device identifiers, tokens) to provide their services.

---

**Thank you for trusting Infinite Minesweeper: Premium. We are committed to protecting your privacy while providing you with an enjoyable gaming experience.**

---

**End of Privacy Policy**

---

## Quick Reference Links

- **Firebase Privacy:** https://firebase.google.com/support/privacy
- **Unity Ads Privacy:** https://unity.com/legal/privacy-policy
- **Google Privacy:** https://policies.google.com/privacy
- **Unity Ads Opt-Out:** https://unity.com/legal/privacy-policy#optout
- **Contact Developer:** nexpeer@gmail.com
