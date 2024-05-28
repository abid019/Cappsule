import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllMedicine } from "./MedicineApi";

const initialState = {
    res:[],
    Forms:{},
    str:{},
    package:{},
    value:0
}

export const fetchAllMedicineAsync = createAsyncThunk(
    'Medicine/fetchAllMedicine',
    async (query)=>{
        
        const response = await fetchAllMedicine(query)
        return response.data;
})

export const MedicineConfigSlice = createSlice({
    name:"Medicine",
    initialState,
    reducers:{
        increment: (state,action) => {
            state.value += 1
          },
        setForm: (state, action)=>{
            const {id,form} = action.payload
            // console.log(id);
            // console.log(form)
            state.Forms[id] = form
            
        },
        setStrength: (state, action)=>{
            const {id,stren} = action.payload
            // console.log(id);
            // console.log(stren)
            state.str[id] = stren
            
        },
        setPackaging: (state, action)=>{
            const {id,pack} = action.payload
            // console.log(id);
            // console.log(pack)
            state.package[id] = pack
            
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchAllMedicineAsync.pending,(state,action)=>{
            state.status = 'loading'
        })
        .addCase(fetchAllMedicineAsync.fulfilled,(state,action)=>{
            state.status = 'idle',
            state.res = action.payload.data.saltSuggestions
            state.Forms = {}
            state.package = {}
            state.str = {}
            // state.Forms = [],
            // state.res?.map((form)=>{
            //     let key = Object.keys(form.salt_forms_json)[0]
                
            //     let value = form.salt_forms_json[Object.keys(form.salt_forms_json)[0]]
                
            //     var f = {};
            //     f[key] = value
            //     let obj = {id:form.id,salt:form.salt,Form:f}
            //     // state.Forms.splice(0,state.Forms.length)
                
            //     return (
                    
            //         state.Forms.push(obj)
            // )
            // })
        })
    }
})

export const selectRes = (state) => state.Medicine.res;
export const selectedForms = (state)=>state.Medicine.Forms
export const selectedStrength = (state)=>state.Medicine.str
export const selectedPackage = (state)=>state.Medicine.package
export const {setForm,setStrength,setPackaging} = MedicineConfigSlice.actions
export default MedicineConfigSlice.reducer