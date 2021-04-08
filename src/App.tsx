// with api
import React, {useState, useEffect} from 'react';

interface IUser {
  login: string;
  id: number;
  url: string;
}

export default function App() {
  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    fetch('https://api.github.com/users')
    .then(response => response.json())
    .then(data => setUsers(data));
  }, [])

  return (
    <div>
      <ul>
        {users.map((user: IUser) => (
          <li key={user.id}>{user.login} - {user.id} - {user.url}</li>
        ))}
      </ul>
    </div>
  )
}


// without api
// import React, {useState} from 'react';

// interface IUser {
//   id: number;
//   name: string;
//   email: string;
// }

// export default function App() {
//   const [users, setUsers] = useState<IUser[]>([
//     {
//       id: 1,
//       name: 'Gabriel Rufino',
//       email: 'contato@gabrielrufino.com'
//     },
//     {
//       id: 1,
//       name: 'Darth Vader',
//       email: 'darthvader@starwars.com'
//     },
//     {
//       id: 1,
//       name: 'Luke Skywalker',
//       email: 'lukeskywalker@starwars.com'
//     }
//   ])

//   return (
//     <div>
//       <ul>
//         {users.map(user => (
//           <li key={user.id}>{user.name} - {user.email}</li>
//         ))}
//       </ul>
//     </div>
//   )
// }