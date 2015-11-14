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
- `ComponentX.js` loads its own css. We could automatise this in the future.
- `Subcomponent`s are components only used within their parent. If they come to get used otherwise, they get their own FLD.
- `Subcomponents are loaded by `ComponentX.js`s 
