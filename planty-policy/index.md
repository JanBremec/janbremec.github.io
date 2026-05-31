# Planty

Last updated: 1 June 2026

Developer: Nexpeer
Contact: nexpeer@gmail.com

Planty is a playful plant care companion app for identifying plants and diseases, tracking your collection, keeping a plant journal, managing shared plants with friends, and unlocking rewards as you care for your plants.

This document combines the app overview, Google Play Data Safety summary, Privacy Policy, and Terms and Conditions in one place so it can be reused for publishing and review.

## App Overview

Planty currently includes these core features:

- Plant identification using up to 5 photos.
- Plant disease analysis with follow-up guidance.
- Personal plant tracking with care schedules, streaks, and XP.
- A plant journal that stores discovered plants and milestones.
- Shared plants for collaborating with friends.
- Friends, referrals, rewards, titles, and badges.
- Optional weather-based care context.
- Premium subscription plans processed through Stripe.

Planty uses Firebase Auth, Firestore, Firebase Storage, Google Sign-In, SharedPreferences, Pl@ntNet, Open-Meteo, Stripe, and an AI relay for plant and disease guidance.

## Google Play Data Safety Summary

The details below reflect the app's current behavior and should match the answers in Google Play Console.

| Data type | Examples | Collected | Purpose | Shared with |
| --- | --- | --- | --- | --- |
| Personal info | Name, email, Firebase user ID, avatar, referral code, subscription status | Yes | Account setup, login, referrals, subscriptions, profile display | Firebase Auth/Firestore, Google Sign-In, Stripe |
| Photos and videos | Plant photos, journal photos, avatar images, garden backgrounds | Yes | Plant identification, journal history, profile and garden customization, shared plant features | Firebase Storage, Pl@ntNet, other members when content is shared |
| Location | Optional plant location text, optional precise coordinates when permission is granted | Yes, optional | Weather context, discovery metadata, plant care context | Open-Meteo, Firebase when saved |
| App activity | Care logs, streaks, XP, rewards, discovery count, notifications, friend relationships, shared plant activity | Yes | Core app functionality, progress tracking, collaboration | Firebase Firestore |
| Financial info | Subscription checkout metadata and purchase status | Yes | Premium plan purchases and subscription management | Stripe, Firebase |
| Device or other IDs | Firebase-generated IDs, app-generated IDs | Yes | Authentication, syncing, content linking, referrals | Firebase |

Planty does not intentionally use your data for advertising, does not sell personal data, and does not request background location or access to your device contacts.

## Privacy Policy

This Privacy Policy explains how Planty collects, uses, shares, and protects information when you use the app.

### 1. Information We Collect

We collect information in the following ways:

- Information you provide directly, such as your name, email address, profile choices, plant names, species names, captions, notes, and referral information.
- Plant photos and other images you choose to upload or save, including photos used for plant identification, journal entries, avatars, and garden backgrounds.
- Location information if you choose to enable it or save it in the app, including optional precise coordinates and plant location labels.
- App activity such as plant care actions, discovery count, streaks, XP, badges, titles, shared plant membership, friend relationships, and notification records.
- Subscription and purchase-related information, such as plan status and Stripe checkout metadata.
- Device or app-generated identifiers used for authentication, syncing, or linking your content across features.

We also store some data locally on your device using SharedPreferences so the app can work offline and load faster.

### 2. How We Use Information

We use collected information to:

- Create and manage your account.
- Identify plants and provide disease guidance.
- Save and sync your plants, journal entries, shared plants, and profile information.
- Show care reminders, streaks, rewards, and progress.
- Support friends, referrals, and public garden features.
- Process premium subscriptions through Stripe.
- Provide weather context for plant care.
- Detect and prevent abuse, fraud, and unauthorized access.

### 3. How We Share Information

We share information only as needed to operate Planty:

- Firebase Auth, Firestore, and Storage are used to authenticate users, store cloud data, and upload shared images.
- Google Sign-In is used when you choose to sign in with Google.
- Pl@ntNet receives the plant photos you submit for plant identification.
- The AI relay used by Planty receives plant or disease prompts and host-plant context when you request plant or disease guidance.
- Open-Meteo may receive location coordinates when weather data is requested.
- Stripe processes subscription checkout and payment-related data.
- Other users may see the content you intentionally share through friends, shared plant groups, or a public garden profile.

We do not sell your personal data.

### 4. Data Retention

- Personal plants and journal entries are cached locally on your device for offline support.
- Shared plant data, user profiles, and notification records may be stored in Firebase while your account remains active.
- If you log out, Planty clears the local account, plant, and journal cache stored on the device.
- If you delete your account, we will remove or de-identify cloud data where technically and legally possible. Some information may remain temporarily in backups or logs.

### 5. Security

We use reasonable administrative, technical, and organizational safeguards designed to protect your information. No method of storage or transmission is completely secure, so we cannot guarantee absolute security.

### 6. Children's Privacy

Planty is not directed to children under 13, and we do not knowingly collect personal information from children under 13. If you believe a child has provided personal information, contact us at nexpeer@gmail.com so we can review the request.

### 7. Your Choices

You can control your data in the following ways:

- Edit selected profile information in the app.
- Remove plants, journal entries, and shared content you created.
- Disable camera or location permissions at the device level.
- Log out to clear locally cached app data.
- Request account deletion from Settings or by emailing nexpeer@gmail.com.

### 8. International Data Transfers

Planty may use service providers located in different countries. When data is transferred internationally, it may be processed under the providers' own security and privacy practices.

### 9. Changes to This Policy

We may update this Privacy Policy from time to time. If we make material changes, we will update the date at the top of this document and, where appropriate, provide additional notice in the app.

### 10. Contact

For privacy questions, data deletion requests, or support, email nexpeer@gmail.com.

## Terms and Conditions

These Terms and Conditions govern your use of Planty.

### 1. Acceptance of Terms

By downloading, installing, or using Planty, you agree to these Terms and to any future updates. If you do not agree, do not use the app.

### 2. Eligibility and Accounts

You must be at least 13 years old, or the minimum age required to consent to digital services in your region, to use Planty. You are responsible for the information in your account and for keeping your login credentials secure.

### 3. App Content and User Content

Planty lets you create, upload, and store content such as photos, captions, plant details, care logs, journal entries, names, and profile information. You retain ownership of your content.

By submitting content to Planty, you grant us a limited, non-exclusive, worldwide license to host, store, process, display, and transmit that content only as needed to operate, improve, and provide the app's features.

You are responsible for making sure you have the rights to the content you upload and share.

### 4. AI and Identification Results

Planty provides plant identification, disease information, and care guidance using automated and third-party services.

You acknowledge and agree that:

- Identification results may be inaccurate, incomplete, or delayed.
- Disease guidance is informational only and is not a substitute for professional horticultural, agricultural, or veterinary advice.
- Toxicity, safety, and care recommendations should be verified before you act on them.
- You remain responsible for your own decisions about plant care.

### 5. Subscriptions and Billing

Planty may offer recurring subscriptions such as Blossom and Thrive through Stripe or another payment processor.

If you purchase a subscription:

- Billing may recur until you cancel.
- You are responsible for canceling before the next billing date if you do not want renewal.
- Prices and feature availability may change over time.
- Refunds are handled only as required by law or by the payment provider's policies.

Payment details are processed by the payment provider. Planty does not intend to store your full card number.

### 6. Acceptable Use

You agree not to:

- Use Planty in violation of any law or regulation.
- Upload content that is unlawful, abusive, harassing, harmful, defamatory, or infringing.
- Attempt to reverse engineer, disrupt, or interfere with the app or its services.
- Misuse shared plant, friend, referral, or notification features.
- Impersonate another person or submit false information.

We may suspend or terminate access if we believe the app is being misused or if your conduct creates risk to Planty or other users.

### 7. Third-Party Services

Planty depends on third-party services to provide some features, including Firebase, Google Sign-In, Pl@ntNet, Open-Meteo, Stripe, and the AI relay used for plant guidance.

Your use of those services may also be subject to their own terms and privacy policies.

### 8. Deletion and Termination

You may stop using Planty at any time. You can also request account deletion from the Settings screen or by emailing nexpeer@gmail.com.

When your account is deleted, we will remove or de-identify data where technically and legally possible. Some data may remain in backups, logs, or records required by law or security.

### 9. Disclaimers

Planty is provided on an "as is" and "as available" basis. To the maximum extent permitted by law, we disclaim warranties of merchantability, fitness for a particular purpose, and non-infringement.

We do not guarantee that the app will be uninterrupted, secure, error-free, or that all identification and care guidance will be correct.

### 10. Limitation of Liability

To the maximum extent permitted by law, Planty and its operators will not be liable for indirect, incidental, special, consequential, or punitive damages, or for losses arising from your use of or reliance on the app.

### 11. Changes to These Terms

We may update these Terms from time to time. Continued use of Planty after an update means you accept the revised Terms.

### 12. Contact

For questions about these Terms, privacy requests, or account deletion, email nexpeer@gmail.com.
