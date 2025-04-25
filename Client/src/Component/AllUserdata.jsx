import React, { useEffect, useState } from 'react';
import {
    Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { deletebyadmin, FetchData } from '../Utils/Post';
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';

function AllUserdata() {

    const [Details, setDetails] = useState([]);
    const [FilterData, setFilterData] = useState([]);  // ye filtered data ko handle karega
    const [role, setrole] = useState("");
    const [location, setlocation] = useState("");

    let loginData = JSON.parse(sessionStorage.getItem("Userlogin") || '{}');
    let { Role } = loginData;

    useEffect(() => {
        if (Role) {
            const fetchData = async () => {
                const data = await FetchData();
                setDetails(data);
                setFilterData(data);
            };
            fetchData();
        }
    }, [Role]);

    useEffect(() => {
        let updatedList = Details;

        if (role && role !== "all") {
            updatedList = updatedList.filter(user => user.Role === role);
        }

        if (location && location !== "all") {
            updatedList = updatedList.filter(user => user.Location === location);
        }

        setFilterData(updatedList);
    }, [role, location, Details]);

    const handleDelete = async (id) => {
        try {
            let res = await deletebyadmin(id);
            toast.success(res.data);
            setDetails(prev => prev.filter(user => user._id !== id)); 
        } catch (error) {
            console.log(error);
        }
    };

    if (!Role) {
        return (
            <div className="p-8 bg-[#F9FAFB] text-center">
                <div className="bg-white rounded-3xl shadow-2xl p-6">
                    <h2 className="text-3xl text-[#FB923C] font-bold mb-5">Please Login to View Users</h2>
                    <p className="text-gray-700">You must be logged in to see the user data.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="p-8 bg-[#F9FAFB]">
            <div className="bg-white rounded-3xl shadow-2xl p-6 transition-transform hover:scale-[1.01]">
                <h2 className="text-3xl text-[#FB923C] font-bold mb-5 text-center">All Users</h2>
                <div className="mb-5 flex gap-6 justify-center">
                    <Select value={role} onValueChange={(value) => setrole(value)}>
                        <SelectTrigger className="w-[200px]">
                            <SelectValue placeholder="Filter by Role" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Roles</SelectItem>
                            <SelectItem value="Admin">Admin</SelectItem>
                            <SelectItem value="User">User</SelectItem>
                        </SelectContent>
                    </Select>
                    <Select value={location} onValueChange={(value) => setlocation(value)}>
                        <SelectTrigger className="w-[200px]">
                            <SelectValue placeholder="Filter by Location" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Locations</SelectItem>
                            <SelectItem value="Surat">Surat</SelectItem>
                            <SelectItem value="Mumbai">Mumbai</SelectItem>
                            <SelectItem value="Delhi">Delhi</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <Table>
                    <TableCaption className="text-gray-600 mt-2">List of all registered users.</TableCaption>
                    <TableHeader>
                        <TableRow className="bg-gradient-to-r from-[#FB923C] to-[#F97316] text-white rounded-2xl">
                            <TableHead className="w-[150px] text-white">Username</TableHead>
                            <TableHead className="text-white">Email</TableHead>
                            <TableHead className="text-white">Role</TableHead>
                            <TableHead className="text-white">Location</TableHead>
                            <TableHead className="text-white">Date of Birth</TableHead>
                            <TableHead className="text-white">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {FilterData.length > 0 ? (
                            FilterData.map((user, index) => (
                                <TableRow key={index} className="hover:bg-orange-50 cursor-pointer transition duration-300 ease-in-out rounded-lg">
                                    <TableCell className="font-semibold text-gray-800">{user.Username}</TableCell>
                                    <TableCell className="text-gray-700">{user.Email}</TableCell>
                                    <TableCell className="text-gray-700">{user.Role}</TableCell>
                                    <TableCell className="text-gray-700">{user.Location}</TableCell>
                                    <TableCell className="text-gray-700">{user.DOB}</TableCell>
                                    <TableCell className="text-gray-700">
                                        {Role === 'Admin' ? (
                                            <div className="flex gap-4">
                                                <Link to={`/Viewuserdetails/${user._id}`}><button className="text-blue-500 cursor-pointer">View</button></Link>
                                                <Link to={`/Update/${user._id}`} state={{
                                                    id: user.id,
                                                    Username: user.Username,
                                                    Email: user.Email,
                                                    DOB: user.DOB,
                                                    Role: user.Role,
                                                    Location: user.Location
                                                }}>
                                                    <button className="text-yellow-500 cursor-pointer">Edit</button>
                                                </Link>
                                                <button onClick={() => handleDelete(user._id)} className="text-red-500 cursor-pointer">Delete</button>
                                            </div>
                                        ) : (
                                            <Link to={`/Viewuserdetails/${user._id}`}>
                                                <button className="text-blue-500">View</button>
                                            </Link>
                                        )}
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan="6" className="text-center text-gray-700">
                                    No users found.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}

export default AllUserdata;
