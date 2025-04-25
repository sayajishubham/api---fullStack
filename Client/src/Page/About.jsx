import React from 'react';
import Adminlogin from "../assets/Adminlogin.png"
import Homepage from '../assets/Homepage.png';
import Locationfillter from '../assets/Locationfillter.png';
import Login from '../assets/Login.png';
import Rolefillter from '../assets/Rolefillter.png';
import Signup from '../assets/Signup.png';
import Updatebyadmin from '../assets/Updatebyonlyadmin.png';
import UserDetails from '../assets/UserDetails.png';
import Usesuccesslogin from '../assets/Userlogin.png';

function About() {
  return (
    <div className="p-8 bg-[#F9FAFB]">
      <div className="bg-white rounded-3xl shadow-2xl p-6">
        <h2 className="text-3xl text-[#FB923C] font-bold mb-5 text-center">About Our Application</h2>

        <div className="mb-6 text-gray-700 leading-relaxed space-y-4">
          <p>
            This project is a Full Stack Application developed using <strong>React</strong> for the frontend, styled beautifully with <strong>Tailwind CSS</strong> and <strong>ShadCN UI</strong> components. 
            The backend is built with <strong>Node.js</strong>, <strong>Express</strong> and <strong>Mongoose</strong> following the <strong>MVC design pattern</strong>.
          </p>

          <p>
            ➡️ Our system offers two roles: <strong>Admin</strong> and <strong>User</strong>.  
            Admins have full control to <strong>view</strong>, <strong>update</strong>, and <strong>delete</strong> user data, while Users can only <strong>view</strong> data and check individual user details.
          </p>

          <p>
            ➡️ On the <strong>Login</strong> page:  
            If the user is not registered, an error image will be shown along with a friendly message indicating the login failed.  
            If the login is successful, the user will see a success message and be redirected to their Home Page.
          </p>

          <p>
            ➡️ On the <strong>Signup</strong> page:  
            Users can register by filling in their details — after successful registration, their data will be stored in the database.
          </p>

          <p>
            ➡️ <strong>User Home Page</strong>:  
            Displays only the data visible to that user along with a clean and simple layout.
          </p>

          <p>
            ➡️ <strong>Admin Home Page</strong>:  
            The admin can view all registered users and also perform <strong>Update</strong> and <strong>Delete</strong> operations. Admin can also view individual user details.
          </p>

          <p>
            ➡️ The system ensures secure authentication using JWT tokens and role-based validation, so every user sees the right content according to their access level.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-gray-100 rounded-2xl p-4">
            <img src={Login} alt="Login Page" className="rounded-lg shadow-md mb-3" />
            <h4 className="font-semibold text-[#FB923C] text-lg">Login Page</h4>
            <p className="text-gray-600 text-sm">Login page where registered users can securely log in to their account.</p>
          </div>

          <div className="bg-gray-100 rounded-2xl p-4">
            <img src={Signup} alt="Signup Page" className="rounded-lg shadow-md mb-3" />
            <h4 className="font-semibold text-[#FB923C] text-lg">Signup Page</h4>
            <p className="text-gray-600 text-sm">New users can create an account by filling the signup form.</p>
          </div>

          <div className="bg-gray-100 rounded-2xl p-4">
            <img src={Usesuccesslogin} alt="User Login Success" className="rounded-lg shadow-md mb-3" />
            <h4 className="font-semibold text-[#FB923C] text-lg">User Login Success</h4>
            <p className="text-gray-600 text-sm">Successful login redirecting to the user home page.</p>
          </div>

          <div className="bg-gray-100 rounded-2xl p-4">
            <img src={Homepage} alt="Homepage" className="rounded-lg shadow-md mb-3" />
            <h4 className="font-semibold text-[#FB923C] text-lg">Homepage</h4>
            <p className="text-gray-600 text-sm">Displays all user-specific data in a clean and easy-to-use layout.</p>
          </div>

          <div className="bg-gray-100 rounded-2xl p-4">
            <img src={UserDetails} alt="User Details Page" className="rounded-lg shadow-md mb-3" />
            <h4 className="font-semibold text-[#FB923C] text-lg">User Details Page</h4>
            <p className="text-gray-600 text-sm">Displays the complete details of a selected user.</p>
          </div>

          <div className="bg-gray-100 rounded-2xl p-4">
            <img src={Updatebyadmin} alt="Update by Admin" className="rounded-lg shadow-md mb-3" />
            <h4 className="font-semibold text-[#FB923C] text-lg">Admin Update Operations</h4>
            <p className="text-gray-600 text-sm">Admin can update user details and perform actions to modify data.</p>
          </div>

          <div className="bg-gray-100 rounded-2xl p-4">
            <img src={Locationfillter} alt="Location Filter" className="rounded-lg shadow-md mb-3" />
            <h4 className="font-semibold text-[#FB923C] text-lg">Location Filter</h4>
            <p className="text-gray-600 text-sm">A filter that allows users to sort data by location.</p>
          </div>

          <div className="bg-gray-100 rounded-2xl p-4">
            <img src={Rolefillter} alt="Role Filter" className="rounded-lg shadow-md mb-3" />
            <h4 className="font-semibold text-[#FB923C] text-lg">Role Filter</h4>
            <p className="text-gray-600 text-sm">A filter that helps users view data based on their roles.</p>
          </div>

          <div className="bg-gray-100 rounded-2xl p-4">
            <img src={Adminlogin} alt="Admin Login" className="rounded-lg shadow-md mb-3" />
            <h4 className="font-semibold text-[#FB923C] text-lg">Admin Login Page</h4>
            <p className="text-gray-600 text-sm">Page for Admins to log in with secure credentials and manage users.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
