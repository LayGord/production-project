import { useCallback, useMemo, useState } from "react"


interface UseHoverBind {
    onHover: () => void;
    onBlur: () => void;
}

type UseHoverResult = [boolean, UseHoverBind];

export const useHover = () => {
    const [isHover, setIsHover] = useState<boolean>(false);

    const onMouseEnter = useCallback(() => {
        setIsHover(true);
    }, [setIsHover]);

    const onMouseLeave = useCallback(() => {
        setIsHover(false);
    }, [setIsHover])

    return useMemo(() => [
        isHover,
        {
            onMouseEnter,
            onMouseLeave
        }
    ], [isHover, onMouseEnter, onMouseLeave]);

};
