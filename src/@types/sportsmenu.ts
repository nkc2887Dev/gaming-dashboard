import { Dispatch, SetStateAction } from "react";

export interface ISportsMenu {
  isMobile: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
  isMenuOpen: boolean;
}
