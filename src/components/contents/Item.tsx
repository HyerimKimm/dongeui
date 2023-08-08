import React from 'react';
import { ItemProps, ItemContainerProps, ItemImgProps, ItemNameTypoProps } from '../../types/ItemProps';
import { styled } from 'styled-components';
import { BodyTextTypo } from '../../atoms/Typography';
import { useSelector } from 'react-redux';
import { RootState } from '../../types/ReducerReturn';
import token from '../../tokens/tokens.json'

const { smallText, bodyText } = token.global;

export const ItemContainer = styled.section<ItemContainerProps>`
    margin: 0px 8px;
    width: ${(props)=>props.browserWidth>800?'250px':'200px'};
    height: ${(props)=>props.browserWidth>800?'300px':'250px'};
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    cursor: pointer;
`
export const ItemImg = styled.img<ItemImgProps>`
    width: ${(props)=>props.browserWidth>800?'220px':'150px'};
    height: ${(props)=>props.browserWidth>800?'220px':'150px'};
    object-fit:contain;
    border-radius: 8px;
    border: 2px solid rgba(0,0,0,0.1);
`
export const ItemNameTypo = styled(BodyTextTypo)<ItemNameTypoProps>`
    font-size: ${(props)=>props.browserWidth>800?`${smallText.value}px`:`${bodyText.value}px`};
`

export const Item = ({id, name, imageUrl}:ItemProps) => {
    const deviceWidth = useSelector((state:RootState)=>state.browserWidthReducer.width);

    return (
        <ItemContainer browserWidth={deviceWidth}>
            <ItemImg browserWidth={deviceWidth} alt='제품이미지' src={imageUrl}/>
            <BodyTextTypo>{name}</BodyTextTypo>
        </ItemContainer>
    );
};
