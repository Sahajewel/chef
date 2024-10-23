import { useState } from "react"
import Banner from "./components/Banner"
import Header from "./components/Header"
import Recipe from "./Recipe"
import Sidebar from "./Sidebar"

function App() {
  const [sidebar, setSidebar] = useState([])
  const [prepared, setPrepared] = useState([])
  const [totalTime, setTotalTime] = useState(0)
  const [totalCalorie, setTotalCalorie] = useState(0)
 const handleCookButton = (recipe)=>{
  const isExit =  sidebar.find((findSide)=>findSide.recipe_id === recipe.recipe_id)
   if(!isExit){
     const newSidebar = [...sidebar,recipe]
     setSidebar(newSidebar)
   }
   else{
    alert("Cooked now")
   }
 }

const handlePrepaird = (id)=>{
const deleteRecipe = sidebar.find((recipe)=>recipe.recipe_id=== id)
const updatedRecipe = sidebar.filter((recipe)=> recipe.recipe_id !== id)
setSidebar(updatedRecipe)
setPrepared([...prepared, deleteRecipe])

  
}
const timeCalorie = (time, calorie)=>{
  setTotalTime(totalTime + time)
  setTotalCalorie(totalCalorie + calorie)
}

  return (
    <>
     
      <Header></Header>
      <Banner></Banner>
     <div className="flex flex-col md:flex-row w-10/12 mx-auto gap-4">
     <Recipe handleCookButton={handleCookButton} ></Recipe>
     <Sidebar sidebar={sidebar} handlePrepaird={handlePrepaird} prepared={prepared} timeCalorie={timeCalorie} totalTime={totalTime} totalCalorie={totalCalorie}></Sidebar>
     </div>
      
    </>
  )
}

export default App
