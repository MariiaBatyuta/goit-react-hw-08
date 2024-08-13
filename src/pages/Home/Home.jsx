import css from "./Home.module.css"

export default function Home() {
    return (
    <div className={css.container}>
      <div className={css.content}>
        <h1><b>Welcome to Your Contacts Hub!</b></h1>
        <p>🌟 We're excited to help you streamline your connections. Enjoy effortless contact management with our intuitive tools. 🌟</p>
      </div>
    </div>    
  )
}