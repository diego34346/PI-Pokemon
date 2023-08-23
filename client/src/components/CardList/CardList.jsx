import React from "react";
import Search from "../Search/Search";
import Pagination from "../Pagination/Pagination";
import { useEffect, useState } from "react";
import { getTypes } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import style from './CardList.module.css'


const CardList = ({ pokCardList }) => {
  const [currentPok, setCurrentPok] = useState(pokCardList); 
  const dispatch = useDispatch();
  const allTypes = useSelector((state) => state.allTypes);

  useEffect(() => {
    if(allTypes.length === 0){
      dispatch(getTypes())
    }
  }, [dispatch, allTypes]);

  return (
    <div>
      <div className={style.contSearch} >
        <Search setCurrentPok={setCurrentPok}/>
      </div>

      <div>        
      <Pagination pokCardList={currentPok} setCurrentPok={setCurrentPok} />
      </div>
      
    </div>
  );
};

export default CardList;
