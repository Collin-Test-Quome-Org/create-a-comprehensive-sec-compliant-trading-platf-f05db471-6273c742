import { createContext, useState, useEffect, PropsWithChildren } from 'react';

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'trader' | 'compliance' | 'admin';
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  login: async () => {},
  logout: () => {},
});

export function AuthProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState<User | null>(null);

  // Mock login function
  const login = async (email: string, password: string) => {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    setUser({
      id: 'mock-user-123',
      name: 'Jane Trader',
      email,
      role: 'trader',
    });
  };

  const logout = () => {
    setUser(null);
  };

  // Optionally, persist user session to localStorage (mock)
  useEffect(() => {
    const stored = localStorage.getItem('trade-secure-user');
    if (stored) {
      setUser(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem('trade-secure-user', JSON.stringify(user));
    } else {
      localStorage.removeItem('trade-secure-user');
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
