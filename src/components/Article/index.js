
import Post from '../Post';

const Article = () => {
    //fazer uma requisicao para uma API

    return (
    <section className='container'>
        <h1>Articles</h1>
        <div className='mt-5 container-posts'>
        <Post subtitle = "tecnologia" title = "O guia definitivo do blog">
            1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna 
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
          ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse 
          cillum dolore eu fugiat nulla pariatur.
        </Post>
        <Post subtitle = "fotografia" title = "Quais as melhores cameras em 2021?">
            2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna 
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
          ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse 
          cillum dolore eu fugiat nulla pariatur.
        </Post>
        <Post subtitle = "cinema" title = "Os 10 filmes com maior bilheteria">
            3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna 
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
          ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse 
          cillum dolore eu fugiat nulla pariatur.
        </Post>
        </div>
        
    </section>
    )
}

export default Article;