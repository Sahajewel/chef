import PropTypes from 'prop-types';
export default function Sidebar({sidebar,handlePrepaird, prepared,timeCalorie,totalTime, totalCalorie}) {
  
  return (
    <div className=" w-full md:w-1/3">
       <div className='mb-20'>
       <h2 className='text-center font-bold text-2xl border-b-2 pb-4'>cooking now:{sidebar.length}</h2>
       {
        sidebar.map((side)=>(
            <div key={side.recipe_id} className="overflow-x-auto ">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Preparation Time</th>
                        <th>Calories</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                    <tr>
                        <th>{side.recipe_id}</th>
                        <td>{side.recipe_name}</td>
                        <td>{side.preparing_time}</td>
                        <td>{side.calories}</td>
                        <td> <button onClick={()=>{handlePrepaird(side.recipe_id)
                            timeCalorie(side.preparing_time,side.calories)}
                        }  className="btn bg-green-500 rounded-xl text-purple-500 text-sm ">Preparing Time</button></td>
                    </tr>
                 
                  
                    </tbody>
                </table>
            </div>
        ))
       }
       </div>
       
     <div>
        <h2 className='text-center font-bold text-2xl border-b-2 pb-4'>cooked:{prepared.length}</h2>
        {
           
           prepared.map((recipe)=>(
         <div key={recipe.recipe_id} className="overflow-x-auto mt-20">
         <table key={recipe.recipe_id} className="table">
         {/* head */}
         <thead>
         <tr>
             <th></th>
             <th>Name</th>
             <th>Preparation Time</th>
             <th>Calories</th>
             
         </tr>
         </thead>
         <tbody>
         {/* row 1 */}
         <tr>
             <th>{recipe.recipe_id}</th>
             <td>{recipe.recipe_name}</td>
             <td>{recipe.preparing_time}</td>
             <td>{recipe.calories}</td>
            
         </tr>
         <tr>
             <th></th>
             <td></td>
             <td>Total time ={totalTime}</td>
             <td>Total Calorie = {totalCalorie}</td>
            
         </tr>
       
       
         </tbody>
     </table>
    
     </div>
     ))

    }
   
     </div>
       
    </div>
  )
}
Sidebar.propTypes = {
    sidebar: PropTypes.array.isRequired,
    handlePrepaird : PropTypes.func.isRequired,
    prepared: PropTypes.array.isRequired
}
