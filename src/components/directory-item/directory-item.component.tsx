import React from 'react';
import { useNavigate } from 'react-router-dom'

import {BackgroundImage, Body, DirectoryItemContainer,} from './directory-item.styles';
import { CategoriesType } from '../directories/directories.component';

type DirectoryItemProps = {
    category: CategoriesType;
}

const DirectoryItem = ({category}: DirectoryItemProps) => {
    const {title, imageUrl, route} = category;

    const Navigate = useNavigate();

    const onNavigateHandler = () => Navigate(route)
    return ( 
        <DirectoryItemContainer onClick={onNavigateHandler}>
            <BackgroundImage imageUrl={imageUrl} />
            <Body>
            <h2>{title}</h2>
            <p>Shop Now</p>
            </Body>
        </DirectoryItemContainer>
     );
}

export default DirectoryItem ;