# AWS Amplify Deployment Guide

This guide will walk you through deploying your Next.js portfolio website to AWS Amplify.

## Prerequisites Checklist
- [ ] All code committed and pushed to GitHub repository
- [ ] AWS account created (or ready to create)
- [ ] Custom domain purchased (if using custom domain)
- [ ] Access to domain DNS settings

## Step 1: AWS Account Setup

1. **Create AWS Account**
   - Go to https://aws.amazon.com/
   - Click "Create an AWS Account"
   - Follow the registration process
   - Complete email and phone verification
   - Add payment method (required, but free tier applies)

2. **Set Up Billing Alerts** (Recommended)
   - Go to AWS Billing Dashboard
   - Set up CloudWatch billing alerts
   - Set threshold at $5-10 to monitor usage
   - AWS Amplify free tier includes:
     - 1,000 build minutes/month
     - 15 GB storage
     - 5 GB served/month

3. **Access AWS Amplify Console**
   - Sign in to AWS Console
   - Search for "Amplify" in the services search bar
   - Click on "AWS Amplify"

## Step 2: Connect GitHub Repository

1. **In AWS Amplify Console**
   - Click "New app" → "Host web app"
   - Select "GitHub" as your source
   - Click "Authorize use of GitHub" (first time only)
   - Grant AWS Amplify access to your repositories

2. **Select Repository**
   - Choose "adham-elshabrawy/Personal-Portfolio"
   - Select branch: `main`
   - Click "Next"

3. **Configure Build Settings**
   - AWS Amplify will auto-detect the `amplify.yml` file
   - Verify the build settings:
     - Build command: `npm run build`
     - Output directory: `.next`
   - Click "Next"

4. **Review and Deploy**
   - Review the configuration
   - Click "Save and deploy"
   - Wait for the first build to complete (5-10 minutes)

## Step 3: Custom Domain Configuration

1. **Add Custom Domain in Amplify**
   - In your Amplify app, go to "App settings" → "Domain management"
   - Click "Add domain"
   - Enter your domain name (e.g., `adhamelshabrawy.com`)
   - Click "Configure domain"

2. **SSL Certificate**
   - AWS will automatically request an SSL certificate via AWS Certificate Manager
   - This may take 5-30 minutes to validate
   - You'll receive email verification requests - approve them

3. **Configure DNS Records**
   - AWS Amplify will provide DNS records to add
   - Go to your domain registrar's DNS management
   - Add the provided CNAME or A records:
     - For root domain: Add the A record or CNAME provided
     - For www subdomain: Add the CNAME provided
   - DNS propagation can take 24-48 hours (usually much faster)

4. **Verify Domain**
   - Return to Amplify console
   - Wait for "Domain active" status
   - Your site will be accessible at your custom domain

## Step 4: Post-Deployment Verification

### Test Checklist
- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Projects section displays correctly
- [ ] Project images load properly
- [ ] Resume download works (`/Adham Elshabrawy Resume.pdf`)
- [ ] API route works (`/api/resume`)
- [ ] All sections scroll smoothly
- [ ] Mobile responsiveness works
- [ ] Custom domain loads with HTTPS

### Common Issues and Solutions

**Build Fails:**
- Check build logs in Amplify console
- Verify `package.json` has all dependencies
- Ensure Node.js version is compatible (Amplify uses Node 18 by default)

**Images Not Loading:**
- Verify all images are in `public/` folder
- Check image paths in `portfolio.js` match actual filenames
- Clear browser cache

**API Routes Not Working:**
- Verify API routes are in `src/app/api/` directory
- Check build logs for any errors
- Test API endpoints directly

**Custom Domain Not Working:**
- Verify DNS records are correct
- Wait for DNS propagation (can take up to 48 hours)
- Check SSL certificate status in AWS Certificate Manager

## Step 5: Continuous Deployment

Once set up, every push to the `main` branch will automatically:
1. Trigger a new build in AWS Amplify
2. Deploy the updated site
3. Update CloudFront CDN cache
4. Your site will be live within 5-10 minutes

## Monitoring and Maintenance

- **Build History**: View in Amplify console under "Build history"
- **Deployment Status**: Check "App settings" → "General"
- **Usage Metrics**: Monitor in "App settings" → "Usage"
- **Custom Domain Status**: Check "App settings" → "Domain management"

## Cost Monitoring

- AWS Amplify free tier covers most portfolio sites
- Monitor usage in AWS Billing Dashboard
- Set up billing alerts to avoid surprises
- Typical portfolio site: $0-5/month

## Support Resources

- AWS Amplify Documentation: https://docs.aws.amazon.com/amplify/
- Next.js Deployment: https://nextjs.org/docs/deployment
- AWS Support: Available in AWS Console

## Next Steps (Optional)

- Set up staging environment (connect a different branch)
- Configure custom 404 pages
- Add analytics (Google Analytics, Plausible, etc.)
- Set up monitoring and error tracking
- Configure automated backups
