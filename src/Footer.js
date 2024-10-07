import React from 'react'

 const Footer = ({footerLength}) => {
    const year = new Date();
  return (
    <>{(footerLength >1) ? `${footerLength} list items`:(footerLength === 1) ? `${footerLength} list item`: "Empty list"}  </>
  )
}
export default Footer


