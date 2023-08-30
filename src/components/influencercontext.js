import React, { createContext, useContext, useState } from 'react';

const EmailContext = createContext();

export function useEmailContext() {
  return useContext(EmailContext);
}

export function EmailProvider({ children }) {
  const [email, setEmail] = useState('');

  const updateEmail = newEmail => {
    setEmail(newEmail);
  };

  const contextValue = {
    email,
    updateEmail,
  };

  return (
    <EmailContext.Provider value={contextValue}>
      {children}
    </EmailContext.Provider>
  );
}
