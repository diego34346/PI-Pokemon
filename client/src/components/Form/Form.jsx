import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postPok, getPokemons} from "../../redux/actions";
import validations from "./Validations";

const Form = () => {
  const dispatch = useDispatch();
  const allTypes = useSelector((state) => state.allTypes)
  const [validate, setValidate] = useState({});
  const [input, setInput] = useState({
    name: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    weight: "",
    height: "",
    type1: "",
    type2: "",
  });

  const handleInputChange = (event) => {
    setInput((state) => ({...state, [event.target.name]: event.target.value, }));
    setValidate(validations({ ...input, [event.target.name]: event.target.value }));    
  };

  const handleSubmit = (event) => {
    event.preventDefault();    
    dispatch(postPok(input));
    dispatch(getPokemons())
    setInput({
      name: "",
      hp: "",
      attack: "",
      defense: "",
      speed: "",
      weight: "",
      height: "",
      type1: "",
      type2: "",
    })    
  };

  return (
    <div>
      <h1>CREATE YOUR POKEMON</h1>

      <form action="">

        <div>
          <input
            type="text"
            name="name"
            onChange={handleInputChange}
            placeholder="Name"
            value={input.name}
            required
            autoComplete="off"
            className=""
          />
        </div>
        {validate.name && <p className="error-input">{validate.name}</p>}

        <div>
          <input
            type="number"
            name="hp"
            onChange={handleInputChange}
            value={input.hp}
            placeholder="Life"
            min='0'
            max='150'
            required
            className=""        
          />
        </div>
        {validate.hp && <p className="error-input">{validate.hp}</p>}

        <div>
          <input 
            type="number"
            name="attack"
            onChange={handleInputChange}
            value={input.attack}
            placeholder="Attack"
            min='0'
            max='150'
            required
            className=""
          />
        </div>
        {validate.attack && <p className="error-input">{validate.attack}</p>}

        <div>
          <input 
            type="number"
            name="defense"
            onChange={handleInputChange}
            value={input.defense}
            placeholder="Defense"
            min='0'
            max='150'
            required
            className=""
          />
        </div>
        {validate.defense && <p className="error-input">{validate.defense}</p>}

        <div>
          <input 
            type="number"
            name="speed"
            onChange={handleInputChange}
            value={input.speed}
            placeholder="Speed"
            min='0'
            max='150'
            required
            className=""
          />  
        </div>
        {validate.speed && <p className="error-input">{validate.speed}</p>}

        <div>
          <input 
            type="number"
            name="height"
            onChange={handleInputChange}
            value={input.height}
            placeholder="Height"
            min='0'
            max='3000'
            required
            className=""
          />
        </div>
        {validate.height && <p className="error-input">{validate.height}</p>}

        <div>
          <input 
            type="number"
            name="weight"
            onChange={handleInputChange}
            value={input.weight}
            placeholder="Weight"
            min='0'
            max='3000'
            required
            className="" 
          />
        </div>
        {validate.weight && <p className="error-input">{validate.weight}</p>}

        <div>
          <select 
            name="type1"
            onChange={handleInputChange}
            className=""
          >
            <option value="Type One">Type One</option>
            {allTypes.map((type)=>(
              <option value={type} key={type} className="" > {type} </option>
            ))}
          </select>
        </div>


        <div>
          <select 
            name="type2"
            onChange={handleInputChange}
            className=""
          >
            <option value="Type Two">Type Two</option>
            {allTypes.map((type)=>(
              <option value={type} key={type} className="" > {type} </option>
            ))}
          </select>
        </div>


        <button 
          type="submit" 
          onClick={handleSubmit} 
          >CREATE</button>

      </form>
    </div>
  );
};

export default Form;
