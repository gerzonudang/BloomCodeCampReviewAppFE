import React, {Component} from 'react';


class Dashboard extends Component {
    render() {
        return (
            <div className="ui main">
                <h2>Welcome!</h2>
            </div>
        );
    }
}

export default Dashboard;
// // import { Link } from "react-router-dom";
// // import ContactCard from "./ContactCard";

// // const ContactList = (props) => {
// //   console.log(props);

// //   const deleteConactHandler = (id) => {
// //     props.getContactId(id);
// //   };

// //   const renderContactList = props.contacts.map((contact) => {
// //     return (
// //       <ContactCard
// //         contact={contact}
// //         clickHander={deleteConactHandler}
// //         key={contact.id}
// //       />
// //     );
// //   });
// //   return (
// //     <div className="main">
// //       <h2>
// //         Contact List
// //         <Link to="/add">
// //           <button className="ui button blue right">Add Contact</button>
// //         </Link>
// //       </h2>
// //       <div className="ui celled list">{renderContactList}</div>
// //     </div>
// //   );
// // };
// // export default ContactList;
// const Dashboard = (props) => {
//   console.log(props);
//   alert("Welcome to Dashboard");

//   // const deleteConactHandler = (id) => {
//   //   //props.getContactId(id);
//   // };
//   return (
//       <div >
//         <h2>
//          Welcome!
//         </h2>
//       </div>
//     );
//   // const renderContactList = props.contacts.map((contact) => {
//   //   return (
//   //     <ContactCard
//   //       contact={contact}
//   //       clickHander={deleteConactHandler}
//   //       key={contact.id}
//   //     />
//   //   );
//   // });
//   // return (
//   //   <div className="main">
//   //     <h2>
//   //       Contact List
//   //       <Link to="/add">
//   //         <button className="ui button blue right">Add Contact</button>
//   //       </Link>
//   //     </h2>
//   //     <div className="ui celled list">{renderContactList}</div>
//   //   </div>
//   // );
// };
// export default Dashboard;
