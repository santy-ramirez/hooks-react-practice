import { useEffect, memo } from 'react';

function ItemUsers(props) {
    const { user } = props
    useEffect(() => {
        console.log("Item render")
    })
    return (
        <li> {user.name} </li>
    );
}

export default memo(ItemUsers);