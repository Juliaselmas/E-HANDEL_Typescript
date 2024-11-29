import { useNavigate } from "react-router-dom"
import styles from "./HomePageContent.module.css"

const HomePageImage = () => {

  const navigate = useNavigate();

  return (
    <div className={styles.imageContainer}>
    <img
        src="https://images.unsplash.com/photo-1512219279337-9746bab300f8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGRpeSUyMGNocmlzdG1hc3xlbnwwfHwwfHx8MA%3D%3D"
        alt="Christmas-themed"
        className={styles.image}
      />
      <button
        className={styles.button}
        onClick={() => navigate("/items")}
      >
        view products
      </button>
      </div>
  )
}

export default HomePageImage