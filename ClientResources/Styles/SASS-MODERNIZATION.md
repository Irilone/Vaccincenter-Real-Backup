# SCSS Modernization Guide

## Overview

This document outlines the changes made to modernize the SCSS architecture for the Vaccincenter project, including the transition from legacy `@import` syntax to the modern Sass module system.

## Key Changes

### 1. Module System Implementation

- Replaced deprecated `@import` statements with modern `@use`/`@forward` syntax
- Created index files (`_index.scss`) in each directory to simplify imports
- Established a consistent namespacing strategy
  
```scss
// Before
@import 'abstracts/variables';
@import 'abstracts/mixins';

// After
@use 'abstracts' as *;
// Or for specific modules
@use '../abstracts/mixins' as *;
```

### 2. Math Operations Update

- Fixed deprecated division operations
  
```scss
// Before
flex: 0 0 percentage($i / 12);

// After
flex: 0 0 math.percentage(math.div($i, 12));
```

- Added the Sass math module import where needed
  
```scss
@use 'sass:math';
```

### 3. Structure Improvements

- Each component explicitly imports its dependencies
- Made `@extend` directives optional with `!optional` flag
- Maintained BEM methodology and Atomic Design principles

## Directory Structure

```
ClientResources/Styles/
├── abstracts/
│   ├── _index.scss         # Forwards all abstract utilities
│   ├── _variables.scss
│   ├── _mixins.scss
│   └── _functions.scss
├── base/
│   ├── _index.scss
│   ├── _reset.scss
│   └── _typography.scss
├── atoms/
│   ├── _index.scss
│   ├── _buttons.scss
│   └── _icons.scss
├── molecules/
│   ├── _index.scss
│   ├── _clinic-card.scss
│   └── _service-item.scss
├── organisms/
│   ├── _index.scss
│   ├── _clinic-cards.scss
│   └── _service-grid.scss
├── layout/
│   ├── _index.scss
│   ├── _container.scss
│   └── _grid.scss
├── themes/
│   ├── _index.scss
│   └── _default.scss
├── episerver/
│   ├── _index.scss
│   └── _overrides.scss
└── main.scss               # Main entry point
```

## Browser Compatibility

We've maintained compatibility with the Browser Baseline requirements:
- All features comply with "widely available" browser support
- Features with limited support are wrapped in `@supports` blocks
- Vendor prefixes are maintained for cross-browser compatibility

## Migration Steps

When working with the modernized SCSS codebase:

1. Import the math module where mathematical operations are needed:
   ```scss
   @use 'sass:math';
   ```

2. Use module imports rather than `@import`:
   ```scss
   @use '../abstracts/mixins' as *;
   ```

3. Use math functions with proper namespacing:
   ```scss
   math.div($a, $b)
   math.percentage($value)
   ```

4. Add `!optional` to `@extend` directives that might not always be available:
   ```scss
   @extend .button !optional;
   ```

## Compilation

Compile the SCSS to CSS using:

```bash
cd /Users/air/Documents/GitHub/Vaccincenter-Real-Backup/ClientResources
npm run build
```

## Testing

Test the compiled CSS with the updated HTML templates in:
```
/vaccincenter-varvet/mottagningar/test/updated-index.html
```

This file uses updated BEM class naming conventions and references images from the `vaccincenter-varvet/assets-img` directory.

## Episerver Integration Notes

As specified in the Vaccincenter workspace rules:
- Follow CMS placeholders & content areas
- Wrap widgets in `epi-`-prefixed containers
- Use Episerver MVC patterns for views and controllers
- Ensure styles work properly within the CMS editor environment
