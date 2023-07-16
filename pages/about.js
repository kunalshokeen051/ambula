import React from 'react';
import { useRouter } from 'next/router';

const AboutUs = () => {

const router = useRouter();

  return (
    <div className="flex flex-col min-h-[calc(100vh-80px)] items-center justify-center py-10">
      <h2 className="text-3xl font-bold mb-4">About Us</h2>
      <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-16">
        <div className="max-w-xs">
          <img
            src="https://via.placeholder.com/400"
            alt="Illustration"
            className="w-full rounded-lg shadow-lg"
          />
          <p className="text-center mt-2">Our Vision</p>
        </div>
        <div className="max-w-xs">
          <img
            src="https://via.placeholder.com/400"
            alt="Illustration"
            className="w-full rounded-lg shadow-lg"
          />
          <p className="text-center mt-2">Meet the Team</p>
        </div>
        <div className="max-w-xs">
          <img
            src="https://via.placeholder.com/400"
            alt="Illustration"
            className="w-full rounded-lg shadow-lg"
          />
          <p className="text-center mt-2">Serving the People</p>
        </div>
      </div>
      <div className="mt-8">
        <p className="max-w-2xl text-center text-lg text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at nisi urna. Nullam
          vehicula luctus semper. Pellentesque ac ultricies lacus, id sollicitudin risus. In
          fringilla, turpis vitae malesuada rhoncus, ante ligula ultrices felis, id efficitur risus
          lectus vel nunc.
        </p>
        <p className="max-w-2xl text-center text-lg text-gray-700 mt-4">
          Proin fermentum neque felis, eget fermentum sapien pulvinar ac. In hac habitasse platea
          dictumst. Sed vitae metus nec tellus semper finibus. Quisque ut tortor eget lacus
          facilisis faucibus. Phasellus ut purus mauris.
        </p>
      </div>
      <div className="button" onClick={() => router.push('/')} >Go back to Homescreen</div>
    </div>
  );
};

export default AboutUs;
