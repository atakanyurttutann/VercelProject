import React from "react";
import Link from "next/dist/client/link";
import Image from "next/dist/client/image";
import Social from "@/composite/social/index";

export default function Footer() {
  return (
    <div className="bottom-0  w-full left-0 block  static  bg-black text-white">
      <div className="flex flex-row  xl:justify-between justify-center items-center text-center pt-10 pb-10 container mx-auto">
        <div>
          <Link href="/">
            <a className="xl:pl-0  pl-5">
              <Image
                src={"/img/logo2.png"}
                height="50px"
                width="185px"
                title="logo"
              />
            </a>
          </Link>
        </div>
        <div>
          <ul className="xl:flex hidden xl:flex-row gap-4 font-bold ">
            <li className="cursor-pointer">HAKKIMDA</li>
            <li className="cursor-pointer">ÇALIŞMALARIMIZ</li>
            <Link href="/yolculuga-basla">
              <li className="cursor-pointer">YOLCULUĞA BAŞLA</li>
            </Link>
            <li className="cursor-pointer">İLETİŞİM</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-row  xl:justify-between justify-center items-center text-center container mx-auto pb-10 gap-5 xl:gap-0">
        <div className="-mt-10">
          <Social />
        </div>
        <div className="flex items-center justify-center">
          copyright © ferhancihaner.com
        </div>
      </div>
    </div>
  );
}
