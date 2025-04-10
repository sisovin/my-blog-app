import React from 'react';
import { LoginForm } from './features/auth/components/LoginForm';
import { Card } from './ui/cards/Card';
import { Modal } from './ui/modals/Modal';

const App: React.FC = () => {
  const handleLogin = (username: string, password: string) => {
    console.log('Logged in:', username, password);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">My Blog App</h1>
      <Card title="Welcome" description="Please log in to continue">
        <LoginForm onLogin={handleLogin} />
      </Card>
      <Modal>
        <p>This is a modal example.</p>
      </Modal>
    </div>
  );
};

export default App;
