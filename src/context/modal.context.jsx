import { createContext, useState } from "react";

export const ModalContext = createContext({
  isOpen: false,
  setIsOpen: () => null,
});
export const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const value = { isOpen, setIsOpen };
  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};
