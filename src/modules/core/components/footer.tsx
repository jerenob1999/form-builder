import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-4 mt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h1 className="text-2xl font-bold text-neutral-200">FormBuilder</h1>
            <p className="text-gray-500 text-sm"> © 2023 FormBuilder</p>
          </div>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="#"
              aria-label="Facebook"
              className="text-gray-400 hover:text-white transition"
            >
              <svg
                className="w-6 h-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M22.675 0h-21.35c-.735 0-1.325.59-1.325 1.325v21.351c0 .735.59 1.324 1.325 1.324h11.495v-9.282h-3.119v-3.622h3.119v-2.668c0-3.1 1.894-4.788 4.662-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.919.001c-1.504 0-1.795.714-1.795 1.763v2.31h3.587l-.467 3.622h-3.12v9.282h6.104c.735 0 1.325-.59 1.325-1.324v-21.351c0-.735-.59-1.325-1.325-1.325z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-gray-400 hover:text-white transition"
            >
              <svg
                className="w-6 h-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.896-.955-2.173-1.55-3.591-1.55-2.717 0-4.917 2.201-4.917 4.917 0 .385.043.76.127 1.119-4.083-.205-7.702-2.16-10.125-5.134-.422.725-.666 1.568-.666 2.465 0 1.701.866 3.2 2.182 4.078-.803-.026-1.559-.246-2.22-.616v.061c0 2.377 1.693 4.363 3.946 4.817-.413.111-.849.171-1.296.171-.317 0-.626-.031-.927-.088.627 1.956 2.445 3.379 4.6 3.419-1.684 1.32-3.809 2.107-6.115 2.107-.397 0-.789-.023-1.175-.069 2.179 1.397 4.768 2.212 7.557 2.212 9.054 0 14.001-7.5 14.001-14.001 0-.213-.005-.425-.014-.636.964-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-gray-400 hover:text-white transition"
            >
              <svg
                className="w-6 h-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.343 3.608 1.319.975.975 1.257 2.243 1.319 3.608.058 1.265.069 1.645.069 4.849s-.012 3.584-.07 4.849c-.062 1.366-.343 2.633-1.319 3.608-.975.975-2.243 1.257-3.608 1.319-1.266.058-1.646.069-4.85.069s-3.584-.012-4.849-.07c-1.366-.062-2.633-.343-3.608-1.319-.975-.975-1.257-2.243-1.319-3.608-.058-1.265-.069-1.645-.069-4.849s.012-3.584.07-4.849c.062-1.366.343-2.633 1.319-3.608.975-.975 2.243-1.257 3.608-1.319 1.265-.058 1.645-.069 4.849-.069zm0-2.163c-3.257 0-3.667.011-4.947.07-1.471.065-2.785.387-3.787 1.389-1.003 1.003-1.324 2.316-1.389 3.787-.058 1.28-.07 1.69-.07 4.947s.011 3.667.07 4.947c.065 1.471.387 2.785 1.389 3.787 1.003 1.003 2.316 1.324 3.787 1.389 1.28.058 1.69.07 4.947.07s3.667-.011 4.947-.07c1.471-.065 2.785-.387 3.787-1.389 1.003-1.003 1.324-2.316 1.389-3.787.058-1.28.07-1.69.07-4.947s-.011-3.667-.07-4.947c-.065-1.471-.387-2.785-1.389-3.787-1.003-1.003-2.316-1.324-3.787-1.389-1.28-.058-1.69-.07-4.947-.07zm0 5.838c-3.381 0-6.125 2.744-6.125 6.125s2.744 6.125 6.125 6.125 6.125-2.744 6.125-6.125-2.744-6.125-6.125-6.125zm0 10.125c-2.211 0-4-1.789-4-4s1.789-4 4-4 4 1.789 4 4-1.789 4-4 4zm6.406-11.845c-.796 0-1.438.642-1.438 1.438s.642 1.438 1.438 1.438 1.438-.642 1.438-1.438-.642-1.438-1.438-1.438z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;