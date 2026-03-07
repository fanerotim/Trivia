import { useState } from "react";

export const useSelect = () => {
    
    const [isSelectOpen, setIsSelectOpen] = useState(false);

    const handleToggle = () => {
        setIsSelectOpen((prev) => !prev);
    }

    return {
        isSelectOpen,
        handleToggle
    }
}