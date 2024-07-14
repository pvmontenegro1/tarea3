import React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function App() {
  return (
    <div className="p-4 space-y-4">
      <div className="flex justify-center space-x-4">
        <Button variant="contained" color="primary">
          Primary Button
        </Button>
        <Button variant="contained" color="secondary">
          Secondary Button
        </Button>
      </div>
      <Card className="max-w-md mx-auto">
        <CardContent>
          <h2 className="text-2xl font-bold mb-2">Card Title</h2>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
