import React from 'react'
import Container from 'container'

class Footer extends Container {
  render(){
    return (
      <div className={"footer"}>
        <div className={"footer-placeholder"}></div>
        <div className={"footer-controller"}>
          <div>
            MaXoft Kft - Ügyfélkapu
          </div>
          <div>
            Támogatás: +36 (1) 218 7091, maxoft@maxoft.hu
          </div>
          <div>
            <button id="hun"></button>
            <button id="eng"></button>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer
