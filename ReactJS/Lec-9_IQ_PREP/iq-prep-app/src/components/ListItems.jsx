import { memo } from "react";

const ListItems = ({ items, onDelete}) => {
    // const handleDelete = (event) => {
    //     onDelete(event.target.id);
    // }

    // const fn = () => {
    //     // some logic
    // }

    return (
        <>
           {
              items.map((item, index)=>{
                return <li key={`item-${index+1}`}>
                    {item.name}
                    <button onClick={()=>onDelete(item.id)}>delete</button>
                </li>
              })
            }
        
        </>
    )
}

export default memo(ListItems);