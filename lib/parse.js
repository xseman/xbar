function parse(data) {
    try {
        const parsed = JSON.parse(data);
        // console.info(parsed);
        return parsed;
    } catch (e) {
        console.error(e);
        return undefined;
    }
};

export default parse;
