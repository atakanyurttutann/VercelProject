const Pagination = ({pageNumber,classParemeter})=>{
    return (
        <div className={ `w-10 text-black bg-[#c4c4c4] rounded-full text-center mr-2 cursor-pointer ${classParemeter}`} >{pageNumber}</div>

    )
}
export default Pagination;