import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Social from "@/composite/social/index";
export default function Header() {
  const [active, setActive] = useState(false);
  const handle = () => {
    setActive(!active);
  };

  const dropActive =()=>{
  const element = document.getElementById("dropitem1").classList.toggle("drop-items-active")
  }
  return (
    <div className="container mx-auto">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css"
      />

      <div className="flex flex-row justify-between   items-center min-h-[110px] px-[20px] xl:px-0">
        <div>
          <Link href="/">
            <a className="xl:pl-0  pl-5">
              <img src={"/img/logo.png"} width="165px" title="logo" />
            </a>
          </Link>
        </div>
        <div>
          <div
            onClick={handle}
            className="xl:hidden 2xl:hidden mr-5 cursor-pointer"
          >
            {active ? (
              <i className="fas fa-times text-2xl" />
            ) : (
              <i className="fas fa-bars text-2xl" />
            )}
          </div>
          <div>
            <ul className={`${active ? "action" : ""} navbar`}>
              <div className="flex  flex-row items-center  justify-between mb-[110px] mt-5 xl:hidden ">
                <div>
                  <Link href="/">
                    <a className="xl:pl-0">
                      <img src="/img/logo2.png" />
                    </a>
                  </Link>
                </div>
                <div onClick={handle} className="mr-5 cursor-pointer  ">
                  <i className="fas fa-times text-2xl" />
                </div>
              </div>
              <li className="py-4 border-[#C4C4C4] border-t-2 xl:py-0 xl:border-t-0">
                <div className="cursor-pointer">HAKKIMDA</div>
              </li>
              <li className="py-4 border-[#C4C4C4] border-t-2 xl:py-0 xl:border-t-0">
                <div className="cursor-pointer">YOLCULUĞUM</div>
              </li>
              <li     className="py-4 border-[#C4C4C4] border-t-2 xl:py-0 xl:border-t-0 menu-item relative">
                <div className="flex justify-between">
                  <div className="cursor-pointer">ÇALIŞMALARIMIZ</div>
                  <div className="mr-4 xl:hidden"> <i  onClick={()=>dropActive(dropitem1)}  className="fas fa-caret-down cursor-pointer"></i></div>
                </div>

                <ul  id="dropitem1" className="drop-items">
                  <li>MOTİVASYON </li>
                  <hr className="xl:w-full bg-black" />
                  <li>YOLCUKLARIMIZ</li>
                  <hr className="xl:w-full bg-black" />
                  <li>TAVSİYE EDİCİ GIDALAR</li>
                  <hr className="xl:w-full bg-black" />

                  <li>TAVSİYE EDİCİ GIDALAR</li>

                </ul>
              </li>
              <li className="py-4 border-[#C4C4C4] border-t-2 xl:py-0 xl:border-t-0 ">
                <Link href="/journeyStart">
                  <div className="cursor-pointer">YOLCULUĞA BAŞLA</div>
                </Link>
              
              </li>
              <li className="py-4 border-b-2 border-[#C4C4C4] border-t-2 xl:py-0 xl:border-t-0 xl:border-b-0">
                <div className="cursor-pointer">İLETİŞİM</div>
              </li>
              <li className="flex flex-row justify-center items-start xl:hidden mt-8">
                <Social classParameter="gap-0" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
