import Link from "next/link"
import { FaGithub, FaLinkedinIn } from "react-icons/fa6"
import { MobileNavbar } from "./mobile-navbar"
import { AnimatedTooltip } from "./animated-tooltip"

const links = [
  {
    name: "About me",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
  {
    name: "Blog",
    path: "/blog",
  },
]
const socials = [
  {
    id: 1,
    name: "LinkedIn",
    path: "https://www.linkedin.com/in/pariwesh-tamrakar/",
    icon: <FaLinkedinIn className="xl:w-5 xl:h-5" />,
  },
  {
    id: 2,
    name: "GitHub",
    path: "https://github.com/pariweshtamr",
    icon: <FaGithub className="xl:w-5 xl:h-5" />,
  },
]

// const socials = [
//   {
//     id: 1,
//     name: "Github",
//     designation: "https://github.com/pariweshtamr",
//     image: "/github.webp",
//   },
//   {
//     id: 2,
//     name: "LinkedIn",
//     designation: "https://www.linkedin.com/in/pariwesh-tamrakar/",
//     image: "/linkedin.webp",
//   },
// ]

export const Navbar = () => {
  return (
    <header className="max-w-screen-2xl px-4 md:px-8 lg:px-12 mx-auto h-16">
      <div className="border-b border-primaryDark h-full flex items-center justify-between">
        <h1 className="font-bold text-3xl flex items-end relative">
          PT{" "}
          <span className="w-2 h-2 bg-primaryDark absolute bottom-[7px] -right-2"></span>
        </h1>

        <MobileNavbar />

        <nav className="md:flex items-center gap-5 hidden">
          {links.map((link) => (
            <Link
              href={link.path}
              key={link.name}
              className="uppercase md:text-sm xl:text-[15px] font-medium group relative overflow-hidden"
            >
              <span className="inline-block p-1 transition duration-500 ease-out group-hover:-translate-y-[120%]">
                {link.name}
              </span>
              <span className="absolute left-0 translate-y-[120%] group-hover:-translate-y-[0%] inline-block p-1 transition duration-500 ease-out">
                {link.name}
              </span>
            </Link>
          ))}{" "}
          <div className="w-[1.5px] h-5 bg-primaryDark" />
          {socials.map((social) => (
            <Link
              href={social.path}
              key={social.name}
              target="_blank"
              rel="nofollow noreferrer noopener"
              title={social.name}
              aria-label={social.name}
            >
              {social.icon}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
