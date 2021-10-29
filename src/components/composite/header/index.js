import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Social from '@/composite/social/index'
export default function Header() {
  const [active, setActive] = useState(false);
  const handle = () => {
    setActive(!active);
  };
  return (
    <div className="container mx-auto" >
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css"  />

      <div className="flex flex-row justify-between  text-center items-center min-h-[110px] px-[20px] xl:px-0">
        <div>
          <Link href="/">
            <a className="xl:pl-0  pl-5">
              <img
                src={"/img/logo.png"}
               
                width="165px"
                title="logo"
              />
            </a>
          </Link>
        </div>
        <div>
            <div
              onClick={handle}
              className="xl:hidden 2xl:hidden mr-5 cursor-pointer"
            >
              {active ? (
                <i className="fas fa-times text-2xl"/>
              ) : (
                <i className="fas fa-bars text-2xl"/>
              )}
            </div>
            <div>
              <ul className={`${active ? "action" : ""} navbar`}>
                <li className="py-4 border-[#C4C4C4] border-t-2 xl:py-0 xl:border-t-0">
                <div className="cursor-pointer">HAKKIMDA</div>

                  </li>
                <li className="py-4 border-[#C4C4C4] border-t-2 flex-col  flex gap-4 xl:hidden">
                <div className="cursor-pointer">YOLCULUĞUM</div>
                <div className="cursor-pointer">SEMİNERLERİM</div>
                <div className="cursor-pointer">YOLCULUKLARIMIZ</div>
                <div className="cursor-pointer">FOTOĞRAFLAR</div>

                  </li>
                  <li className="py-4 border-[#C4C4C4] border-t-2 xl:py-0 xl:border-t-0">
                  <div className="cursor-pointer">ÇALIŞMALARIMIZ</div>
                    </li>
                    <li className="py-4 border-[#C4C4C4] border-t-2 xl:py-0 xl:border-t-0">
                    <Link href="/journeyStart">
                <div className="cursor-pointer">YOLCULUĞA BAŞLA</div>
                </Link>
                       </li>
               <li className="py-4 border-b-2 border-[#C4C4C4] border-t-2 xl:py-0 xl:border-t-0 xl:border-b-0">
               <div className="cursor-pointer">İLETİŞİM</div>
                 </li>
                 <li className="flex flex-row justify-center items-start xl:hidden">
                  <Social classParameter="gap-0" />
                 </li>
              
              </ul>
           
            </div>
          </div>
        
      </div>
    </div>
  );
}
