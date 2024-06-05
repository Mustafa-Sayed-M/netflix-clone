// ## Change Input Search Handler
export const handleChangeInputSearch = (e, setState) => {
    const searchValue = e.target.value;
    if (searchValue === '') {
        setState(null);
    }
};

// ## Change Year Handler
export const handleChangeYear = (e, setState) => {
    const yearValue = e.target.value;
    if (yearValue) {
        setState(yearValue);
    } else {
        setState(null);
    }
};

// ## Change Star Handler
export const handleChangeStar = (e, setState) => {
    const startValue = e.target.value;
    setState(startValue);
};

// Runtime Handler
export const handleRuntime = (runtime) => {
    if (runtime > 360) {
        return "6h " + (runtime - 360) + " minutes"
    } else if (runtime === 360) {
        return "5 hours"
    } else if (runtime > 300) {
        return "5h " + (runtime - 300) + " minutes"
    } else if (runtime === 300) {
        return "5 hours"
    } else if (runtime > 240) {
        return "4h " + (runtime - 240) + " minutes"
    } else if (runtime === 240) {
        return "4 hours"
    } else if (runtime > 180) {
        return "3h " + (runtime - 180) + " minutes"
    } else if (runtime === 180) {
        return "3 hours"
    } else if (runtime > 120) {
        return "2h " + (runtime - 120) + " minutes"
    } else if (runtime === 120) {
        return "2 hours"
    } else if (runtime > 60) {
        return "1h " + (runtime - 60) + " minutes"
    } else if (runtime === 60) {
        return "1 hour"
    } else {
        return runtime + " minutes";
    }
};