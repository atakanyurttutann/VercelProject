import React from "react";
import ImageShow from '@/view/imageShow/index'
import {wrapper} from '@/redux/store';
import Footer from '@/composite/footer/footer';

const ImageDetail = () => {
  return (
    <div >
      <ImageShow/>
      <footer className="mt-[600px]"> 
      <Footer/>

        </footer>

    </div>
  );
};
ImageDetail.getInitialProps = wrapper.getInitialPageProps(
  (store) =>
    ({ pathname, req, res }) => {

        console.log( store.getState())
    }
);
export default ImageDetail;
