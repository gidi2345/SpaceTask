import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
} from 'recoil';

const missionCreateAtom = atom({
    key: 'missionCreateAtom', // unique ID (with respect to other atoms/selectors)
    default: {
        title: '',
        description: '',
        timeToComplete: 0,
        locationString: '',
        performers:[]
    }
});

export default missionCreateAtom
