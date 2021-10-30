import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formDataAdd } from "@/redux/actions/index";
import JourneyStartForm from "@/ui/journeyStartForm/index";
import Button from "@/ui/button/index";
import BigTitle from "@/ui/bigTitle/index";

const Index = () => {
  const [part, setPart] = useState(1);
  const dispatch = useDispatch();
  const { formData } = useSelector((state) => state);
  console.log(formData);
  const partSkip = (e, pageSize) => {
    e.preventDefault();
    console.log(e.target);
    const info = e.target;
    const formData = {
      name: info.name.value,
      email: info.email.value,
      tel: info.tel.value,
      instagram: info.instagram.value,
      country: info.country.value,
      herbaflife: info.herbaflife.value,
      herbaflifeMember: info.herbaflifeMember.value,
      bodySize: info.bodySize.value,
    };
    setPart(pageSize + 1);
    dispatch(formDataAdd(formData));
  };

  const partSkip2 = (e, pageSize) => {
    e.preventDefault();
    const info = e.target;
    const formData = {
      about: info.about.value,
    };
    setPart(pageSize + 1);
    dispatch(formDataAdd(formData));
  };
  /*
     {part == 3 ? (
          ""
        ) : (
          <div className="text-4xl font-bold ">Adım {part}</div>
        )}*/
  return (
    <div className="flex flex-col  w/12-12 mb-[400px]">
      <BigTitle title="Yolculuğa Başla" />
      <div className="p-4  flex  xl:w-4/12 w-12/12 mx-auto xl:pt-10 pt-10">
    
        {part == 1 && (
          <form className="" onSubmit={(e) => partSkip(e, 1)}>
            <JourneyStartForm />
          </form>
        )}

        {part == 2 && (
          <form onSubmit={(e) => partSkip2(e, 2)}>
            <div className="text-2xl font-bold mt-10">
              Biraz Kendinden Bahsedermisin?
            </div>
            <div className="flex mt-5">
              <textarea
                name="about"
                placeholder="Birkaç cümle yeterli"
                className=" w-full border border-black h-[200px] pl-2 pt-2"
              ></textarea>
            </div>
            <div className="flex mt-5">
              <Button value="Gönder" type="sumbit" />
            </div>
          </form>
        )}
        {part == 3 && (
          <div className="text-3xl font-bold mt-10 justify-center flex ">
            Tamamlandı
          </div>
        )}
      </div>
    </div>
  );
};
export default Index;
