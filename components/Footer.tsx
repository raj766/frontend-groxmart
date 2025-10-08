import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-green-600 text-white py-6 mt-10">
      <div className="container mx-auto text-center space-y-3">
        <p className="font-medium">
          © {new Date().getFullYear()} GroxMart. All rights reserved.
        </p>
        <div className="flex justify-center space-x-6 text-sm">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms</a>
          <a href="#" className="hover:underline">Support</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer