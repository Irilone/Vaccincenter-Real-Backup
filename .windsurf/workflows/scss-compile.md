---
description: SCSS Compilation
---

# SCSS Compilation Workflow

## 1. Initialize Workspace {#init}

* **Action**: Load the VaccinCenter codebase into Windsurf.
* **Note**: You have editor-level permissions only; you cannot modify Episerver CMS templates or global layout files.
* **Map**: `sequentialThinking.start()`
* **MCP**: `filesystem.loadProject(path="/path/to/ClientResources/Styles/src")`

### Expected Outcome

* All SCSS source files are indexed and ready for analysis.

---

## 2. Audit & Chunk SCSS {#audit}

* **Action**: Run the SCSS audit routine to identify sections and duplicates.
* **Map**: `sequentialThinking.step("auditChunks")`
* **MCP**: `scss.audit(patterns=['duplicate', 'unused', 'complex'])`

### Expected Outcome

* A manifest of SCSS sections: variables, mixins, atoms, components.

---

## 3. Extract Modules {#extract}

* **Action**: Transform manifest entries into individual SCSS partials.
* **Map**: `sequentialThinking.step("extractModules")`
* **MCP**: `filesystem.createFiles(outputDir="src/modules", basedOn="manifest.json")`

### Expected Outcome

* Atomic SCSS files under `/modules/{type}/{name}.scss`.

---

## 4. Compile SCSS to CSS {#compile}

* **Action**: Invoke Sass compiler across modules.
* **Map**: `sequentialThinking.step("compileScss")`
* **MCP**: `scss.compile(entry="main.scss", output="dist/site.css", options={compressed:true})`

### Expected Outcome

* Single minified `site.css` in `/dist`.

---

## 5. Baseline Validation {#baseline}

* **Action**: Lint the compiled CSS against the Baseline rule.
* **Map**: `sequentialThinking.step("validateBaseline")`
* **MCP**: `css.lint(rule="use-baseline", config={available:'widely'})`

### Expected Outcome

* Zero lint errors; all non-wide features gated by `@supports`.

---

## 6. Episerver Artifact Preparation {#artifact}

* **Action**: Copy `site.css` to Episerver static folder.
* **Map**: `sequentialThinking.step("prepareArtifact")`
* **MCP**: `filesystem.copy(src="dist/site.css", dest="ClientResources/Styles/dist/site.css")`

### Expected Outcome

* CSS is placed where Episerver can serve it.

---

## 7. Commit & Deploy {#deploy}

* **Action**: Commit changes and trigger CI/CD pipeline.
* **Map**: `sequentialThinking.step("commitDeploy")`
* **MCP**: `git.commitAll(message="Refactor: SCSS modules & compile to CSS for Episerver")`
* **MCP**: `ci.trigger(buildProfile="staging")`

### Expected Outcome

* Staging environment updated; visual QA begins.

---

## 8. Validation & Iterate {#validate}

* **Action**: Perform visual regression and functional tests.
* **Map**: `sequentialThinking.end()`
* **MCP**: `qa.runVisualTests(profile="staging")`

### Expected Outcome

* Confirmation of no regressions or identified issues for next iteration.
