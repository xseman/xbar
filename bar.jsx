import styles from './lib/styles.js';

export const refreshFrequency = false;

export function render() {
    return (
        <div
            style={{
                background: styles.colors.bg,
                zIndex: '-1',
                width: '100%',
                height: '21px',
                position: 'fixed',
            }}
        />
    );
}

export default null;
