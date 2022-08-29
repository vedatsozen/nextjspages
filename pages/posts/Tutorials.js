
import Link from 'next/link';


export default function Tutorials() {
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
<h1 className='first'>Tutorials Page</h1>
      <h4 className='second'>Welcome to Tutorials Page</h4>

      <Link className="pages" href="/">Go to home page</Link>
    </div>
  );
}