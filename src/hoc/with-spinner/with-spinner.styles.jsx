import styled from "styled-components";

export const SpinnerOverlay = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 50px;
  height: 50px;
  border: 3px solid #fff;
  border-radius: 50%;
  border-top-color: #636767;
  animation: spin 1s ease infinite;
  -webkit-animation: spin 1s ease infinite;
  @keyframes spin {
    from {
      -webkit-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;
