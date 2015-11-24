# Components

## Directory structure

Components live in `src/js/components` ("Components dir").

     /components/
       main.js
       component1/
         Component1.jsx
         component1.scss
         subcomponent/
           Subcomponent.jsx
           subcomponent.scss

- `main.js` loads all components.
- `ComponentX.jsx` loads its own css. We could automatise this in the future.
- `Subcomponent`s are components only used within their parent. If they come to get used otherwise, they get their own FLD.
- `Subcomponent`s are loaded by `ComponentX.jsx`s 

## Components scope

The components only handle data represented in their own (*virtual) DOM or emit events for a global broker (see Events (TODO)).

## Anatomy of the project

### Generative Grammar for Components

```

- TextBox ::= Placeholder | Fragment

- Placeholder?
​
- Fragment ::= [ Title ] [StartingQuote] Body
​
- Body ::= OriginalParagraph + | [Quotation]
​
- Sidenote ::= QuotationMeta
​
- StartingQuote ::= Quotation
​
- Quotation ::= QuotationBody [QuotationMeta] [ Sidenote ]
​
- QuotationMeta ::= ( AcademicQuotation | [Date] (Author | Website | Periodical | Book) | Footnote )
​
- OriginalParagraph ::= Sentence

```
​
### Logic
​
1. If fragment does not have a title, fragment title is first sentence until a set number of chars.
​
### Presentation
​
1. For user-assigned titles we use Book 11 (title is right-aligned and bold).
2. For auto-assigned titles (Logic 1.) we use Book 4 chapter start.
3. Each paragraph is indented as shown in Book 2.
4. The title for each paragraph is bold and right-aligned.
