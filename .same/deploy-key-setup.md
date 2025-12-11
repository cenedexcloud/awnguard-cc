# GitHub Deploy Key Setup - December 2024

## ✅ New SSH Deploy Key Generated!

A fresh SSH deploy key has been created for: `https://github.com/cenedexcloud/awnguard-cc`

---

## 🔑 YOUR PUBLIC SSH KEY (Copy this exactly)

```
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIPHE4cYjq8yhnpRAEg/CGZRBvE140G+YptTd7plGVDJv awnguard-cc-deploy-2024
```

---

## 📝 HOW TO ADD THIS KEY TO GITHUB

### Step 1: Go to your repository settings
Visit: **https://github.com/cenedexcloud/awnguard-cc/settings/keys**

### Step 2: Add deploy key
1. Click the **"Add deploy key"** button
2. Fill in the details:
   - **Title**: `Same.new Deploy - Dec 2024`
   - **Key**: Paste the public key above
   - ✅ **Check** "Allow write access"
3. Click **"Add key"**

---

## 🧪 TEST THE CONNECTION

After adding the key to GitHub, run this to test:

```bash
ssh -T git@github.com
```

Expected response: `Hi cenedexcloud! You've successfully authenticated...`

---

## 🚀 PUSH YOUR CODE

Once the key is added and tested, push your code:

```bash
cd awnguard-cloud
git add -A
git commit -m "Mobile responsiveness fixes"
git push origin main --force
```

---

## 📍 KEY FILES LOCATION

- Private key: `~/.ssh/awnguard_deploy`
- Public key: `~/.ssh/awnguard_deploy.pub`
- SSH config: `~/.ssh/config`

---

## ⚠️ SECURITY NOTES

- **NEVER share the private key** (file without .pub extension)
- The private key stays on this server only
- The public key (with .pub) is safe to add to GitHub
- This key has write access - keep it secure!

---

## 🔄 WHAT I'VE FIXED

- Removed `whitespace-nowrap` from headers that were causing text overflow on mobile
- Added `overflow-x: hidden` to html and body to prevent horizontal scrolling
- Made text sizes responsive with proper breakpoints (sm:, md:, lg:)
- Fixed button padding for mobile devices

### Files Updated:
1. `src/app/services/awning-repair/page.tsx` - Fixed "Awning Manufacture Connection" header
2. `src/app/contact/page.tsx` - Fixed "Ready to Get Started?" header
3. `src/app/about-us/page.tsx` - Fixed "Urban Oasis Movement" header
4. `src/app/globals.css` - Added overflow protection
