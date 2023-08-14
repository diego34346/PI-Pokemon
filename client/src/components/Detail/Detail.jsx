import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getById } from "../../redux/actions";
import style from './Detail.module.css'

const DetailPok = () => {
  const dispatch = useDispatch()
  const pokemonFilter = useSelector(state => state.pokemonFilter)
  const { id } = useParams()

  useEffect(() =>{
    dispatch(getById(id))
  },[dispatch, id]) 

  const { name, image, hp, attack, defense, speed, height, weight, types} = pokemonFilter

  return (    
    <div className={style.contDetail}>
      <div></div>
      <div></div>
      <div></div>

      <div className={style.dataPok}>
        <div>
          <h1>{name}</h1>
        </div>

        <div>
          <img src={image} width={200} height={200} alt={name} />
        </div>
        
        <div className={style.types} >
          {types && types.map((type) => (
            <h2 key={type.name} className={style[type.name]} > {type.name}</h2>
            ))}
        </div>
      </div>

      <div className={style.statsPok}>
        <section>            
          <ul type="none" className={style.ul}>
            <li>
              <span><strong>Height: </strong></span>            
              <span>{height / 10} m.</span>              
            </li>
            <li>
              <span><strong>Weight: </strong></span>
              <span>{weight / 10} kg.</span>              
            </li>
          </ul>
        </section>
          <section>
            <div>
              <div><span> <strong>Life:</strong> {hp}</span></div>
              <progress max='250' value={hp}>{hp}</progress>
            </div>

            <div>
              <div><span> <strong>Attack:</strong> {attack}</span></div>
              <progress max='250' value={attack}>{attack}</progress>
            </div>

            <div>
              <div><span> <strong>Defense:</strong> {defense}</span></div>
              <progress max='250' value={defense}>{defense}</progress>
            </div>

            <div>
              <div><span> <strong>Speed:</strong> {speed}</span></div>
              <progress max='250' value={speed}>{speed}</progress>
            </div>
          </section>
      </div>
      <div></div>
      <div></div>
      <div></div>
    </div>    
  )  
}

export default DetailPok