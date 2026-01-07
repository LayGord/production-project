
type Mods = Record<string, boolean | string>

export const classNames = (cls: string, mods: Mods = {}, additional: string[] = []) => {
    return [
        cls,
        ...additional,
        ...Object
            .entries(mods)
            .filter(([classname, value]) => Boolean(value))
            .map(([classname, value]) => classname)
    ].join(' ')
};