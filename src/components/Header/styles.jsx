import styled from 'styled-components';

const HeaderContainer = styled.div`
  align-items: center;
  background-color: #422800;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 5px;
  /* height:2.8rem; */
`;
const HeaderMain = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const Image = styled.img`
filter:
  invert(100%) 
  sepia(100%)
  saturate(100%)
  hue-rotate(1110deg)
  brightness(100%)
  contrast(90%);
`;
const Title = styled.h2`
  color:#fbeee0;
  margin: auto;
  margin-bottom: 5px;
`;
const BtnSearch = styled.button`
  background-color: #fbeee0;
  color:#422800;
  border: 2px solid #3a2300;
  border-radius: 30px;
  display: inline-block;
  font-weight: 1000;
  width:100%;
  line-height: 30px;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
`;
const Span = styled.span`
  color:#fbeee0;
  font-weight: 700;
`;
const FilterInput = styled.input`
  background-color: #fbeee0;
  color:#422800;
  border: 2px solid #3a2300;
  border-radius: 30px;
  display: inline-block;
  font-weight: 1000;
  font-size: 16px;
  width: 300px;
  line-height: 30px;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
`;
export {
  HeaderContainer,
  HeaderMain,
  Image,
  Title,
  BtnSearch,
  Span,
  FilterInput,
};
/*
  .search-btn {
    background: none;
    border: none;
  }

  .search-input {
    border: 1px solid black;
    border-radius: 5px;
    margin: 10px 0;
    width: 350px;
  }

  .header-search label {
    align-items: center;
    display: flex;
    justify-content: center;
  }

  .header-search span {
    margin-left: 5px;
  }

  .radio-inputs {
    align-items: center;
    display: flex;
    justify-content: space-around;
  }
   */
