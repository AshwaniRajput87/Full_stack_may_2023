import { useCallback, useState } from "react";
import ListItems from "./ListItems";

const UseCallbackConcept = () => {

    // need a list of data
    // cache the whole data -> useMemo
    // for deleting the list item, i need a method to
    //     perform the deleting an item-> has to be cached via useCallback() hook 
    
    const [items, setItems] = useState(
        [
            {id:'1', name:'item 1'},
            {id:'2', name:'item 2'},
            {id:'3', name:'item 3'},
        ]
    );

    const deletingItem = (itemId) => {
        setItems(prevItems => prevItems.filter(item=>item.id !== itemId));
    }

    const handleDelete = useCallback(
        (itemId) => {
            deletingItem(itemId);
        }, [setItems]
    );

    return (
        <>
           <h2>Your list items</h2>
           <ListItems items={items} onDelete={handleDelete}/>
        </>
    )

}

export default UseCallbackConcept;