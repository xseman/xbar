import styles from "./lib/styles.js";

export const refreshFrequency = false;

export function render({ error }) {
    if (error) {
        return <strong>{String(error)}</strong>;
    }

    return (
        <div
            style={{
                background: styles.colors.bg,
                zIndex: "-1",
                width: "100%",
                height: "21px",
                position: "fixed",
            }}
        />
    );
}
