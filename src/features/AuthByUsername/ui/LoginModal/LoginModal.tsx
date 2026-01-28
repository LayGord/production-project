import { Modal, ModalProps } from "shared/ui/Modal/Modal";
import { Suspense } from "react";
import { Loader } from "shared/ui/Loader/Loader";
import { LoginFormAsync } from "../LoginForm/LoginForm.async";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./LoginModal.module.scss";


interface LoginModalProps extends ModalProps {}

export const LoginModal = (props: LoginModalProps) => {
    const {
        isOpen,
        onClose,
        className,
        ...otherProps
    } = props;
    return (
        <Modal
            className={classNames(cls.LoginModal, {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            {...otherProps}
        >
            <Suspense fallback={<Loader />}>
                <LoginFormAsync onSuccess={onClose}/>
            </Suspense>
        </Modal>
    );
};
