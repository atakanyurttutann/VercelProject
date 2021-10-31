const BigTitle = ({title,classParameter})=>{
 return(
   
         <div className={`flex flex-row justify-center items-center xl:text-[50px]  text-[35px] bg-black text-white pt-10 pb-10 font-bold ${classParameter}`}>
        {title}
      </div>
     
 )

}
export default  BigTitle