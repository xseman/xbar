import styles from './lib/styles.js';
import parse from './lib/parse.js';

export const command = './xbar/scripts/status.sh';
export const refreshFrequency = 30000;

export function render({ output, error }) {
    if (error) {
        return (
            <div>
                Something went wrong: <strong>{String(error)}</strong>
            </div>
        );
    }
    const data = parse(output);
    return (
        data && (
            <div
                style={{
                    right: '0',
                    position: 'fixed',
                    display: 'flex',
                    color: styles.colors.dim,
                    fontFamily: styles.fontFamily,
                    fontSize: styles.fontSize,
                    lineHeight: styles.lineHeight,
                    fontWeight: styles.fontWeight,
                }}
            >
                {[data.date, data.time].map((item, i) => (
                    <div key={i} style={{ margin: '0 12px 0 0' }}>
                        {`| ${item}`}
                    </div>
                ))}
            </div>
        )
    );
}

export default null;
