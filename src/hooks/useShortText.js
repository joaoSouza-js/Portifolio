import { shortText } from "../utils/shortText";
import { useState } from "react";

export function useShortText({ text = "", limit = 20, concat = "..." } = {}) {
    const [textIsShortened, setTextIsShortened] = useState(true);
    const shortTextResult = shortText({ text, limit, concat });

    const textNeedToBeShortened = text.length > limit;

    function showAllText() {
        setTextIsShortened(false);
    }

    function showShortText() {
        setTextIsShortened(true);
    }

    function handleChangeTextShortened() {
        setTextIsShortened(prevState => !prevState);
    }

    return {
        textIsShortened,
        showAllText,
        showShortText,
        handleChangeTextShortened,
        textNeedToBeShortened,
        shortTextResult,
    };
}
