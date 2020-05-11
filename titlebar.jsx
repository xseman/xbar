import styles from './lib/styles.js';
import parse from './lib/parse.js';

export const refreshFrequency = false;
export const command = './xbar/scripts/titlebar.sh';

export function render({ output, error }) {
    if (error) {
        return (
            <div>
                Something went wrong: <strong>{String(error)}</strong>
            </div>
        );
    }

    const windows = parse(output);
    const focused =
        windows !== undefined
            ? windows.find(window => window.focused === 1)
            : undefined;

    return (
        focused && (
            <div
                style={{
                    position: 'fixed',
                    display: 'flex',
                    width: '100%',
                    color: styles.colors.dim,
                    fontFamily: styles.fontFamily,
                    fontSize: styles.fontSize,
                    lineHeight: styles.lineHeight,
                    fontWeight: styles.fontWeight
                }}
            >
                <div style={{ margin: 'auto' }}>{focused.title}</div>
            </div>
        )
    );
}

export default null;
