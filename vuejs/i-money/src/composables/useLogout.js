import { fireAuth } from "@/configs/firebase";
import { signOut } from "firebase/auth";
import { ref } from "vue";

const error = ref(null);

const logout = async () => {
  error.value = null;
  try {
    const response = await signOut(fireAuth);
    return response;
  } catch (err) {
    error.value = err.message;
  }
};

export const useLogout = () => {
  return {
    error,
    logout,
  };
};
