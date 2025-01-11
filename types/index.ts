// Type Definitions
export interface HeaderProps {
    isMobile: boolean;
    setIsMobile: React.Dispatch<React.SetStateAction<boolean>>;
  }
  
  // Define the types for navigation items and buttons as arrays of strings
  export type NavItemProps = string[];
  export type NavBtnProps = string[];
  