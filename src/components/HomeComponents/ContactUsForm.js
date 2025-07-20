import React from "react";
import WebsiteWrapper from "./WebsiteWrapper";

const ContactUsForm = () => {
  return (
    <>
      <WebsiteWrapper>
        <section className="flex justify-center  items-center h-[85vh] bg-gray-100">
          <div className="bg-white shadow-lg rounded-lg p-8 md:p-12 text-center max-w-lg w-[90%]">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Contact Us
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We'd love to hear from you! Reach out to us via email or phone.
            </p>

            <div className="flex flex-col space-y-6">
              <div>
                <p className="text-xl font-semibold text-gray-700">Email</p>
                <a
                  href="mailto:contact@company.com"
                  className="text-blue-500 text-lg hover:underline"
                >
                  contact@company.com
                </a>
              </div>

              <div>
                <p className="text-xl font-semibold text-gray-700">Phone</p>
                <a
                  href="tel:+1234567890"
                  className="text-blue-500 text-lg hover:underline"
                >
                  +1 (234) 567-890
                </a>
              </div>
            </div>
          </div>
        </section>
      </WebsiteWrapper>
    </>
  );
};

export default ContactUsForm;
