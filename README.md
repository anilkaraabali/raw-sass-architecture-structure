# Raw Sass Architecture Structure

```
styles/
|
|– abstracts/
|   |– _breakpoint.scss         # Breakpoint variables
|   |– _variables.scss          # Global variables
|   ...                         # Etc…
|
|– base/
|   |– _elements.scss           # Default Element Definitions
|   |– _normalize.scss          # Normalize
|   |– _typography.scss         # Typography
|   ...                         # Etc…
|
|– functions/
|   |– _palette.scss            # Palette Function
|   ...                         # Etc…
|
|– layout/
|   |– _body.scss               # Body specific styles
|   |– _grid.scss               # Grid layout specific styles
|   |– _html.scss               # Html specific styles
|   ...                         # Etc…
|
|– mixin/
|   |– _breakpoint.scss         # Breakpoint
|   |– _flex.scss               # Flex
|   ...                         # Etc…
|
|– palettes/
|   |– _all.scss                # Color Palette Definitions
|   ...                         # Etc…
|
|– utilities/
|   |– _spacing.scss            # White Spacing Rules
|   ...                         # Etc…
|
`- core.scss                    # to use inside the components
`– main.scss                    # Primary Sass file
```
