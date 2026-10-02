# XtendM3 Validator - Claude Skill

**Description**: Interactive Claude skill for XtendM3 API development with file context support

**Trigger**: `/xtendm3`

---

## Overview

This Claude skill provides an interactive menu-driven interface for XtendM3 development tasks. It uses Claude's capabilities to understand your code, generate APIs, validate against standards, and provide intelligent suggestions.

You can provide files and additional context to get smarter results.

## Main Menu

When you invoke `/xtendm3`, you'll see a menu with these options:

```
🎯 XtendM3 Validator - What would you like to do?

1. 🎨 Generate Custom XtendM3 API
2. 📋 Generate M3 Transaction JSON Config
3. 🔨 Generate CRUD Template
4. ✓ Validate XtendM3 Code
5. 📚 Learn XtendM3 Standards
6. ❌ Exit
```

## Usage

### Basic Usage (No Files)
```
/xtendm3
→ Shows menu
→ Select option
→ Answer questions
→ Get result
```

### With File Context (Recommended)
Paste or attach files to give Claude context:

```
/xtendm3

[Attached: myapi.groovy, specification.txt, requirements.md]

→ Claude analyzes your files
→ Shows enhanced menu based on your code
→ Provides context-aware suggestions
```

## Menu Options

### 1. 🎨 Generate Custom XtendM3 API

**Description**: Create a new XtendM3 API from scratch with Claude's guidance

**Inputs**:
- API name (e.g., LstPhysInvHead)
- Extension number (e.g., EX122MI)
- Main table name
- Description of what it does
- [Optional] Related tables
- [Optional] Input field specifications
- [Optional] Output field specifications

**Uses Claude to**:
- Understand your requirements
- Suggest appropriate table relationships
- Validate field selections
- Generate production-ready Groovy code
- Ensure XtendM3 standards compliance

**Output**: Complete XtendM3 API code with:
- Program header and documentation
- Input validation
- Table relationships
- Field mapping
- Error handling
- Audit trail handling

---

### 2. 📋 Generate M3 Transaction JSON Config

**Description**: Create INFOR M3 transaction configuration JSON

**Inputs**:
- Transaction name
- Program ID
- Description
- Number of input fields
- Number of output fields
- [For each field]
  - Field name
  - Description
  - Data type (A/N)
  - Field length
  - Mandatory flag

**Uses Claude to**:
- Validate field definitions
- Suggest field types and lengths
- Check for M3 naming standards
- Ensure configuration completeness

**Output**: M3-compliant JSON with:
- Transaction metadata
- Field definitions
- Input/output specifications
- Ready for M3 import

---

### 3. 🔨 Generate CRUD Template

**Description**: Generate CRUD operation template (Create, Read, Update, Delete, List)

**Inputs**:
- Operation type (CREATE, READ, UPDATE, DELETE, LIST)
- Table name
- [Optional] Specific fields

**Uses Claude to**:
- Select appropriate operation for your table
- Suggest best practices for the operation
- Include necessary audit trail fields
- Optimize for performance

**Output**: Ready-to-customize template with:
- Proper database operations
- Input validation
- Audit trail fields
- Error handling
- Comments and documentation

---

### 4. ✓ Validate XtendM3 Code

**Description**: Analyze and validate Groovy code against XtendM3 standards

**Inputs**:
- [Paste your Groovy code or attach file]
- [Optional] Specific concerns (performance, security, etc.)

**Uses Claude to**:
- Analyze code against all XtendM3 standards
- Check naming conventions
- Detect prohibited patterns
- Validate database performance
- Ensure audit trail fields
- Review documentation

**Output**: Detailed validation report with:
- List of issues found
- Severity levels (error, warning, info)
- Line-by-line suggestions
- Code improvements
- Best practice recommendations

---

### 5. 📚 Learn XtendM3 Standards

**Description**: Get help understanding XtendM3 programming standards

**Inputs**:
- [Paste your code for analysis]
- Specific question about standards
- Topic you want to learn about

**Topics Claude can help with**:
- Naming conventions (lowerCamelCase, ALL_CAPS)
- Prohibited patterns and alternatives
- Database performance best practices
- Audit trail requirements
- Field naming standards
- Documentation requirements
- Extension type differences
- API design patterns

**Output**: 
- Relevant explanations
- Code examples
- Best practices
- Links to documentation
- Custom recommendations based on your code

---

## Adding Context

Claude works best with context. You can provide:

### 1. **Your Groovy Code**
Paste or attach existing code for analysis
```
[Paste your .groovy file]
/xtendm3
→ Claude analyzes your code
→ Provides context-aware suggestions
```

### 2. **Specification Files**
Upload requirement documents, specs, or notes
```
[Attach specification.md, requirements.txt, etc.]
/xtendm3
→ Claude understands your business requirements
→ Generates APIs matching your specs
```

### 3. **Table Definitions**
Provide table schema or field information
```
[Attach table definitions, field lists, etc.]
/xtendm3
→ Claude validates against your table structure
→ Ensures proper field selection
```

### 4. **Example APIs**
Show working examples you want to follow
```
[Attach working API examples]
/xtendm3
→ Claude learns your style
→ Generates code matching your patterns
```

### 5. **Error Messages**
Paste error logs or validation failures
```
[Paste error messages or validation results]
/xtendm3
→ Claude helps debug the issues
→ Suggests fixes based on error context
```

---

## Examples

### Example 1: Generate API from Spec
```
I need to create an order management API

[Attached: order_spec.md, ORDERS table schema, requirements.txt]

/xtendm3
→ Select: 1. Generate Custom XtendM3 API
→ Claude reads your spec and table schema
→ Asks clarifying questions
→ Generates complete API matching your spec
```

### Example 2: Validate and Improve Code
```
I have this API but it's not passing validation

[Pasted: MyAPI.groovy]

/xtendm3
→ Select: 4. Validate XtendM3 Code
→ Claude analyzes your code
→ Reports all issues found
→ Provides specific fixes and suggestions
```

### Example 3: Learn Best Practices
```
I want to understand XtendM3 naming conventions better

[Pasted: example_code.groovy]

/xtendm3
→ Select: 5. Learn XtendM3 Standards
→ Ask about naming conventions
→ Claude explains with examples from your code
→ Shows how to improve your code
```

---

## Smart Suggestions

Claude uses context to provide smart suggestions:

- **From your code**: Detects patterns and suggests matching style
- **From your spec**: Generates APIs matching requirements
- **From error messages**: Provides targeted fixes
- **From table schema**: Validates field selections
- **From examples**: Learns your preferences and standards

---

## Key Features

✅ **Interactive Menu-Driven**
- Simple, clear options
- Step-by-step guidance
- Claude asks clarifying questions

✅ **Context-Aware**
- Analyzes files you provide
- Learns from examples
- Understands your requirements
- Validates against your schema

✅ **Intelligent Validation**
- XtendM3 standards checking
- Database performance analysis
- Audit trail verification
- Best practice recommendations

✅ **Code Generation**
- Production-ready Groovy code
- M3 transaction JSON
- CRUD templates
- Complete documentation

✅ **Learning Support**
- Explains XtendM3 standards
- Shows code examples
- Provides best practices
- Helps with troubleshooting

---

## XtendM3 Standards Built-In

Claude uses comprehensive knowledge of:

- **Naming Conventions**
  - Methods: lowerCamelCase
  - Variables: lowerCamelCase
  - Constants: ALL_CAPS

- **Prohibited Patterns**
  - ❌ logger.info/warning/error/trace → Use logger.debug()
  - ❌ def keyword → Specify type
  - ❌ SimpleDateFormat → Use DateTimeFormatter
  - ❌ selectAllFields() → Use selection(...)
  - ❌ sleep/pause() → Avoid timing operations

- **Database Performance**
  - readAll pageSize ≤ 10,000
  - Nested loops optimization
  - Pagination enforcement

- **Audit Trail**
  - INSERT: RGDT, RGTM, LMDT, CHID, CHNO
  - UPDATE: LMDT, CHID, CHNO
  - DELETE: timestamp tracking

- **Documentation**
  - Program headers required
  - Method comments
  - Field descriptions
  - Consistent style

---

## Workflow Examples

### Complete API Development
```
1. /xtendm3 → Generate Custom API
2. [Provide your spec and table info]
3. Claude generates: EXT100MI_MyAPI.groovy
4. Claude generates: EXT100MI_MyAPI.json (M3 config)
5. /xtendm3 → Validate the generated code
6. Deploy to M3
```

### Code Review & Improvement
```
1. [Attach your Groovy file]
2. /xtendm3 → Validate XtendM3 Code
3. Claude analyzes and reports issues
4. /xtendm3 → Learn Standards
5. Claude explains fixes needed
6. Update code based on suggestions
7. Re-validate until clean
```

### Learning XtendM3
```
1. [Attach example API]
2. /xtendm3 → Learn XtendM3 Standards
3. Ask questions about patterns
4. Claude explains with examples
5. Understand best practices
```

---

## Tips for Best Results

1. **Provide Context**: Attach files for smarter suggestions
2. **Be Specific**: Describe your requirements clearly
3. **Include Examples**: Show what you want to achieve
4. **Ask Questions**: Learn as you build
5. **Validate Early**: Check code frequently
6. **Use Feedback**: Apply Claude's suggestions

---

## What Claude Analyzes

When you provide code or files, Claude examines:

✓ Naming conventions
✓ Prohibited patterns
✓ Database performance
✓ Audit trail requirements
✓ Documentation quality
✓ Field selections
✓ Table relationships
✓ Error handling
✓ Security practices
✓ Best practices alignment

---

## Output Quality

All generated code includes:

- ✅ Program header with metadata
- ✅ Complete documentation
- ✅ Input validation
- ✅ Error handling
- ✅ Audit trail fields
- ✅ Performance optimization
- ✅ XtendM3 standards compliance
- ✅ Ready for production deployment

---

## Support & Help

**Get help about this skill**:
```
/xtendm3
→ Select: 5. Learn XtendM3 Standards
→ Ask your question
```

**Report issues**: Include files and description for best help

**Share feedback**: Your questions and examples help improve the skill

---

## Version

**XtendM3 Validator Claude Skill v1.0.0**

- Interactive menu interface
- File context support
- Claude AI-powered analysis
- M3 JSON generation
- CRUD templates
- Code validation
- Standards education

**Status**: Ready for production use

---

## What Makes This Skill Special

🧠 **Uses Claude's Intelligence**
- Understands natural language
- Analyzes complex code
- Provides intelligent suggestions
- Learns from context

📁 **Accepts Multiple Input Formats**
- Groovy code files
- Specification documents
- Table schemas
- Error messages
- Natural language descriptions

🎯 **Provides Actionable Output**
- Production-ready code
- Detailed validation reports
- Specific fix suggestions
- Educational explanations

🔄 **Interactive Workflow**
- Menu-driven interface
- Clarifying questions
- Progressive refinement
- Continuous improvement

---

**Start using it**: `/xtendm3`

**Provide context**: Paste files or add information before invoking

**Get smart results**: Claude will analyze and provide intelligent suggestions

Enjoy building better XtendM3 APIs with Claude! 🚀
