import { fireAuth } from "@/configs/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref } from "vue";

const error = ref(null);
const isPending = ref(false);

const signup = async (fullName, email, password) => {
  isPending.value = true;
  error.value = null;
  try {
    const response = await createUserWithEmailAndPassword(
      fireAuth,
      email,
      password
    );
    await updateProfile(response.user, {
      displayName: fullName,
    });
    return response;
  } catch (err) {
    error.value = err.message;
  } finally {
    isPending.value = false;
  }
};

export const useSignUp = () => {
  return {
    error,
    isPending,
    signup,
  };
};
