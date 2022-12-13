import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  width: 350px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: orange;
`;

export const Label = styled.label`
  display: flex;
  font-size: 19px;
  justify-content: space-between;
`;

export const Input = styled.input`
  width: 250px;
  font-size: 18px;
  border-radius: 5px;
`;

export const BtnSubmit = styled.button`
  padding: 6px 12px;
  font-size: 16px;
  border-radius: 5px;
`;
