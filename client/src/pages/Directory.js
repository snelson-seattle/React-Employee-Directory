import React, { useEffect, useState } from "react";
import API from "../utils/API";
import Hero from "../components/Hero";
import Input from "../components/Input";
import Footer from "../components/Footer";
import Table from "../components/Table";

function Directory(){
    const [users, setUsers] = useState([]);
    const [usersList, setUsersList] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);


    function loadUsers() {
        API.fetchUsers().then(users => {
            setUsers(users);
            setUsersList(users);
        }).catch(err => console.log(err));
    }
    
    function onChange(event){
        let value = event.target.value;
        if(value === ""){
            setUsersList(users);
        }else{
            let filteredUsers = users.filter(user => {
                return (user.name.first.includes(value) || user.name.first.includes(value.toUpperCase()) || user.name.last.includes(value) || user.name.last.includes(value.toUpperCase()));
            });
    
            setUsersList(filteredUsers);
        }
        
    }

    function reverseList(){
        setUsersList([...usersList.reverse()]);
    }

    return (
        <React.Fragment>
            <header className="App-header">
                <Hero>
                <h1>Employee Directory</h1>
                <h3>Use search box to filter results</h3>
                <Input onChange={onChange}/>
                </Hero>        
            </header>
            <Table 
                usersList={usersList}
                handleBtnClick={reverseList}
            />
            <Footer />  
        </React.Fragment>    
    );
}

export default Directory;