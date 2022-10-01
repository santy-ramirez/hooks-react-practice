import { useEffect, memo } from 'react';
import ItemUsers from './ItemUsers';

function ListUsers(props) {
    const { users } = props

    useEffect(() => {
        console.log("list render")
    })
    return (

        <ul>
            {
                users.map(u => <ItemUsers key={u.id} user={u} />)

            }
        </ul>
    );
}

export default memo(ListUsers);