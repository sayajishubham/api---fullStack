import React, { useState } from 'react'
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { useLocation, useNavigate, useParams } from 'react-router';
import { Editbyadmin } from '../Utils/Post';
import { toast } from 'react-toastify';

function Update() {

  let { id } = useParams();
  let location = useLocation();
  let { Username, Email, Role, Location, DOB } = location.state

  let [UpdateUsername, setUpdateUsername] = useState(Username);
  let [UpdateEmail, setUpdateEmail] = useState(Email);
 
  let [UpdateLocation, setUpdateLocation] = useState(Location);
  let [UpdateDOB, setUpdateDOB] = useState(DOB);

  let Navigate=useNavigate();


  async function handlesubmit(e) {
    e.preventDefault();
    try {
      let res = await Editbyadmin(id, UpdateUsername, UpdateEmail,  UpdateLocation, UpdateDOB);
      toast.success(res.message);
      Navigate("/");
    } catch (error) {
      console.log(error);
    }

  }




  return (
    <div className="h-screen bg-[#F9FAFB] relative">
      <div className="w-[500px] h-[500px] bg-gradient-to-l from-[#FB923C] to-[#F97316] rounded-2xl -rotate-12 shadow-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "></div>
      <div className="w-[550px] h-[550px] bg-white rounded-3xl shadow-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 p-5 flex items-center justify-center">
        <div className="w-full">
          <div className="pb-2">
            <h2 className="text-2xl text-[#FB923C]">Update User</h2>
            <p className="text-gray-500">
              Update the user details below
            </p>
          </div>
          <div className="p-0 pt-2">
            <form onSubmit={handlesubmit}>
              <div className="flex flex-col gap-3">
                <div className="grid gap-1">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" type="text" placeholder="Your full name" name="UpdateUsername" value={UpdateUsername} onChange={(e) => setUpdateUsername(e.target.value)} required />
                </div>
                <div className="grid gap-1">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="m@example.com" name="UpdateEmail" value={UpdateEmail} onChange={(e) => setUpdateEmail(e.target.value)} required />
                </div>
                <div className="flex gap-4">
                  <div className="flex-1 grid gap-1">
                    <Label htmlFor="dob">Date of Birth</Label>
                    <Input id="dob" type="date" required name="UpdateDOB" value={UpdateDOB} onChange={(e) => setUpdateDOB(e.target.value)} />
                  </div>
                  
                </div>
                <div className="grid gap-1">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" type="text" placeholder="Your city, country" required name="UpdateLocation" value={UpdateLocation} onChange={(e) => setUpdateLocation(e.target.value)} />
                </div>
                <Button type="submit" className="w-full bg-[#FB923C] hover:bg-[#F97316] text-white">
                  Update
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Update
