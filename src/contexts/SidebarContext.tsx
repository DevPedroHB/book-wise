import { ReactNode, createContext, useState } from "react";

interface ISidebarContext {
  toggle: boolean;
  handleToggle: () => void;
}

export const SidebarContext = createContext({} as ISidebarContext);

interface ISidebarContextProvider {
  children: ReactNode;
}

export default function SidebarContextProvider({
  children,
}: ISidebarContextProvider) {
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle(!toggle);
  }

  return (
    <SidebarContext.Provider
      value={{
        toggle,
        handleToggle,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
}
