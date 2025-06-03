# CSS to SCSS Migration Guide

This guide outlines the process for migrating from the existing CSS codebase to the new SCSS architecture.

## Migration Strategy

The migration follows an incremental approach to minimize risk:

1. Setup the new SCSS architecture (completed)
2. Convert components one at a time, starting with atoms
3. Maintain backward compatibility during transition
4. Test for visual regressions before deploying each component
5. Update HTML templates to use new class names
6. Remove backward compatibility once fully migrated

## Component Migration Examples

### Before: Original CSS Button

```css
.buttons a {
  display: -webkit-box !important;
  display: -moz-box !important;
  display: -ms-flexbox !important;
  display: -webkit-flex !important;
  display: flex !important;
  -webkit-box-align: center !important;
  -moz-box-align: center !important;
  -ms-flex-align: center !important;
  -webkit-align-items: center !important;
  align-items: center !important;
  -webkit-border-radius: 8px !important;
  -moz-border-radius: 8px !important;
  border-radius: 8px !important;
  -webkit-box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08) !important;
  -moz-box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08) !important;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08) !important;
  -webkit-transition: all 0.2s ease !important;
  -moz-transition: all 0.2s ease !important;
  -ms-transition: all 0.2s ease !important;
  -o-transition: all 0.2s ease !important;
  transition: all 0.2s ease !important;
}

.btn-primary {
  background-color: #012363;
  color: #ffffff;
}

.btn-primary:hover {
  -webkit-transform: translateY(-4px) !important;
  -moz-transform: translateY(-4px) !important;
  -ms-transform: translateY(-4px) !important;
  -o-transform: translateY(-4px) !important;
  transform: translateY(-4px) !important;
}
```

### After: Refactored SCSS Button

```scss
// In _buttons.scss
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-2) var(--spacing-4);
  border-radius: var(--border-radius);
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  border: none;
  transition: all var(--transition-speed) var(--transition-easing);
  
  &--primary {
    background-color: var(--color-primary);
    color: var(--color-white);
    box-shadow: var(--box-shadow);
    
    &:hover, &:focus {
      background-color: color-mix(in srgb, var(--color-primary) 90%, black);
      transform: translateY(-4px);
      box-shadow: var(--box-shadow-hover);
    }
  }
}

// Backward compatibility
.btn-primary {
  @extend .button;
  @extend .button--primary;
}
```

### HTML Migration Example

#### Before

```html
<div class="buttons">
  <a href="#" class="btn-primary">
    <i class="fal fa-calendar-alt"></i> Boka tid
  </a>
</div>
```

#### After

```html
<div class="clinic-card__buttons">
  <a href="#" class="button button--primary">
    <i class="fal fa-calendar-alt"></i> Boka tid
  </a>
</div>
```

## Episerver Integration

### Widget Integration

Wrap components in Episerver containers:

```html
<!-- Before -->
<div class="clinic-card">...</div>

<!-- After -->
<div class="epi-widget" data-epi-widget-name="Clinic Card">
  <div class="clinic-card">...</div>
</div>
```

### Content Areas

Use Episerver content area markup:

```html
<div class="epi-content-area">
  @Html.PropertyFor(m => m.MainContentArea)
</div>
```

## Testing Process

For each migrated component:

1. **Visual Comparison**: Compare old vs. new rendering
2. **Responsive Testing**: Test on mobile, tablet, and desktop
3. **Cross-Browser Testing**: Verify in Chrome, Firefox, Safari, Edge
4. **Episerver Editor Testing**: Test in CMS editing mode

## Deployment Checklist

Before deploying each migration phase:

- [ ] Compile SCSS to CSS (`npm run build`)
- [ ] Run linting (`npm run lint`)
- [ ] Verify no visual regressions
- [ ] Update any affected HTML templates
- [ ] Test in Episerver CMS environment
- [ ] Document any changes in component behavior

## Progressive Enhancement

The migration is designed to be incremental:

1. First migrate base styles and utilities
2. Then migrate atoms (buttons, icons)
3. Then migrate molecules (clinic-card, service-item)
4. Then migrate organisms (clinic-cards, service-grid)
5. Finally migrate layouts and Episerver-specific components

## Fallback Strategy

If issues arise during migration:

1. The old CSS is preserved during transition
2. `@extend` ensures backward compatibility
3. Legacy class names continue to function
4. Revert individual components if needed without affecting others
