import React from 'react'

function Footer() {
  return (
    <footer className="bg-[#1F2937] text-[#F9FAFB] py-4 mt-10 z-19">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} MyApp. All Rights Reserved.</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-[#FF8C00] transition">Privacy Policy</a>
          <a href="#" className="hover:text-[#FF8C00] transition">Terms of Service</a>
          <a href="#" className="hover:text-[#FF8C00] transition">Contact</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
