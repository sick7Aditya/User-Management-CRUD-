import React from 'react'
import { useState } from 'react'
import { PutMapping } from '../ConnectingBackEnd/Axios'
import { useForm } from 'react-hook-form'

function Put() {
    const {register , handleSubmit} = useForm();

    const onSubmit = (data)=>{
        const freshData = {
            ...data,
            subjects : data.subjects.split(",").map(s=>s.trim())
        }

        PutMapping(freshData,freshData.name)
        console.log(freshData);
    };  
  return (
    <div>
        <h3> Put-Mapping Example(Update User..)..... </h3>
         <form onSubmit={handleSubmit(onSubmit)}>
        
            Name:
            <input type="text" {...register("name")} />

            Age:
            <input type="number" {...register("age")} />

            Course:
            <input type="text" {...register("course")} />

            Subjects (comma separated):
            <input type="text" {...register("subjects")} />

            <button type="submit">Submit</button>

        </form>


    </div>
  )
}

export default Put