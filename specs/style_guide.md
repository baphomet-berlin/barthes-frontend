# Style guide

## File and folder naming

Folder names use dashes as separators.

## Javascript

### Minutiae

- *Braces*: K&R / 1TBS;
- *Naming*: snakeCase. CamelCase for Classes; 
- *Indentation*: two spaces per level;
- *Statement separation*: semicolon and newline;
- *Block separation*: one newline;
- *Multiple newlines* can be used to separate blocks;
- *Object literal, one line*: one space between the brackets and the content;
- *Array literal, one line*: no space;
- *Array or object, multiline*: as per K&R blocks;
- *Array containing single multiline object*: object's opening brackets can stick to array's.

Example:

```javascript

var myObject = {
  inlineArray: [1, 2],
  inlineMixed: [{ numberOne: 1 }, { numberTwo: 2}],
  functionExample: function(x) {
    if (x == 1) {
      return true;
    } else {
      return false;
    }
  }
};

var arrayOfObjects = [
  { bubu: 1 },
  { bibi: 2 },
  {
    longer: {
      here: { you: 'go' }
    }
  }
];

var arrayWithOneObject = [{
  here: 'see?',
  pretty: 'cool'
}];

```