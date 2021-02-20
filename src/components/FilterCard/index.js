import React from "react";
import * as S from "./style";

import filter from '../../assets/filter.png'
function FilterCard( { title, activated}) {
    return (
        <S.Container activated ={activated}>
            <img src={filter} alt="filter"/>
            <span>{title}</span>
        </S.Container>
    )
};

export default FilterCard;