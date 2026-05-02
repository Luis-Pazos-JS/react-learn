// @ts-ignore
import './App.css'
import responsMedia from './response/result-success.json'


function App() {
  const multimedia = responsMedia.Search
  const hasMedia = multimedia?.length > 0
  
  return (
    <section>
      <header>
      <h1>Buscador de Peliculas</h1>
      <form action="" method="get">
        <label >
          <input type="text" placeholder="Avenger, Matrix ... " id="title" name='title' />
        </label>
        <button type="submit">Buscar</button>
      </form>
      </header>
      
      <main>
        <h2>Busquedas</h2>
        {
          hasMedia ? (
            <ul>
          { 
                multimedia.map((media) => {
              
              <li key={media.imdbID}>
                <h3>{media.Title}</h3>
                <p>{media.Year}</p>
                <img src={media.Poster} alt={media.Title} />
              </li>
            })
              }
            </ul>
          ) : (
              <p>No se Encuentran Multimedia para esta busqueda </p>
           )
        }
      </main>
    </section>
  )
}

export default App
