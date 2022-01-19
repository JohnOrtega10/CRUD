import React from 'react';
import './UsersList.styles.css'
const UsersList = ({users, deleteUser,selectUser}) => {
    return (    
        <div className='scroll'>     
            {
                users.map(user=>(
                                <div key={user.id} className='user-container'> 
                                    <div className='info-user'>
                                        <h3>{user.first_name} {user.last_name}</h3>
                                        <p><i className="fas fa-envelope"></i> {user.email}</p>
                                        <p><i className="fas fa-birthday-cake"></i> {user.birthday}</p>
                                    </div>
                                    <div className='buttons'>
                                        <button onClick={()=>deleteUser(user)}><i className="fas fa-trash fa-lg" style={{color:"#BE3144"}}></i></button>
                                        <button onClick={()=>selectUser(user)}><i className="fas fa-pencil-alt fa-lg" style={{color:"#303841"}}></i></button>
                                    </div>
                                    
                                </div>
                                ))
            }
        </div>
    );
};

export default UsersList;