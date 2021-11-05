import React from 'react';
import axios from 'axios';
import { IoMdArrowRoundBack } from 'react-icons/io';
import './App.css';

function DetalharOrcamento(props) {

  const [itensOrcamento, setItensOrcamento] = React.useState([])

  React.useEffect(() => (carregarDados()), [])

  async function carregarDados() {
    const url = `/orcamentos/${props.orcamento.id}/itens-orcamento`
    let response = await axios.get(url)
    let dados = response.data
    setItensOrcamento(dados)
  }

  return (
    <>
      <div className="header">
        <h3>
          <IoMdArrowRoundBack className="pointer" onClick={() => props.setOrcamentoDetalhar(null)} />
          Detalhar Orcamento
        </h3>
      </div>
      <div className="descricao-body">
        <p>
          Descrição: {props.orcamento.descricao}
        </p>
        <p>
          Período: {props.orcamento.mes} / {props.orcamento.ano}
        </p>
        <p>
          Valor total informado: R$ {props.orcamento.valorTotalInformado}
        </p>
        <p>
          Valor total calculado: R$ {props.orcamento.valorTotalCalculado}
        </p>
        <p>
          Diferença de cálculo: R$ {props.orcamento.diferencaCalculo}
        </p>
      </div>
      <div className="table-style">
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Origem</th>
              <th scope="col">Código</th>
              <th scope="col">Descrição</th>
              <th scope="col">Valor Unitário</th>
              <th scope="col">Unidade</th>
              <th scope="col">Quantidade</th>
              <th scope="col">Valor total informado</th>
            </tr>
          </thead>
          <tbody>
            {
              itensOrcamento.map((itemOrcamento, index) => (
                <tr key={itemOrcamento.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{itemOrcamento.origem}</td>
                  <td>{itemOrcamento.codigo}</td>
                  <td>{itemOrcamento.descricao}</td>
                  <td> R$ {itemOrcamento.valorUnitario}</td>
                  <td>{itemOrcamento.unidade}</td>
                  <td>{itemOrcamento.quantidade}</td>
                  <td> R$ {itemOrcamento.valorTotalInformado}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default DetalharOrcamento