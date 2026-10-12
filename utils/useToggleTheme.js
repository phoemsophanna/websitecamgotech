import { create } from "zustand";

const useToggleTheme = create((set, get) => ({
    isThemeDark: true,
    setTheme: () => {
        set({isThemeDark: !get().isThemeDark});
    }
}));

export default useToggleTheme;