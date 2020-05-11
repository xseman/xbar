import styles from './lib/styles.js';
import parse from './lib/parse.js';

export const refreshFrequency = false;
export const command = './xbar/scripts/spaces.sh';

export function render({ output, error }) {
    if (error) {
        return (
            <div>
                Something went wrong: <strong>{String(error)}</strong>
            </div>
        );
    }
    const spaces = parse(output);
    return (
        <div
            style={{
                padding: '0 8px',
                position: 'fixed',
                fontFamily: styles.fontFamily,
                lineHeight: styles.lineHeight,
                fontSize: styles.fontSize,
                color: styles.colors.dim,
                fontWeight: styles.fontWeight,
            }}
        >
            <div style={{ display: 'flex' }}>
                {spaces &&
                    spaces.map((space, i) => {
                        const { index, focused, windows } = space;
                        const contentStyle = {
                            width: '3ch',
                            marginRight: '7px',
                        };
                        if (focused == 1) {
                            contentStyle.color = styles.colors.fg;
                            contentStyle.fontWeight = '700';
                        }
                        return focused ? (
                            <div key={i} style={contentStyle}>
                                {`[${index}]`}
                            </div>
                        ) : (
                            <div key={i} style={contentStyle}>
                                <span>&nbsp;</span>
                                {index}
                                {windows.length > 0 && '°'}
                                <span>&nbsp;</span>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}

export default null;
