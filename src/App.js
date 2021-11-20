
import './App.css';
import {useState} from 'react' ;
import Axios from 'axios';
import Recipetile from './recipe-tile/Recipetile';
import './recipe-tile/style.css';


function App() {
  const YOUR_APP_ID ="b10fca4f";
  const YOUR_APP_KEY =  "e76bd28afb95a1d60435a0080925678d"	;
  const [recipes ,setRecipes] = useState([]);
  const [query, setQuery] = useState(" ");
  const [healthLabel,  setHealthLabel] = useState("vegan")
  const url = ` https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabel}`;
  const getRecipeInfo = async()=>{
    var result = await Axios.get(url);
    setRecipes(result.data.hits);
    console.log(result.data.hits);
  };
  const onSubmit=(e)=>{
    e.preventDefult();//this will prevent the page from reloading
    getRecipeInfo();
  }  
  return (
    <div className="app">
      <h1>
        <u >Food Recipe Hub</u>🥗
      </h1>
      <h2>
        {/* <u onClick={getRecipeInfo}>Get the Food Recipe </u> */}
      </h2>
      <form className="app__searchForm" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Type the Ingredient"
          autoComplete="Off"
          className="app__input"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <select className="app__healthLabels">
          <option
            value="vegan"
            onClick={() => {
              setHealthLabel("vegan");
            }}
          >
            vegan
          </option>
          <option
            value="vegetarian"
            onClick={() => {
              setHealthLabel("vegetarian");
            }}
          >
            vegetarian
          </option>
          <option
            value="low-sugar"
            onClick={() => {
              setHealthLabel("low-sugar");
            }}
          >
            low-sugar
          </option>
          <option
            value="dairy-free"
            onClick={() => {
              setHealthLabel("dairy-free");
            }}
          >
            dairy-free
          </option>
          <option
            value=" immuno-supportive "
            onClick={() => {
              setHealthLabel(" immuno-supportive ");
            }}
          >
            immuno-supportive
          </option>
          <option
            value="wheat-free"
            onClick={() => {
              setHealthLabel("wheat-free");
            }}
          >
            wheat-free
          </option>
        </select>
        <button type ='button' className="app__submit" onClick={getRecipeInfo} >Get recipie </button>
          

      </form>
      <div className="app__recipes">
        {recipes.map((recipe) => {
          return <Recipetile recipe={recipe} />;
        })}
      </div>
    </div>
  );
}

export default App;
