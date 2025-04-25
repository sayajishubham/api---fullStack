import React, { useState } from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Singin } from '../Utils/User';
import { toast } from 'react-toastify';

function Signin() {
  let Singindata = {
    Email: "",
    Password: ""
  }

  let [Signindetails, setSignindetails] = useState(Singindata);
  let navigate = useNavigate();

  function handlechange(e) {
    setSignindetails({ ...Signindetails, [e.target.name]: e.target.value });
  }

  async function handlesubmit(e) {
    e.preventDefault();
    try {
      let res = await Singin(Signindetails);
      if (res && res.message) {
        toast.success(res.message);
        sessionStorage.setItem("Userlogin", JSON.stringify(res.User)); // Store user data properly as string
        navigate("/");  // Redirect to home after successful login
      } else {
        toast.error("Something went wrong. Please try again."); // Show error if no message from response
      }
    } catch (error) {
      console.log(error);
      toast.error("An error occurred. Please try again later.");
    }
  }

  return (
    <div className="h-screen bg-[#F9FAFB] relative">
      <div className="w-[550px] h-[400px] bg-gradient-to-l from-[#FB923C] to-[#F97316] 
      rounded-2xl -rotate-12 shadow-xl absolute top-1/2 left-1/2 
      -translate-x-1/2 -translate-y-1/2"></div>

      <div className="w-[550px] h-[400px] bg-white rounded-3xl shadow-2xl 
      absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
      z-10 p-5 flex items-center justify-center">
        <div className="w-full">
          <div className="pb-2">
            <h2 className="text-2xl text-[#FB923C]">Login</h2>
            <p className="text-gray-500">Welcome back! Please enter your credentials</p>
          </div>

          <div className="p-0 pt-2">
            <form onSubmit={handlesubmit}>
              <div className="flex flex-col gap-3">
                <div className="grid gap-1">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="m@example.com" name="Email" value={Signindetails.Email} onChange={handlechange} required />
                </div>

                <div className="grid gap-1">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="Your password" name="Password" value={Signindetails.Password} onChange={handlechange} required />
                </div>

                <Button type="submit" className="w-full bg-[#FB923C] hover:bg-[#F97316] text-white">
                  Login
                </Button>

                <Button variant="outline" className="w-full">
                  Login with Google
                </Button>
              </div>

              <div className="mt-2 text-center text-sm text-gray-600">
                Don’t have an account?{" "}
                <Link to={"/Signup"} className="text-[#FB923C] underline underline-offset-4">
                  Sign Up here
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
