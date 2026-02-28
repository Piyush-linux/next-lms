import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

export const courses = [
  {
    id: 1,
    name: "All Courses",
    desc: "Browse our complete catalog of courses across multiple domains.",
    path: "/courses",
  },
  {
    id: 2,
    name: "Web Development",
    desc: "Learn modern frontend and backend development technologies.",
    path: "/courses/web-development",
  },
  {
    id: 3,
    name: "Data Science",
    desc: "Master data analysis, machine learning, and AI fundamentals.",
    path: "/courses/data-science",
  },
  {
    id: 4,
    name: "UI/UX Design",
    desc: "Design intuitive and beautiful user experiences.",
    path: "/courses/ui-ux",
  },
  {
    id: 5,
    name: "Projects",
    desc: "Build real-world projects to strengthen your portfolio.",
    path: "/projects",
  },
  {
    id: 6,
    name: "Pricing",
    desc: "Choose a learning plan that fits your goals.",
    path: "/pricing",
  },
  {
    id: 7,
    name: "Contact",
    desc: "Reach out for support, partnerships, or inquiries.",
    path: "/contact",
  },
];

export default function Navbar() {
  return (
    <div className="p-4 max-w-7xl mx-auto flex items-center justify-between">
      {/*LOGO*/}
      <div className="flex items-center">
        <Image src={"/logo.png"} alt="logo" width={40} height={40} />
        <h1 className="font-bold text-4xl font-game">Dev Box</h1>
      </div>
      {/*Items*/}
      <NavigationMenu>
        <NavigationMenuList className="space-x-6">
          {/* Courses Dropdown */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Courses</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid grid-cols-2 gap-2 p-4 w-[600px]">
                {courses.map((course, index) => {
                  return (
                    <li
                      key={index}
                      className="w-full hover:bg-accent p-4 rounded-lg cursor-pointer"
                    >
                      <h2 className="font-bold">{course.name}</h2>
                      <p className="text-xs">{course.desc}</p>
                    </li>
                  );
                })}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Projects */}
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/projects" className="px-4">
                Projects
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          {/* Pricing */}
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/pricing">Pricing</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          {/* Contact */}
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/contact">Contact Us</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      {/*Signup*/}
      <Button className="font-game text-2xl" variant={"pixel"}>
        Signup
      </Button>
    </div>
  );
}
