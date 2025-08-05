# Firebase Setup Guide

## Step 1: Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project"
3. Name it "wander-41a8c" (or your preferred name)
4. Follow the setup wizard

## Step 2: Enable Firestore Database
1. In your Firebase project, go to "Firestore Database"
2. Click "Create database"
3. Choose "Start in test mode" (we'll secure it later)
4. Select a location (us-central1 is good for US)

## Step 3: Get Your Config
1. Go to Project Settings (gear icon)
2. Scroll down to "Your apps"
3. Click the web app icon (</>)
4. Register your app with nickname "Wander Web"
5. Copy the config object

## Step 4: Set Environment Variables
Create a `.env.local` file in your project root:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

## Step 5: Update Firestore Security Rules ⚠️ IMPORTANT

**This is likely causing your 400 errors!** Go to Firestore Database → Rules and replace with:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read/write access to all users under any document
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```

**⚠️ WARNING:** These rules allow anyone to read/write. For production, you'll want more restrictive rules.

## Step 6: Install Dependencies
```bash
npm install firebase
```

## Step 7: Test
1. Restart your development server
2. Try submitting a review
3. Check Firebase Console → Firestore Database to see if data appears

## Production Security Rules (for later)
When you're ready to deploy, use more restrictive rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /reviews/{reviewId} {
      allow read: if true;
      allow write: if request.auth != null || true; // Allow anonymous writes for now
    }
  }
}
``` 