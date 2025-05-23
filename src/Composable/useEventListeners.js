import { onMounted, onUnmounted} from "vue";

export const useEventListeners = (target, event, callback) => {
    onMounted(() => {
        target.addEventListener(event, callback);
    });
    onUnmounted(() => {
        target.removeEventListener(event, callback);
    })
}