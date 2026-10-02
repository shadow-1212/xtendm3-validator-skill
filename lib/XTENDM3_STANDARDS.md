# XtendM3 Programming Standards

Reference for Claude when validating and generating code.

## Naming Conventions

### Methods & Functions
- ✅ **CORRECT**: `lowerCamelCase`
  - `getCurrentUser()`
  - `validateInput()`
  - `processTransaction()`
  - Exception: `main()` is allowed

- ❌ **WRONG**: 
  - `GetCurrentUser()` - PascalCase
  - `get_current_user()` - snake_case
  - `GETCURRENTUSER()` - ALL_CAPS

### Variables & Parameters
- ✅ **CORRECT**: `lowerCamelCase`
  - `userInput`
  - `itemCount`
  - `transactionId`

- ❌ **WRONG**:
  - `UserInput` - PascalCase
  - `user_input` - snake_case
  - `USERINPUT` - ALL_CAPS

### Constants
- ✅ **CORRECT**: `ALL_CAPS` with underscores
  - `MAX_RECORDS = 10000`
  - `DEFAULT_TIMEOUT = 300`
  - `ERROR_CODE_INVALID = 500`

- ❌ **WRONG**:
  - `maxRecords` - lowerCamelCase
  - `max_records` - snake_case
  - `MaxRecords` - PascalCase

### Table & Field Abbreviations
- Use M3 standard abbreviations
- All uppercase for field prefixes
- Examples: `CONO`, `DIVI`, `ITNO`, `ORNO`

---

## Prohibited Patterns

### ❌ Logger Methods (BANNED)
```groovy
// WRONG - All of these are prohibited
logger.info("message")
logger.warning("message")
logger.error("message")
logger.trace("message")

// CORRECT - Use only:
logger.debug("message")
```

**Why**: Production logging should be controlled; debug is the only allowed level

---

### ❌ `def` Keyword (BANNED)
```groovy
// WRONG
def name = "John"
def count = 10
def processData() { }

// CORRECT - Specify the type
String name = "John"
int count = 10
void processData() { }
```

**Why**: Type safety and code clarity

---

### ❌ SimpleDateFormat (BANNED)
```groovy
// WRONG
SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd")
String date = sdf.format(new Date())

// CORRECT - Use DateTimeFormatter
DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd")
String date = LocalDate.now().format(formatter)
```

**Why**: SimpleDateFormat is not thread-safe; DateTimeFormatter is recommended

---

### ❌ selectAllFields() (BANNED)
```groovy
// WRONG
dba.selection().readAll()
.selectAllFields()
.build()

// CORRECT - Specify exactly what you need
dba.selection("FIELD1", "FIELD2", "FIELD3")
.build()
```

**Why**: Performance; avoid fetching unnecessary data

---

### ❌ sleep() / pause() (BANNED)
```groovy
// WRONG - Never use timing operations
sleep(1000)
Thread.sleep(500)
pause()

// CORRECT - Use event-driven or async patterns
// Implement proper async handling instead
```

**Why**: Blocks resources; kills scalability

---

## Database Performance Standards

### readAll Limits
```groovy
// CORRECT - Page size limited to 10,000 maximum
dba.readAll(container, 1, 10000, { record ->
    // Process record
})

// WRONG - Exceeds 10,000 limit
dba.readAll(container, 1, 50000, { record ->
    // Too many records
})
```

**Limit**: `pageSize ≤ 10,000 records`

### Selection Performance
```groovy
// CORRECT - Select only needed fields
.selection("CONO", "DIVI", "ITNO", "STDT")

// WRONG - Too many fields
.selection("*")
.selectAllFields()
```

### Nested Loop Performance
```groovy
// CORRECT - Keep nested loops reasonable
for (item in items) {                    // ~1000
  for (line in item.lines) {            // ~100
    // Process: ~100,000 operations
  }
}

// WRONG - Too many nested iterations
readAll(container1, 1, 50000) { rec1 ->
  readAll(container2, 1, 50000) { rec2 ->
    // Would be 2.5 billion operations!
  }
}
```

---

## Audit Trail Requirements

### INSERT Operations
**All of these fields MUST be set before `.insert()`**:

```groovy
// REQUIRED for every INSERT
container.set("XXRGDT", utility.call("GeneralManageTime", "getServerDate"))
container.set("XXRGTM", utility.call("GeneralManageTime", "getServerTime"))
container.set("XXLMDT", container.get("XXRGDT"))
container.set("XXCHID", program.getUser())
container.set("XXCHNO", 0)

// Where XX = table prefix (OC, MI, etc.)
```

| Field | Description | Required For |
|-------|-------------|--------------|
| RGDT | Record creation date | INSERT |
| RGTM | Record creation time | INSERT |
| LMDT | Last modified date | INSERT, UPDATE |
| CHID | Changed by user ID | INSERT, UPDATE |
| CHNO | Change number | INSERT, UPDATE |

### UPDATE Operations
**All of these fields MUST be set before `.update()`**:

```groovy
dba.readLock(container, { lockedRecord ->
  lockedRecord.set("XXLMDT", utility.call("GeneralManageTime", "getServerDate"))
  lockedRecord.set("XXCHID", program.getUser())
  lockedRecord.set("XXCHNO", (int)lockedRecord.get("XXCHNO") + 1)
  lockedRecord.update()
})
```

| Field | Description | Required For |
|-------|-------------|--------------|
| LMDT | Last modified date | UPDATE |
| CHID | Changed by user ID | UPDATE |
| CHNO | Change number (increment) | UPDATE |

### DELETE Operations
- Track deletion timestamp
- Keep audit trail of deletions
- Use soft deletes where appropriate

---

## Documentation Standards

### Program Header (Required)
```groovy
/**
 * Extension Name: EXTXXXMI/ApiName
 * Type: ExtendM3Transaction
 * Script Author: Author Name
 * Date: YYYY-MM-DD
 * Description: What this API does
 * 
 * Revision History:
 *   v1.0.0 - YYYY-MM-DD - Initial release
 *   v1.0.1 - YYYY-MM-DD - Bug fix description
 */
```

### Method Documentation
```groovy
/**
 * Brief description of what method does
 * @param paramName - Description of parameter
 * @return Description of return value
 */
void methodName(String paramName) {
  // Implementation
}
```

### Comment Style
- Use `//` for inline comments
- Use `/** */` for documentation blocks
- Keep comments brief and meaningful
- Explain WHY, not WHAT

---

## Input Validation

### Required Validations
```groovy
// Always validate mandatory inputs
if (!inData.get('CUNO')?.trim()) {
  outData.put('ERROR', 'Customer number is required')
  return
}

// Validate data types
Integer cono = inData.get('CONO') as Integer
if (!cono || cono <= 0) {
  outData.put('ERROR', 'Invalid company number')
  return
}

// Validate field lengths
String itemNo = inData.get('ITNO')?.trim()
if (itemNo?.length() > 15) {
  outData.put('ERROR', 'Item number exceeds maximum length')
  return
}
```

---

## Error Handling

### Standard Pattern
```groovy
try {
  // Perform operation
  dba.read(container)
  
} catch (Exception e) {
  logger.debug("Error in operation: ${e.message}")
  outData.put('ERROR', "Operation failed: ${e.message}")
  return
}
```

### Error Messages
- Clear and actionable
- Include field names
- Suggest solutions where possible
- Log with DEBUG level only

---

## Field Selection Best Practices

### What to Select
```groovy
// Good - Select only what you use
.selection(
  "CONO",      // Company
  "DIVI",      // Division
  "ITNO",      // Item number
  "STAT",      // Status
  "LMDT",      // Last modified date
  "CHID"       // Changed by
)
```

### What NOT to Select
```groovy
// Bad - Unnecessary fields
.selectAllFields()  // BANNED

// Bad - Too specific
.selection("CONO", "DIVI", "CCON", "CCUN", "CCUP", ...)  // Too many
```

---

## Extension Types

### Interactive (Most Common)
- User-triggered operations
- Real-time processing
- Direct user feedback

### Batch
- Scheduled operations
- Large volume processing
- Deferred results

### Trigger
- Event-driven
- Automatic execution
- Background processing

### Utility
- Helper functions
- Reusable logic
- Shared operations

### Transaction
- Business logic operations
- Data manipulation
- Complex workflows

---

## Performance Checklist

- [ ] readAll pageSize ≤ 10,000
- [ ] Only select needed fields
- [ ] Avoid nested loops > 2 levels
- [ ] Use appropriate indexes
- [ ] Minimize database calls
- [ ] Cache repeated lookups
- [ ] Use pagination for large data
- [ ] Profile before/after changes

---

## Security Checklist

- [ ] Validate all user input
- [ ] Use only logger.debug()
- [ ] No hardcoded passwords/keys
- [ ] Sanitize string operations
- [ ] Proper error handling
- [ ] Audit trail complete
- [ ] Permissions verified
- [ ] SQL injection protected (use APIs)

---

## Code Quality Checklist

- [ ] Follows naming conventions
- [ ] No prohibited patterns
- [ ] Proper documentation
- [ ] Error handling implemented
- [ ] Performance optimized
- [ ] Audit trail complete
- [ ] Tested and validated
- [ ] Ready for production

---

## Common Issues & Fixes

### Issue: selectAllFields() Used
**Problem**: Performance degradation
**Fix**: Replace with explicit selection
```groovy
// Bad
.selectAllFields()

// Good
.selection("CONO", "DIVI", "ITNO")
```

### Issue: readAll without limit
**Problem**: Memory issues
**Fix**: Add proper pagination
```groovy
// Bad
.readAll(container, 1, Integer.MAX_VALUE)

// Good
.readAll(container, 1, 10000)
```

### Issue: No audit trail
**Problem**: Compliance violation
**Fix**: Add required audit fields
```groovy
container.set("RGDT", utility.call("GeneralManageTime", "getServerDate"))
container.set("RGTM", utility.call("GeneralManageTime", "getServerTime"))
// ... etc
```

### Issue: logger.info() used
**Problem**: Production logging level
**Fix**: Use logger.debug()
```groovy
// Bad
logger.info("Processing order")

// Good
logger.debug("Processing order")
```

---

## When in Doubt

✓ **Ask Claude**: `/xtendm3` → "Learn XtendM3 Standards"
✓ **Check examples**: Look at working APIs
✓ **Validate code**: `/xtendm3` → "Validate XtendM3 Code"
✓ **Read standards**: Review this document

---

## More Information

For detailed guidance, use the `/xtendm3` skill:
1. Select: "Learn XtendM3 Standards"
2. Ask your specific question
3. Claude provides examples and explanations

**Happy coding!** 🚀
