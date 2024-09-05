export function shortText({
    text = "",
    limit = 20,
    concat = "..."
} = {}) {
    if (!text) return "";

    if (text.length <= limit) {
        return text;
    } else {
        return text.slice(0, limit) + concat;
    }
}

