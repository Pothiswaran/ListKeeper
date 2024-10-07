import React from 'react';
import ItemList from './itemList';


const Content = ({items , handleCheck , handleDelete}) => {

    return (
        <>
            <h1 style={(items.length) ? { display: 'none' } :
                { display: 'block', textAlign: 'center' }}>your list is empty</h1>
            <ItemList
            items = {items}
            handleCheck = {handleCheck}
            handleDelete = {handleDelete}
            />
        </>
    )
}

export default Content;