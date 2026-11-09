import { useState } from 'react'

function App() {
  const [compteur, setCompteur] = useState(0)

  return (
    <div style={{ padding: 40, fontFamily: 'Arial' }}>
      <h1>Bonjour, React !</h1>
      <p>Vous avez cliqué {compteur} fois.</p>
      <button onClick={() => setCompteur(compteur + 1)}>Cliquer</button>
    </div>
  )
}

export default App