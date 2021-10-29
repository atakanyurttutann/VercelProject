const GalleryImage = ({src,onClick,classParameter})=>{

    return(
        <img onClick={onClick} className={`w-full  h-[300px] object-cover ${classParameter}`} src={src} />

    )
}
export default GalleryImage;