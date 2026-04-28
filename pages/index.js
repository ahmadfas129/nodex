import { useEffect, useState } from 'react'
import Link from 'next/link'
import posts from '../data/posts'
import logo from '../logo.jpeg'

export default function Home(){
  const latest = posts[0]
  const [remainingMs, setRemainingMs] = useState(10 * 60 * 60 * 1000)

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingMs(prev => Math.max(prev - 1000, 0))
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const totalSeconds = Math.floor(remainingMs / 1000)
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0')
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0')
  const seconds = String(totalSeconds % 60).padStart(2, '0')
  const launched = remainingMs <= 0

  return (
    <div className="container">
      <section className="card" style={{marginBottom:20, textAlign:'center', background:'linear-gradient(135deg, rgba(0,153,255,0.18), rgba(255,255,255,0.03))'}}>
        <div style={{fontSize:14, letterSpacing:'0.12em', textTransform:'uppercase', color:'#9aa8bf'}}>NodeX Launch Countdown</div>
        <h2 style={{margin:'10px 0 8px', fontSize:36}}>{launched ? 'NodeX is live now' : 'Coin will be launched in'}</h2>
        <div style={{fontSize:42, fontWeight:800, color:'#ffffff'}}>{launched ? '00:00:00' : `${hours}:${minutes}:${seconds}`}</div>
        <div style={{marginTop:12}}>
          <a href="https://dexscreener.com/" target="_blank" rel="noopener noreferrer" className="card" style={{display:'inline-block', padding:'10px 16px'}}>https://dexscreener.com/</a>
        </div>
      </section>

      <header className="header">
        <div style={{display:'flex',alignItems:'center',gap:12}}>
          <div className="logo card"><img src={logo.src} alt="NodeX" style={{width:'100%',height:'100%'}}/></div>
          <div>
            <div className="site-title">NodeX</div>
            <div style={{color:'#9aa8bf'}}>Connect. Compute. Conquer.</div>
          </div>
        </div>
        <nav className="nav">
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
          <a href="https://t.me/nodeXtec" target="_blank" rel="noopener noreferrer">Telegram</a>
          <a href="https://x.com/NodeXtech12391" target="_blank" rel="noopener noreferrer">Twitter</a>
        </nav>
      </header>

      <section className="hero" style={{backgroundImage:`url(${logo.src})`,backgroundRepeat:'no-repeat',backgroundPosition:'right center',backgroundSize:'40%'}}>
        <div style={{flex:1}}>
          <h1>Welcome to NodeX</h1>
          <p className="card">A meme coin built for community, creativity, and long-term fun. Check our latest announcement and guides below.</p>
          <p style={{marginTop:12}}><Link href="/blog" className="card">Read the Blog →</Link></p>
        </div>
        <div style={{width:220}} className="card">
          <img src={logo.src} alt="NodeX coin" style={{width:'100%'}}/>
          <h3 style={{marginTop:12}}>{latest.title}</h3>
          <p style={{color:'#9aa8bf'}}>{latest.excerpt}</p>
          <p style={{marginTop:8}}><Link href={`/blog/${latest.slug}`}>Read more</Link></p>
        </div>
      </section>

      <section style={{marginTop:40}}>
        <h2>Latest Posts</h2>
        <div className="post-list">
          {posts.map(p=> (
            <article key={p.slug} className="post-item card">
              <img src={p.cover} alt="cover" />
              <div>
                <h3><Link href={`/blog/${p.slug}`}>{p.title}</Link></h3>
                <p style={{color:'#9aa8bf'}}>{p.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer">© {new Date().getFullYear()} NodeX • Built with Next.js
        <div className="social-icons">
          <a href="https://t.me/nodeXtec" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 4L2 11.5L7.5 14L9.5 20L11.5 14L22 4Z" fill="currentColor"/></svg>
          </a>
          <a href="https://x.com/NodeXtech12391" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 5.92c-.64.28-1.33.47-2.05.56.74-.44 1.3-1.13 1.57-1.95-.7.41-1.47.71-2.29.87C18.6 4.6 17.7 4 16.64 4c-1.6 0-2.9 1.3-2.9 2.9 0 .23.03.45.08.66C10.1 7.44 6.2 5.5 3.47 2.3c-.25.43-.4.93-.4 1.46 0 1.01.52 1.9 1.32 2.42-.61-.02-1.18-.19-1.68-.46v.05c0 1.4.99 2.56 2.3 2.83-.48.13-.98.2-1.5.08.42 1.3 1.6 2.24 3.02 2.27C6.9 13.8 5.5 14.3 4 14.3c-.3 0-.6-.02-.9-.06C6 15.2 8.3 15.8 10.75 15.8c5.27 0 8.16-4.36 8.16-8.15v-.37c.56-.4 1.04-.9 1.42-1.47-.5.22-1.03.37-1.58.44z" fill="currentColor"/></svg>
          </a>
        </div>
      </footer>
    </div>
  )
}
