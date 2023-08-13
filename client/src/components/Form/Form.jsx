import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postPok } from "../../redux/actions";
import validations from "./Validations";
import style from './Form.module.css'

const Form = () => {
  const dispatch = useDispatch();
  const allTypes = useSelector((state) => state.allTypes)
  const [errors, setErrors] = useState({});
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

  const [disabled, setDisabled] = useState(false);  
  useEffect(() => {
    if ( Object.keys(errors).length === 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [errors]);

  const handleInputChange = (event) => {
    setInput((state) => ({...state, [event.target.name]: event.target.value, }));
    setErrors(validations({ ...input, [event.target.name]: event.target.value }));    
  };

  const handleSubmit = (event) => {
    event.preventDefault();    
    dispatch(postPok(input));
    // dispatch(getPokemonsDB())
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

    <div className={style.contForm} >     

      <form action="" onSubmit={handleSubmit}>
      <h1>CREATE YOUR POKEMON</h1>

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
        {errors.name && <p className="error-input">{errors.name}</p>}

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
        {errors.hp && <p className="error-input">{errors.hp}</p>}

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
        {errors.attack && <p className="error-input">{errors.attack}</p>}

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
        {errors.defense && <p className="error-input">{errors.defense}</p>}

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
        {errors.speed && <p className="error-input">{errors.speed}</p>}

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
        {errors.height && <p className="error-input">{errors.height}</p>}

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
        {errors.weight && <p className="error-input">{errors.weight}</p>}

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
          disabled={disabled}
          >CREATE
        </button>

      </form>
    </div>
  );
};

export default Form;
