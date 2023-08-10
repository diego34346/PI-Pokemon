import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getById } from "../../redux/actions";


const DetailPok = () => {
  const dispatch = useDispatch()
  const pokemonFilter = useSelector(state => state.pokemonFilter)
  const { id } = useParams()

  useEffect(() =>{
    dispatch(getById(id))
  },[dispatch, id]) 

  const { name, image, hp, attack, defense, speed, height, weight, types} = pokemonFilter

  return (
    <div>
      <div>
        <h1>{name}</h1>
        
          {types && types.map((type) => (
            <h2 key={type.name}> {type.name}</h2>
          ))}
        
        <div>
            <img src={image} width={200} height={200} alt={name} />
        </div>

        <div className="">
          <section>            
            <ul type="none" className="">
              <li>
                <span className="label">Height</span>
                <div>
                    <span className="value">{height / 10} m.</span>
                </div>
              </li>
              <li>
                <span className="label">Weight</span>
                <div>
                    <span className="value">{weight / 10} kg.</span>
                </div>
              </li>
            </ul>
          </section>
            <section>
              <p className="titleSection">Stats</p>
              <div>
                <div><span>{`Life: ${hp}`}</span></div>
                <progress max='250' value={hp}>{hp}</progress>
              </div>

              <div>
                <div><span>{`Attack: ${attack}`}</span></div>
                <progress max='250' value={attack}>{attack}</progress>
              </div>

              <div>
                <div><span>{`Defense: ${defense}`}</span></div>
                <progress max='250' value={defense}>{defense}</progress>
              </div>

              <div>
                <div><span>{`Speed: ${speed}`}</span></div>
                <progress max='250' value={speed}>{speed}</progress>
              </div>
            </section>
        </div>
      </div>
    </div>
  )  
}

export default DetailPok