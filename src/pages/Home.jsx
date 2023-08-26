import ListPosts from "../components/ListPosts"
import ListCategories from "../components/ListCategories"

const Home = () => {
  return (
    <div>
      <main>
        <div className="container">
          <h2 className="title-page">Pet noticias</h2>
        </div>
        <ListCategories />
        <ListPosts url={"/posts"}/>
      </main>
    </div>
  )
}

export default Home
