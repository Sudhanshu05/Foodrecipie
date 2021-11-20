
import './App.css';
import {useState} from 'react' ;
import Axios from 'axios';
import Recipetile from './recipe-tile/Recipetile';


function App() {
  const YOUR_APP_ID ="b10fca4f";
  const YOUR_APP_KEY =  "e76bd28afb95a1d60435a0080925678d"	;
  const [recipes ,setRecipes] = useState([]);
  const [queery, setQueery] = useState(" ");
  const [healthLabel, sethealth] = useState("vegan")
  const url = ` https://api.edamam.com/search?q=${queery}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabel}`;
  const getRecipeInfo = async()=>{
    var result  = await Axios.get(url);
    setRecipes(result.data.hits);
    console.log(result.data.hits);
  };
  const onSubmit=(e)=>{
    e.preventDefult();//this will prevent the page from reloading
    getRecipeInfo();
  }  
  return (
    <div className="app">
      <h1 onClick={getRecipeInfo}>Food Recipe Hub</h1>
      <form className="app_searchForm" onSubmit={onSubmit}>
        <input type='text' 
        value={queery}
        placeholder="Type the Ingredient" 
        className="app__input" 
        autoComplete="off"
        onChange={(e)=>{setQueery(e.target.value)}}/>
        <select className="app__heathLabels">
        <option value="vegan" onChange={()=>sethealth("vegan")}>vegan</option>
        <option value="vegetarian" onChange={()=>sethealth("vegetarian")}>vegetarian</option>
        <option value="low-sugar" onChange={(e)=>sethealth("low-sugar")}>low-sugar</option>
        <option value="dairy-free" onChange={(e)=>sethealth("dairy-free")}>dairy-free</option>
        <option value="immuno-supportive" onChange={(e)=>sethealth("immuno-supportive")}>immuno-supportive</option>
        <option value="wheat-free" onChange={()=>sethealth("wheat-free")}>wheat-free</option>

      </select>
      <input type="submit" value="Get Recipe" className="app__submit" />
      </form>
      <div className="app_recipes">
          {recipes.map((recipe)=>{
            return <Recipetile recipe={recipe}/>
          })}
      </div>
      
    </div>
  );
}

export default App;
