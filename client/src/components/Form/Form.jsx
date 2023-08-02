import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postPok, getPokemons } from "../../redux/actions";

const Form = () => {
  const dispatch = useDispatch();
  const allTypes = useSelector((state) => state.allTypes)
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
    setInput((state) => ({
      ...state,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(postPok(input));
    dispatch(getPokemons());
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
            placeholder="name"
            value={input.name}
            required
            autoComplete="off"
            className=""
          />
        </div>

        <div>
          <input
            type="number"
            name="hp"
            onChange={handleInputChange}
            value={input.hp}
            placeholder="Life"
            min='0'
            max='255'
            required
            className=""        
          />
        </div>

        <div>
          <input 
            type="number"
            name="attack"
            onChange={handleInputChange}
            value={input.attack}
            placeholder="Attack"
            min='0'
            max='255'
            required
            className=""
          />
        </div>

        <div>
          <input 
            type="number"
            name="defense"
            onChange={handleInputChange}
            value={input.defense}
            placeholder="Defense"
            min='0'
            max='255'
            required
            className=""
          />
        </div>

        <div>
          <input 
            type="number"
            name="speed"
            onChange={handleInputChange}
            value={input.speed}
            placeholder="Speed"
            min='0'
            max='255'
            required
            className=""
          />
        </div>

        <div>
          <input 
            type="number"
            name="height"
            onChange={handleInputChange}
            value={input.height}
            placeholder="Height"
            min='0'
            max='255'
            required
            className=""
          />
        </div>

        <div>
          <input 
            type="number"
            name="weight"
            onChange={handleInputChange}
            value={input.weight}
            placeholder="Weight"
            min='0'
            max='255'
            required
            className="" 
          />
        </div>

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
              <option value={type} key={type} className="capitalizeText" > {type} </option>
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
