import React, { useState } from 'react';
import { Alert, Button } from 'react-bootstrap';

const MyAlert = () => {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>

      </Alert>
    );
  }
  return <Button onClick={() => setShow(true)}>Show Alert</Button>;
};

export default MyAlert;
