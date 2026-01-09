import { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Modal.module.scss";
import { Portal } from "../Portal/Portal";


interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

const ANIMATION_DELAY = 50;

export const Modal = ({ className, children, isOpen, onClose }: ModalProps) => {

    const [isClosing, setIsClosing] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false)
            }, ANIMATION_DELAY)
        }
    }, [onClose]);

    // for disable closing on content click
    const contentClickHandler = (e: React.MouseEvent) => {
        e.stopPropagation()
    };

    // escape click logic
    const keyDownHandler = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler()
        }
    }, [closeHandler]);

    // refs and listeners apply + cleanup
    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', keyDownHandler);
        };

        return () => {
            window.removeEventListener('keydown', keyDownHandler);
            clearTimeout(timerRef.current);
        }
    }, [isOpen, keyDownHandler]);

    return (
        <Portal>
            <div className={ classNames(cls.Modal, mods, [className]) }>
                <div 
                    className={cls.overlay}
                    onClick={closeHandler}
                >
                    <div 
                        className={cls.content}
                        onClick={contentClickHandler}
                    >
                        { children }
                    </div>
                </div>
            </div>
        </Portal>
    );
};
