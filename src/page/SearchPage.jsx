import { useEffect, useState } from "react";
import Product from "../components/Product";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllMedicineAsync, selectRes, selectedForms } from "../redux/MedicineConfigSlice";


const SearchPage = () => {
    const Forms = useSelector(selectedForms)
    
    const [query,setQuery] = useState("");
    const [loading,setLoading] = useState(false)
    const dispatch = useDispatch();
    const res = useSelector(selectRes)
    const searchHandle = async()=>{
      setLoading(true)
      dispatch(fetchAllMedicineAsync(query))
      setLoading(false);
    }
    
    
    
    return (
      <>
      
      {/* Search tab Area */}
      <div className=" md:w-[770px]  ml-0 lg:w-full relative bg-white  md:h-[330px] overflow-hidden text-left text-sm text-accent font-poppins">

        <h2 className="m-0 absolute text-[15px] top-[12px] md:top-[62px] left-[27px] md:left-[calc(50%_-_196px)] md:text-[24px] font-normal font-inherit text-black">
            Cappsule web development test
        </h2>

        {/* Search Input */}
        <div className="absolute top-[40px] left-[3px] md:top-[117px] lg:left-[calc(50%_-_550px)] w-[296px] md:w-[760px] lg:w-[1099px] h-[148px] text-base text-font-3">
          <div className="absolute top-[calc(50%_-_30.7px)] lg:left-[46px] md:w-[760px] lg:w-[963px] h-[140px] ">
            <input
              className="pl-[43px] md:pl-20 placeholder:text-[12px] placeholder:md:text-[15.6px]  placeholder:text-gray-300 [border:none] text-black [outline:none] font-medium font-poppins text-base bg-white absolute top-[-0.3px] md:left-1 lg:left-[0px] shadow-[0px_0px_50px_rgba(173,_173,_173,_0.4)] rounded-16xl md:w-[760px] w-[300px] lg:w-[1002px] h-[60px] overflow-hidden py-[18px] px-8 box-border"              
              placeholder="Type your medicine name here"
              type="text"
              onChange={(e)=>setQuery(e.target.value)}
              onKeyDown={searchHandle}
            />   
            <CiSearch className="absolute z-10 left-3 md:left-6 top-[14px] w-7 h-7" />  
            <button onClick={searchHandle} className="absolute bg-transparent left-[234px] md:left-[680px] lg:left-[900px] md:right-8 lg:right-0 top-2 text-[12px] md:text-[15px] font-bold leading-10 text-[#2a527a] ">Search</button>      
          </div>
        </div>
        <div className=" mt-[180px] mb-3 md:mt-[260px] md:ml-1 lg:ml-[155px] z-100 md:w-[760px] lg:w-[963px] h-[1px] bg-gray-300 " />

      </div>
      
      {/* Result Area */}
      {loading && <div>loading</div> }
      {!loading && (
        <div>
            {res?.length > 0 ? 
              ( 
                <>
                  {res?.map((salt,index)=>(
                    <div key={index}>
                      <Product salt={salt}/>
                    </div>
                  ))}
                </>
              ):
          <div className="font-semibold font-poppins mt-48 leading-10 text-[17px] text-gray-400">
            " Find medicines with amazing discount "
          </div>}
        </div>)}
      </>
      
    );
  };
  
  export default SearchPage;
  