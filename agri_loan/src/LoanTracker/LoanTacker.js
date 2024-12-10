// import React, { useEffect, useState } from 'react';
// import Navbar from '../Navbar/Navbbar'; 
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// import './LoanTracker.css';

// const LoanTacker = () => {
//   const [applications, setApplications] = useState([]);
//   const [activeApplication, setActiveApplication] = useState(null);
//   const navigate = useNavigate();
//   const fetchLoggedInUserId = async () => {
//     try {
//       const response2 = await axios.get('http://localhost:8080/data/getallbyuser');
//       const approvedApplications = response2.data.filter(app => app.loanStatus === 'Approved');
//       setApplications(approvedApplications);
//       console.log(approvedApplications);
//     } catch (error) {
//       console.error('Error fetching logged-in user:', error);
//     }
//   };

//   useEffect(() => {
//     fetchLoggedInUserId();
//   }, []);

  
// const handlePayNow = (dataId) => {
//   navigate('/payment', { state: {dataId } });
//   };

//   const handleViewRepaymentSchedule = (applicationId) => {
//     setActiveApplication(prevId => (prevId === applicationId ? null : applicationId));
//   };

//   const renderRepaymentSchedule = (repaymentModels) => {
//     return (
//       <tbody>
//         {repaymentModels.map((model, index) => (
//           <tr key={index}>
//             <td>{model.date}</td>
//             <td>{model.amount}</td>
//             <td>{model.paymentStatus ? 'Paid' : 'Not Paid'}</td>
//           </tr>
//         ))}
//       </tbody>
//     );
//   };




//   return (
//     <>
//       <Navbar/>
//       <div className='loan-monitoring-page'>
//         <div className='loan-monitoring-container'>
//           <div className='loan-list-wrapper'>
//             {applications.length === 0 ? (
//               <p className='no-loans-message'>No approved applications.</p>
//             ) : (
//               <div>
//                 <h2>Keep track of your loans...</h2>
//                 <table className='loan-table'>
//                   <thead>
//                     <tr>
//                       <th>Application Id</th>
//                       <th>Name</th>
//                       <th>Loan Type</th>
//                       <th>Loan Amount</th>
//                       <th>Date Applied</th>
//                       <th>Next Repayment Date</th>
//                       <th>Repayment Amount</th>
//                       <th>Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {applications.map((app) => (
//                       <React.Fragment key={app.id}>
//                         <tr>
//                           <td>{app.dataId}</td>
//                           <td>{app.firstName}</td>
//                           <td>{app.loanType}</td>
//                           <td>{app.loanAmount}</td>
//                           <td>{app.submittedAt}</td>
//                           <td>
//                             {app.repaymentModels && app.repaymentModels.length > 0 
//                               ? app.repaymentModels[0].date 
//                               : 'N/A'}
//                           </td>
//                           <td>
//                             {app.repaymentModels && app.repaymentModels.length > 0 
//                               ? app.repaymentModels[0].amount 
//                               : 'N/A'}
//                           </td>
//                           <td>
//                             <button 
//                               className='pay-now-btn' 
//                               onClick={() => handlePayNow(app.id)}
//                             >
//                               Pay Now
//                             </button>
//                             <button 
//                               className='view-schedule-btn' 
//                               onClick={() => handleViewRepaymentSchedule(app.id)}
//                             >
//                               {activeApplication === app.id ? 'Hide Repayment Schedule' : 'View Repayment Schedule'}
//                             </button>
//                           </td>
//                         </tr>
//                         {activeApplication === app.id && app.repaymentModels && (
//                           <tr>
//                             <td colSpan="8">
//                               <table className='repayment-schedule-table'>
//                                 <thead>
//                                   <tr>
//                                     <th>Repayment Date</th>
//                                     <th>Repayment Amount</th>
//                                     <th>Payment Status</th>
//                                   </tr>
//                                 </thead>
//                                 {renderRepaymentSchedule(app.repaymentModels)}
//                               </table>
//                             </td>
//                           </tr>
//                         )}
//                       </React.Fragment>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );

// }

// export default LoanTacker;
// import React, { useEffect, useState } from 'react';
// import Navbar from '../Navbar/Navbbar'; 
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './LoanTracker.css';

// const LoanTracker = () => {
//   const [applications, setApplications] = useState([]);
//   const [activeApplication, setActiveApplication] = useState(null);
//   const navigate = useNavigate();

//   const fetchLoggedInUserId = async () => {
//     try {
//       const response2 = await axios.get('http://localhost:8080/data/getallbyuser');
//       const approvedApplications = response2.data.filter(app => app.loanStatus === 'Approved');
//       setApplications(approvedApplications);
//       console.log(approvedApplications);
//     } catch (error) {
//       console.error('Error fetching logged-in user:', error);
//     }
//   };

//   useEffect(() => {
//     fetchLoggedInUserId();
//   }, []);

//   const handlePayNow = (dataId) => {
//     navigate('/payment', { state: { dataId } });
//   };

//   const handleViewRepaymentSchedule = (applicationId) => {
//     setActiveApplication(prevId => (prevId === applicationId ? null : applicationId));
//   };

//   const renderRepaymentSchedule = (repaymentModels) => {
//     return (
//       <div className="repayment-schedule">
//         {repaymentModels.map((model, index) => (
//           <div key={index} className="repayment-item">
//             <div><strong>Repayment Date:</strong> {model.date}</div>
//             <div><strong>Amount:</strong> {model.amount}</div>
//             <div><strong>Status:</strong> {model.paymentStatus ? 'Paid' : 'Not Paid'}</div>
//           </div>
//         ))}
//       </div>
//     );
//   };

//   return (
//     <>
//       <Navbar />
//       <div className='loan-monitoring-page'>
//         <div className='loan-monitoring-container'>
//           {applications.length === 0 ? (
//             <p className='no-loans-message'>No approved applications.</p>
//           ) : (
//             <div className='loan-card-container'>
//               <h2>Keep track of your loans...</h2>
//               {applications.map((app) => (
//                 <div key={app.id} className='loan-card'>
//                   <div className='loan-card-header'>
//                     <h3>{app.loanType}</h3>
//                     <p><strong>Application Id:</strong> {app.dataId}</p>
//                     <p><strong>Name:</strong> {app.firstName}</p>
//                   </div>
//                   <div className='loan-card-body'>
//                     <p><strong>Loan Amount:</strong> {app.loanAmount}</p>
//                     <p><strong>Date Applied:</strong> {app.submittedAt}</p>
//                     <p><strong>Next Repayment Date:</strong> {app.repaymentModels && app.repaymentModels.length > 0 ? app.repaymentModels[0].date : 'N/A'}</p>
//                     <p><strong>Repayment Amount:</strong> {app.repaymentModels && app.repaymentModels.length > 0 ? app.repaymentModels[0].amount : 'N/A'}</p>
//                   </div>
//                   <div className='loan-card-actions'>
//                     <button className='pay-now-btn' onClick={() => handlePayNow(app.id)}>Pay Now</button>
//                     <button className='view-schedule-btn' onClick={() => handleViewRepaymentSchedule(app.id)}>
//                       {activeApplication === app.id ? 'Hide Repayment Schedule' : 'View Repayment Schedule'}
//                     </button>
//                   </div>
//                   {activeApplication === app.id && app.repaymentModels && (
//                     <div className='repayment-schedule-wrapper'>
//                       {renderRepaymentSchedule(app.repaymentModels)}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }

// export default LoanTracker;

import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbbar'; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './LoanTracker.css';
import Footer from '../Footer/Footer';

const LoanTracker = () => {
  const [applications, setApplications] = useState([]);
  const [activeApplication, setActiveApplication] = useState(null);
  const navigate = useNavigate();

  // Fetch approved loan applications for the logged-in user
  const fetchLoggedInUserId = async () => {
    try {
      const response2 = await axios.get('http://localhost:8080/data/getallbyuser');
      const approvedApplications = response2.data.filter(app => app.loanStatus === 'Approved');
      setApplications(approvedApplications);
    } catch (error) {
      console.error('Error fetching logged-in user:', error);
    }
  };

  useEffect(() => {
    fetchLoggedInUserId();
  }, []);

  // Handle payment button click
  const handlePayNow = (dataId) => {
    navigate('/payment', { state: { dataId } });
  };

  // Toggle repayment schedule visibility for a specific application
  const handleViewRepaymentSchedule = (applicationId) => {
    setActiveApplication(prevId => (prevId === applicationId ? null : applicationId));
  };

  // Render the repayment schedule for a specific loan application
  const renderRepaymentSchedule = (repaymentModels) => {
    return (
      <div className="repayment-schedule">
        {repaymentModels.map((model, index) => (
          <div key={index} className="repayment-item">
            <div><strong>Repayment Date:</strong> {model.date}</div>
            <div><strong>Amount:</strong> {model.amount}</div>
            <div><strong>Status:</strong> {model.paymentStatus ? 'Paid' : 'Not Paid'}</div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <Navbar />
      <div className='loan-monitoring-page'>
        <div className='loan-monitoring-container'>
          {applications.length === 0 ? (
            <p className='no-loans-message'>No approved applications.</p>
          ) : (
            <div className='loan-card-container'>
              <h2>Keep track of your loans...</h2>
              {applications.map((app) => (
                
                <div key={app.id} className='loan-card '>
                  <div className='loan-card-header'>
                    <h3>{app.loanType}</h3>
                    <p><strong>Application Id:</strong> {app.dataId}</p>
                    <p><strong>Name:</strong> {app.firstName}</p>
                  </div>
                  <div className='loan-card-body'>
                    <p><strong>Loan Amount:</strong> {app.loanAmount}</p>
                    <p><strong>Date Applied:</strong> {app.submittedAt}</p>
                    <p><strong>Next Repayment Date:</strong> {app.repaymentModels && app.repaymentModels.length > 0 ? app.repaymentModels[0].date : 'N/A'}</p>
                    <p><strong>Repayment Amount:</strong> {app.repaymentModels && app.repaymentModels.length > 0 ? app.repaymentModels[0].amount : 'N/A'}</p>
                  </div>
                  <div className='loan-card-actions'>
                    <button className='pay-now-btn' onClick={() => handlePayNow(app.id)}>Pay Now</button>
                    <button className='view-schedule-btn' onClick={() => handleViewRepaymentSchedule(app.id)}>
                      {activeApplication === app.id ? 'Hide Repayment Schedule' : 'View Repayment Schedule'}
                    </button>
                  </div>
                  {activeApplication === app.id && app.repaymentModels && (
                    <div className='repayment-schedule-wrapper'>
                      {renderRepaymentSchedule(app.repaymentModels)}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className='loanTracker-footer'><Footer/></div>
      </div>
    </>
  );
}

export default LoanTracker;


