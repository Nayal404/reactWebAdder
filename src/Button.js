import React from 'react'

const Button = (props) => {
  return (
    <>
    <a href={props.webLink} target='_blank'>
    <button className="btn btn-success my-1">{props.webName}</button>
    </a>
    </>
  )
}

export default Button