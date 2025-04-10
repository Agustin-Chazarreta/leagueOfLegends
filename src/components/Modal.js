import React from "react";
import styled from "styled-components";
import { AiFillCloseSquare } from "react-icons/ai";

export default function Modal({ children, stateModal, setStateModal }) {
  return (
    <>
      {stateModal && (
        <Overlay>
          <ContenedorModal>
            <EncabezadoModal>
              <h3>Detalles del Campeón</h3>
              <BotonCerrar onClick={() => setStateModal(false)}>
                <AiFillCloseSquare size={24} />
              </BotonCerrar>
            </EncabezadoModal>
            {children}
          </ContenedorModal>
        </Overlay>
      )}
    </>
  );
}

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(3px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  overflow-y: auto;
  padding: 0;
`;
const ContenedorModal = styled.div`
  width: 90%;
  max-width: 600px;
  background: linear-gradient(145deg, #0f0f0f, #1c1c1c);
  border: 3px solid #0ff;
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(11, 198, 227, 0.6);
  padding: 30px;
  color: #fff;
  position: relative;
  max-height: 90vh;
  overflow-y: auto;

  @media (max-width: 480px) {
    padding: 20px;
  }
`;
const EncabezadoModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #0ff;

  h3 {
    font-weight: 600;
    font-size: 1.2rem;
    color: #0ff;
  }
`;

const BotonCerrar = styled.button`
  background: transparent;
  border: none;
  color: #0ff;
  cursor: pointer;
  transition: transform 0.2s ease, color 0.3s;

  &:hover {
    transform: scale(1.2);
    color: #ffd700; /* dorado */
  }
`;
