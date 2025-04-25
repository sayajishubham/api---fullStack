import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getUserIndividual } from '../Utils/Post';

function ViewUserDetails() {
  let { id } = useParams();
  let [userdetails, setuserdetails] = useState("");
  let navigate = useNavigate();

  useEffect(() => {
    let Individualdata = async () => {
      let data = await getUserIndividual(id);
      setuserdetails(data);
    }
    Individualdata();
  }, [id]) 

  return (
    <>
      <div className="flex justify-center items-center min-h-screen p-8">
        <Card className="w-[400px] shadow-2xl rounded-lg border-none">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-[#FB923C] text-center">User Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p><strong className="text-[#FB923C]">Username: </strong> {userdetails.Username}</p>
            <p><strong className="text-[#FB923C]">Email: </strong> {userdetails.Email}</p>
            <p><strong className="text-[#FB923C]">Location: </strong> {userdetails.Location}</p>
            <p><strong className="text-[#FB923C]">Role: </strong> {userdetails.Role}</p>
            <p><strong className="text-[#FB923C]">Date of Birth: </strong> {userdetails.DOB}</p>
            <div className="flex justify-center pt-4">
              <Button onClick={() => navigate('/')} className="bg-[#FB923C] text-white rounded-lg shadow-md">
                Go Home
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default ViewUserDetails;
