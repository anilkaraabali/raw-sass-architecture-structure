# Raw Sass Architecture Structure

```
styles/
|
|– abstracts/
|   |– _functions.scss          # Sass Functions
|   |– _mixins.scss             # Sass Mixins
|   |– _utilities.scss          # Sass Utilities
|   |– _variables.scss          # Sass Variables
|   ...                         # Etc…
|
|– base/
|   |– _animations.scss         # Animation Keyframes
|   |– _elements.scss           # Default Element Definitions
|   |– _normalize.scss          # Normalize
|   |– _typography.scss         # Typography
|   ...                         # Etc…
|
|– layout/
|   |– _body.scss               # Body specific styles
|   |– _grid.scss               # Grid layout specific styles
|   |– _html.scss               # Html specific styles
|   ...                         # Etc…
|
|– themes/
|   |– _all.scss                # Default Theme
|   ...                         # Etc…
|
|– vendors/
|   |– _vuetify.scss            # Vuetify
|   ...                         # Etc…
|
`- core.scss                    # Shared Sass file
`– main.scss                    # Main Sass file
```
