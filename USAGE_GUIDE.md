# XtendM3 Validator Skill - Complete Usage Guide

**Interactive Claude Skill with File Context Support**

## Installation

### Current (Manual)
Copy `SKILL.md` to: `~/.claude/skills/xtendm3-validator/`

### NPM (Soon Available)
```bash
npm install -g @tovonirina/xtendm3-validator-skill
```

## How to Use

### Basic Usage
In Claude Code, type:
```
/xtendm3
```

You'll see a menu:
```
🎯 XtendM3 Validator - What would you like to do?

1. 🎨 Generate Custom XtendM3 API
2. 📋 Generate M3 Transaction JSON Config
3. 🔨 Generate CRUD Template
4. ✓ Validate XtendM3 Code
5. 📚 Learn XtendM3 Standards
6. ❌ Exit
```

### With File Context (Better Results!)
Paste or attach files, then invoke:

```
[Paste your code or spec]

/xtendm3
```

Claude will analyze your context and provide smarter suggestions!

---

## Menu Options Explained

### 1. 🎨 Generate Custom XtendM3 API

**Purpose**: Create a new XtendM3 extension API from scratch

**How to use**:
1. Provide: API name, main table, related tables (if any)
2. Claude asks clarifying questions
3. You provide field specifications
4. Claude generates complete Groovy code

**Example**:
```
I need an API to list physical inventory headers

[Optional: Paste table definitions, specs, examples]

/xtendm3
→ Select: 1. Generate Custom API
→ API Name: LstPhysInvHead
→ Main Table: MITTKD
→ [Answer Claude's questions]
→ ✓ Get complete API code
```

**Output**:
- Complete Groovy API file
- XtendM3 standards compliant
- Includes audit trail fields
- Ready for deployment

---

### 2. 📋 Generate M3 Transaction JSON Config

**Purpose**: Create INFOR M3 transaction configuration

**How to use**:
1. Provide: Transaction name, program ID
2. Define input fields (names, types, lengths)
3. Define output fields
4. Claude generates JSON

**Example**:
```
I need the M3 JSON config for my order API

[Optional: Paste existing Groovy code]

/xtendm3
→ Select: 2. Generate M3 JSON Config
→ Transaction Name: AddOrdHeadnLine
→ Program ID: EXT100MI
→ [Define fields as prompted]
→ ✓ Get M3-ready JSON
```

**Output**:
- Complete M3 transaction JSON
- Field definitions included
- Ready to import into M3

---

### 3. 🔨 Generate CRUD Template

**Purpose**: Get starter template for CRUD operations

**How to use**:
1. Choose operation: Create, Read, Update, Delete, or List
2. Provide table name
3. Optional: specify fields
4. Claude generates template

**Example**:
```
I need a Create template for the OCUSMA table

[Optional: Paste field list]

/xtendm3
→ Select: 3. Generate CRUD Template
→ Operation: CREATE
→ Table: OCUSMA
→ [Specify fields if needed]
→ ✓ Get template code
```

**Output**:
- CRUD operation template
- Proper structure
- Audit trail included
- Ready to customize

---

### 4. ✓ Validate XtendM3 Code

**Purpose**: Check code against XtendM3 standards

**How to use**:
1. Paste your Groovy code
2. Optional: mention specific concerns
3. Claude analyzes and reports issues

**Example**:
```
I want to validate my API code

[Paste: MyAPI.groovy]

/xtendm3
→ Select: 4. Validate Code
→ Claude validates against standards
→ Reports all issues found
→ Suggests fixes
→ ✓ Get improvement recommendations
```

**Output**:
- List of issues (errors, warnings, info)
- Specific line numbers
- Fix suggestions
- Best practice recommendations

**Issues Found**:
- Naming convention violations
- Prohibited pattern usage
- Performance concerns
- Missing audit trail fields
- Documentation gaps

---

### 5. 📚 Learn XtendM3 Standards

**Purpose**: Understand XtendM3 best practices and standards

**How to use**:
1. Optional: paste code for analysis
2. Ask your question about standards
3. Claude explains with examples

**Example**:
```
I want to understand XtendM3 naming conventions

[Optional: Paste your code for context]

/xtendm3
→ Select: 5. Learn Standards
→ Claude explains naming rules
→ Shows examples from your code
→ Suggests improvements
```

**Topics you can learn about**:
- Naming conventions
- Prohibited patterns
- Database performance
- Audit trail requirements
- Best practices
- Code structure
- Performance optimization
- Security practices

---

## Using Context for Better Results

### Context Type 1: Groovy Code
Paste your existing code for Claude to analyze:

```
[Paste your MyAPI.groovy]

/xtendm3
→ Claude understands your current approach
→ Provides style-consistent suggestions
→ Validates against your patterns
```

### Context Type 2: Specifications
Provide requirements and specs:

```
[Paste: requirements.md, spec.txt, use-cases.md]

/xtendm3
→ Select: 1. Generate API
→ Claude understands your full requirements
→ Generates API matching your spec exactly
```

### Context Type 3: Table Schemas
Share your table definitions:

```
[Paste: table_definitions.sql, field_list.txt]

/xtendm3
→ Claude validates against your actual tables
→ Ensures correct field selection
→ Suggests optimal approaches
```

### Context Type 4: Error Messages
Paste validation failures or errors:

```
[Paste: validation_errors.txt]

/xtendm3
→ Select: 4. Validate Code
→ Claude analyzes error messages
→ Provides targeted fixes
```

### Context Type 5: Examples
Show working APIs you like:

```
[Paste: working_api_example.groovy]

/xtendm3
→ Claude learns your style
→ Generates code matching your patterns
→ References proven approaches
```

---

## Real-World Workflows

### Workflow 1: API Development
```
Step 1: Understand Requirements
[Paste spec.md]

Step 2: Generate API
/xtendm3
→ 1. Generate API
→ Answer questions based on spec
→ Get MyAPI.groovy

Step 3: Generate M3 Config
/xtendm3
→ 2. Generate JSON Config
→ Define fields
→ Get MyAPI.json

Step 4: Validate
/xtendm3
→ 4. Validate Code
→ [Paste MyAPI.groovy]
→ Review and fix issues

Step 5: Deploy
→ Upload .groovy to extension handler
→ Import .json to M3
→ Test in M3 UI
```

### Workflow 2: Code Review & Improvement
```
Step 1: Validate Existing Code
[Paste your MyAPI.groovy]

/xtendm3
→ 4. Validate Code
→ Claude reports issues

Step 2: Learn What to Fix
/xtendm3
→ 5. Learn Standards
→ Ask about specific issues
→ Claude explains with examples

Step 3: Improve Code
Update your code based on suggestions

Step 4: Re-validate
/xtendm3
→ 4. Validate Code
→ [Paste updated code]
→ Verify issues are fixed
```

### Workflow 3: Learning XtendM3
```
Step 1: Provide Example
[Paste working_api.groovy]

Step 2: Ask Questions
/xtendm3
→ 5. Learn Standards
→ Ask about naming, patterns, performance
→ Claude explains with examples from code

Step 3: Practice
Generate new APIs based on learnings

Step 4: Validate
/xtendm3
→ 4. Validate Code
→ Ensure compliance
```

---

## Tips for Best Results

### DO ✅
- ✅ Provide context files before invoking skill
- ✅ Be specific about what you want
- ✅ Ask follow-up questions
- ✅ Share examples of your coding style
- ✅ Include error messages when validating
- ✅ Describe business requirements
- ✅ Mention constraints or preferences

### DON'T ❌
- ❌ Invoke skill without context if possible
- ❌ Be vague about requirements
- ❌ Skip validation steps
- ❌ Ignore Claude's suggestions
- ❌ Assume without asking clarifying questions
- ❌ Deploy without testing
- ❌ Rush the process

---

## Example Interactions

### Example 1: Generate API from Spec
```
User provides:
- requirements.md (business requirements)
- ORDERS table schema
- existing_api.groovy (style reference)

User types: /xtendm3

Claude:
1. Reads all context files
2. Understands requirements
3. Shows menu
4. User selects: Generate API
5. Claude asks clarifying questions based on context
6. Generates API matching:
   - Business requirements
   - Your table structure
   - Your coding style
   - XtendM3 standards
```

### Example 2: Find and Fix Issues
```
User provides:
- MyAPI.groovy (their code)

User types: /xtendm3

Claude:
1. Shows menu
2. User selects: Validate Code
3. Claude analyzes the code
4. Reports all issues found
5. User selects: Learn Standards
6. Claude explains fixes
7. User updates code
8. User re-validates to confirm fixes
```

### Example 3: Learn Best Practices
```
User provides:
- working_api.groovy (example)
- error_messages.txt (from their code)

User types: /xtendm3

Claude:
1. Shows menu
2. User selects: Learn Standards
3. Asks: "How should I structure database calls?"
4. Claude explains with examples
5. Shows patterns from working_api.groovy
6. Suggests improvements for their error cases
```

---

## Common Questions

### Q: Should I provide context?
**A**: Yes! More context = better results. Provide specs, examples, and your current code.

### Q: What if I don't know what to provide?
**A**: Start with your main question or code. Claude will guide you from there.

### Q: Can I use it without files?
**A**: Yes, but results will be generic. Provide context for customized results.

### Q: How specific should my requirements be?
**A**: The more specific, the better. Include business rules, constraints, examples.

### Q: Can Claude help with existing code?
**A**: Yes! Paste existing code for validation, improvement, or as a style reference.

### Q: What if the generated code isn't perfect?
**A**: It's a starting point! Review, customize, and re-validate. Claude can help refine it.

---

## Features Overview

| Feature | Description | How to Use |
|---------|-------------|-----------|
| **Generate API** | Create Groovy APIs | Select 1, provide requirements |
| **Generate JSON** | Create M3 config | Select 2, define fields |
| **CRUD Templates** | Operation templates | Select 3, choose operation |
| **Validate Code** | Check standards | Select 4, paste code |
| **Learn** | Understand standards | Select 5, ask questions |
| **File Support** | Use context | Paste files before /xtendm3 |
| **Smart Suggestions** | AI recommendations | Claude analyzes your context |

---

## Quick Reference

```bash
# Invoke the skill
/xtendm3

# With file context (best results)
[Paste files or code]
/xtendm3

# Then select from menu:
1 = Generate custom API
2 = Generate M3 JSON
3 = Generate CRUD template
4 = Validate code
5 = Learn standards
6 = Exit
```

---

## Getting Help

Within the skill:
```
/xtendm3
→ Select: 5. Learn Standards
→ Ask your question
→ Claude explains with examples
```

---

## Next Steps

1. **Install**: Copy SKILL.md to `~/.claude/skills/xtendm3-validator/`
2. **Try it**: Type `/xtendm3` in Claude Code
3. **Provide context**: Paste a file for smarter suggestions
4. **Generate**: Let Claude create your APIs and configs
5. **Validate**: Check your code against standards
6. **Deploy**: Use the generated code in M3

---

## Success Checklist

- [ ] Skill installed in ~/.claude/skills/
- [ ] Can invoke /xtendm3
- [ ] Menu appears correctly
- [ ] Can paste files
- [ ] Generated code is working
- [ ] Validation passes
- [ ] Ready for deployment

---

**Start now**: `/xtendm3` 🚀

**Questions?**: Use option 5 - Learn Standards

**Happy developing!** 🎉
