# GitHub + NPM Publishing Setup

**Automated NPM Publishing with GitHub Actions**

This guide shows how to publish your skill to NPM automatically using GitHub Actions.

## 📋 Prerequisites

- GitHub account (free or paid)
- NPM account with 2FA disabled (or using token-based auth)
- Node.js 14+ installed locally

## 🔧 Step 1: Create GitHub Repository

### 1.1 Create Repository on GitHub

1. Go to https://github.com/new
2. Fill in details:
   - **Repository name**: `xtendm3-validator-skill`
   - **Description**: "Interactive Claude Skill for XtendM3 API development"
   - **Public**: Yes (required for public NPM package)
   - **Add .gitignore**: Node
   - **License**: MIT
3. Click "Create repository"

### 1.2 Clone Locally (Optional - if starting fresh)

```bash
git clone https://github.com/YOUR_USERNAME/xtendm3-validator-skill.git
cd xtendm3-validator-skill
```

### 1.3 Or Initialize Existing Project

```bash
cd ~/.claude/npm-packages/xtendm3-skill
git init
git remote add origin https://github.com/YOUR_USERNAME/xtendm3-validator-skill.git
git branch -M main
```

## 🔑 Step 2: Generate NPM Token

### 2.1 Create NPM Token

1. Go to https://www.npmjs.com/settings/tokens
2. Click "Generate New Token"
3. Select: **Automation** (for CI/CD)
4. Copy the token (you won't see it again!)
5. Keep it safe - **DO NOT commit it!**

Token format: `npm_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

### 2.2 Token Permissions

**Required scopes**:
- Read packages
- Publish packages
- Manage CI/CD

## 🔐 Step 3: Add NPM Token to GitHub Secrets

### 3.1 Add Secret

1. Go to your GitHub repo: `https://github.com/YOUR_USERNAME/xtendm3-validator-skill`
2. Click **Settings** (top menu)
3. Click **Secrets and variables** → **Actions** (left sidebar)
4. Click **New repository secret**
5. Name: `NPM_TOKEN`
6. Value: `npm_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx` (paste your token)
7. Click **Add secret**

**Important**: GitHub will only show the token once. If lost, generate a new one.

### 3.2 Verify Secret

The secret should appear as:
```
NPM_TOKEN = ***
```

## 📁 Step 4: Verify Project Structure

Your repository should have:

```
xtendm3-validator-skill/
├── .github/
│   └── workflows/
│       ├── publish-npm.yml      # Publishing workflow
│       └── test.yml             # Testing workflow
├── lib/
│   └── XTENDM3_STANDARDS.md
├── .gitignore                   # Git ignore file
├── package.json                 # NPM config
├── SKILL.md                     # Main skill
├── README.md                    # Documentation
├── INSTALLATION.md
├── USAGE_GUIDE.md
└── GITHUB_SETUP.md             # This file
```

## 📦 Step 5: Update package.json

Ensure your `package.json` has:

```json
{
  "name": "@tovonirina/xtendm3-validator-skill",
  "version": "1.0.0",
  "description": "Interactive Claude Skill for XtendM3 API development",
  "main": "lib/index.js",
  "repository": {
    "type": "git",
    "url": "https://github.com/YOUR_USERNAME/xtendm3-validator-skill.git"
  },
  "author": "Your Name <your.email@example.com>",
  "license": "MIT",
  "engines": {
    "node": ">=14.0.0"
  }
}
```

## 🚀 Step 6: Initial Commit and Push

### 6.1 Add All Files

```bash
cd ~/.claude/npm-packages/xtendm3-skill
git add .
```

### 6.2 Commit

```bash
git commit -m "Initial commit: XtendM3 Validator Skill with GitHub Actions"
```

### 6.3 Push to GitHub

```bash
git push -u origin main
```

## 📝 Step 7: Create Version Tag

### 7.1 Create Git Tag

```bash
git tag v1.0.0
git push origin v1.0.0
```

### 7.2 What Happens Next

1. ✅ GitHub Actions detects the tag
2. ✅ Runs the test workflow (validates files)
3. ✅ Runs the publish workflow
4. ✅ Publishes to NPM automatically!
5. ✅ Creates a GitHub release

This takes ~1-2 minutes.

## ✅ Verify Publishing

### 8.1 Check NPM Registry

```bash
npm info @tovonirina/xtendm3-validator-skill
```

Or visit: https://www.npmjs.com/package/@tovonirina/xtendm3-validator-skill

### 8.2 Check GitHub Actions

1. Go to your repo
2. Click **Actions** tab
3. Should see both workflows running:
   - ✅ Test & Validate
   - ✅ Publish to NPM

### 8.3 Test Installation

```bash
npm install -g @tovonirina/xtendm3-validator-skill
xtendm3-skill-install
```

## 🔄 Publishing Updates

### Update Workflow

1. Make changes to your code
2. Update `package.json` version:
   ```json
   "version": "1.0.1"
   ```
3. Commit and push:
   ```bash
   git add .
   git commit -m "Fix: description of fix"
   git push origin main
   ```
4. Create new version tag:
   ```bash
   git tag v1.0.1
   git push origin v1.0.1
   ```
5. GitHub Actions automatically publishes! ✅

### Semantic Versioning

```
MAJOR.MINOR.PATCH

v1.0.0 = Initial release
v1.0.1 = Bug fix
v1.1.0 = New feature
v2.0.0 = Breaking change
```

## 🛠️ Workflow Files Explained

### publish-npm.yml

Triggers when you push a version tag (v*.*.*)

Steps:
1. Checks out code
2. Sets up Node.js
3. Installs dependencies
4. Runs tests
5. Publishes to NPM using `NPM_TOKEN` secret
6. Creates GitHub release

### test.yml

Runs on every push and pull request

Steps:
1. Tests on Node 14, 16, 18, 20
2. Verifies file structure
3. Checks dependencies
4. Validates package.json

## 🆘 Troubleshooting

### NPM Publishing Failed

**Check**:
1. Is `NPM_TOKEN` secret set? (Settings → Secrets)
2. Is token valid and not expired?
3. Is package name unique on NPM?
4. Does `package.json` have correct name and version?

**View logs**:
1. Go to **Actions** tab
2. Click the failed workflow
3. Click the job name
4. Scroll to see error details

### Token Expires

**Solution**:
1. Generate new token at https://www.npmjs.com/settings/tokens
2. Update GitHub secret (overwrite old one)
3. Next publish will use new token

### Version Already Published

**Solution**: Increment version in package.json
```json
"version": "1.0.2"
```

Then tag and push:
```bash
git tag v1.0.2
git push origin v1.0.2
```

## 📚 GitHub Actions Documentation

- **Official Docs**: https://docs.github.com/actions
- **Node Setup**: https://github.com/actions/setup-node
- **NPM Auth**: https://docs.npmjs.com/using-private-packages-in-a-ci-cd-workflow

## ✨ Best Practices

1. **Always test locally first**:
   ```bash
   npm install
   npm test
   ```

2. **Use semantic versioning**:
   - v1.0.0, v1.0.1, v1.1.0, v2.0.0

3. **Write good commit messages**:
   - "Fix: validator issue"
   - "Feature: add JSON generator"
   - "Docs: update README"

4. **Tag consistently**:
   ```bash
   git tag vX.Y.Z
   git push origin vX.Y.Z
   ```

5. **Keep NPM_TOKEN secret**:
   - Never commit it
   - Never push it
   - Use GitHub Secrets only

## 🎉 You're Ready!

With GitHub Actions set up, you can:

1. ✅ Push code to GitHub
2. ✅ Tag version (v1.0.0)
3. ✅ GitHub Actions automatically publishes to NPM
4. ✅ Users install with: `npm install -g @tovonirina/xtendm3-validator-skill`

---

## Quick Reference

### First Time Setup
```bash
cd ~/.claude/npm-packages/xtendm3-skill
git init
git remote add origin https://github.com/YOUR_USERNAME/xtendm3-validator-skill.git
git add .
git commit -m "Initial commit"
git push -u origin main
git tag v1.0.0
git push origin v1.0.0
# Wait for GitHub Actions... then check NPM!
```

### Publishing Updates
```bash
# Edit files, then:
npm version patch  # or minor, or major
git push origin main
git push origin v1.x.x
# GitHub Actions handles the rest!
```

### Check Status
1. Go to: https://github.com/YOUR_USERNAME/xtendm3-validator-skill/actions
2. Watch the workflows run
3. Verify on: https://www.npmjs.com/package/@tovonirina/xtendm3-validator-skill

---

**Questions?** Check GitHub Actions documentation or NPM help.

**Ready to publish?** Follow the steps above and let GitHub Actions do the work! 🚀
