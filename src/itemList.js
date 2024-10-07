import React from 'react'
import List from './List'


const ItemList = ({ items, handleCheck, handleDelete }) => {
    return (
        <ul>
            {items.map((item) => (
                <List
                    item = {item}
                    key = {item.id}
                    handleCheck = {handleCheck}
                    handleDelete = {handleDelete}
                />
            ))}
        </ul>
    )
}

export default ItemList