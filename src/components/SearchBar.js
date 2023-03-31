import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';

function SearchBar(props) {
  const { searchTerm, onSearch } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleInputChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <Form onSubmit={handleSubmit} style = {{justifyContent: 'center' ,display: 'flex'}}>
      <Form.Group controlId="searchTerm">
        <Form.Control
          type="text"
          placeholder="Search for a graduate"
          value={searchTerm}
          onChange={handleInputChange}
          style={{ fontSize: '12px', padding: '10px' }}
        />
      </Form.Group>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button variant="primary" type="submit" style={{ width: '60px', fontSize: '12px',padding:'5px', margin: '5px'}}>
          Search
        </Button>
      </div>
    </Form>
  );
}

SearchBar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
