import { useState } from "react";

export const useSelect = () => {

    const [isSelectOpen, setIsSelectOpen] = useState(false);
    const [optionValue, setOptionValue] = useState('Select an option');

    const handleToggle = () => {
        setIsSelectOpen((prev) => !prev);
    }

    const handleSelectedOption = (value: string, label: string, callback: Function) => {
        setOptionValue(value);
        handleToggle();
        callback(value, label)
    }

    return {
        isSelectOpen,
        handleToggle,
        optionValue,
        handleSelectedOption
    }
}