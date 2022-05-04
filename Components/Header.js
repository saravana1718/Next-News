import headerstyles from "../styles/Header.module.css"

const Header = () => {
  return (
    <div>
        <h1 className={headerstyles.title}> 
        <span>Webdev</span> news</h1>
        <p className={headerstyles.description}> keep up to date with latest web news</p>

    </div>
  )
}

export default Header