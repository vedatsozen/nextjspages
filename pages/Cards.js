import React from 'react'
import Image from 'next/image'

function Cards() {
  return (
    <div id='container'>

        <div id='one'>
          
            <Image src="/images/photo1.jpg" height="200px" width="200px" alt="Photo" />
        </div>
        <div id='two'><Image src="/images/photo1.jpg" height="200px" width="200px" alt="Photo" /></div>
        <div id='three'><Image src="/images/photo1.jpg" height="200px" width="200px" alt="Photo" /></div>
        <div id='four'><Image src="/images/photo1.jpg" height="200px" width="200px" alt="Photo" /></div>

    </div>
  )
}

export default Cards