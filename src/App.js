import logo from './logo.svg';
import './App.css';
import Course from './Course';
import { useState } from 'react';

function App() {
    const totalCredit = 0;
    const totalGrade = 0;
    const courses=[];
    const [courseItem, setCourseItem] = useState(courses);


    const onRemove = (id) =>{
      const updateCourse = courseItem.filter((item)=> item.id !== id);
      setCourseItem(updateCourse); 
    }
    const onAdd = () =>{
      const numberofCourse = courseItem.length+1;
      const courseObj = {'id':numberofCourse, 'credit': 4.0, 'grade': 3};
      const newCourseArray = [...courseItem, courseObj]
      setCourseItem(newCourseArray);
    }
    const handleCreditChange = (id) =>{

    }
    const handleGradeChange = (id) =>{
      
    }
  
  return (
    <div className="App">
      <div>
        {
          courseItem.map(item =>{
            return(
              <div>
            
            <div>
            <select  onChange={()=>handleCreditChange(item.id)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
            <select  onChange={()=>handleGradeChange(item.id)}>
            <option value="4">A+</option>
            <option value="3.75">A</option>
            <option value="3.50">A-</option>
            <option value="3.25">B+</option>
            <option value="3">B</option>
            <option value="2.75">B-</option>
            <option value="2.50">C+</option>
            <option value="2.25">C</option>
            <option value="2">D</option>
            </select>
            <button onClick={()=>onRemove(item.id)}>Remove</button>
            </div>
           
             </div>
             )
            
          })
          
        }
         <button onClick={()=>onAdd()}>AddCourse</button>
        <button onClick={()=> setCourseItem([])}>Clear</button>
        <button >Generate Result</button>
      </div>
     
     
    </div>
  );
}

export default App;
