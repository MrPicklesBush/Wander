# Deploying Wander to Render

## Prerequisites
- A Render account (free tier available)
- Your project pushed to a Git repository (GitHub, GitLab, etc.)

## Deployment Steps

### 1. Connect to Render
1. Go to [render.com](https://render.com) and sign up/login
2. Click "New +" and select "Web Service"
3. Connect your Git repository (GitHub, GitLab, etc.)

### 2. Configure the Web Service
- **Name**: `wander-ratemyhood` (or your preferred name)
- **Environment**: `Node`
- **Build Command**: `npm install && npm run build`
- **Start Command**: `npm start`
- **Plan**: Free (or choose a paid plan for better performance)

### 3. Environment Variables
Add these environment variables in Render dashboard:
- `NODE_ENV`: `production`

### 4. Deploy
1. Click "Create Web Service"
2. Render will automatically build and deploy your app
3. Your app will be available at the provided URL

## Important Notes
- The free tier has limitations but is perfect for testing
- Your app will sleep after 15 minutes of inactivity (free tier)
- First request after sleep may take 30-60 seconds to wake up

## Troubleshooting
- Check build logs if deployment fails
- Ensure all dependencies are in `package.json`
- Verify Firebase configuration is correct for production

## Custom Domain (Optional)
- In Render dashboard, go to your service settings
- Add your custom domain under "Custom Domains"
- Configure DNS as instructed by Render 