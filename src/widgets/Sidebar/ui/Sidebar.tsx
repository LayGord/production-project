import { useState } from "react";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss";


interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(true);
    const onToggle = () => setCollapsed(prev => !prev);
    
    return (
        <div
            data-testid='sidebar'
            className={ classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className]) }
        >
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
            <Button
                data-testid='collapse_btn'
                onClick={onToggle}
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls['collapse_button']}
            >
                {collapsed ? '>>>' : '<<<'}
            </Button>
        </div>
    );
};
