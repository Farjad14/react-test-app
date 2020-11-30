import styled from "@emotion/styled";

export const FormSection = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-right: 10px;
  width: 100%;
  flex-shrink: 2;
  @media (max-width: 800px) {
    margin-right: 0px;
  }
`;

export const ChooseColumnInput = styled.select`
  display: flex;
  justify-content: center;
  background: #9ba1ab;
  color: rgb(255, 255, 255, 0.7);
  padding: 10px;
  margin: 10px 0 140px 0;
  border: white 2px solid;
  @media (max-width: 800px) {
    margin: 10px 0 20px 0;
  }
`;

export const EnterItemInput = styled.input`
  display: flex;
  justify-content: center;
  background: #9ba1ab;
  color: white;
  padding: 10px;
  margin: 0 0 10px 0;
  border: white 2px solid;
  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: white;
    opacity: 0.7; /* Firefox */
  }
`;

export const AddItemBtn = styled.input`
  display: flex;
  justify-content: center;
  background: #79818f;
  color: white;
  padding: 10px;
  width: 100%;
  margin: 10px 0 10px 0;
  border: white 2px solid;
`;
