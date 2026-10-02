# XtendM3 Validator - Claude Skill (NPM Installable)

**Interactive Claude skill for XtendM3 API development with intelligent, context-aware assistance**

Use `/xtendm3` inside Claude Code to get an interactive menu that uses Claude's AI capabilities to help you:
- Generate XtendM3 Groovy APIs
- Create M3 transaction JSON configurations
- Generate CRUD templates
- Validate code against standards
- Learn XtendM3 best practices

## Installation

### Install via NPM (Coming Soon)
```bash
npm install -g @tovonirina/xtendm3-validator-skill
```

This will automatically install the skill to `~/.claude/skills/xtendm3-validator/`

### Manual Installation
Copy the `SKILL.md` file to:
```
~/.claude/skills/xtendm3-validator/SKILL.md
```

## Quick Start

In Claude Code, type:
```
/xtendm3
```

You'll see an interactive menu:
```
🎯 XtendM3 Validator - What would you like to do?

1. 🎨 Generate Custom XtendM3 API
2. 📋 Generate M3 Transaction JSON Config
3. 🔨 Generate CRUD Template
4. ✓ Validate XtendM3 Code
5. 📚 Learn XtendM3 Standards
6. ❌ Exit
```

## Features

### 🎨 Generate Custom XtendM3 API
Create production-ready XtendM3 APIs with:
- Interactive specification
- Automatic table relationships
- Proper audit trail handling
- Complete documentation

### 📋 Generate M3 Transaction JSON
Create INFOR M3 transaction configurations:
- Field definitions
- Input/output specifications
- M3-compliant JSON format
- Ready for M3 import

### 🔨 Generate CRUD Template
Generate CRUD operation templates:
- Create, Read, Update, Delete, List
- Proper database operations
- Performance optimization
- Audit trail included

### ✓ Validate XtendM3 Code
Analyze code against standards:
- Naming conventions
- Prohibited patterns
- Database performance
- Audit trail requirements
- Documentation quality

### 📚 Learn XtendM3 Standards
Get intelligent help understanding:
- Naming conventions
- Best practices
- Prohibited patterns
- Performance optimization
- Audit trail requirements

## Using With Context

Claude works best with context. Provide files and information:

### Example 1: Generate API from Spec
```
I need to create an API for managing customer orders

[Paste specification.md]
[Paste table schema]

/xtendm3
→ Select: 1. Generate Custom API
→ Claude understands your spec and table structure
→ Generates a matching API
```

### Example 2: Validate and Fix Code
```
[Paste your MyAPI.groovy]

/xtendm3
→ Select: 4. Validate XtendM3 Code
→ Claude analyzes your code
→ Reports issues and suggests fixes
```

### Example 3: Learn From Examples
```
[Paste working_api_example.groovy]

I want to understand XtendM3 naming conventions

/xtendm3
→ Select: 5. Learn XtendM3 Standards
→ Claude explains with examples from your code
```

## What Makes This Different

✅ **Claude's AI Capabilities**
- Understands natural language
- Analyzes code intelligently
- Provides context-aware suggestions
- Learns from examples

✅ **File Context Support**
- Attach Groovy code
- Provide specifications
- Share table schemas
- Include error messages
- Claude uses all context to help

✅ **Interactive Menu**
- Simple, clear options
- Step-by-step guidance
- Claude asks clarifying questions
- Progressive refinement

✅ **Production-Ready Output**
- Complete XtendM3 APIs
- M3 transaction JSON
- CRUD templates
- Validation reports

## Usage Tips

### Best Practices

1. **Provide Context First**
   - Attach relevant files before invoking
   - Paste code or specifications
   - Give Claude context to work with

2. **Be Specific**
   - Describe your requirements clearly
   - Mention constraints or preferences
   - Include examples of what you want

3. **Use Incrementally**
   - Generate, review, refine
   - Ask follow-up questions
   - Validate before deployment

4. **Share Examples**
   - Show working code you like
   - Claude learns your style
   - Generates matching code

### Context Examples

**For API Generation**:
- Target table schema
- Business requirements
- Related tables
- Input/output specifications
- Example APIs you like

**For Code Validation**:
- Your Groovy code
- Validation failures
- Performance concerns
- Specific questions

**For Learning**:
- Example code
- Error messages
- Topic questions
- Your use cases

## XtendM3 Standards

Built-in knowledge of:

**Naming Conventions**
- Methods: `lowerCamelCase`
- Variables: `lowerCamelCase`
- Constants: `ALL_CAPS`

**Prohibited Patterns**
- ❌ `logger.info/warning/error/trace` → Use `logger.debug()`
- ❌ `def` keyword → Specify type
- ❌ `SimpleDateFormat` → Use `DateTimeFormatter`
- ❌ `.selectAllFields()` → Use `.selection(...)`
- ❌ `sleep/pause()` → Avoid timing

**Database Performance**
- `readAll` pageSize ≤ 10,000
- Pagination enforcement
- Nested loop optimization

**Audit Trail**
- INSERT: RGDT, RGTM, LMDT, CHID, CHNO
- UPDATE: LMDT, CHID, CHNO

**Documentation**
- Program headers required
- Method comments
- Consistent style

## Menu Options

### 1️⃣ Generate Custom XtendM3 API

**When to use**: Creating new APIs from scratch

**Inputs Claude will ask for**:
- API name and purpose
- Main table and related tables
- Input fields needed
- Output fields needed
- Special requirements

**Output**: Complete Groovy API with:
- Program header
- Input validation
- Table relationships
- Field mapping
- Error handling
- Audit trail fields

### 2️⃣ Generate M3 Transaction JSON Config

**When to use**: Creating M3 transaction definitions

**Inputs Claude will ask for**:
- Transaction name
- Program ID
- Input field specifications
- Output field specifications

**Output**: M3-ready JSON with:
- Transaction metadata
- Field definitions
- Input/output specs
- Ready for M3 import

### 3️⃣ Generate CRUD Template

**When to use**: Starting CRUD operations

**Inputs Claude will ask for**:
- Operation type (Create/Read/Update/Delete/List)
- Table name
- Specific fields (optional)

**Output**: Template code with:
- Proper database operations
- Input validation
- Audit trail fields
- Error handling

### 4️⃣ Validate XtendM3 Code

**When to use**: Checking existing code

**Inputs Claude will ask for**:
- Your Groovy code
- Specific concerns (optional)

**Output**: Validation report with:
- Issues found
- Severity levels
- Specific suggestions
- Code improvements

### 5️⃣ Learn XtendM3 Standards

**When to use**: Understanding best practices

**Inputs Claude will ask for**:
- Your code (optional)
- Topic or question

**Output**: Educational response with:
- Relevant explanations
- Code examples
- Best practices
- Recommendations

## Workflow Example

### Complete API Development

```
Step 1: Research & Spec
[Create specification document]

Step 2: Generate API
/xtendm3
→ Select: 1. Generate Custom API
→ Provide spec and table info
→ Claude generates: MyAPI.groovy
→ Claude generates: MyAPI.json

Step 3: Validate
/xtendm3
→ Select: 4. Validate Code
→ [Paste generated MyAPI.groovy]
→ Claude validates and reports

Step 4: Deploy
→ Upload MyAPI.groovy to extension handler
→ Import MyAPI.json to M3
→ Test in M3 UI
```

## Features Included

✅ Interactive menu interface
✅ Context-aware Claude analysis
✅ File upload/paste support
✅ XtendM3 standards built-in
✅ Groovy API generation
✅ M3 JSON generation
✅ CRUD templates
✅ Code validation
✅ Standards education
✅ Production-ready output

## Installation Locations

After NPM install, the skill is available at:
```
~/.claude/skills/xtendm3-validator/
├── SKILL.md          # Main skill definition
├── README.md         # This file
└── lib/              # Supporting files
```

## Support

**In Claude Code**:
```
/xtendm3
→ Select: 5. Learn XtendM3 Standards
→ Ask your question
```

**Report issues**: Include code and context when reporting

**Feedback**: Questions and examples help improve the skill

## Version

**XtendM3 Validator Claude Skill v1.0.0**

- Interactive menu interface
- Claude AI-powered analysis
- File context support
- M3 JSON generation
- CRUD templates
- Code validation
- Standards education

## What's Next

After installing:

1. **Try it out**: `/xtendm3`
2. **Provide context**: Paste a file
3. **Ask questions**: Learn and generate
4. **Deploy**: Use generated code

## Quick Links

- **Full Documentation**: See SKILL.md
- **Usage Examples**: In SKILL.md menu options
- **XtendM3 Standards**: `/xtendm3` → Option 5

---

**Ready to get started?**

In Claude Code:
```
/xtendm3
```

**Enjoy building better XtendM3 APIs with Claude!** 🚀
