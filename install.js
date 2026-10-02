#!/usr/bin/env node

/**
 * XtendM3 Validator Skill - Installation Script
 * Installs the skill to ~/.claude/skills/xtendm3-validator/
 */

const fs = require('fs');
const path = require('path');
const os = require('os');

// Get home directory
const homeDir = os.homedir();
const skillsDir = path.join(homeDir, '.claude', 'skills', 'xtendm3-validator');
const sourceDir = __dirname;

console.log('\n📦 Installing XtendM3 Validator Skill...\n');

// Create skill directory if it doesn't exist
try {
  if (!fs.existsSync(skillsDir)) {
    fs.mkdirSync(skillsDir, { recursive: true });
    console.log(`✓ Created skill directory: ${skillsDir}`);
  } else {
    console.log(`✓ Skill directory exists: ${skillsDir}`);
  }
} catch (error) {
  console.error(`✗ Error creating directory: ${error.message}`);
  process.exit(1);
}

// Copy SKILL.md (the main skill definition)
try {
  const skillSource = path.join(sourceDir, 'SKILL.md');
  const skillDest = path.join(skillsDir, 'SKILL.md');

  if (fs.existsSync(skillSource)) {
    fs.copyFileSync(skillSource, skillDest);
    console.log(`✓ Installed SKILL.md`);
  }
} catch (error) {
  console.error(`✗ Error installing SKILL.md: ${error.message}`);
  process.exit(1);
}

// Copy README if exists
try {
  const readmeSource = path.join(sourceDir, 'README.md');
  const readmeDest = path.join(skillsDir, 'README.md');

  if (fs.existsSync(readmeSource)) {
    fs.copyFileSync(readmeSource, readmeDest);
    console.log(`✓ Installed README.md`);
  }
} catch (error) {
  console.warn(`⚠ Could not install README.md: ${error.message}`);
}

// Copy any template files
try {
  const libSource = path.join(sourceDir, 'lib');
  const libDest = path.join(skillsDir, 'lib');

  if (fs.existsSync(libSource)) {
    if (!fs.existsSync(libDest)) {
      fs.mkdirSync(libDest, { recursive: true });
    }

    const files = fs.readdirSync(libSource);
    files.forEach(file => {
      const srcFile = path.join(libSource, file);
      const destFile = path.join(libDest, file);
      fs.copyFileSync(srcFile, destFile);
    });

    console.log(`✓ Installed library files`);
  }
} catch (error) {
  console.warn(`⚠ Could not install library files: ${error.message}`);
}

console.log('\n✅ XtendM3 Validator Skill installed successfully!\n');
console.log('📌 Usage in Claude Code:');
console.log('   /xtendm3\n');
console.log('💡 Features:');
console.log('   - Generate Custom XtendM3 API');
console.log('   - Generate M3 Transaction JSON Config');
console.log('   - Generate CRUD Template');
console.log('   - Validate XtendM3 Code');
console.log('   - Learn XtendM3 Standards\n');
console.log('📁 Skill location:');
console.log(`   ${skillsDir}\n`);
console.log('✨ Add context by pasting files or code for smarter suggestions!\n');
