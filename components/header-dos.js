import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/header.module.css";

function Navmenu({ open, setOpen }) {
  const router = useRouter();
  const navLink =  [
    {
      name: "Inicio",
      link: "/",
    },
    {
      name: "Diseño Web",
      link: "/diseno-web",
    },
    {
      name: "Seo",
      link: "/seo",
    },
    {
      name: "Publicidad",
      link: "/sem",
    },
    {
      name: "Blog",
      link: "/blog",
    },
  ];
  return (
    <nav
      className={`${
        styles.navegaciontwo
      } flex flex-col justify-center md:justify-end z-20 px-4 sm:flex-col md:flex-row  gap-8 text-md absolute sm:absolute md:relative top sm:top md:top left-0 
      sm:left-0 md:left-0 w-full sm:w-full md:w-full bg-white sm:bg-white md:bg-transparent transform 
      ${
        open
          ? "sm:-translate-y-0 sm:h-screen sm:top-0 -translate-y-0 h-screen top-0"
          : "-translate-y-full -top-full md:translate-y-0"} duration-300 ease-in-out `}
    >
      {navLink.map(({ link, name }) => (
        <Link
          key={name}
          href={link}
          className={`${
            router.pathname === link ? styles.active : "text-secondary"
          }`}
        >
          {name}
        </Link>
      ))}
    </nav>
  );
}


export default function Header(props) {
  const [open, setOpen] = useState(false);

  return (
    <header className={`bg-white ${props.bgslate} px-4`}>
      <div className={`max-w-screen-xl mx-auto ${styles.barra} justify-between`}>
        <Link href="/">
          <picture>
          <source media="(max-width: 799px)" srcSet="/img/logo-mia-negro.svg"></source>   
          <source media="(min-width: 800px)" srcSet="/img/logo-mia-negro.svg"></source>
          <Image
            src="/img/logo-mia-solutions.svg"
            width={150}
            height={37}
            alt="imagen logotipo"
            className="w-36 sm:w-36 md:w-36 lg:w-60 my-7 sm:my-2 md:my-0 lg:my-8"
            media="(min-width: 800px)"
          />
          </picture>
        </Link>
        <Navmenu open={open} setOpen={setOpen} />
        <div
          onClick={() => {
            setOpen(!open);
          }}
          className="sm:block md:hidden"
        >
          <div className="group z-30 relative w-6 h-4 my-5 cursor-pointer flex flex-col justify-between items-center">
            <span
              className={`h-one w-full bg-secondary rounded-lg group-hover:text-red-500 cursor-pointer transform transition duration-300 ease-in-out ${
                open ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`w-full bg-secondary rounded-lg group-hover:text-red-500 cursor-pointer transform transition duration-300 ease-in-out ${open ? "h-0" : "w-full h-one"}`}
            ></span>
            <span
              className={`h-one w-full bg-secondary rounded-lg group-hover:text-red-500 cursor-pointer transform transition duration-300 ease-in-out ${
                open ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </div>
        </div>
      </div>
    </header>
  );
}
