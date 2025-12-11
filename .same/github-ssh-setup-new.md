# GitHub SSH Key Setup for awnguard-cc

## ✅ SSH Key Generated Successfully!

A new SSH key has been created for your repository: `https://github.com/cenedexcloud/awnguard-cc`

## 📋 Your Public SSH Key

Copy this key and add it to your GitHub repository:

```
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAINNVLbeFvgDYUvFnsY2avv3cDx2I2bDBn7R8VHC8jjrH awnguard-cc-deploy
```

## 🔧 Steps to Add SSH Key to GitHub

### Option 1: Add as Deploy Key (Recommended for single repo)

1. Go to your repository: https://github.com/cenedexcloud/awnguard-cc
2. Click on **Settings** (repo settings, not account settings)
3. Click on **Deploy keys** in the left sidebar
4. Click **Add deploy key**
5. Give it a title: `Same.new Deploy Key`
6. Paste the public key above
7. Check **Allow write access** if you need to push changes
8. Click **Add key**

### Option 2: Add to Your GitHub Account (For all repos)

1. Go to: https://github.com/settings/keys
2. Click **New SSH key**
3. Give it a title: `Same.new - AwnGuard`
4. Paste the public key above
5. Click **Add SSH key**

## 🧪 Test Your SSH Connection

After adding the key to GitHub, run this command to test:

```bash
ssh -T git@github.com
```

You should see: `Hi cenedexcloud! You've successfully authenticated...`

## 🔗 Clone or Update Remote

If you haven't cloned yet:
```bash
cd awnguard-cloud
git init
git remote add origin git@github.com:cenedexcloud/awnguard-cc.git
```

If you already have the repo but need to update the remote URL:
```bash
cd awnguard-cloud
git remote set-url origin git@github.com:cenedexcloud/awnguard-cc.git
```

## 📝 Push Your Code

```bash
cd awnguard-cloud
git add .
git commit -m "Initial commit"
git branch -M main
git push -u origin main
```

## 📍 File Locations

- Private key: `~/.ssh/awnguard_cc_github`
- Public key: `~/.ssh/awnguard_cc_github.pub`
- SSH config: `~/.ssh/config`

## ⚠️ Important Notes

- **Never share your private key** (the file without .pub)
- The private key stays on this server only
- The public key (ending in .pub) is safe to share with GitHub
- This key is specifically configured for github.com in the SSH config
