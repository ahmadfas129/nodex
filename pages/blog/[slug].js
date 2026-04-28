import posts from '../../data/posts'
import logo from '../../logo.jpeg'

export async function getStaticPaths(){
  const paths = posts.map(p=>({params:{slug:p.slug}}))
  return {paths, fallback:false}
}

export async function getStaticProps({params}){
  const post = posts.find(p=>p.slug===params.slug)
  return {props:{post}}
}

export default function PostPage({post}){
  return (
    <div className="container">
      <header className="header">
        <div style={{display:'flex',alignItems:'center',gap:12}}>
          <div className="logo card"><img src={logo.src} alt="NodeX" style={{width:'100%',height:'100%'}}/></div>
          <div>
            <div className="site-title">NodeX Blog</div>
            <div style={{color:'#9aa8bf'}}>{post.date}</div>
          </div>
        </div>
        <nav className="nav">
          <a href="/">Home</a>
          <a href="/blog">Blog</a>
          <a href="https://t.me/nodeXtec" target="_blank" rel="noopener noreferrer">Telegram</a>
          <a href="https://x.com/NodeXtech12391" target="_blank" rel="noopener noreferrer">Twitter</a>
        </nav>
      </header>

      <main style={{marginTop:24}}>
        <h1>{post.title}</h1>
        <img src={post.cover} alt="cover" style={{width:160,borderRadius:8}} />
        <div style={{marginTop:16}} className="card" dangerouslySetInnerHTML={{__html:post.content}} />
      </main>

      <footer className="footer">© {new Date().getFullYear()} NodeX
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
