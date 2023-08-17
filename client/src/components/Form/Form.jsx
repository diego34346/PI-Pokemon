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

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setInput((state) => ({ ...state, [name]: value }));
  //   setErrors((prevErrors) => ({
  //     ...prevErrors,
  //     [name]: validations({ ...input, [name]: value })[name], // Validar solo el campo actual
  //   }));     
  // };


  const handleSubmit = (event) => {
    event.preventDefault();    
    dispatch(postPok(input));
    // dispatch(getPokemonsDB()) Hago el dispatch al pulsar en el boton My Pokemon
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
      <form action="form" onSubmit={handleSubmit} className={style.contForm}>
        
        <h1>CREATE YOUR POKEMON</h1>

        <div className={style.contData}>
          <div>
            <div className={style.contIE} >
              <input
                type="text"
                name="name"
                onChange={handleInputChange}
                placeholder="Name"
                value={input.name}
                required
                autoComplete="off"            
                />
            {errors.name && <p className={style.errorInput} >{errors.name}</p>}
            </div>

            <div className={style.contIE}>
              <input
                type="number"
                name="hp"
                onChange={handleInputChange}
                value={input.hp}
                placeholder="Life"
                min='0'
                max='250'
                required                    
                />
            {errors.hp && <p className={style.errorInput}>{errors.hp}</p>}
            </div>

            <div className={style.contIE}>
              <input 
                type="number"
                name="attack"
                onChange={handleInputChange}
                value={input.attack}
                placeholder="Attack"
                min='0'
                max='250'
                required            
                />
            {errors.attack && <p className={style.errorInput}>{errors.attack}</p>}
            </div>

            <div className={style.contIE}>
              <input 
                type="number"
                name="defense"
                onChange={handleInputChange}
                value={input.defense}
                placeholder="Defense"
                min='0'
                max='250'
                required            
                />
            {errors.defense && <p className={style.errorInput}>{errors.defense}</p>}
            </div>

            <div className={style.contIE}>
              <input 
                type="number"
                name="speed"
                onChange={handleInputChange}
                value={input.speed}
                placeholder="Speed"
                min='0'
                max='250'
                required            
                />  
            {errors.speed && <p className={style.errorInput}>{errors.speed}</p>}
            </div>

            <div className={style.contIE}>
              <input 
                type="number"
                name="height"
                onChange={handleInputChange}
                value={input.height}
                placeholder="Height"
                min='0'
                max='3000'
                required            
                />
            {errors.height && <p className={style.errorInput}>{errors.height}</p>}
            </div>

            <div className={style.contIE}>
              <input 
                type="number"
                name="weight"
                onChange={handleInputChange}
                value={input.weight}
                placeholder="Weight"
                min='0'
                max='3000'
                required             
                />
            {errors.weight && <p className={style.errorInput}>{errors.weight}</p>}
            </div>
          </div>

          <div>
            <div className={style.contSel} >
              <select 
                name="type1"
                onChange={handleInputChange}
                
                >
                <option value="Type One">Type One</option>
                {allTypes.map((type)=>(
                  <option value={type} key={type} > {type} </option>
                  ))}
              </select>
            </div>
          </div>
          
          <div> 
            <div className={style.contSel}>
              <select 
                name="type2"
                onChange={handleInputChange}
                
                >
                <option value="Type Two">Type Two</option>
                {allTypes.map((type)=>(
                  <option value={type} key={type} > {type} </option>
                  ))}
              </select>
            </div>
          </div>
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
