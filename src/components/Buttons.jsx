import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectedForms, selectedPackage, selectedStrength, setPackaging, setStrength } from '../redux/MedicineConfigSlice'
import {setForm} from '../redux/MedicineConfigSlice'

const Buttons = ({forms,id,strength,packaging}) => {
    
    const Forms = useSelector(selectedForms)
    const Strengths = useSelector(selectedStrength)
    const Packs = useSelector(selectedPackage)
    const dispatch = useDispatch();
    const Form = Forms[id]
    const Strength = Strengths[id]
    const Pack = Packs[id]

    const [showItems,setShowItems] = useState(4)
    const [showMore,setShowMore] = useState(true)
    const [showLess,setShowLess] = useState(true)
    const area = forms || strength || packaging
    
    
    const moreHandler = ()=>{
        setShowItems(Object.keys(area).length)
        setShowMore(false)
        setShowLess(true)
    }
    const handleLess = ()=>{
        setShowItems(4)
        setShowLess(false)
        setShowMore(true)
    }
    const handleClick = (form=null,stren=null,pack=null)=>{
        if(forms){
            dispatch(setForm({id,form}))         
        }
        if(strength){
            dispatch(setStrength({id,stren}))
        }
        if(packaging){
            
            dispatch(setPackaging({id,pack}))
        }
    }
    useEffect(()=>{
        if(forms){
            let form = Object.keys(forms)[0];
            dispatch(setForm({id,form}))
        }
        else if(strength){
            let stren = Object.keys(strength)[0];
            dispatch(setStrength({id,stren}))
        }
        else if(packaging){
            let pack = Object.keys(packaging)[0]
            dispatch(setPackaging({id,pack}))
        }
    },[forms,strength,packaging])
  return (
    <div role="group" className='my-auto flex flex-wrap w-[100px] md:w-[240px] lg:w-[230px] lg:ml-3 '>
        { Object.keys(area).length > 0 ? ( 
            Object.entries(area).filter((item,index)=> index < showItems).map((elem,index)=>{
                let formcnt = 0
                let strcnt = 0
                let packcnt = 0
                return(

                    //available or not
                    //for forms buttons
                    area === forms && Object.entries(elem[1]).map((s,i)=>{                        
                    let strcnt = 0
                        return(
                            s[1] && Object.entries(s[1]).map((p,ind)=>{                   
                            let packcnt = 0
                            return(
                                p[1] && Object.entries(p[1]).map((store,indi)=>(                                          
                                    store[1] ? packcnt += 1 : packcnt = packcnt
                                )),                                
                                packcnt !== 0 ? strcnt += 1 : strcnt = strcnt
                            )
                            }),                        
                            strcnt !== 0 ? formcnt += 1 : formcnt = formcnt
                        )
                    }),
                    
                    //for strength buttons
                    area === strength && Object.entries(elem[1]).map((p,ind)=>{
                        let packcnt = 0
                        return(
                            p[1] && Object.entries(p[1]).map((store,indi)=>(
                                store[1] ? packcnt += 1 :packcnt = packcnt
                            ))),
                            packcnt !== 0 ? strcnt += 1 : strcnt = strcnt
                        
                    }),
                    //for packaging buttons
                    area === packaging && Object.entries(elem[1]).map((store,indi)=>{
                        return(
                            store[1] ? packcnt += 1 : packcnt = packcnt
                        )
                    }),
                        
                    
                    <button
                        type="button"
                        onClick={()=>handleClick(elem[0],elem[0],elem[0])}
                        key={index}
                        className={`text-[6px] md:text-[12px] lg:text-[11px] mx-[1px] md:mx-[4px] md:my-[4px] lg:mx-1 lg:my-1 md:leading-[100%] lg:leading-[156.02%] font-semibold font-poppins text-accent text-left cursor-pointer py-[5px] px-[5px] bg-white 
                        ${ Form === elem[0] ? 'shadow-[0px_0px_11.54px_rgba(0,_197,_161,_0.4)] border-[1.5px]': 
                        Strength === elem[0] ? 'shadow-[0px_0px_11.54px_rgba(0,_197,_161,_0.4)] border-[1.5px]': 
                        packaging && Pack === elem[0] ? 'shadow-[0px_0px_11.54px_rgba(0,_197,_161,_0.4)] border-[1.5px]': 
                        forms && formcnt == 0 ? ' border-dashed border-darkgray text-darkgray': 
                        strength && strcnt == 0 ? ' border-dashed border-darkgray text-darkgray' : 
                        packaging && packcnt == 0 ? ' border-dashed border-darkgray text-darkgray ' : 
                        'border-[1px] border-gray-500 text-gray-500 ' } rounded-lg border-[1.5px] border-solid border-accent`}
                    >
                        {elem[0]}
                    </button>
                
                )
            }
        )):(<div>" sorry we didn't find any matching result "</div>)}

        {/* more and less */}
        {
            showMore && Object.keys(area).length > 4 ? (
                <button 
                    onClick={moreHandler} 
                    className=" text-[8px] md:text-[12px] lg:text-sm pl-[1px] pt-3 leading-[15.02%] font-bold font-poppins text-steelblue text-left cursor-pointer [border:none] py-[5px] px-[1px] bg-[transparent] rounded-lg flex flex-row items-center justify-center"
                >
                    more..
                </button> ) :
                (<span></span>)
        }
        {
            showLess && showItems > 4 ? 
                (<button 
                        onClick={handleLess} 
                        className="text-sm pl-[2px] pt-3 leading-[156.02%] font-bold font-poppins text-steelblue text-left cursor-pointer [border:none] py-[5px] px-[2px] bg-[transparent] rounded-lg flex flex-row items-center justify-center"
                    >
                        hide..
                </button> ) :
                (<span></span>)
        }
    </div>
  )
}

export default Buttons