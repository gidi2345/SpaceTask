import {selector} from "recoil";
import missionCreateAtom from "../missionCreateAtom";

const missionCreateSelector = selector({
    key: 'missionCreateSelectors', // unique ID (with respect to other atoms/selectors)
    get: ({get}) => {
        const newMission = get(missionCreateAtom);

        return newMission;
    },
});

export default missionCreateSelector;
