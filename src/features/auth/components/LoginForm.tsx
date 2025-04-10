import React, { useState } from 'react';
import { PrimaryButton } from '../../../ui/buttons/PrimaryButton';

interface LoginFormProps {
  onLogin: (username: string, password: string) => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        className="px-4 py-2 border rounded-lg"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="px-4 py-2 border rounded-lg"
      />
      <PrimaryButton onClick={handleSubmit}>Login</PrimaryButton>
    </form>
  );
};
