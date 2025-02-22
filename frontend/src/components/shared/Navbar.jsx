// import { Link } from "react-router-dom";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../ui/button";
import { LogOut, User2 } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const user = false;
  return (
    <div className="flex justify-between mx-auto items-center max-w-7xl h-16 px-5 bg-white">
      <div>
        <h1 className="text-2xl font-bold">Careerin</h1>
      </div>
      <div className="flex gap-5 items-center">
        <ul className="flex font-medium items-center gap-5">
          <li>Home</li>
          <li>Jobs</li>
          <li>Browse</li>
        </ul>
        {!user ? (
          <div className="flex items-center gap-2">
            <Link to={'/login'}>
              <Button variant="outline" className="rounded-full">
                Login
              </Button>
            </Link>
            <Link to={'/signup'}>
              <Button className="rounded-full">Signup</Button>
            </Link>
          </div>
        ) : (
          <Popover>
            <PopoverTrigger asChild:true>
              <Avatar className="cursor-pointer">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="flex items-center gap-3">
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                </Avatar>
                <div>
                  <h4 className="font-medium">Dhananjay Sable</h4>
                  <p className="text-sm text-muted-foreground">
                    Lorem ipsum dolor sit amet.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start  mt-5">
                <div className="flex items-center gap-1">
                  <User2 />
                  <Button variant="link">View Profile</Button>
                </div>
                <div className="flex items-center gap-1">
                  <LogOut />
                  <Button variant="link">Logout</Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        )}
      </div>
    </div>
  );
};

export default Navbar;
