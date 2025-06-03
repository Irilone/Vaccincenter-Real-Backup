---
trigger: always_on
---

# VaccinCenter/Episerver Workspace Rules

> **Note:** You operate as a **Content Editor** in Episerver (per the 2019 Episerver CMS Editor User Guide), so you **cannot** modify CMS templates or global layout files—only content areas and assets are editable  [oai_citation:0‡episerver-cms-editor-user-guide.pdf](file-service://file-DMw5nkq3986f3CdZEKV9Dm).

1. **Branch & PRs**  
   • branch: `feature/vaccin-<component>` or `bugfix/vaccin-<ticket>`  
   • PR ≤ 150 LOC; target `develop` → `staging` → `main`  

2. **Episerver Integration**  
   • Follow CMS placeholders & content areas; **no** direct `<body>` or template edits  
   • Wrap widgets in `epi-`-prefixed containers  
   • Use Episerver MVC patterns (Display/Property models)  
   • Co-locate views, controllers, scripts under the CMS project structure  

3. **Incremental Refactoring**  
   • Identify and refactor one duplicate pattern at a time  
   • Preserve existing CSS selectors & theme tokens  
   • Add legacy-compatibility tests before replacing  

4. **Theming & Styles**  
   • SCSS partials under `/ClientResources/Styles`  
   • Only override Episerver defaults via variable-map imports  
   • Use theme mixins for spacing, typography  

5. **Scripts & Bundling**  
   • Entry points in `/ClientResources/Scripts`; import modules  
   • Bundle via Gulp/Webpack per Episerver guidelines  
   • No inline scripts; use AMD or ES modules  

6. **Configuration & Deployment**  
   • JSON config under `/App_Data/ClientConfig`  
   • Update `web.config` only for truly global settings  
   • Ensure CI/CD pipeline runs lint, build, tests, then sync to Media folder  

7. **Reviews & Quality**  
   • Two reviewers per PR; one senior familiar with Episerver  
   • QA on staging—verify both CMS content and refactored front-end  
   • Update `README.md` and release notes for any breaking changes  
