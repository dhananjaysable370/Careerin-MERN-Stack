import { Link, useNavigate } from "react-router-dom";
import Navbar from "../shared/Navbar";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { RadioGroup } from "@/components/ui/radio-group";
import axios from "axios";
import { useState } from "react";
import { USER_API_END_POINT } from "@/utils/endpoint";
import { toast } from "sonner";

const Signup = () => {
  const navigator = useNavigate();

  const [input, setInput] = useState({
    fullname: "",
    phonenumber: "",
    email: "",
    password: "",
    role: "",
    file: "",
  });

  const changeInputHandeler = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const changeFileHandeler = (e) => {
    setInput({
      ...input,
      file: e.target.files?.[0],
    });
  };

  const submitHandeler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("phonenumber", input.phonenumber);
    formData.append("email", input.email);
    formData.append("password", input.password);
    formData.append("role", input.role);
    if (input.file) {
      formData.append("file", input.file);
    }
    console.log(formData);
    try {
      const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        toast.success(res.data.message);
        navigator("/login");
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center max-w-7xl mx-auto ">
        <form
          onSubmit={submitHandeler}
          encType="multipart/form-data"
          className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5">Sign up</h1>
          <div className="my-2">
            <Label htmlFor="fullname" className="mb-2">
              Full Name
            </Label>
            <Input
              type="text"
              id="fullname"
              value={input.fullname}
              name="fullname"
              onChange={changeInputHandeler}
              placeholder="John Doe"
              className="mb-5"
            />
          </div>
          <div className="my-2">
            <Label htmlFor="email" className="mb-2">
              Email
            </Label>
            <Input
              type="email"
              id="email"
              value={input.email}
              name="email"
              onChange={changeInputHandeler}
              placeholder="johndoe@gmail.com"
              className="mb-5"
            />
          </div>
          <div className="my-2">
            <Label htmlFor="phone" className="mb-2">
              Phone number
            </Label>
            <Input
              type="text"
              id="phone"
              value={input.phonenumber}
              name="phonenumber"
              onChange={changeInputHandeler}
              placeholder="9999999999"
              className="mb-5"
            />
          </div>
          <div className="my-2">
            <Label htmlFor="password" className="mb-2">
              Password
            </Label>
            <Input
              type="password"
              id="password"
              value={input.password}
              name="password"
              onChange={changeInputHandeler}
              placeholder="Password"
              className="mb-5"
            />
          </div>
          <div className="flex items-center justify-between">
            <RadioGroup className="flex items-center gap-4 my-5">
              <div className="flex flex-row items-center space-x-2">
                <Label
                  htmlFor="student"
                  className="cursor-pointer flex items-center gap-1"
                >
                  <Input
                    type="radio"
                    name="role"
                    checked={input.role === "student"}
                    value="student"
                    onChange={changeInputHandeler}
                    id="student"
                    className="cursor-pointer"
                  />
                  Student
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Label
                  htmlFor="recruiter"
                  className="cursor-pointer flex items-center gap-1"
                >
                  <Input
                    type="radio"
                    name="role"
                    checked={input.role === "recruiter"}
                    value="recruiter"
                    onChange={changeInputHandeler}
                    id="recruiter"
                    className="cursor-pointer"
                  />
                  Recruiter
                </Label>
              </div>
            </RadioGroup>

            <div className="flex items-center gap-2">
              <Label>Profile</Label>
              <Input
                accept="image/*"
                type="file"
                onChange={changeFileHandeler}
                className="cursor-pointer"
              />
            </div>
          </div>
          <Button className="w-full my-4">Sign up</Button>
          <span className="text-sm">
            Already have an account?{" "}
            <Link to={"/login"} className="text-blue-700 font-bold">
              Login
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Signup;
