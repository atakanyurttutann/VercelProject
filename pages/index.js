import Header from "@/composite/header/index";
import Social from "@/composite/social/index";
import Image from "next/image";
export default function Home() {
  return (
    <div className="container mx-auto">
      <Header />
      <div className= "font-inter">
        <div className="shadow-myCard rounded-[12px] xl:ml-0 xl:mr-0 ml-6 mr-6">
          <div className="flex items-center flex-col xl:flex-row relative">
            
                <img src="/img/ferhan.png" className="w-full xl:w-auto h-full  xl:rounded-bl-[12px] xl:rounded-tl-[12px] rounded-tl-[12px]  xl:rounded-tr-[0px] rounded-tr-[12px]"/>
              
              <div className="break-words pr-7 pl-7 xl:mt-0 mt-10 mb-[25px]  xl:text-[18px] text-[15px] text-[#3D3C3C]">
              
                  <h1 className="font-bold   text-[25px] lg:text-5xl text-black">
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
              <div className="ayar absolute hidden xl:block ">
             <Social classParameter={"text-[#cccccc] flex-col gap-5"} />

</div>
          </div>
        </div>
      </div>

    

      <div className="xl:hidden flex justify-center mt-7 mb-7">
        <Social classParameter={"text-[#cccccc]"} />
      </div>
      <div className="hidden xl:flex justify-end items-center  mx-auto mt-5 font-inter text-[12px]">
        copyright © ferhancihaner.com
      </div>
    
    </div>
  );
}
