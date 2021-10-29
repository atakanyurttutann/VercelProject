import Header from "@/composite/header/index";
import Social from "@/composite/social/index";
import Image from "next/image";
export default function Home() {
  return (
    <div className="h-screen">
      <Header />
      <div className=" xl:px-[10%]  px-[20px] mx-auto font-inter">
        

        <div className="shadow-myCard rounded-[12px]">
          <div className="flex items-center flex-col xl:flex-row">
            
                <img src="/img/ferhan.png" className="w-full xl:w-auto h-full  rounded-bl-[12px] rounded-tl-[12px]"/>
              
              <div className="break-words pr-14 pl-14 xl:mt-0 mt-10 text-[18px] text-[#3D3C3C]">
              
                  <h1 className="font-bold  xl:xt0 text-2xl lg:text-5xl text-black">
                    Merhaba,
                    <br/>
                    Dünyama Hoş Geldin
                  </h1>
              
                
                  <p className="mt-10">Herkese Selam</p>
                  <p className="font-bold text-black">Ben Ferhan Cihaner,</p>
              

                <p className="mt-5">
                  Sporu çok seviyorum ve bir Triathletim! İnsanların da daha
                  sağlıklı ve aktif bir yaşam biçimi benimsemeleri için elimden
                  gelen her şeyi yapmaya hazırım.
                </p>
                <p className="mt-5">
                  Sağlıklı ve daha iyi bir dünya için benim seçtiğim yol bu!
                  Mutlu, huzurlu ve kendini seven bireyler dünyayı daha güzel
                  bir yere çevirir. En büyük motivasyonum da bu amaç
                  doğrultusunda sizinle birlikte hareket edebilmek. Web sitemi
                  gezerken umarım istediklerini karşılarım!
                </p>
                <p className="mt-5 xl:mb-0 mb-10">Benimle gel ve motive ol!</p>
              </div>
          </div>
        </div>
      </div>

    

      <div className="xl:hidden flex justify-center pb-4">
        <Social classParameter={"text-[#cccccc]"} />
      </div>
      <div className="hidden xl:flex justify-end items-center container mx-auto mt-5 font-inter">
        copyright © ferhancihaner.com
      </div>
      <div className="ayar absolute hidden xl:block">
<Social classParameter={"text-[#cccccc] flex-col gap-5"} />

</div>
    </div>
  );
}
