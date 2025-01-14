export type NavItemProps = string[];
export type NavBtnProps = string[];

export interface HeaderProps {
  isMobile: boolean;
  setIsMobile: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface DbBtnProps {
  btnTxt: string; 
}
export interface AdvStatTempProps {
  imgSrc: any;
  content: string;
  title: string;
}
export interface BoostProps {
  isMobile: boolean;
}