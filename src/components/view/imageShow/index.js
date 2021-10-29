import React from "react";
import { useSelector } from "react-redux";
import BigTitle from "@/ui/bigTitle/index.js";

const ImageShow = () => {
  const { imageUrl } = useSelector((state) => state.imageUrl);

  return (
    <div>
      <BigTitle title="Fotoğraf Detay" />
      <div className="mt-4 flex justify-center items-center mb-4">
        <img src={imageUrl} />
      </div>
    </div>
  );
};
export default ImageShow;
