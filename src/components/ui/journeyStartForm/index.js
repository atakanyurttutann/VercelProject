import Input from "../input";
import inputJourneyStart from "../../../data/inputJourneyStart";
import Button from "@/ui/button/index.js";

const JourneyStartForm = () => {
  console.log(inputJourneyStart);
  return (
    <div id="page1" className="mt-10 flex  flex-col flex-wrap">
      <div className="text-2xl font-bold">Kişisel Bilgiler </div>

      <div className="flex flex-wrap  justify-start   w-12/12 mt-10  gap-y-4 w-full">
        {inputJourneyStart.map((e) => (
          <div className="w-6/12 pr-5 ">
            <Input
              name={e.name}
              placeholder={e.placeholder}
              type={e.type}
              required={e.required}
            />
          </div>
        ))}
      </div>

      <div className="text-2xl font-bold mt-10">Hangi Ülkede Yaşıyorsun?</div>
      <select
        name="country"
        className="w-full border border-black font-bold pl-2 pt-2 pb-2 mt-5"
      >
        <option>Türkiye </option>
      </select>

      <div className="text-2xl font-bold mt-10">
        Daha önce Herbaflife ürünü kullandınmı?
      </div>

      <div className="flex w-full mt-5 font-bold">
        <div className="mr-5">
        <label className=" inline-flex items-center justify-center atikan " >
          <input
            className="absolute opacity-0  cursor-pointer "
            required
            type="radio"
            name="herbaflife"
            value="Evet"/>  
             <span className="w-[40px] h-[40px] bg-transparent border-black border inline-block mx-[10px] transition-[250ms] relative  yes" />
              <span className="">  Evet</span>
              
        
             </label>
        </div>
        <div className="mr-5">
          <label className=" inline-flex items-center justify-center atikan" >
          <input
            className=" absolute opacity-0  cursor-pointer h-0 w-0"
            required
            type="radio"
            name="herbaflife"
            value="Hayır"/>  
             <span className="w-[40px] h-[40px] bg-transparent border-black border inline-block mx-[10px] transition-[250ms] relative  no" />
              <span className="">  Hayır</span>
              
        
             </label>
        
        </div>
      </div>

      <div className="text-2xl font-bold mt-10">
        Daha önce Herbaflife üyesi oldunmu?
      </div>

      <div className="flex mt-5 font-bold">
      <div className="mr-5">
          <label className=" inline-flex items-center justify-center atikan" >
          <input
            className=" absolute opacity-0  cursor-pointer h-0 w-0"
            required
            type="radio"
            name="herbaflifMember"
            value="Evet"/>  
             <span className="w-[40px] h-[40px] bg-transparent border-black border inline-block mx-[10px] transition-[250ms] relative  yes" />
              <span className="">  Evet</span>
              
        
             </label>
        
        </div>

           <div className="mr-5">
          <label className=" inline-flex items-center justify-center atikan" >
          <input
            className=" absolute opacity-0  cursor-pointer h-0 w-0"
            required
            type="radio"
            name="herbaflifMember"
            value="Hayır"/>  
             <span className="w-[40px] h-[40px] bg-transparent border-black border inline-block mx-[10px] transition-[250ms] relative no" />
              <span className="">  Hayır</span>
              
        
             </label>
        
        </div>
      </div>

      <div className="text-2xl font-bold mt-10">İdeal vücut ölçün nedir?</div>
      <div className="flex mt-4">
     
          <Input
              name="bodySize"
              placeholder="İdeal Vücut Ölçün"
              required={true}
            />
      </div>

      <div className="flex mt-5">
       <Button value="Gönder" type="sumbit"/>
      </div>
    </div>
  );
};
export default JourneyStartForm;
