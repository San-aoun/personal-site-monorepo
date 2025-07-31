# CI/CD Pipeline Documentation

## 🚀 Overview

This repository now includes a comprehensive CI/CD pipeline that automatically:

1. **Runs unit tests** for the React application
2. **Builds the application** for production
3. **Deploys to GitHub Pages** on successful builds
4. **Triggers UI tests** in the Playwright repository
5. **Generates test coverage reports**

## 📋 Pipeline Structure

### Primary Workflow: `.github/workflows/ci-cd.yml`

This is the main CI/CD pipeline that runs on:
- Push to `main` or `develop` branches
- Pull requests to `main` branch
- Manual trigger via `workflow_dispatch`

#### Pipeline Jobs:

1. **🧪 Unit Tests** (`unit-tests`)
   - Runs linting with ESLint
   - Executes unit tests with Vitest
   - Generates test coverage reports
   - Uploads test artifacts

2. **🏗️ Build** (`build`)
   - Builds the React application for production
   - Uploads build artifacts
   - Only runs if unit tests pass

3. **🚀 Deploy** (`deploy`)
   - Deploys to GitHub Pages (main branch only)
   - Only runs if unit tests and build succeed
   - Uses `gh-pages` package for deployment

4. **🎭 Trigger UI Tests** (`trigger-ui-tests`)
   - Triggers Playwright tests in external repository
   - Runs after successful deployment
   - Passes deployment URL and metadata

5. **📧 Notify on Failure** (`notify-failure`)
   - Sends notifications if any job fails
   - Creates commit status with failure details

### Coverage Workflow: `.github/workflows/test-coverage.yml`

Separate workflow for detailed test coverage reporting:
- Generates comprehensive coverage reports
- Uploads to Codecov (optional)
- Comments on PRs with coverage details

## 🔧 Configuration

### Required Secrets

You need to set up the following secrets in your GitHub repository settings:

1. **`PERSONAL_ACCESS_TOKEN`** - GitHub Personal Access Token with workflow permissions
   - Go to GitHub Settings > Developer settings > Personal access tokens
   - Create token with `repo` and `workflow` scopes
   - Add to repository secrets

### Environment Variables

The pipeline uses these environment variables:
- `NODE_VERSION`: '18' (Node.js version for CI)
- `CACHE_KEY`: For dependency caching optimization

### Test Configuration

Test settings in `vite.config.ts`:
```typescript
test: {
  globals: true,
  environment: 'jsdom',
  setupFiles: ['./src/test/setup.ts'],
  coverage: {
    provider: 'v8',
    reporter: ['text', 'json', 'html', 'lcov'],
    thresholds: {
      global: {
        branches: 70,
        functions: 70, 
        lines: 70,
        statements: 70
      }
    }
  }
}
```

## 🎭 Playwright Integration

The CI/CD pipeline automatically triggers UI tests in your Playwright repository:
- **Repository**: `San-aoun/ui_playwright_piya_profile`
- **Workflow**: `ci.yml` (adjust if your workflow file has different name)
- **Triggers**: After successful deployment to main branch

### Data Passed to Playwright:
```javascript
inputs: {
  triggered_by: 'personal-site-monorepo',
  commit_sha: '${{ github.sha }}',
  environment: 'production',
  test_url: 'https://san-aoun.github.io/personal-site-monorepo'
}
```

## 📊 Test Commands

Available npm scripts for testing:

```bash
# Run tests in watch mode (development)
npm run test

# Run tests once and exit
npm run test:run

# Run tests with coverage
npm run test:coverage

# Run tests with UI (visual test runner)
npm run test:ui

# Run linting
npm run lint

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## 🔍 Coverage Reports

Coverage reports are generated in multiple formats:
- **HTML**: `./coverage/index.html` (visual report)
- **LCOV**: `./coverage/lcov.info` (for external tools)
- **JSON**: `./coverage/coverage-summary.json` (for automation)
- **Text**: Console output during test runs

### Coverage Thresholds
- **Branches**: 70%
- **Functions**: 70%
- **Lines**: 70%
- **Statements**: 70%

## 🚨 Failure Handling

The pipeline includes comprehensive error handling:

1. **Individual Job Failures**: Jobs continue running independently
2. **Automatic Notifications**: Failed builds create commit statuses
3. **Artifact Preservation**: Test results and logs are saved even on failure
4. **Retry Logic**: Network-dependent operations have retry mechanisms

## 🔄 Workflow Triggers

### Automatic Triggers:
- **Push to main/develop**: Full pipeline with deployment
- **Pull Request to main**: Tests and build only (no deployment)

### Manual Triggers:
- **Workflow Dispatch**: Can be triggered manually from GitHub Actions tab

### External Triggers:
- **Repository Dispatch**: Can be triggered by external systems
- **Scheduled**: Can add cron schedule if needed

## 📈 Monitoring & Insights

### GitHub Actions Dashboard
- View all workflow runs in the "Actions" tab
- Monitor success/failure rates
- Download artifacts and logs

### Commit Status Checks
- PR status checks ensure quality before merge
- Deployment status visible on commits
- Direct links to live site and test results

### Test Artifacts
- Coverage reports (HTML, LCOV, JSON)
- Test results and logs
- Build artifacts
- Retained for 7 days

## 🛠️ Troubleshooting

### Common Issues:

1. **Tests Failing**
   - Check test output in Actions logs
   - Run tests locally: `npm run test:run`
   - Check coverage thresholds

2. **Build Failures**
   - Verify TypeScript compilation: `npm run build`
   - Check for ESLint errors: `npm run lint`

3. **Deployment Issues**
   - Ensure GitHub Pages is enabled
   - Check repository settings > Pages
   - Verify `gh-pages` branch exists

4. **Playwright Trigger Fails**
   - Verify `PERSONAL_ACCESS_TOKEN` secret
   - Check Playwright repository workflow file name
   - Ensure external repository accepts workflow dispatches

### Debug Commands:
```bash
# Run tests with verbose output
npm run test:run -- --reporter=verbose

# Build with detailed output
npm run build -- --mode=development

# Check TypeScript compilation
npx tsc --noEmit

# Validate configuration
npx vitest --config
```

## 🎯 Next Steps

1. **Set up Personal Access Token** for Playwright integration
2. **Configure Codecov** for external coverage reporting (optional)
3. **Add Slack/Discord notifications** for team alerts (optional)
4. **Set up staging environment** for PR previews (optional)
5. **Add performance monitoring** with Lighthouse CI (optional)

## 📝 Notes

- The pipeline is optimized for speed with dependency caching
- All jobs run in parallel where possible
- Artifacts are automatically cleaned up after 7 days
- The setup follows GitHub Actions best practices for security and efficiency
