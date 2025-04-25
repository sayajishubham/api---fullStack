import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Link, useNavigate } from "react-router-dom";
import { Signup } from "../Utils/User";
import { toast } from "react-toastify";

function SignUp() {

  let Singupdata = {
    Username: "",
    Email: "",
    Password: "",
    ConfirmPassword: "",
    Role: "",
    DOB: "",
    Location: ""
  }

  let [Signupdetails, setSignupdetails] = useState(Singupdata);
  
  let navigate = useNavigate();

  function handlechange(e) {
    setSignupdetails({ ...Signupdetails, [e.target.name]: e.target.value });
  }

  async function handlesubmit(e) {
    e.preventDefault();
    try {
      let res = await Signup(Signupdetails);
      toast.success(res.message);
      navigate("/Signin");  // Navigate to Signin page after successful signup
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="h-screen bg-[#F9FAFB] relative">
      <div className="w-[500px] h-[500px] bg-gradient-to-l from-[#FB923C] to-[#F97316]  rounded-2xl -rotate-12 shadow-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="w-[550px] h-[550px] bg-white rounded-3xl shadow-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 p-5 flex items-center justify-center">
        <div className="w-full">
          <div className="pb-2">
            <h2 className="text-2xl text-[#FB923C]">Sign Up</h2>
            <p className="text-gray-500">
              Fill the details below to create your account
            </p>
          </div>
          <div className="p-0 pt-2">
            <form onSubmit={handlesubmit}>
              <div className="flex flex-col gap-3">
                <div className="grid gap-1">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" type="text" placeholder="Your full name" name="Username" value={Signupdetails.Username} onChange={handlechange} required />
                </div>
                <div className="grid gap-1">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="m@example.com" name="Email" value={Signupdetails.Email} onChange={handlechange} required />
                </div>
                <div className="flex gap-4">
                  <div className="flex-1 grid gap-1">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" placeholder="Create password" name="Password" value={Signupdetails.Password} onChange={handlechange} required />
                  </div>
                  <div className="flex-1 grid gap-1">
                    <Label htmlFor="confirm-password">Confirm</Label>
                    <Input id="confirm-password" type="password" placeholder="Confirm password" name="ConfirmPassword" value={Signupdetails.ConfirmPassword} onChange={handlechange} required />
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-1 grid gap-1">
                    <Label htmlFor="dob">Date of Birth</Label>
                    <Input id="dob" type="date" name="DOB" value={Signupdetails.DOB} onChange={handlechange} required />
                  </div>
                  <div className="flex-1 grid gap-1">
                    <Label htmlFor="role">Role</Label>
                    <Select name="Role" value={Signupdetails.Role} onValueChange={(value) => setSignupdetails({ ...Signupdetails, Role: value })}>
                      <SelectTrigger id="role">
                        <SelectValue placeholder="Choose" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="User">User</SelectItem>
                        <SelectItem value="Admin">Admin</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid gap-1">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" type="text" placeholder="Your city, country" name="Location" value={Signupdetails.Location} onChange={handlechange} required />
                </div>
                <Button type="submit" className="w-full bg-[#FB923C] hover:bg-[#F97316] text-white"> Sign Up</Button>
                <Button variant="outline" className="w-full">Sign Up with Google</Button>
              </div>
              <div className="mt-2 text-center text-sm text-gray-600">
                Already have an account? <Link to={"/Signin"} className="text-[#FB923C]">Login here</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
