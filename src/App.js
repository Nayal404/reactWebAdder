import React from 'react'
import { useState } from 'react'
import './style.css'
import Footer from './Footer'
import Button from './Button'

const App = () => {
  const [userWeb, setUserWeb] = useState("")
  const [userLink, setUserLink] = useState("")
  const [createWebList, setWebList] = useState([])
  const webAdd = () => {
    const webNlink = <Button webName={userWeb} webLink={userLink} />
    setWebList([...createWebList, webNlink])
  }

  return (
    <>
      <div className="container">
        <h3>By Default Websites</h3>
        <ul>
          <li><Button webName='Google' webLink='https://www.google.com'></Button></li>
          <li className='my-1'><Button webName='YouTube' webLink='https://www.youtube.com'></Button></li>
          <li className='my-1'><Button webName='Github' webLink='https://www.github.com'></Button></li>
          <div className="fluid">
            <label>Add More Website</label> <br /> <hr />
            <label>Website Name</label>
            <input type="text" onChange={(event) => setUserWeb(event.target.value)} className="form-control" />
            <label>Website Link</label>
            <input type="text" onChange={(event) => setUserLink(event.target.value)} className="form-control" />
            <button className="btn btn-secondary my-2" onClick={webAdd}>Add</button>
          </div>
        </ul>
        <div className="newAddedWebs">
          <ol>
            {
              createWebList.map((webs) => <li className='my-1'>{webs}</li>)
            }
          </ol>
        </div>
      </div>
      <footer align="center">
        <Footer/>
      </footer>
    </>
  )
}


console.log('Warning: If you Refresh The Page All your website will get disappeared!')


export default App