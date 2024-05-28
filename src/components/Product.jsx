import React from 'react'
import { useSelector } from "react-redux";
import Buttons from "./Buttons";
import { selectedForms,selectedStrength,selectedPackage } from "../redux/MedicineConfigSlice";

const Product = (props) => {
  const salt = props.salt;
  const id = salt.id
  const forms = salt?.salt_forms_json;

  const Forms = useSelector(selectedForms);
  const Strengths = useSelector(selectedStrength)
  const allpackaging = useSelector(selectedPackage)
  
  let prods = {};

  const currForm = Forms[id];
  const currStr = Strengths[id]
  const currPacks = allpackaging[id]
    
  forms[currForm] && forms[currForm][currStr] && ( prods = forms[currForm][currStr][currPacks] )

  // Minimum rate
  let mini = Number.MAX_VALUE;
  prods && Object.entries(prods).map((prod)=>{
    return(
      prod[1] && prod[1].map((pharmecies)=>(
        pharmecies &&  mini > pharmecies[Object.keys(pharmecies)[1]] ? (mini = pharmecies[Object.keys(pharmecies)[1]]) : (mini = mini)
      ))
    )
  })
  
  return (
    <div className=" mb-6 relative lg:left-[134px] lg:w-[1007px] h-max shadow-[0px_0px_30px_rgba(0,_0,_0,_0.1)] rounded-mini [background:linear-gradient(-84.59deg,_#d5e7e6,_#fff)] max-w-full min-h-[231px] overflow-hidden text-left text-mini text-black font-poppins">

      {/* product name and formula */}
      <div className="absolute h-[21.39%] top-[33%] md:top-[42%] lg:top-[38.3%] flex flex-col bottom-[48.31%] left-[145px] md:left-[calc(50%_-_37.5px)] lg:left-[calc(50%_-_87.5px)] w-[80px] md:w-[200px] lg:w-[260px] text-center text-[8px] md:text-[13px] lg:text-base-5 text-font-2">
        <div className=" top-[0%] md:w-[200px] lg:w-[260px] -ml-3 md:ml-0 md:left-0 font-semibold">
          {salt.salt}
        </div>
        <div className=" top-[61.54%] left-0 text-[8px] md:text-smi-9 font-medium text-dark-blue">
          {Forms[id]} | {Strengths[id]} | {allpackaging[id]}
        </div>
      </div>

      {/* Rate of Product available */}
      {mini !== Number.MAX_VALUE ? 
      (<div className="absolute w-[60px] h-[70px] md:w-[140px] lg:w-[25.82%] top-[calc(50%_-_54.5px)] left-[80%] lg:right-[0.99%] md:right-[2%] lg:left-[73.19%] rounded-8xs md:h-[109px] text-9xl text-accent">
        <span className="absolute top-[34px] text-[10px] md:text-[30.6px] left-[6px] lg:left-[68px] font-inter">
          <span className="font-extrabold">From₹</span>
          <span className="font-extrabold font-poppins">{mini}</span>
        </span>
      </div>):
      (
        <div className="absolute  w-[80px] md:w-[180px] h-[70px] lg:w-[22.82%] top-[calc(50%_-_35.5px)] left-[74%] md:right-[5px] lg:right-[0.99%] lg:left-[74.19%] rounded-8xs md:h-[50px] lg:h-[109px] text-9xl text-accent">
          <div className=" text-[7px] px-1 py-1 md:text-[14px] lg:text-[14px] md:w-[140px] md:px-4 md:py-3 lg:px-8 lg:py-3 bg-white font-inter">
            No stores selling this <div className=" md:px-3">product near you</div>
          </div>
        </div>
      )
      } 
      
      {/* buttons */}
      <div className="flex my-[13%] gap-2 md:my-5 w-[160px] flex-col justify-between md:w-max items-center md:p-6 md:gap-3" >

        {/* Form */}
        <div className="flex  ">
          <span className=" lg:my-4 md:my-1 w-[28px] md:w-max lg:ml-4 text-[8px] lg:mr-[45px] md:text-[14px] font-light mr-6">
            Form:
          </span>
          <div className=' -ml-2 md:ml-4 lg:ml-2'>
            <Buttons id={id} forms={forms} />
          </div>
        </div>

        {/* strength */}
        <Strength id={id} forms={forms}/>

        {/* packaging */}
        <Packaging id={id} forms={forms}/>
        
      </div>

    </div>
  );
};



const Strength = ({forms,id}) => {
  const Forms = useSelector(selectedForms);
  let Form = Forms[id]
  const strength = Form ? (forms[Form] ) : (forms[Object.keys(forms)[0]] )
  return (
    <div className=" lg:ml-9 lg:mr-[0px] md:mr-[76px] flex md:w-[250px] lg:w-[390px]">
      <span className="lg:my-4 md:my-1 lg:ml-4 lg:mr-5 font-light text-[8px] md:text-[14px]">
        Strength:
      </span>
      <div className=" ml-2 lg:w-[270px] md:w-[200px] md:ml-5 lg:ml-3 -lg:mt-1">
        <Buttons id={id} strength={strength}/>
      </div>
    </div>
  )
}

const Packaging = ({forms,id}) => {
  const Forms = useSelector(selectedForms);
  const Strengths = useSelector(selectedStrength)
  let Form = Forms[id]
  let Strength = Strengths[id]
  const strength = Form ? (forms[Form] ) : (forms[Object.keys(forms)[0]] )
  const packaging = strength[Strength] ? (strength[Strength]) : (strength[Object.keys(strength)[0]])
  return (
    <div className="flex md:gap-2">
      <span className="lg:my-4 md:my-1 lg:ml-4 lg:mr-5 font-light text-[8px] md:text-[14px] ">
       Packaging:
      </span>
      <div className=" lg:-ml-[14px] lg:mt-2">
        <Buttons id={id} packaging={packaging}/>
      </div>
    </div>
  )
}


export default Product;




