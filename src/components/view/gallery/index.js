import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import {imageChange} from '@/redux/actions/index'
import { useRouter } from 'next/router'
import BigTitle from '@/ui/bigTitle/index'
import GalleryImage from '@/ui/galleryImage/index';
import Pagination from "@/ui/pagination/index"
export default function index() {
    const dispatch = useDispatch();
    const router = useRouter()
    const {imageUrlData} = useSelector((state) => state.imageUrlData)

    const imageschange=(e)=>{
        console.log(e.target.src)
        dispatch(imageChange(e.target.src))
        router.push("/imageShow")
        }
    return (
        <div>
         <BigTitle title="Fotograflar"/>

<div className="container  mx-auto mb-[200px]">
<div className="flex flex-row flex-wrap w-12/12 mt-10">
{imageUrlData.map((e,index)=>(
    <div key={index} className="xl:w-4/12 w-6/12 h-[300px] px-4  mb-3">
 <GalleryImage src={e.url}  onClick={imageschange}   />
</div>

))}


</div>
<div className="flex justify-center mb-5 font-bold">
 <Pagination  classParemeter={"bg-blue-700 text-white"} pageNumber="1"/>
 <Pagination pageNumber="2"/>
 <Pagination pageNumber="3"/>
 <Pagination pageNumber="4"/>

    </div>
</div>

        </div>
    )
}
