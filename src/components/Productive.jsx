import React from 'react'
import '../styles/Productive.scss'
import illustrationsatyproductive from '../assets/images/illustrationstayproductive.png'

export const Productive = () => {
  return (
    <div className='productive'>
      <img src={illustrationsatyproductive} alt=""/>
          <div className='content'>
            <h2>Stay productive, wherever you are</h2>
            <p>Never let location be an issue when accessing your files. Flyo has you covered for all your file storage needs.</p>
          <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
        <button>See how Fylo works </button>
      </div>
    </div>
  )
}
