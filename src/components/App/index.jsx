import React, { useState  } from "react"; //,useEffect
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import api from "../../api/labs";
import "./App.css";
// import Header from "../Header";
import AddContact from "../AddContact";
// import ContactList from "../ContactList";
// import ContactDetail from "../ContactDetail";
// import EditContact from "../EditContact";
import Login from  "../Login";

function App()  {
   const [contacts, setContacts] = useState([]);

//   //RetrieveContacts
//   const retrieveContacts = async () => {
//     const response = await api.get("http://localhost:8080/contacts/");
//     return response.data;
//   };

  const addContactHandler = async (contact) => {
    contact.phone_numbers = contact.phone_numbers.split(",");
    for (let i = 0; i < contact.phone_numbers.length; i++) {
      contact.phone_numbers[i] = contact.phone_numbers[i].trim();
    }
    console.log(contact);


    const request = {
      ...contact
    };

    const response = await api.post("http://localhost:8080/contacts/", request);
    console.log(response);
    setContacts([...contacts, response.data]);
  };

//   const updateContactHandler = async (contact) => {

//     contact.phone_numbers = contact.phone_numbers.split(",");
//     console.log(contact.phone_numbers);
//     for (let i = 0; i < contact.phone_numbers.length; i++) {
//       contact.phone_numbers[i] = contact.phone_numbers[i].trim();
//     }

//     console.log(contact);

//     const response = await api.put(`http://localhost:8080/contacts/${contact.id}`, contact);
//     const { id } = response.data;
//     setContacts(
//       contacts.map((contact) => {
//         return contact.id === id ? { ...response.data } : contact;
//       })
//     );
//     getAllContacts();
//   };

//   const removeContactHandler = async (id) => {
//     await api.delete(`http://localhost:8080/contacts/${id}`);
//     const newContactList = contacts.filter((contact) => {
//       return contact.id !== id;
//     });

//     setContacts(newContactList);
//   };

//   const getAllContacts = async () => {
//     const allContacts = await retrieveContacts();
//     if (allContacts) setContacts(allContacts);
//   };

//   useEffect(() => {
//     const getAllContacts = async () => {
//         const allContacts = await retrieveContacts();
//         if (allContacts) setContacts(allContacts);
//       };
//     getAllContacts();
//   }, []);
// const data = {"value" : "Contact test"};

const loginHandler = async (credentials) => {
  
  const request = {
    ...credentials
  };
  
  try {
    const response = await api.post('http://localhost:8080/api/auth/login', request, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

  


  return (
    <div className="ui container">
      <Router>
        {/* <Header data={data}/> */}
        <Switch>

          <Route path="/login" 
            render={(props) => (
              <Login {...props} loginHandler = {loginHandler}/>
            )}
          />

          {/* <Route
            path="/"
            exact
            render={(props) => (
              <ContactList
                {...props}
                contacts={contacts}
                getContactId={removeContactHandler}
              />
            )}
          />
       
          

          <Route
            path="/edit"
            render={(props) => (
              <EditContact
                {...props}
                updateContactHandler={updateContactHandler}
              />
            )}
          />

          <Route path="/contact/:id" component={ContactDetail} /> */}
          <Route
            path="/add"
            render={(props) => (
              <AddContact {...props} addContactHandler={addContactHandler} />
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
