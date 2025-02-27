import { Button } from './ui/button';
import { Search } from 'lucide-react';
// import { useDispatch } from 'react-redux';
// import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';

const HeroSection = () => {
  // const [query, setQuery] = useState("");
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = () => {
    // dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  return (
    <div className='text-center'>
      <div className='flex flex-col gap-5 my-10'>
        <span className='mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium'>
          No. 1 Job Hunt Website
        </span>
        <h1 className='text-5xl font-bold'>
          Search, Apply & <br /> Get Your <span className='text-[#6A38C2]'>Dream Jobs</span>
        </h1>
        <div className='flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto'>
          <input
            type="text"
            placeholder='Find your dream jobs'
            // onChange={(e) => setQuery(e.target.value)}
            className='outline-none border-none w-full'
          />
          <Button onClick={searchJobHandler} className="rounded-r-full bg-[#6A38C2]">
            <Search className='h-5 w-5' />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import {
//   Search,
//   Briefcase,
//   Bookmark,
//   Bell,
//   User,
//   Settings,
//   Calendar,
//   TrendingUp,
//   BookOpen,
//   Award,
// } from "lucide-react";

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Badge } from "@/components/ui/badge";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Progress } from "@/components/ui/progress";
// import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

// const HeroSection = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [progress, setProgress] = useState(13);

//   // Animation to simulate profile completion progress
//   useEffect(() => {
//     const timer = setTimeout(() => setProgress(66), 800);
//     return () => clearTimeout(timer);
//   }, []);

//   // Mock data
//   const featuredJobs = [
//     {
//       id: 1,
//       title: "Frontend Developer",
//       company: "TechCorp",
//       location: "Remote",
//       type: "Full-time",
//       logo: "/api/placeholder/48/48",
//       postedAt: "2 days ago",
//     },
//     {
//       id: 2,
//       title: "UX/UI Designer",
//       company: "CreativeAgency",
//       location: "New York",
//       type: "Contract",
//       logo: "/api/placeholder/48/48",
//       postedAt: "5 days ago",
//     },
//     {
//       id: 3,
//       title: "Data Analyst Intern",
//       company: "DataInsights",
//       location: "Chicago",
//       type: "Internship",
//       logo: "/api/placeholder/48/48",
//       postedAt: "1 day ago",
//     },
//   ];
//   // Upcoming events
//   const events = [
//     {
//       id: 1,
//       title: "Career Fair",
//       date: "March, 15, 2025",
//       type: "In-person",
//     },
//     {
//       id: 2,
//       title: "Resume Workshop",
//       date: "March 10, 2025",
//       type: "Online",
//     },
//   ];

//   return (
//     <div className="flex min-h-screen bg-slate-50 dark:bg-slate-900">
//       {/* Sidebar */}
//       <div className="hidden md:flex w-64 flex-col fixed inset-y-0 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 z-10">
//         <div className="h-16 flex items-center justify-center border-b">
//           <h1 className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
//             CareerConnect
//           </h1>
//         </div>
//         <nav className="flex-1 pt-4 pb-4">
//           <div className="px-4 mb-6">
//             <div className="flex flex-col items-center">
//               <Avatar className="h-16 w-16 mb-2">
//                 <AvatarImage src="/api/placeholder/64/64" alt="Student" />
//                 <AvatarFallback>JS</AvatarFallback>
//               </Avatar>
//               <p className="font-medium">Jane Smith</p>
//               <p className="text-sm text-slate-500 dark:text-slate-400">
//                 Computer Science
//               </p>
//             </div>
//             <div className="mt-4">
//               <p className="text-xs mb-1 text-slate-500 dark:text-slate-400">
//                 Profile completion
//               </p>
//               <Progress value={progress} className="h-2" />
//             </div>
//           </div>
//           <div className="space-y-1 px-2">
//             <Button variant="ghost" className="w-full justify-start">
//               <Briefcase className="mr-2 h-4 w-4" />
//               Dashboard
//             </Button>
//             <Button variant="ghost" className="w-full justify-start">
//               <Search className="mr-2 h-4 w-4" />
//               Job Search
//             </Button>
//             <Button variant="ghost" className="w-full justify-start">
//               <Bookmark className="mr-2 h-4 w-4" />
//               Saved Jobs
//             </Button>
//             <Button variant="ghost" className="w-full justify-start">
//               <Bell className="mr-2 h-4 w-4" />
//               Notifications
//             </Button>
//             <Button variant="ghost" className="w-full justify-start">
//               <Calendar className="mr-2 h-4 w-4" />
//               Events
//             </Button>
//             <Button variant="ghost" className="w-full justify-start">
//               <BookOpen className="mr-2 h-4 w-4" />
//               Resources
//             </Button>
//             <Button variant="ghost" className="w-full justify-start">
//               <User className="mr-2 h-4 w-4" />
//               Profile
//             </Button>
//             <Button variant="ghost" className="w-full justify-start">
//               <Settings className="mr-2 h-4 w-4" />
//               Settings
//             </Button>
//           </div>
//         </nav>
//       </div>

//       {/* Main content */}
//       <div className="flex-1 md:ml-64 flex flex-col">
//         {/* Top navigation */}
//         <header className="sticky top-0 z-10 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 h-16 flex items-center px-4 md:px-6">
//           <Button variant="outline" size="icon" className="md:hidden mr-2">
//             <span className="sr-only">Toggle sidebar</span>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="h-6 w-6"
//             >
//               <path d="M3 12h18M3 6h18M3 18h18" />
//             </svg>
//           </Button>
//           <div className="ml-auto flex items-center space-x-4">
//             <Button variant="outline" size="icon">
//               <Bell className="h-4 w-4" />
//             </Button>
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <Button
//                   variant="ghost"
//                   className="relative h-8 w-8 rounded-full"
//                 >
//                   <Avatar className="h-8 w-8">
//                     <AvatarImage src="/api/placeholder/32/32" alt="Student" />
//                     <AvatarFallback>JS</AvatarFallback>
//                   </Avatar>
//                 </Button>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent align="end">
//                 <DropdownMenuLabel>My Account</DropdownMenuLabel>
//                 <DropdownMenuSeparator />
//                 <DropdownMenuItem>Profile</DropdownMenuItem>
//                 <DropdownMenuItem>Settings</DropdownMenuItem>
//                 <DropdownMenuItem>Help & Support</DropdownMenuItem>
//                 <DropdownMenuSeparator />
//                 <DropdownMenuItem>Log out</DropdownMenuItem>
//               </DropdownMenuContent>
//             </DropdownMenu>
//           </div>
//         </header>

//         {/* Page content */}
//         <main className="flex-1 overflow-auto py-6 px-4 md:px-6">
//           <div className="grid gap-6">
//             {/* Welcome section */}
//             <motion.div
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               className="flex flex-col lg:flex-row gap-4 items-center justify-between"
//             >
//               <div>
//                 <h1 className="text-3xl font-bold tracking-tight">
//                   Welcome back, Jane!
//                 </h1>
//                 <p className="text-slate-500 dark:text-slate-400">
//                   {"Let's"} find your dream job today
//                 </p>
//               </div>
//               <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
//                 <TrendingUp className="mr-2 h-4 w-4" /> Update Profile
//               </Button>
//             </motion.div>

//             {/* Job search section */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//               className="rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 p-6 md:p-8 shadow-lg"
//             >
//               <div className="max-w-3xl mx-auto">
//                 <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
//                   Find Your Perfect Opportunity
//                 </h2>
//                 <div className="bg-white dark:bg-slate-900 rounded-lg p-1 flex flex-col md:flex-row shadow-inner">
//                   <div className="flex-1 flex items-center px-3 py-2">
//                     <Search className="h-5 w-5 text-slate-400 mr-2" />
//                     <Input
//                       type="text"
//                       placeholder="Job title, keyword, or company"
//                       value={searchQuery}
//                       onChange={(e) => setSearchQuery(e.target.value)}
//                       className="border-0 shadow-none focus-visible:ring-0 flex-1"
//                     />
//                   </div>
//                   <Button className="m-1 bg-indigo-600 hover:bg-indigo-700 text-white">
//                     Search Jobs
//                   </Button>
//                 </div>
//                 <div className="mt-4 flex flex-wrap gap-2">
//                   <Badge className="bg-white/20 hover:bg-white/30 text-white">
//                     Remote
//                   </Badge>
//                   <Badge className="bg-white/20 hover:bg-white/30 text-white">
//                     Full-time
//                   </Badge>
//                   <Badge className="bg-white/20 hover:bg-white/30 text-white">
//                     Internship
//                   </Badge>
//                   <Badge className="bg-white/20 hover:bg-white/30 text-white">
//                     Entry Level
//                   </Badge>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Dashboard content */}
//             <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//               {/* Job recommendations */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 0.3 }}
//                 className="md:col-span-2"
//               >
//                 <Tabs defaultValue="featured">
//                   <div className="flex items-center justify-between mb-4">
//                     <h2 className="text-xl font-bold">Job Recommendations</h2>
//                     <TabsList>
//                       <TabsTrigger value="featured">Featured</TabsTrigger>
//                       <TabsTrigger value="recommended">Recommended</TabsTrigger>
//                       <TabsTrigger value="saved">Saved</TabsTrigger>
//                     </TabsList>
//                   </div>

//                   <TabsContent value="featured" className="m-0">
//                     <div className="grid gap-4">
//                       {featuredJobs.map((job) => (
//                         <motion.div
//                           key={job.id}
//                           whileHover={{ scale: 1.01 }}
//                           transition={{ duration: 0.2 }}
//                         >
//                           <Card>
//                             <CardContent className="p-4">
//                               <div className="flex items-start gap-4">
//                                 <div className="h-12 w-12 rounded overflow-hidden shrink-0">
//                                   <img
//                                     src={job.logo}
//                                     alt={job.company}
//                                     className="h-full w-full object-cover"
//                                   />
//                                 </div>
//                                 <div className="flex-1 min-w-0">
//                                   <div className="flex items-start justify-between">
//                                     <div>
//                                       <h3 className="font-semibold text-lg">
//                                         {job.title}
//                                       </h3>
//                                       <p className="text-slate-500 dark:text-slate-400">
//                                         {job.company} • {job.location}
//                                       </p>
//                                     </div>
//                                     <Button variant="ghost" size="icon">
//                                       <Bookmark className="h-4 w-4" />
//                                     </Button>
//                                   </div>
//                                   <div className="mt-2 flex flex-wrap items-center gap-2">
//                                     <Badge variant="outline">{job.type}</Badge>
//                                     <span className="text-sm text-slate-500 dark:text-slate-400">
//                                       Posted {job.postedAt}
//                                     </span>
//                                   </div>
//                                 </div>
//                               </div>
//                             </CardContent>
//                             <CardFooter className="border-t p-4 pt-3 flex justify-end">
//                               <Button
//                                 variant="outline"
//                                 size="sm"
//                                 className="mr-2"
//                               >
//                                 View Details
//                               </Button>
//                               <Button size="sm">Apply Now</Button>
//                             </CardFooter>
//                           </Card>
//                         </motion.div>
//                       ))}
//                     </div>
//                   </TabsContent>

//                   <TabsContent value="recommended" className="m-0">
//                     <Card className="border-dashed">
//                       <CardContent className="pt-6 text-center">
//                         <p className="text-slate-500 dark:text-slate-400">
//                           Complete your profile to get personalized
//                           recommendations.
//                         </p>
//                         <Button className="mt-4">Update Profile</Button>
//                       </CardContent>
//                     </Card>
//                   </TabsContent>

//                   <TabsContent value="saved" className="m-0">
//                     <Card className="border-dashed">
//                       <CardContent className="pt-6 text-center">
//                         <p className="text-slate-500 dark:text-slate-400">
//                           You {"haven't"} saved any jobs yet.
//                         </p>
//                         <Button className="mt-4">Browse Jobs</Button>
//                       </CardContent>
//                     </Card>
//                   </TabsContent>
//                 </Tabs>
//               </motion.div>

//               {/* Quick stats and events */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 0.4 }}
//                 className="space-y-6"
//               >
//                 {/* Profile stats */}
//                 <Card>
//                   <CardHeader className="pb-2">
//                     <CardTitle>Profile Stats</CardTitle>
//                   </CardHeader>
//                   <CardContent>
//                     <div className="space-y-4">
//                       <div>
//                         <div className="flex items-center justify-between mb-1">
//                           <p className="text-sm">Profile completeness</p>
//                           <p className="text-sm font-medium">{progress}%</p>
//                         </div>
//                         <Progress value={progress} className="h-2" />
//                       </div>
//                       <div className="grid grid-cols-2 gap-4 pt-2">
//                         <div className="text-center p-2 bg-slate-100 dark:bg-slate-800 rounded-lg">
//                           <p className="text-2xl font-bold">12</p>
//                           <p className="text-xs text-slate-500 dark:text-slate-400">
//                             Applications
//                           </p>
//                         </div>
//                         <div className="text-center p-2 bg-slate-100 dark:bg-slate-800 rounded-lg">
//                           <p className="text-2xl font-bold">3</p>
//                           <p className="text-xs text-slate-500 dark:text-slate-400">
//                             Interviews
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>

//                 {/* Upcoming events */}
//                 <Card>
//                   <CardHeader className="pb-2">
//                     <CardTitle>Upcoming Events</CardTitle>
//                   </CardHeader>
//                   <CardContent>
//                     {events.map((event) => (
//                       <div key={event.id} className="mb-4 last:mb-0">
//                         <div className="flex items-start gap-3">
//                           <div className="bg-indigo-100 dark:bg-indigo-900 p-2 rounded-lg">
//                             <Calendar className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
//                           </div>
//                           <div>
//                             <p className="font-medium">{event.title}</p>
//                             <p className="text-sm text-slate-500 dark:text-slate-400">
//                               {event.date}
//                             </p>
//                             <Badge variant="outline" className="mt-1">
//                               {event.type}
//                             </Badge>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                     <Button variant="outline" className="mt-2 w-full">
//                       View All Events
//                     </Button>
//                   </CardContent>
//                 </Card>

//                 {/* Skill suggestions */}
//                 <Alert>
//                   <Award className="h-4 w-4" />
//                   <AlertTitle>Boost your profile</AlertTitle>
//                   <AlertDescription>
//                     Add React.js to your skills to match with 50+ more jobs.
//                   </AlertDescription>
//                 </Alert>
//               </motion.div>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;
