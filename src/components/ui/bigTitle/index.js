const BigTitle = ({title,classParameter})=>{
 return(
   
         <div className={`flex flex-row justify-center items-center text-5xl bg-black text-white pt-10 pb-10 font-bold ${classParameter}`}>
        {title}
      </div>
     
 )

}
export default  BigTitle