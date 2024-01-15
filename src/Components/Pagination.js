import React from 'react';
import { Pagination, Container, Row, Col } from 'react-bootstrap';

const CustomPagination = ({ currentPage, totalPages, onPageChange }) => {
  const items = [];

  for (let i = 1; i <= totalPages; i++) {
    items.push(
      <Pagination.Item key={i} active={i === currentPage} onClick={() => onPageChange(i)}>
        {i}
      </Pagination.Item>
    );
  }

  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-end">
          <Pagination>
            <Pagination.Prev onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} />
            {items}
            <Pagination.Next onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages} />
          </Pagination>
        </Col>
      </Row>
    </Container>
  );
};

export default CustomPagination;
