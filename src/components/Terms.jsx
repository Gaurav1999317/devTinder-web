

const TermsAndConditions = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 sm:p-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Terms and Conditions
        </h1>
        <p className="text-gray-600 text-sm mb-8 text-center">
          Last updated: January 12, 2025
        </p>
        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Acceptance of Terms
            </h2>
            <p className="text-gray-700">
              By accessing and using this website or application, you agree to
              comply with and be bound by these Terms and Conditions. If you do
              not agree, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Changes to Terms
            </h2>
            <p className="text-gray-700">
              We reserve the right to update or modify these terms at any time
              without prior notice. Continued use of our services signifies your
              acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              User Responsibilities
            </h2>
            <p className="text-gray-700">
              As a user of our services, you agree to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2">
              <li>Provide accurate and up-to-date information.</li>
              <li>Use the services in compliance with all applicable laws.</li>
              <li>
                Refrain from using the services for any unlawful or prohibited
                activities.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Intellectual Property
            </h2>
            <p className="text-gray-700">
              All content, trademarks, and intellectual property on this
              website are owned by us or our licensors. You may not reproduce,
              distribute, or create derivative works without prior written
              consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Limitation of Liability
            </h2>
            <p className="text-gray-700">
              We are not responsible for any direct, indirect, incidental, or
              consequential damages arising from your use of our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Termination
            </h2>
            <p className="text-gray-700">
              We reserve the right to terminate or suspend your access to our
              services at our discretion, without prior notice, if you violate
              these terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Governing Law
            </h2>
            <p className="text-gray-700">
              These Terms and Conditions are governed by the laws of [Your
              Country/State]. Any disputes shall be resolved in the courts of
              [Your Jurisdiction].
            </p>
          </section>
        </div>

        <footer className="text-center mt-10 text-gray-600 text-sm">
          If you have any questions about these terms, contact us at{" "}
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

export default TermsAndConditions;
