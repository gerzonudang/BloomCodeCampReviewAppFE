import React, {Component} from 'react';
import { Link } from "react-router-dom";
import './Dashboard.css';

class Dashboard extends Component {
    
    render() {
        return (
            <div className="dashboard-wrapper">
                <div className="dashboard-header">
                    <h2> Welcome to the Assigment Review App!</h2>
                </div>
                <div className="cards-container">
                    <div className="card"></div>
                    <div className="card"></div>
                    <div className="card"></div>
                </div>
                <div className="cta">
                  
                {this.props.userType === 'role_student' && <Link to="/learner">Go to Dashboard</Link>}
                {this.props.userType === 'role_reviewer' && <Link to="/reviewer">Go to Dashboard</Link>}          
                </div>
                <div className="footer">
                    <p>© 2021 - All Rights Reserved</p>
                </div>
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
