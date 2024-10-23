import { useState } from "react";
import PropTypes from 'prop-types';

export default function Recipe({handleCookButton}) {
    const [recipes, setRecipes] = useState([])
    useState(()=>{
        fetch('recipe.json')
        .then((res)=>res.json())
        .then((data)=>setRecipes(data))
       
    },[])

  return (
    <div className="mt-6 w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-5">
      {
      recipes.map((recipe)=>(
        
        <div key={recipe.recipe_id} className="card bg-base-100  border-2">
           
            <figure className="p-5">
                <img className="rounded-lg" src={recipe.recipe_image} alt="" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{recipe.recipe_name}</h2>
                <p>{recipe.short_description}</p>
               <ul>
                {
                    recipe.ingredients.map((item,index)=><li key={index}>{item}</li>)
                }
               </ul>
               <div className="flex justify-between">
                 <div className="flex items-center gap-3">
                 <i className="fa-regular fa-clock text-xl mr-4"></i>
                    <p>{recipe.preparing_time}Minutes</p>
                 </div>
                 <div className="flex items-center">
                 <i className="fa-solid fa-fire-flame-curved text-xl mr-4"></i>
                    <p>{recipe.calories}Calories</p>
                 </div>
               </div>
                 
                          
        
             
                <div className="card-actions mt-6">
                <button onClick={()=>handleCookButton(recipe)} className="btn bg-green-500 rounded-xl text-purple-500 text-lg ">Want To Cook</button>
                </div>
              </div>
        </div>
      ))
      }
      
    </div>
  )
}

Recipe.propTypes = {
    handleCookButton : PropTypes.func.isRequired
}