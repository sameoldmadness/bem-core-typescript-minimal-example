import { decl } from 'bem-react-core';

let counter: number = 2;

export default decl({
    block: 'Button',
    tag: 'button',
    mods({ size, theme }) {
        return { size, theme };
    }
});
