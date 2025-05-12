import { computed, ref} from "vue";
import { defineStore} from "pinia";

export const useCompositionAPIStore = defineStore('user2', () => {
    const first_name = ref("");
    const last_name = ref("");
    const avatar_url = ref("");

    const full_name = computed(() => {
        return first_name.value + " " + last_name.value;
    });

    const fetchUser2 = () => {
        first_name.value = "Chhun";
        last_name.value = "Mengheang";
    }

    return {
        first_name,
        last_name,
        avatar_url,
        full_name,
        fetchUser2,
    }
})