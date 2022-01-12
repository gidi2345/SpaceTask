import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
} from 'recoil';

const modalsAtom = atom({
    key: 'modalsAtom', // unique ID (with respect to other atoms/selectors)
    default: {
        missionCreate: false,
        contacts: false,
    }
});

export default modalsAtom
