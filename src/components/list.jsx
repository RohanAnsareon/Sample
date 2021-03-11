import React from 'react';
import ListItem from "./listItem";

const List = ({items}) => {
    return (
        <div>
            {items.map((value, index) => (
                <ListItem item={value}/>
            ))}
        </div>
    )
}

export default List;
