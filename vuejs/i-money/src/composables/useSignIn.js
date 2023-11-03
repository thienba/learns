import { fireAuth } from "@/configs/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { ref } from "vue";

const error = ref(null);
const isPending = ref(false);

const signIn = async (email, password) => {
  isPending.value = true;
  error.value = null;
  try {
    const response = await signInWithEmailAndPassword(
      fireAuth,
      email,
      password
    );
    console.log(response);
    return response;
  } catch (err) {
    error.value = err.message;
  } finally {
    isPending.value = false;
  }
};

export const useSignIn = () => {
  return {
    error,
    isPending,
    signIn,
  };
};
