import css from "./Home.module.css"

export default function Home() {
    return (
    <div className={css.container}>
      <div className={css.content}>
        <h1><b>Welcome to Our Contacts Manager 💁‍♀️</b></h1>
        <p>
          🌟 We're thrilled to have you here. Managing your contacts has never been easier. 🌟
        </p>
      </div>
    </div>
  )
}