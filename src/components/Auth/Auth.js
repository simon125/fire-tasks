// import React from 'react'
// import { connect } from 'react-redux'
// import { logInByGoogle } from '../../state/auth'

// import PaperContainer from '../UI'
// import LoginByGoogle from './LoginByGoogle'


// const Auth = (props) => (
//   <div>
//     {
//       props.isUserLoggedIn ?
//         props.children
//         :
//         <div>
     
//           <div >
//             <PaperContainer centered>
            
//               <LoginByGoogle
//                 onLogInClick={props.logInByGoogle}
//               />
//             </PaperContainer>
//           </div>
//         </div>
//     }
//   </div>
// )

// export default connect(
//   state => ({
//     isUserLoggedIn: state.auth.isLoggedIn
//   }),
//   dispatch => ({
//     logInByGoogle: () => dispatch(logInByGoogle()),
//   })
// )(Auth)