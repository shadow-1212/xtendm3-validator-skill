# Publishing to NPM via GitHub Actions

**Automated publishing workflow using GitHub Actions**

## 🎯 Quick Summary

Instead of `npm publish` directly, we now:

1. Push code to GitHub
2. Create a version tag (v1.0.0)
3. GitHub Actions automatically publishes to NPM ✅

## ⚡ Quick Start (5 minutes)

### Step 1: Create GitHub Repository

```bash
# Go to https://github.com/new
# Name: xtendm3-validator-skill
# Public: Yes
# Add license: MIT
# Create repository
```

### Step 2: Generate NPM Token

```bash
# Go to: https://www.npmjs.com/settings/tokens
# Click: Generate New Token
# Type: Automation
# Copy token (save it!)
```

### Step 3: Add Token to GitHub Secrets

```
GitHub repo → Settings → Secrets and variables → Actions
→ New repository secret
→ Name: NPM_TOKEN
→ Value: <paste your token>
→ Add secret
```

### Step 4: Push Code to GitHub

```bash
cd ~/.claude/npm-packages/xtendm3-skill
git init
git remote add origin https://github.com/YOUR_USERNAME/xtendm3-validator-skill.git
git add .
git commit -m "Initial commit: XtendM3 Validator Skill"
git push -u origin main
```

### Step 5: Create Version Tag (Triggers Publishing)

```bash
git tag v1.0.0
git push origin v1.0.0
```

### Step 6: Wait for Automation ✅

- GitHub Actions runs automatically
- Tests pass ✓
- Publishes to NPM ✓
- Check: https://www.npmjs.com/package/@tovonirina/xtendm3-validator-skill

## 📦 Workflows Included

Your repository has two GitHub Actions workflows:

### 1. `publish-npm.yml`

**Triggers**: When you push a version tag (v*.*.*)

**What it does**:

- Checks out your code
- Installs dependencies
- Runs tests
- Publishes to NPM
- Creates GitHub release

**How to trigger**:

```bash
git tag v1.0.1
git push origin v1.0.1
```

### 2. `test.yml`

**Triggers**: Every push and pull request

**What it does**:

- Tests on Node 14, 16, 18, 20
- Validates file structure
- Checks dependencies
- Ensures quality

**Automatic** - no action needed

## 📝 Making Updates

### Publish a Bug Fix (v1.0.1)

```bash
# 1. Make changes
# 2. Update version in package.json
#    "version": "1.0.1"

# 3. Commit and push
git add .
git commit -m "Fix: validator issue"
git push origin main

# 4. Tag the version
git tag v1.0.1
git push origin v1.0.1

# 5. GitHub Actions publishes automatically!
```

### Publish a New Feature (v1.1.0)

```bash
# 1. Make changes
# 2. Update version in package.json
#    "version": "1.1.0"

# 3. Commit and push
git add .
git commit -m "Feature: add new capability"
git push origin main

# 4. Tag the version
git tag v1.1.0
git push origin v1.1.0

# 5. GitHub Actions publishes automatically!
```

### Publishing Major Update (v2.0.0)

```bash
# Same as above, but:
# 1. Update version to "2.0.0"
# 2. Tag as v2.0.0
# 3. GitHub Actions publishes!
```

## 🔑 Setting Up NPM Token

### Generate NPM Token

1. **Go to**: https://www.npmjs.com/settings/tokens
2. **Click**: "Generate New Token"
3. **Select Type**: "Automation" (best for CI/CD)
4. **Copy Token**: `npm_xxxxxxxxxxxxxxxxxxxxxxxxxxxx`

**Important**: Save this token - you won't see it again!

### Add to GitHub Secrets

1. **Go to**: GitHub repo → Settings → Secrets and variables → Actions
2. **Click**: "New repository secret"
3. **Name**: `NPM_TOKEN`
4. **Value**: Paste your npm token
5. **Add secret**

That's it! GitHub Actions now has access to publish.

## ✅ Verify It Works

### Check GitHub Actions

1. Go to your repo → **Actions** tab
2. Should see workflows listed
3. Click **Publish to NPM** workflow
4. Should show successful runs after tagging

### Check NPM Registry

```bash
# After publishing, run:
npm info @tovonirina/xtendm3-validator-skill

# Or visit:
https://www.npmjs.com/package/@tovonirina/xtendm3-validator-skill

# Or try installing:
npm install -g @tovonirina/xtendm3-validator-skill
```

## 🔄 Publishing Workflow

```
Local Development
        ↓
git add . && git commit -m "..."
        ↓
git push origin main
        ↓
Test Workflow runs (automatically)
        ↓
Create version tag: git tag v1.x.x
        ↓
git push origin v1.x.x
        ↓
Publish Workflow runs (automatically)
        ↓
Code automatically published to NPM ✅
        ↓
Users can: npm install -g @tovonirina/xtendm3-validator-skill
```

## 🎯 Version Numbers (Semantic Versioning)

```
v1.0.0 = First release
v1.0.1 = Bug fix (patch)
v1.1.0 = New feature (minor)
v2.0.0 = Breaking change (major)
```

**Examples**:

```bash
git tag v1.0.0  # First release
git tag v1.0.1  # Bug fix
git tag v1.1.0  # New feature
git tag v2.0.0  # Major version
```

## 🆘 Troubleshooting

### "Publishing failed" in GitHub Actions

**Check**:

1. Is `NPM_TOKEN` secret set?
   - Go to Settings → Secrets → Check NPM_TOKEN exists
2. Is token valid?
   - Generate new token if needed
3. Is package name correct in package.json?
4. Is version unique?

**View error**:

1. Go to Actions tab
2. Click the failed workflow
3. Expand the job logs
4. See what went wrong

### NPM Token expired

**Solution**:

1. Generate new token at https://www.npmjs.com/settings/tokens
2. Go to GitHub Settings → Secrets
3. Update `NPM_TOKEN` with new value
4. Try publishing again

### Can't see new package on NPM

**Wait**: NPM registry might take 5-10 minutes
**Check**: https://www.npmjs.com/package/@tovonirina/xtendm3-validator-skill

## 📚 Files Included

```
.github/workflows/
├── publish-npm.yml     # Publishing workflow
└── test.yml            # Testing workflow

.gitignore             # Git ignore rules
package.json           # NPM configuration
SKILL.md               # Main Claude Skill
GITHUB_SETUP.md        # Detailed setup guide
PUBLISH_GUIDE.md       # This file
```

## 🚀 Your First Publish

### Complete Steps

```bash
# 1. Create GitHub repo
# Go to https://github.com/new
# Name: xtendm3-validator-skill

# 2. Generate NPM token
# https://www.npmjs.com/settings/tokens
# Type: Automation

# 3. Add to GitHub secrets
# Settings → Secrets and variables → Actions
# NPM_TOKEN = <your token>

# 4. Push code
cd ~/.claude/npm-packages/xtendm3-skill
git init
git remote add origin https://github.com/YOUR_USERNAME/xtendm3-validator-skill.git
git add .
git commit -m "Initial commit"
git push -u origin main

# 5. Tag version (TRIGGERS PUBLISHING!)
git tag v1.0.0
git push origin v1.0.0

# 6. Wait ~2 minutes...
# 7. Check NPM: npm info @tovonirina/xtendm3-validator-skill
# 8. Done! ✅
```

## ✨ Advantages of GitHub Actions

✅ **Automatic**: No manual `npm publish` needed
✅ **Tested**: Runs tests before publishing
✅ **Traceable**: See what was published and when
✅ **Secure**: Token never exposed in logs
✅ **Reliable**: Consistent publishing process
✅ **Professional**: Industry standard approach

## 🎓 Next Steps

1. **Create GitHub repo** - See Step 1 above
2. **Generate NPM token** - See Step 2 above
3. **Add to secrets** - See Step 3 above
4. **Push code** - See Step 4 above
5. **Tag version** - See Step 5 above
6. **Watch GitHub Actions** - Settings → Actions tab
7. **Verify on NPM** - Check npm registry

## 📞 Need Help?

- **GitHub Actions Docs**: https://docs.github.com/actions
- **NPM Token Docs**: https://docs.npmjs.com/creating-and-viewing-access-tokens
- **Setup Guide**: See GITHUB_SETUP.md

---

## Summary

**Old Way**: `npm publish` (direct, less secure)
**New Way**: Git tag → GitHub Actions → Automatic publishing (secure, automated)

**Result**: Same package on NPM, but with better security and automation! 🚀
