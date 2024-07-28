// attributes.js
export const initialAttributes = {
    'Strength': 10,
    'Dexterity': 10,
    'Constitution': 10,
    'Intelligence': 10,
    'Wisdom': 10,
    'Charisma': 10,
};

export const incrementAttribute = (attributes, setAttributes, attribute) => {
    setAttributes((prev) => ({
        ...prev,
        [attribute]: prev[attribute] + 1,
    }));
};

export const decrementAttribute = (attributes, setAttributes, attribute) => {
    if (attributes[attribute] > 0) {
        setAttributes((prev) => ({
            ...prev,
            [attribute]: prev[attribute] - 1,
        }));
    }
};

export const calculateModifier = (value) => {
    return Math.floor((value - 10) / 2);
};
