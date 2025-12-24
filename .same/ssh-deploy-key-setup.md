# SSH Deploy Key Setup

**Date:** December 6, 2025

## ✅ What Was Done

1. Generated a new ED25519 SSH key pair for deploying to GitHub
2. Configured Git to use this SSH key for authentication
3. Added GitHub remote repository

## 🔑 Public Key (Add to GitHub)

```
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIDtPHskvYPyVTD4uC4eNZm3YNZaA2gWp5Vf+NeoKAwv9 deploy-key-awnguard-cc
```

## 📝 Steps to Add Deploy Key to GitHub

1. Go to: https://github.com/cenedexcloud/awnguard-cc/settings/keys

2. Click **"Add deploy key"**

3. Fill in:
   - **Title:** `Same.new Deploy Key - Dec 2025`
   - **Key:** Paste the public key above
   - ✅ **Allow write access** (required for pushing)

4. Click **"Add key"**

## 🔧 Git Configuration

The repository has been configured with:
- **Remote URL:** `git@github.com:cenedexcloud/awnguard-cc.git`
- **SSH Key:** `~/.ssh/awnguard_deploy_key`
- **Branch:** `master` (default)

## 🚀 How to Use

### Initial Push (First Time)

```bash
cd awnguard-cloud
git add .
git commit -m "Initial commit"
git branch -M main  # Rename to main if desired
git push -u origin main
```

### Regular Commits

```bash
git add .
git commit -m "Your commit message"
git push
```

### Pull Latest Changes

```bash
git pull origin main
```

## 🔒 Security Notes

- The private key is stored at: `~/.ssh/awnguard_deploy_key`
- The public key is stored at: `~/.ssh/awnguard_deploy_key.pub`
- **Never share the private key file**
- The deploy key is specific to this repository

## ⚠️ Important

You **MUST** add the public key to GitHub before you can push/pull from the repository. The Git operations will fail with authentication errors until the deploy key is added.
