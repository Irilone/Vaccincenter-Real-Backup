# Vaccincenter SCSS Architecture

This document outlines the SCSS architecture and methodology used in the Vaccincenter project, designed to work with Episerver CMS integration.

## Core Principles

- **BEM Methodology**: Block-Element-Modifier naming convention (`block__element--modifier`)
- **Atomic Design**: Components organized as atoms → molecules → organisms
- **Mobile-First**: Responsive styles begin with mobile layouts and scale up
- **CSS Custom Properties**: Theme variables defined as CSS custom properties
- **No !important Flags**: Proper CSS specificity hierarchy instead of force overrides
- **Episerver Integration**: CMS-compatible structure with specific overrides

## Directory Structure

```text
/ClientResources/Styles/
  /abstracts         # Non-output SCSS helpers
    _variables.scss  # CSS custom properties
    _mixins.scss     # Reusable patterns
    _functions.scss  # SCSS calculations
  /base              # Base HTML element styling
    _reset.scss      # Modern CSS reset
    _typography.scss # Text styling
  /atoms             # Basic UI components
    _buttons.scss    # Button variations
    _icons.scss      # Icon styling
  /molecules         # Compound components
    _clinic-card.scss
    _service-item.scss
  /organisms         # Complex components
    _clinic-cards.scss
    _service-grid.scss
  /layout            # Layout components
    _container.scss  # Container system
    _grid.scss       # Grid system
  /themes            # Theme variations
    _default.scss    # Default theme variables
  /episerver         # CMS integration
    _overrides.scss  # Episerver-specific overrides
  main.scss          # Main entry file
```

## CSS Custom Properties

All design tokens are defined using CSS custom properties in `_variables.scss`:

```css
:root {
  --color-primary: #012363;
  --color-secondary: #00ADD0;
  --spacing-4: 1rem;
  --border-radius: 8px;
}
```

## Responsive Breakpoints

Mobile-first breakpoints are available through the `respond-to` mixin:

```scss
.my-component {
  // Mobile styles by default
  
  @include respond-to('md') {
    // Tablet styles (768px+)
  }
  
  @include respond-to('lg') {
    // Desktop styles (992px+)
  }
}
```

Defined breakpoints:

- `sm`: 576px
- `md`: 768px
- `lg`: 992px
- `xl`: 1280px
- `xxl`: 1536px

## BEM Naming Convention

```scss
// Block
.clinic-card {
  // Base styles
  
  // Element
  &__image-wrapper {
    // Element styles
  }
  
  // Modifier
  &--featured {
    // Modifier styles
  }
}
```

## Utility Mixins

Common patterns have dedicated mixins:

```scss
// Typography
@include typography('lg', 600);

// Flexbox
@include flex-center;
@include flex-column;

// Container
@include container;

// Card styling
@include card;
```

## Backward Compatibility

Legacy class names are supported via SCSS `@extend`:

```scss
// Original class
.btn-primary {
  @extend .button;
  @extend .button--primary;
}
```

## Build Process

```bash
# Install dependencies
npm install

# Development with watch mode
npm run dev

# Production build
npm run build

# Lint SCSS files
npm run lint

# Auto-fix linting issues
npm run fix
```

## Episerver Integration

Components designed for Episerver follow these guidelines:

- Widgets wrapped in `epi-` prefixed containers
- Content areas follow CMS placeholders
- Theme overrides via CSS variables only
- Co-location with CMS project structure
