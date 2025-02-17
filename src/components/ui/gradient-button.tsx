import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SETTINGS_BUTTON } from "@/utils/constants/settingButton";
import UserUpdateModal from "@/components/common/model/userUpdate";
import CreditDepositModal from "@/components/common/model/creditDeposit";
import WithdrawalModal from "@/components/common/model/withdrawal";
import ChangePasswordModal from "@/components/common/model/changePassword";
import MasterPasswordModal from "@/components/common/model/MasterPassword";
import LastLoginModal from "@/components/common/model/lastLogin";

const username = "testsuperadmin123";
interface GradientButton {
  label: string;
  redirect?: string;
  className?: string;
  size?: "lg" | "default" | "sm" | "icon";
  onclick?: () => void;
}

const GradientButton = ({
  label,
  className = "",
  redirect = "",
  size,
  onclick,
}: GradientButton) => {
  return (
    <Button
      onClick={onclick}
      {...(size ? { size } : {})}
      className={`${className} rounded-md font-bold border border-[1.5px] border-[#026473] bg-gradient-to-b from-[#1497AF] to-[#022D44] text-white shadow-md hover:bg-[#017082]`}
    >
      {redirect ? <Link href={redirect}>{label}</Link> : label}
    </Button>
  );
};

const MODAL_COMPONENTS: Record<
  string,
  React.FC<{ isOpen: boolean; onClose: () => void; title: string }>
> = {
  [SETTINGS_BUTTON.USER_UPDATE]: UserUpdateModal,
  [SETTINGS_BUTTON.DEPOSIT_CREDIT]: CreditDepositModal,
  [SETTINGS_BUTTON.WITHDRAWAL]: WithdrawalModal,
  [SETTINGS_BUTTON.CHANGE_PASSWORD]: ChangePasswordModal,
  [SETTINGS_BUTTON.GAME_CONTROL]: MasterPasswordModal,
  [SETTINGS_BUTTON.LAST_LOGIN]: LastLoginModal,
};

const ElipsButton = ({ label }: { label: string }) => {
  const [openModal, setOpenModal] = useState<string | null>(null);
  const ModalComponent = openModal ? MODAL_COMPONENTS[openModal] : null;
  const modalTitle =
    openModal === SETTINGS_BUTTON.GAME_CONTROL
      ? `Lock Application - ${username}`
      : openModal === SETTINGS_BUTTON.LAST_LOGIN
        ? `Last Logins of ${username}`
        : label;

  return (
    <>
      <Button
        onClick={() => setOpenModal(label)}
        className="px-3 rounded-full text-xs font-bold border border-[1.5px] border-[#026473] bg-gradient-to-b from-[#2E899C] to-[#159ab3] text-white shadow-md transition-all duration-300 group hover:from-[#159ab3] hover:to-[#03364c]"
      >
        {label}
      </Button>
      {ModalComponent && (
        <ModalComponent
          isOpen={true}
          onClose={() => setOpenModal(null)}
          title={modalTitle}
        />
      )}
    </>
  );
};

export { GradientButton, ElipsButton };
