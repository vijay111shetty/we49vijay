// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Cart from './Components/cart'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  {faCheck} from '@fortawesome/free-solid-svg-icons'
import  {faXmark} from '@fortawesome/free-solid-svg-icons'

const cart_values = [
  {
    id:1,
    type:"FREE",
    cost:'$0/month',
    users:(
      <>
    <FontAwesomeIcon icon={faCheck}/>Single User
    </>
    ),
    storage:(
      <>
    <FontAwesomeIcon icon={faCheck}/>50GB Storage
    </>
    ),
    projects:(
      <>
    <FontAwesomeIcon icon={faCheck}/>Unlimited Public Projects
    </>
    ),
    access: (
      <>
    <FontAwesomeIcon icon={faCheck}/>Community Access
    </>
    ),
    project1: (
      <>
    <FontAwesomeIcon icon={faXmark}/>Unlimited Private Projects
    </>
    ),
    support: (
      <>
    <FontAwesomeIcon icon={faXmark}/>Dedicated Phone Support
    </>
    ),
    domain: (
      <>
    <FontAwesomeIcon icon={faXmark}/>Free Subdomain
    </>
    ) ,
    status: (
      <>
    <FontAwesomeIcon icon={faXmark}/>Monthly Status Reports
    </>
    ) 
  },
  {
    id:2,
    type:"PLUS",
    cost:'$9/month',
    users:(
      <>
    <FontAwesomeIcon icon={faCheck}/>5 User
    </>
    ),
    storage:(
      <>
    <FontAwesomeIcon icon={faCheck}/>50GB Storage
    </>
    ),
    projects:(
      <>
    <FontAwesomeIcon icon={faCheck}/>Unlimited Public Projects
    </>
    ),
    access: (
      <>
    <FontAwesomeIcon icon={faCheck}/>Community Access
    </>
    ),
    project1: (
      <>
    <FontAwesomeIcon icon={faCheck}/>Unlimited Private Projects
    </>
    ),
    support: (
      <>
    <FontAwesomeIcon icon={faCheck}/>Dedicated Phone Support
    </>
    ),
    domain: (
      <>
    <FontAwesomeIcon icon={faCheck}/>Free Subdomain
    </>
    ) ,
    status: (
      <>
    <FontAwesomeIcon icon={faXmark}/>Monthly Status Reports
    </>
    )
  },
  {
    id:3,
    type:"PRO",
    cost:'$49/month',
    users:(
      <>
    <FontAwesomeIcon icon={faCheck}/>Unlimited User
    </>
    ),
    storage:(
      <>
    <FontAwesomeIcon icon={faCheck}/>50GB Storage
    </>
    ),
    projects:(
      <>
    <FontAwesomeIcon icon={faCheck}/>Unlimited Public Projects
    </>
    ),
    access: (
      <>
    <FontAwesomeIcon icon={faCheck}/>Community Access
    </>
    ),
    project1: (
      <>
    <FontAwesomeIcon icon={faCheck}/>Unlimited Private Projects
    </>
    ),
    support: (
      <>
    <FontAwesomeIcon icon={faCheck}/>Dedicated Phone Support
    </>
    ),
    domain: (
      <>
    <FontAwesomeIcon icon={faCheck}/>Free Subdomain
    </>
    ) ,
    status: (
      <>
    <FontAwesomeIcon icon={faCheck}/>Monthly Status Reports
    </>
    )
  }
]
function App() {

  return (
    <div className='container text-center'>
      {/* <div className='col-4'> */}
        
     
    {
      cart_values.map((val1)=>
      <Cart 
      type = {val1.type}
      cost = {val1.cost}
      users = {val1.users}
      storage = {val1.storage}
      projects = {val1.projects}
      access = {val1.access}
      project1 = {val1.project1}
      support = {val1.support}
      domain = {val1.domain}
      status ={val1.status}
      key={cart_values.id}
        />
      )
    }
    
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossOrigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js" integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+" crossOrigin="anonymous"></script>
    </div>
    
    // </div>
  )
}

export default App;
