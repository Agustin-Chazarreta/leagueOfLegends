import React from "react";
import styled from "styled-components";
import { AiFillCloseSquare } from "react-icons/ai";
export default function Modal({ children, stateModal, setStateModal }) {
  return (
    <>
      {stateModal && (
        <Overlay>
          <ContenedorModal>
            <EncabezadoModal></EncabezadoModal>
            <BotonCerrar onClick={() => setStateModal(!stateModal)}>
              <AiFillCloseSquare />
            </BotonCerrar>
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
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
`;

const ContenedorModal = styled.div`
  width: 500px;
  min-height: 100px;
  background: rgb(6, 28, 37);
  position: relative;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 20px;
  color: #fff;
  border: 5px solid rgb(11, 198, 227);
`;
const EncabezadoModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-buttom: 20px;
  padding-buttom: 20px;
  border-buttom: 1px solid #e8e8e8;
  h3 {
    font-weight: 500;
    font-size: 16px;
    color: black;
  }
`;
const BotonCerrar = styled.button`
  position: absolute;
  background: #000;
  top: 20px;
  right: 20px;
  width: 30px;
  height: 30px;
  border: none;
  background: none;
  cursor: pointer;
  transition: 0.3s ease all;
  border-radius: 5px;
  color: #1766dc;

  &:hover {
    background: #f3f3f3;
  }
`;
