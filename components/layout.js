import Navbar from './navbar'


export default function Layout({ children }) {
    return (
      <>
        
        <Navbar />
        <main>{children}</main>
        <section>
          <div className="isolate">
            <div className="noise"></div>
            <div className="overlay"></div>
          </div>
        </section>

      </>
    )
  }