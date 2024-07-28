// skillPoints.js
import { SKILL_LIST } from './consts.js';

export const initializeSkillPoints = () => {
    const skillPoints = {};
    for (const skill of SKILL_LIST) {
        skillPoints[skill.name] = 0;
    }
    return skillPoints;
};

export const calculateUsedPoints = (skillPoints) => {
    let usedPts = 0;
    Object.values(skillPoints).forEach((val) => {
        usedPts += val;
    });
    return usedPts;
};

export const handleAddSkill = (skillPoints, setSkillPoints, skill, totalPoints, calculateUsedPoints) => {
    if (totalPoints > calculateUsedPoints(skillPoints)) {
        setSkillPoints((prev) => ({
            ...prev,
            [skill]: prev[skill] + 1,
        }));
    }
};

export const handleSubtractSkill = (skillPoints, setSkillPoints, skill) => {
    if (skillPoints[skill] > 0) {
        setSkillPoints((prev) => ({
            ...prev,
            [skill]: prev[skill] - 1,
        }));
    }
};
