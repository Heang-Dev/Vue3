import {onMounted, onUnmounted, ref} from "vue";

export const useMouseTracker = () => {
    const x = ref(0);
    const y = ref(0);

    const updatePosition = (e) => {
        x.value = e.pageX;
        y.value = e.pageY;
    }

    onMounted(
        () => window.addEventListener('mousemove', updatePosition)
    );
    onUnmounted(
        () => window.removeEventListener('mousemove', updatePosition)
    );

    return { x, y };
}