import Link from "next/link";
import Image from "next/image";
import Logo from "./crab.png";

export default async function NavbarLogo() {

  return (
    <>
              <Link className="navbar-brand" href="/">
                <Image
                    src={Logo}
                    alt="Choosepizzi -Logo logo"
                    width={75}
                    placeholder="blur"
                    className="logo_img"
                    quality={100}
                  />
                  </Link>
             
    </>
  );
}