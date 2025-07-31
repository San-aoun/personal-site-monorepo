// src/pages/AutomationShowcase.tsx

export default function AutomationShowcase() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">🔧 Automation & CI/CD Projects</h1>

      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold">✅ UI Test Automation with Playwright</h2>
          <p>Automated E2E testing with Playwright, running via GitHub Actions.</p>
          <ul className="list-disc ml-5 mt-2">
            <li><a href="https://github.com/san-aoun/your-playwright-repo" target="_blank">GitHub Repo</a></li>
            <li><a href="https://san-aoun.github.io/your-playwright-report/" target="_blank">Live Allure Report</a></li>
            <li><code>Tests run on every PR using GitHub Actions</code></li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold">📦 API Testing with Postman + Newman</h2>
          <p>CI pipeline using Newman CLI integrated with Jenkins.</p>
          <ul className="list-disc ml-5 mt-2">
            <li><a href="https://github.com/san-aoun/postman-api-test" target="_blank">GitHub Repo</a></li>
            <li><code>Jenkins triggers tests on every merge</code></li>
            <li><a href="https://www.postman.com/san-aoun/workspace/api-tests" target="_blank">Postman Collection</a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold">🚀 CI/CD with GitHub Actions</h2>
          <p>Frontend project with build/test/deploy pipeline to GitHub Pages.</p>
          <ul className="list-disc ml-5 mt-2">
            <li><a href="https://github.com/san-aoun/personal-site-monorepo" target="_blank">Repo with CI config</a></li>
            <li><img src="https://github.com/san-aoun/personal-site-monorepo/actions/workflows/deploy.yml/badge.svg" alt="CI Badge" /></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
