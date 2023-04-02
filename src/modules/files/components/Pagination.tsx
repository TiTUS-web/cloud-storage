import styled from 'styled-components';

import { left, right } from '@/images';
import { StyledProps } from '@/types/styled';

const Pagination = () => {
  return (
    <PaginationContainer>
      <RowsPerPage>1-10 of 706</RowsPerPage>
      <IconButton src={left} left alt='leftArrow'></IconButton>
      <IconButton src={right} right alt='rightArrow'></IconButton>
    </PaginationContainer>
  );
};

const PaginationContainer = styled.section``;

const RowsPerPage = styled.span`
  margin-right: 95px;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.05em;
  color: #606f89;
`;

const IconButton = styled.img`
  cursor: pointer;
  width: 20px;
  height: 20px;
  margin-right: ${(props: StyledProps) =>
    props.left || props.right ? '40px' : '10px'};
  transition: 0.2s;

  :hover {
    opacity: 0.8;
  }
`;

export default Pagination;
