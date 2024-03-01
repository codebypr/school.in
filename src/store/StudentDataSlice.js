import { createSlice } from "@reduxjs/toolkit"

const initialState={
    studentData:[
        { id: '1', name: 'Ram kumar',fname:'Kuldeep',dob:'12-01-2000',gender:'Male', clas: '12th', phone: '1234567890',state:'Haryana',city:'Sonipat',roll:'101' },
        { id: '2', name: 'Shyam rana', clas: '12th', phone: '123453330',fname:'Kuldeep',dob:'12-01-2000',gender:'Male',state:'Haryana',city:'Sonipat',roll:'102' },
        { id: '3', name: 'Anand', clas: '2nd', phone: '8976564890',fname:'Kuldeep',dob:'12-01-2000',gender:'Male',state:'Haryana',city:'Sonipat',roll:'103' },
        { id: '4', name: 'Ram', clas: '10th', phone: '1234567890',fname:'Kuldeep',dob:'12-01-2000',gender:'Male',state:'Haryana',city:'Sonipat',roll:'104' },
        { id: '5', name: 'Rani', clas: '11th', phone: '1234567890',fname:'Kuldeep',dob:'12-01-2000',gender:'Male',state:'Haryana',city:'Sonipat',roll:'105' },
        { id: '6', name: 'Shiva', clas: '5th', phone: '1234567890',fname:'Kuldeep',dob:'12-01-2000',gender:'Male',state:'Haryana',city:'Sonipat',roll:'106' },
        { id: '7', name: 'Sahil', clas: '2st', phone: '1234567890',fname:'Kuldeep',dob:'12-01-2000',gender:'Male',state:'Haryana',city:'Sonipat',roll:'107' },
        { id: '8', name: 'Neha', clas: '10th', phone: '1234567890',fname:'Kuldeep',dob:'12-01-2000',gender:'Male',state:'Haryana',city:'Sonipat',roll:'108' },
        { id: '9', name: 'Radha', clas: '12th', phone: '1234567890',fname:'Kuldeep',dob:'12-01-2000',gender:'Male',state:'Haryana',city:'Sonipat',roll:'109' },
        { id: '10', name: 'Ram', clas: '1st', phone: '1234567890',fname:'Kuldeep',dob:'12-01-2000',gender:'Male',state:'Haryana',city:'Sonipat',roll:'100' },
        { id: '11', name: 'Ram', clas: '12th', phone: '1234567890',fname:'Kuldeep',dob:'12-01-2000',gender:'Male',state:'Haryana',city:'Sonipat',roll:'111' },
        { id: '12', name: 'Ram', clas: '12th', phone: '1234567890',fname:'Kuldeep',dob:'12-01-2000',gender:'Male',state:'Haryana',city:'Sonipat',roll:'111' },
        { id: '13', name: 'Ram', clas: '12th', phone: '1234567890',fname:'Kuldeep',dob:'12-01-2000',gender:'Male',state:'Haryana',city:'Sonipat',roll:'111' },
        { id: '14', name: 'Ram', clas: '12th', phone: '1234567890',fname:'Kuldeep',dob:'12-01-2000',gender:'Male',state:'Haryana',city:'Sonipat',roll:'111' },
        { id: '15', name: 'Ram', clas: '12th', phone: '1234567890',fname:'Kuldeep',dob:'12-01-2000',gender:'Male',state:'Haryana',city:'Sonipat',roll:'111' },
        { id: '16', name: 'Ram', clas: '12th', phone: '1234567890',fname:'Kuldeep',dob:'12-01-2000',gender:'Male',state:'Haryana',city:'Sonipat',roll:'111' },
        { id: '17', name: 'Ram', clas: '12th', phone: '1234567890',fname:'Kuldeep',dob:'12-01-2000',gender:'Male',state:'Haryana',city:'Sonipat',roll:'111' },
        { id: '18', name: 'Ram', clas: '12th', phone: '1234567890',fname:'Kuldeep',dob:'12-01-2000',gender:'Male',state:'Haryana',city:'Sonipat',roll:'111' },
        { id: '19', name: 'Ram', clas: '12th', phone: '1234567890',fname:'Kuldeep',dob:'12-01-2000',gender:'Male',state:'Haryana',city:'Sonipat',roll:'111' },
        { id: '20', name: 'Ram', clas: '12th', phone: '1234567890',fname:'Kuldeep',dob:'12-01-2000',gender:'Male',state:'Haryana',city:'Sonipat',roll:'111' },
        { id: '21', name: 'Ram', clas: '12th', phone: '1234567890',fname:'Kuldeep',dob:'12-01-2000',gender:'Male',state:'Haryana',city:'Sonipat',roll:'111' },
    ]
}

export const StudentDataSlice=createSlice({
    name:'student',
    initialState,
    reducers:{

    }
})
export default StudentDataSlice.reducer