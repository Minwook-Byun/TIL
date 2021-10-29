import React, {useRef, useState} from 'react';
import CreateUser from './CreateUser';
import UserList from './UserList';

function App() {
 const [inputs, setInputs] = useState({
   username:'',
   email:'',
 });

 const {username, email} = inputs; //미리 추출

 const onChange = e =>{
  //  event 를 
   const {name, value} =e.target;
  //  여기서 가져오고 
   setInputs({
     ...inputs,
     [name]:value,
    //  위에서 가져온 name을 (뭐든지 상관 없이) value로 덮어 쓰겠다.
   })
 }

  const [users, setUsers]= useState([
    {
        id:1,
        username: 'velopert',
        email: 'public.velopert@gmail.com'
    },
    {
        id:2,
        username: 'booram',
        email: 'booram.velopert@gmail.com'
    },
    {
        id:3,
        username: 'main',
        email: 'maiiin.velopert@gmail.com'
    }

]);

const nextId = useRef(4);

const onCreate = () => {
  const user ={
    id: nextId.current,
    ...inputs,
  };

  setUsers([...users,user]);
  setUsers(users.concat(user));
  setInputs({
    username: '',
    email:'',
  });

  nextId.current += 1 
}
// setUsers에서 배열을 복사하는 두 가지 방법 
// 1.(...users,user)을 하는 방법과
// 2. concat을 사용하는 2가지 방법으로 배열을 복사할 수 있다. 
  return (
  <>
    <CreateUser username={username}
    email={email}
    onChange={onChange}
    oncCreate={onCreate}/>  
    <UserList users={users}></UserList>
  </>
  );
}

export default App;


