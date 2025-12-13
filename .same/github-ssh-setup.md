# GitHub SSH Key Setup for AwnGuard Deployment

## ✅ SSH Key Generated Successfully!

Your SSH key has been created and configured. Follow the steps below to complete the setup.

---

## 📋 Your Public SSH Key

Copy this **entire** public key (it should all be on one line):

```
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAICm8iijIlIv0UO0wLCvCafYmsipl+/zteXg2HJEH2aXA awnguard-deployment
```

---

## 🔧 Steps to Add SSH Key to GitHub

### 1. Copy the SSH Public Key
- The public key is shown above
- Make sure to copy the **entire line** starting with `ssh-ed25519`

### 2. Add to Your GitHub Repository
1. Go to your repository: https://github.com/cenedexcloud/awnguard-cc
2. Click **Settings** (repository settings, not your account settings)
3. In the left sidebar, click **Deploy keys**
4. Click **Add deploy key**
5. Fill in the form:
   - **Title**: `AwnGuard Same.new Deployment`
   - **Key**: Paste the public key from above
   - ✅ Check **"Allow write access"** (this lets you push code)
6. Click **Add key**

### 3. Test the Connection
Run this command in the terminal to verify the SSH key works:
```bash
ssh -T git@github.com
```

You should see a message like:
```
Hi cenedexcloud/awnguard-cc! You've successfully authenticated...
```

---

## 🚀 How to Deploy Your Code

### First Time Setup (Initialize Repository)

```bash
cd awnguard-cloud
git init
git add .
git commit -m "Initial commit - AwnGuard website"
git branch -M main
git remote add origin git@github.com:cenedexcloud/awnguard-cc.git
git push -u origin main
```

### Subsequent Updates

After making changes to your code:

```bash
cd awnguard-cloud
git add .
git commit -m "Description of your changes"
git push
```

---

## 🔐 Security Notes

- ✅ Your **private key** (`~/.ssh/awnguard_github`) is kept secure on Same.new
- ✅ Only the **public key** was shared above for GitHub
- ✅ This key is configured specifically for GitHub only
- ✅ The deploy key can only access the one repository you specified

---

## 📝 SSH Configuration

Your SSH config has been automatically configured at `~/.ssh/config`:

```
Host github.com
    HostName github.com
    User git
    IdentityFile ~/.ssh/awnguard_github
    IdentitiesOnly yes
```

This ensures that GitHub always uses the correct SSH key.

---

## ❓ Troubleshooting

### If you get "Permission denied"
- Make sure you added the public key to GitHub's Deploy Keys
- Verify you checked "Allow write access"
- Test with: `ssh -T git@github.com`

### If you get "Host key verification failed"
- Run: `ssh-keyscan github.com >> ~/.ssh/known_hosts`
- Then try again

### Need to see your public key again?
Run: `cat ~/.ssh/awnguard_github.pub`

---

## 🎉 You're All Set!

Once you've added the SSH key to GitHub, you can start deploying your AwnGuard website to the repository.
