'use client';
import { useRef } from 'react';
import Link from "next/link";
import Image from "next/image";
import styles from'./scss/Navbar.module.scss';
import NavbarLogo from "./NavbarLogo";
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


async function getNav() {

  // const tl = useRef();
  
  //   gsap.registerPlugin(ScrollTrigger);


  //   const myElement = document.querySelector('.navbar-brand');
  //   gsap.from (myElement, {y:500, opacity:0, duration:1});
    
  //   tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".main_wrp",
  //       pin: true,
  //       scrub: true,
  //       start: "top",
  //       end: "+=500px",
  //     },
  //   });
  //   tl.to(".navbar-collapse", { height: 20, duration: 1 });



  const query = `
  {
    menu(id: "Main Menu", idType: NAME) {
      count
      id
      menuId
      name
      slug
      menuItems {
        nodes {
          cssClasses
          id
          label
          locations
          menuItemId
          parentId
          target
          title
          url
        }
      }
    }
  }
    `;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}?query=${encodeURIComponent(
      query
    )}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const { data } = await res.json();

  return data.menu.menuItems.nodes;
}

export default async function Navbar() {
  const navs = await getNav();


  return (
    <>
          <nav className="navbar sticky-top navbar-expand-lg bg-light">
            <div className="container-fluid">
              <NavbarLogo />
              {/* Mobile menu button */}
              <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  {navs.map((nav) => (
                    <li key={nav.id} className="nav-item">
                      <Link
                        className="nav-link"
                        href={`${nav.url}`}
                        target={`${nav.target}`}
                      >
                        {nav.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
          </nav>
    </>
  );
}