

const RefundPolicy = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 sm:p-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Refund Policy
        </h1>
        <p className="text-gray-600 text-sm mb-8 text-center">
          Last updated: January 12, 2025
        </p>
        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Overview
            </h2>
            <p className="text-gray-700">
              We are committed to ensuring your satisfaction with our products
              and services. If you are not satisfied with your purchase, this
              policy outlines your rights to a refund.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Eligibility for Refunds
            </h2>
            <p className="text-gray-700">
              To be eligible for a refund, the following conditions must be
              met:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2">
              <li>The item must have been purchased within the last 30 days.</li>
              <li>
                The item must be unused and in the same condition as received.
              </li>
              <li>The original receipt or proof of purchase must be provided.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Non-Refundable Items
            </h2>
            <p className="text-gray-700">
              Certain items are not eligible for refunds, including:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2">
              <li>Digital products once downloaded or accessed.</li>
              <li>Gift cards.</li>
              <li>Items purchased on clearance or final sale.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Refund Process
            </h2>
            <p className="text-gray-700">
              To initiate a refund, please follow these steps:
            </p>
            <ol className="list-decimal list-inside text-gray-700 space-y-2 mt-2">
              <li>Contact our support team at <a href="mailto:support@example.com" className="text-blue-500 underline">support@example.com</a>.</li>
              <li>Provide your order number and reason for the refund request.</li>
              <li>
                If applicable, return the item to our address: [Your Return
                Address].
              </li>
            </ol>
            <p className="text-gray-700 mt-2">
              Once we receive your item, we will inspect it and notify you of
              the approval or rejection of your refund.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Refund Timeline
            </h2>
            <p className="text-gray-700">
              Approved refunds will be processed within 7-10 business days. The
              refund will be credited back to your original payment method. 
              Please note that processing times may vary depending on your bank
              or payment provider.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Contact Us
            </h2>
            <p className="text-gray-700">
              If you have any questions about our refund policy, feel free to
              contact us at{" "}
              <a href="mailto:support@example.com" className="text-blue-500 underline">
                support@example.com
              </a>
              .
            </p>
          </section>
        </div>

        <footer className="text-center mt-10 text-gray-600 text-sm">
          Thank you for shopping with us!
        </footer>
      </div>
    </div>
  );
};

export default RefundPolicy;

