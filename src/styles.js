import styled from 'styled-components';


export const AppContainer = styled.div`
  text-align: center;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

export const Title = styled.h1`
  color: #007bff;
  margin-bottom: 20px;
`;


export const Form = styled.form`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;


export const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
  width: 300px;
  outline: none;

  &:focus {
    border-color: #007bff;
  }
`;


export const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const WeatherContainer = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 20px auto;
  text-align: center;
`;


export const WeatherIcon = styled.img`
  width: 100px;
  height: 100px;
`;


export const ErrorMessage = styled.p`
  color: red;
  text-align: center;
  font-size: 18px;
  margin: 20px 0;
`;


export const ForecastContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 20px;
`;

export const ForecastItem = styled.div`
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 5px;
  text-align: center;
`;