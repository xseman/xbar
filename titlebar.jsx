import styles from "./lib/styles.js";
import parse from "./lib/parse.js";

export const refreshFrequency = false;
export const command = "./xbar/scripts/titlebar.sh";

export function render({ output, error }) {
    const data = parse(output);
    if (error || !data) {
        return <strong>{String(error)}</strong>;
    }

    const { windows } = data;
    const focused = windows.find((window) => window.focused === 1);
    return (
        focused && (
            <div
                style={{
                    position: "fixed",
                    display: "flex",
                    width: "100%",
                    zIndex: 0,
                    color: styles.colors.dim,
                    fontFamily: styles.fontFamily,
                    fontSize: styles.fontSize,
                    lineHeight: styles.lineHeight,
                    fontWeight: styles.fontWeight,
                }}
            >
                <div style={{ margin: "auto" }}>{focused.title}</div>
            </div>
        )
    );
}
