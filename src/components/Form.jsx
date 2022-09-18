import React from 'react'
import "../styles/Form.scss"
export const Form = () => {
  return (
    <div className='form'>
      <form>
      <h4>Get early access today</h4>
      <p>It only takes a minute to sign up and our free starter tier is extremely generous 
        if you have any questions, our support team would be happy to help you.</p>
        {/* <form> */}
          <input placeholder="email@example.com" type='email' required/>
          <button>Get started for free</button>
        </form>
    </div>
  )
}
