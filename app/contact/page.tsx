import React from 'react';
import Image from 'next/image';

const Contact = () => {
  return (
    <div className="container mx-auto px-5 py-10">
      <div>
                      <Image src="/banner.png" alt="banner" width={900} height={900} className="w-full h-auto mt-4"/>
                    </div>
      <h1 className="text-4xl font-bold mb-6 pt-10">Contact Me</h1>
      <p className="text-lg leading-relaxed mb-4">
        I would love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out.
      </p>

      <form className="w-full max-w-lg">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" >
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            rows={5}
            placeholder="Your Message"
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Send
          </button>
        </div>
      </form>

    </div>
  );
};

export default Contact;
