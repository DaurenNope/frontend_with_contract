import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

function NFTFilter({ onFilter }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [major, setMajor] = useState('');
  const [graduationDate, setGraduationDate] = useState('');
  const [diplomaId, setDiplomaId] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleMajorChange = (event) => {
    setMajor(event.target.value);
  };

  const handleGraduationDateChange = (event) => {
    setGraduationDate(event.target.value);
  };

  const handleDiplomaIdChange = (event) => {
    setDiplomaId(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const filters = {
      searchTerm,
      major,
      graduationDate,
      diplomaId,
    };
    onFilter(filters);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="searchTerm">
        <Form.Label>Search</Form.Label>
        <Form.Control type="text" value={searchTerm} onChange={handleSearchChange} />
      </Form.Group>
      <Form.Group controlId="major">
        <Form.Label>Major</Form.Label>
        <Form.Control type="text" value={major} onChange={handleMajorChange} />
      </Form.Group>
      <Form.Group controlId="graduationDate">
        <Form.Label>Graduation Date</Form.Label>
        <Form.Control type="text" value={graduationDate} onChange={handleGraduationDateChange} />
      </Form.Group>
      <Form.Group controlId="diplomaId">
        <Form.Label>Diploma ID</Form.Label>
        <Form.Control type="text" value={diplomaId} onChange={handleDiplomaIdChange} />
      </Form.Group>
      <button type="submit" className="btn btn-primary">
        Filter
      </button>
    </Form>
  );
}

export default NFTFilter;
