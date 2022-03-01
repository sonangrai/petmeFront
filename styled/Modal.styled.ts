import styled from "styled-components";

/**
 * Dp Modal
 */
export const DpModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.modalbackdrop};
  display: grid;
  place-items: center;
`;

/**
 * Modal Box
 */
export const ModalBox = styled.div`
  width: 80%;
  margin: auto;
  background-color: ${({ theme }) => theme.white};
  border-radius: 6px;
`;

/**
 * Modal Title Bar
 */
export const ModalTitleBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em;
`;

/**
 * Title
 */
export const ModalTitile = styled.h2`
  font-size: 1.2rem;
  margin: 0;
`;

/**
 * Close
 */
export const ModalClose = styled.div``;

/**
 * Cancel
 */
export const CancelModal = styled.div`
  border-top: 1px solid ${({ theme }) => theme.lightGrey};
  text-align: center;
  padding: 1em;
  color: ${({ theme }) => theme.danger};
  cursor: pointer;
`;
