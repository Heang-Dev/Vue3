import {ref} from "vue";

import { useEventListeners} from "@/Composable/useEventListeners.js";

export const useMouseTracker = () => {
    const x = ref(0);
    const y = ref(0);

    const updatePosition = (e) => {
        x.value = e.pageX;
        y.value = e.pageY;
    }

    useEventListeners(window, "mousemove", updatePosition);
    // useEventListeners(window, "click", () => console.log("Clicked"));

    return { x, y };
}