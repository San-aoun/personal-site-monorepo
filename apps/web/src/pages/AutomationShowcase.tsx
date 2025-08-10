// src/pages/AutomationShowcase.tsx

export default function AutomationShowcase() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            🔧 Automation & CI/CD Portfolio
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Showcasing my expertise in test automation, continuous integration, and deployment pipelines 
            with modern tools and best practices.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8">
          {/* Playwright Project */}
          <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-6">
              <div className="flex items-center space-x-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <span className="text-3xl">✅</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">UI Test Automation with Playwright</h2>
                  <p className="text-green-100">End-to-End Testing Excellence</p>
                </div>
              </div>
            </div>
            <div className="p-8">
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Comprehensive automated E2E testing suite using Playwright framework, integrated with GitHub Actions 
                for continuous testing and reporting.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Repository</span>
                  <a 
                    href="https://github.com/san-aoun/your-playwright-repo" 
                    target="_blank" 
                    className="text-blue-600 hover:text-blue-800 font-medium hover:underline transition-colors"
                  >
                    GitHub Repository →
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Reports</span>
                  <a 
                    href="https://san-aoun.github.io/your-playwright-report/" 
                    target="_blank" 
                    className="text-purple-600 hover:text-purple-800 font-medium hover:underline transition-colors"
                  >
                    Live Allure Report →
                  </a>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
                  <code className="text-sm text-gray-800">
                    🚀 Automated tests run on every Pull Request via GitHub Actions
                  </code>
                </div>
              </div>
            </div>
          </div>

          {/* API Testing Project */}
          <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-orange-500 to-red-600 p-6">
              <div className="flex items-center space-x-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <span className="text-3xl">📦</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">API Testing with Postman + Newman</h2>
                  <p className="text-orange-100">Automated API Validation</p>
                </div>
              </div>
            </div>
            <div className="p-8">
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Robust API testing pipeline using Postman collections and Newman CLI, seamlessly integrated 
                with Jenkins for continuous API validation.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Repository</span>
                  <a 
                    href="https://github.com/san-aoun/postman-api-test" 
                    target="_blank" 
                    className="text-blue-600 hover:text-blue-800 font-medium hover:underline transition-colors"
                  >
                    GitHub Repository →
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">Collection</span>
                  <a 
                    href="https://www.postman.com/san-aoun/workspace/api-tests" 
                    target="_blank" 
                    className="text-indigo-600 hover:text-indigo-800 font-medium hover:underline transition-colors"
                  >
                    Postman Workspace →
                  </a>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-orange-500">
                  <code className="text-sm text-gray-800">
                    ⚡ Jenkins automatically triggers tests on every code merge
                  </code>
                </div>
              </div>
            </div>
          </div>

          {/* CI/CD Project */}
          <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-blue-600 to-purple-700 p-6">
              <div className="flex items-center space-x-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <span className="text-3xl">🚀</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">CI/CD with GitHub Actions</h2>
                  <p className="text-blue-100">Deployment Automation</p>
                </div>
              </div>
            </div>
            <div className="p-8">
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Complete CI/CD pipeline implementation featuring automated building, testing, and deployment 
                to GitHub Pages with comprehensive workflow orchestration.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Repository</span>
                  <a 
                    href="https://github.com/san-aoun/personal-site-monorepo" 
                    target="_blank" 
                    className="text-blue-600 hover:text-blue-800 font-medium hover:underline transition-colors"
                  >
                    View CI Configuration →
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Status</span>
                  <img 
                    src="https://github.com/san-aoun/personal-site-monorepo/actions/workflows/deploy.yml/badge.svg" 
                    alt="CI Badge" 
                    className="rounded border"
                  />
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <code className="text-sm text-gray-800">
                    🔄 Automated Build → Test → Deploy pipeline on every commit
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">Technologies & Tools</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'Playwright', 'GitHub Actions', 'Jenkins', 'Postman', 'Newman', 'Allure',
              'Docker', 'YAML', 'JavaScript', 'TypeScript', 'CI/CD', 'Test Automation'
            ].map((tech) => (
              <div 
                key={tech}
                className="bg-gradient-to-r from-gray-50 to-gray-100 px-4 py-2 rounded-lg text-center text-sm font-medium text-gray-700 hover:from-blue-50 hover:to-blue-100 hover:text-blue-800 transition-all duration-200"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
