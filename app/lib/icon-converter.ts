import {IconType} from "react-icons";
import * as Fi from "react-icons/fi";

export const getIcon = (iconName: string): IconType => {
    return (Fi as any)[iconName] || Fi.FiInfo;
};
