import { useState } from "react";

export const useSelect = () => {

    const [isSelectOpen, setIsSelectOpen] = useState(false);
    const [optionValue, setOptionValue] = useState('Select an option');

    const handleToggle = () => {
        setIsSelectOpen((prev) => !prev);
    }

    const handleSelectedOption = (value: string) => {
        setOptionValue(value);
        handleToggle();
    }

    return {
        isSelectOpen,
        handleToggle,
        optionValue,
        handleSelectedOption
    }
}