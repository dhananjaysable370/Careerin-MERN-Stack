import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { RadioGroup } from "@/components/ui/radio-group";

const Login = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center max-w-7xl mx-auto ">
        <form
          action=""
          className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5">Login</h1>
          <div className="my-2">
            <Label htmlFor="fullname" className="mb-2">
              Full Name
            </Label>
            <Input
              type="text"
              id="fullname"
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
              placeholder="8888999922"
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
              placeholder="Password"
              className="mb-5"
            />
          </div>
          <div className="flex items-center justify-between">
            <RadioGroup className="flex items-center gap-4 my-5">
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="student"
                  id="student"
                  className="cursor-pointer"
                />
                <Label htmlFor="student" className="cursor-pointer">
                  Student
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="reqruiter"
                  id="reqruiter"
                  className="cursor-pointer"
                />
                <Label htmlFor="reqruiter" className="cursor-pointer">
                  Recruiter
                </Label>
              </div>
            </RadioGroup>

            <div className="flex items-center gap-2">
              <Label>Profile</Label>
              <Input accept="image/*" type="file" className="cursor-pointer" />
            </div>
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
