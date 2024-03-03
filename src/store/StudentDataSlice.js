import { createSlice } from "@reduxjs/toolkit"

const initialState={
    studentData:[
        { id: '1', name: 'Ram ',lname:'kumar',fname:'Kuldeep',dob:'12-01-2000',gender:'Male', clas: '12th',section:'A', phone: '1234567890',state:'Haryana',city:'Sonipat',roll:'101',religion:'hindu',caste:'BC-A' },

        { id: '2', name: 'Shyam rana', clas: '12th',section:'A', phone: '123453330',fname:'Kuldeep',dob:'12-01-2000',gender:'Male',state:'Haryana',city:'Sonipat',roll:'102' },
        { id: '3', name: 'Anand', clas: '2nd',section:'A', phone: '8976564890',fname:'Kuldeep',dob:'12-01-2000',gender:'Male',state:'Haryana',city:'Sonipat',roll:'103' },
        { id: '4', name: 'Ram', clas: '10th',section:'A', phone: '1234567890',fname:'Kuldeep',dob:'12-01-2000',gender:'Male',state:'Haryana',city:'Sonipat',roll:'104' },
        { id: '5', name: 'Rani', clas: '11th',section:'A', phone: '1234567890',fname:'Kuldeep',dob:'12-01-2000',gender:'Male',state:'Haryana',city:'Sonipat',roll:'105' },
        { id: '6', name: 'Shiva', clas: '5th', phone: '1234567890',fname:'Kuldeep',dob:'12-01-2000',gender:'Male',state:'Haryana',city:'Sonipat',roll:'106' },
        { id: '7', name: 'Sahil', clas: '2st',section:'A', phone: '1234567890',fname:'Kuldeep',dob:'12-01-2000',gender:'Male',state:'Haryana',city:'Sonipat',roll:'107' },
        { id: '8', name: 'Neha', clas: '10th', phone: '1234567890',fname:'Kuldeep',dob:'12-01-2000',gender:'Male',state:'Haryana',city:'Sonipat',roll:'108' },
        { id: '9', name: 'Radha', clas: '12th',section:'A', phone: '1234567890',fname:'Kuldeep',dob:'12-01-2000',gender:'Male',state:'Haryana',city:'Sonipat',roll:'109' },
        { id: '10', name: 'Ram', clas: '1st', phone: '1234567890',fname:'Kuldeep',dob:'12-01-2000',gender:'Male',state:'Haryana',city:'Sonipat',roll:'100' },
        { id: '11', name: 'Ram', clas: '12th',section:'A', phone: '1234567890',fname:'Kuldeep',dob:'12-01-2000',gender:'Male',state:'Haryana',city:'Sonipat',roll:'111' },
        
    ]
}

export const StudentDataSlice=createSlice({
    name:'student',
    initialState,
    reducers:{
            addNewStudent:(state,action)=>{
                const newStd={
                    id      : action.payload.id,
                    name    : action.payload.name,
                    clas    : action.payload.clas,
                    roll    : action.payload.roll,
                    dob     : action.payload.dob,
                    email   : action.payload.email,
                    section : action.payload.section,
                    gender  : action.payload.gender,
                    category: action.payload.category,
                    caste   : action.payload.caste,
                    religion: action.payload.religion,
                    state   : action.payload.state,
                    city    : action.payload.city,
                    phone   : action.payload.phone,
                    admissionDate      : action.payload.admissionDate,
                    fName   : action.payload.fName,
                    mName   : action.payload.mName,
                    fPhone  : action.payload.fPhone,
                    mPhone  : action.payload.mPhone,
                    
                }
                state.studentData.push(newStd);
            }
    }
})

export const {addNewStudent} =StudentDataSlice.actions
export default StudentDataSlice.reducer