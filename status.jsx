import styles from "./lib/styles.js";
import parse from "./lib/parse.js";

export const command = "./xbar/scripts/status.sh";
export const refreshFrequency = 30000;

export function render({ output, error }) {
    const data = parse(output);
    if (error || !data) {
        return <strong>{String(error)}</strong>;
    }

    const { date, time } = data;
    // sort them, by how you want them displayed in the status bar
    const items = [date, time];

    return (
        <div
            style={{
                right: "0",
                paddingRight: "5px",
                position: "fixed",
                display: "flex",
                color: "white",
                zIndex: 1,
                fontFamily: styles.fontFamily,
                fontSize: styles.fontSize,
                lineHeight: styles.lineHeight,
                fontWeight: styles.fontWeight,
            }}
        >
            {items.map((item, i) => (
                <div key={i} style={{ paddingRight: "7px" }}>
                    {" | "}
                    {item}
                </div>
            ))}
        </div>
    );
}
