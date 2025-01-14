import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div className="container mx-auto px-10 py-10">
      <div>
                <Image src="/banner.png" alt="banner" width={900} height={900} className="w-full h-auto mt-4"/>
              </div>
      <h1 className="text-4xl font-bold mb-6 text-center pt-10">About Us</h1>
      <div>
            <div>
                <h2 className="text-2xl font-semibold mt-8 mb-4">Welcome to <span className='text-teal-500'>V</span>ibrant <span className='text-teal-500'>V</span>ibes!</h2>
               <p className="text-lg leading-relaxed mb-4"> At <strong><span className='text-teal-500'>V</span>ibrant <span className='text-teal-500'>V</span>ibes</strong>, we believe that a balanced lifestyle is the key to happiness and well-being.  Our blog is dedicated to sharing tips, insights, and inspiration to help you lead a vibrant, fulfilling life.
               </p>
              <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
             <p className="text-lg leading-relaxed mb-4">
              Our mission is to empower you with practical advice and uplifting content that encourages a healthy mind, body, and soul. From wellness and nutrition to minimalism and personal growth, we cover a wide range of topics designed to help you thrive.
             </p>
            </div>
            
        </div>
      
      <h2 className="text-2xl font-semibold mt-8 mb-4">Meet the Author</h2>
      <p className="text-lg leading-relaxed">
        Hi, I am  <strong>Malaika</strong>, the creator of <strong><span className='text-teal-500'>V</span>ibrant <span className='text-teal-500'>V</span>ibes</strong>. I am passionate about healthy living, personal development, and the simple joys of life. Through this blog, I aim to share my journey, experiences, and knowledge to inspire you on your path to a happier, healthier lifestyle.
      </p>
    </div>
  );
};

export default About;
