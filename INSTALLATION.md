# XtendM3 Validator Skill - Installation & Setup

## 📦 What You Get

A Claude Skill that you invoke with `/xtendm3` inside Claude Code:

```
/xtendm3
→ Interactive menu appears
→ Uses Claude's AI capabilities
→ Accepts file context
→ Provides intelligent suggestions
```

## 📁 Package Structure

```
xtendm3-skill/
├── package.json              # NPM package config
├── install.js                # Installation script
├── SKILL.md                  # Main skill definition (Claude reads this)
├── README.md                 # Quick start guide
├── USAGE_GUIDE.md           # Complete usage guide
├── INSTALLATION.md          # This file
└── lib/
    └── XTENDM3_STANDARDS.md # Reference for Claude
```

## 🚀 Installation

### Option 1: Manual Installation (Now Available)

1. Copy the skill file:
```bash
cp SKILL.md ~/.claude/skills/xtendm3-validator/SKILL.md
```

2. Or create directory and copy:
```bash
mkdir -p ~/.claude/skills/xtendm3-validator
cp SKILL.md ~/.claude/skills/xtendm3-validator/
```

3. Done! Use it immediately:
```
/xtendm3
```

### Option 2: NPM Installation (Coming Soon)

```bash
npm install -g @tovonirina/xtendm3-validator-skill
```

This will automatically:
- Create ~/.claude/skills/xtendm3-validator/
- Copy SKILL.md and supporting files
- Register the skill with Claude Code

### Option 3: Full Package Installation

Copy the entire skill package:

```bash
# Copy the entire xtendm3-skill folder
cp -r xtendm3-skill ~/.claude/skills/xtendm3-validator
```

## ✅ Verify Installation

In Claude Code, type:
```
/xtendm3
```

You should see:
```
🎯 XtendM3 Validator - What would you like to do?

1. 🎨 Generate Custom XtendM3 API
2. 📋 Generate M3 Transaction JSON Config
3. 🔨 Generate CRUD Template
4. ✓ Validate XtendM3 Code
5. 📚 Learn XtendM3 Standards
6. ❌ Exit
```

If you see this menu, installation is successful! ✅

## 🎯 Quick Start

### 1. Basic Usage
```
/xtendm3
→ Choose an option
→ Answer Claude's questions
→ Get your result
```

### 2. With File Context (Better!)
```
[Paste your code or specification]

/xtendm3
→ Claude analyzes your context
→ Provides smarter suggestions
→ Generates customized output
```

### 3. Example: Generate API
```
I need an API for managing customer orders

[Paste: requirements.md, table_schema.sql]

/xtendm3
→ Select: 1. Generate Custom API
→ Answer questions based on your context
→ Claude generates API matching your needs
```

## 🔧 Files Included

| File | Purpose |
|------|---------|
| **SKILL.md** | Main skill definition - Claude reads this |
| **README.md** | Quick start and features overview |
| **USAGE_GUIDE.md** | Complete usage guide with examples |
| **INSTALLATION.md** | This installation guide |
| **lib/XTENDM3_STANDARDS.md** | Reference standards Claude uses |
| **package.json** | NPM package configuration |
| **install.js** | NPM installation script |

## 📋 Skill Features

✅ **Interactive Menu**
- Simple, clear options
- Step-by-step guidance
- Claude asks clarifying questions

✅ **File Context Support**
- Paste Groovy code
- Include specifications
- Share table schemas
- Provide examples

✅ **Claude AI Capabilities**
- Understands your code
- Analyzes requirements
- Provides intelligent suggestions
- Learns from examples

✅ **Production Features**
- Generate XtendM3 APIs
- Generate M3 JSON configs
- Generate CRUD templates
- Validate code
- Learn standards

## 🎨 Menu Options

### 1. Generate Custom XtendM3 API
Create Groovy APIs from scratch with Claude's help

### 2. Generate M3 Transaction JSON Config
Create INFOR M3 transaction configurations

### 3. Generate CRUD Template
Get starter templates for CRUD operations

### 4. Validate XtendM3 Code
Analyze code against XtendM3 standards

### 5. Learn XtendM3 Standards
Get help understanding best practices

## 💡 Tips for Best Results

1. **Provide Context**: Paste files before invoking
2. **Be Specific**: Describe your requirements clearly
3. **Include Examples**: Show what you want
4. **Ask Questions**: Learn and refine
5. **Validate Early**: Check code frequently

## 🔍 Troubleshooting

### Skill Not Found
If `/xtendm3` doesn't work:

1. Verify installation location:
```bash
ls -la ~/.claude/skills/xtendm3-validator/SKILL.md
```

2. Verify SKILL.md contents:
```bash
head -20 ~/.claude/skills/xtendm3-validator/SKILL.md
```

3. Reload Claude Code or restart it

### Menu Not Appearing
Make sure SKILL.md is properly installed with correct formatting

### Claude Not Understanding Context
Provide specific files and be clear about your requirements

## 📂 Directory Structure After Installation

```
~/.claude/skills/
└── xtendm3-validator/
    ├── SKILL.md                  # Main skill (REQUIRED)
    ├── README.md                 # Documentation
    ├── USAGE_GUIDE.md           # Usage guide
    ├── INSTALLATION.md          # Installation guide
    └── lib/
        └── XTENDM3_STANDARDS.md # Standards reference
```

## 🎓 Learning Path

1. **Install**: Copy SKILL.md to ~/.claude/skills/
2. **Try it**: Type `/xtendm3` in Claude Code
3. **Explore**: Try each menu option
4. **Provide context**: Paste a file and try again
5. **Get smarter**: Claude learns from context
6. **Deploy**: Use generated code

## 📖 Full Documentation

- **SKILL.md** - Complete skill definition (what Claude reads)
- **README.md** - Features and quick start
- **USAGE_GUIDE.md** - Detailed usage with examples
- **lib/XTENDM3_STANDARDS.md** - XtendM3 standards reference

## 🆘 Getting Help

Within Claude Code:
```
/xtendm3
→ Select: 5. Learn XtendM3 Standards
→ Ask your question
→ Claude explains with examples
```

## ✨ What Makes This Special

This is not a static skill - it's an **AI-powered skill**:

- 🧠 Uses Claude's natural language understanding
- 📁 Accepts file context for smarter suggestions
- 🎯 Provides intelligent recommendations
- 🔄 Interactive dialog with clarifying questions
- 🚀 Generates production-ready code
- ✓ Validates against XtendM3 standards

## 🚀 Next Steps

### Immediate
1. Copy SKILL.md to ~/.claude/skills/xtendm3-validator/
2. Type `/xtendm3` in Claude Code
3. See the menu appear

### Short Term
1. Try each menu option
2. Paste files for context
3. Generate your first API

### Ongoing
1. Use for all XtendM3 development
2. Validate code before deployment
3. Learn XtendM3 best practices

## 📦 NPM Installation (When Available)

```bash
npm install -g @tovonirina/xtendm3-validator-skill
```

Then immediately:
```
/xtendm3
```

## 🎉 You're Ready!

Installation complete! Now you can:

1. **Generate APIs** - Use Claude to create XtendM3 extensions
2. **Create M3 Config** - Generate transaction JSON
3. **Validate Code** - Check against standards
4. **Learn** - Understand XtendM3 best practices

---

## Quick Reference

```
Installation:
cp SKILL.md ~/.claude/skills/xtendm3-validator/SKILL.md

Usage:
/xtendm3

With context:
[Paste files]
/xtendm3

Help:
/xtendm3 → Select 5 → Ask question
```

---

## Version Info

- **XtendM3 Validator Claude Skill v1.0.0**
- Interactive menu-driven interface
- File context support
- Claude AI-powered suggestions
- Production-ready code generation
- Standards compliance validation

---

**Installation verified!** ✅

**Ready to use**: `/xtendm3`

**Questions?** Use menu option 5: Learn XtendM3 Standards

**Happy developing!** 🚀
