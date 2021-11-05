import React from 'react';
import DetalharOrcamento from './DetalharOrcamento';
import Orcamentos from './Orcamentos';

function App() {

  const [orcamentoDetalhar, setOrcamentoDetalhar] = React.useState(null)

  return (
    <>
      {
        orcamentoDetalhar == null 
        ? <Orcamentos setOrcamentoDetalhar={setOrcamentoDetalhar} /> 
        : <DetalharOrcamento setOrcamentoDetalhar={setOrcamentoDetalhar} orcamento={orcamentoDetalhar} />
      }
    </>
  );
}

export default App;