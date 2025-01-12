

const Privacy = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 sm:p-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Privacy Policy
        </h1>
        <p className="text-gray-600 text-sm mb-8 text-center">
          Last updated: January 12, 2025
        </p>
        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Introduction
            </h2>
            <p className="text-gray-700">
              Welcome to our Privacy Policy page. Your privacy is critically
              important to us, and we are committed to protecting your personal
              data. This policy explains how we collect, use, and share
              information about you.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Information We Collect
            </h2>
            <p className="text-gray-700">
              We may collect the following types of information:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2">
              <li>Personal information you provide (e.g., name, email).</li>
              <li>
                Information about your interactions with our app or website.
              </li>
              <li>Cookies and usage data.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              How We Use Your Information
            </h2>
            <p className="text-gray-700">
              We use the collected information for purposes such as:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2">
              <li>Providing and maintaining our services.</li>
              <li>Improving and personalizing user experiences.</li>
              <li>Communicating updates or promotional offers.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Sharing Your Information
            </h2>
            <p className="text-gray-700">
              We do not share your personal information with third parties
              except as necessary to provide services or comply with legal
              obligations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Your Rights
            </h2>
            <p className="text-gray-700">
              You have the right to access, update, or delete your personal
              data. Contact us to exercise these rights.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Changes to This Policy
            </h2>
            <p className="text-gray-700">
              We may update this Privacy Policy periodically. Changes will be
              posted on this page with a revised effective date.
            </p>
          </section>
        </div>

        <footer className="text-center mt-10 text-gray-600 text-sm">
          If you have any questions, contact us at{" "}
          <a
            href="mailto:support@example.com"
            className="text-blue-500 underline"
          >
            support@example.com
          </a>
          .
        </footer>
      </div>
    </div>
  );
};

export default Privacy;
