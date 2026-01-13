import { Modal, ModalProps } from "shared/ui/Modal/Modal";
import { LoginForm } from "../LoginForm/LoginForm";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./LoginModal.module.scss";


interface LoginModalProps extends ModalProps {}

export const LoginModal = (props: LoginModalProps) => {
    const {
        isOpen,
        onClose,
        className,
    } = props;
    return (
        <Modal
            className={classNames(cls.LoginModal, {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
        >
            <LoginForm />
        </Modal>
    );
};
