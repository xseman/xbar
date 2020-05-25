import { run } from "uebersicht";

import styles from "./lib/styles.js";
import parse from "./lib/parse.js";

export const refreshFrequency = false;
export const command = "./xbar/scripts/spaces.sh";

export function render({ output, error }) {
    const data = parse(output);
    if (error || !data) {
        return <strong>{String(error)}</strong>;
    }

    // for clickable space switching
    // enable interaction shortcut in ubersicht settings
    function changeSpace(index) {
        run(`/usr/local/bin/yabai -m space --focus ${index}`);
    }

    const { spaces } = data;
    return (
        <div
            style={{
                padding: "0 8px",
                position: "fixed",
                zIndex: 1,
                fontFamily: styles.fontFamily,
                lineHeight: styles.lineHeight,
                fontSize: styles.fontSize,
                color: styles.colors.dim,
                fontWeight: styles.fontWeight,
            }}
        >
            <div style={{ display: "flex" }}>
                {spaces &&
                    spaces.map((space) => {
                        const { index, focused, windows } = space;
                        const contentStyle = {
                            width: "3ch",
                            marginRight: "7px",
                        };
                        if (focused == 1) {
                            contentStyle.color = styles.colors.fg;
                            contentStyle.fontWeight = "700";
                        }
                        return focused ? (
                            <div
                                key={index}
                                style={contentStyle}
                                onClick={changeSpace.bind(undefined, index)}
                            >
                                {`[${index}]`}
                            </div>
                        ) : (
                            <div
                                key={index}
                                style={contentStyle}
                                onClick={changeSpace.bind(undefined, index)}
                            >
                                <span>&nbsp;</span>
                                {index}
                                {windows.length > 0 && "°"}
                                <span>&nbsp;</span>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}
