import React from 'react'
import Link from 'next/link'
import Cards from './Cards'

function Home() {

  return (


    <div>

    <div id="nav">

      <ul>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/posts/Docs">Documentation</Link></li>
      <li><Link href="/posts/Learn">Learn</Link></li>
      <li><Link href="/posts/Tutorials">Tutorials</Link></li>
      <li><Link href="/posts/Contact">Contact</Link></li>
      </ul>

    </div>
 
      <h1 className='first'>I am Learning Next Js</h1>
      <h4 className='second'>Next Js helps developers to create fast websites</h4>
      <Cards />
    </div>
  )
}

export default Home