import { Link, useNavigate } from "react-router-dom";
import Navbar from "../shared/Navbar";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { RadioGroup } from "@/components/ui/radio-group";
import { useState } from "react";
import { toast } from "sonner";
import { USER_API_END_POINT } from "@/utils/endpoint";
import axios from "axios";

const Login = () => {
  const navigator = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });

  const changeInputHandeler = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandeler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        console.log(res.data);
        toast.success(res.data.message);
        navigator("/");
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
          className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5">Login</h1>

          <div className="my-2">
            <Label htmlFor="email" className="mb-2">
              Email
            </Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={input.email}
              onChange={changeInputHandeler}
              placeholder="johndoe@gmail.com"
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
              name="password"
              value={input.password}
              onChange={changeInputHandeler}
              placeholder="Password"
              className="mb-5"
            />
          </div>
          <div className="flex items-center justify-between">
            <RadioGroup className="flex items-center gap-4 my-1">
              <div className="flex items-center space-x-2">
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
          </div>
          <Button className="w-full my-4">Sign up</Button>
          <span className="text-sm">
            {"Dont't"} have an account?{" "}
            <Link to={"/signup"} className="text-blue-700 font-bold">
              Sign up
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
