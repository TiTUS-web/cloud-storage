import styled from 'styled-components';

const DragAndDrop = () => {
  return <Wrapper>Click or transfer files to download</Wrapper>;
};

const Wrapper = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  background-color: rgba(0, 95, 249, 0.04);
  border: 2px dashed rgba(0, 95, 249, 0.6);
  border-radius: 0 0 5px 5px;
  font-size: 14px;
  justify-content: center;
  line-height: 18px;
  text-align: center;
  transition: background-color 0.1s ease-out;
`;
export default DragAndDrop;
