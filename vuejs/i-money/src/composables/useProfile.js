import { fireAuth } from "@/configs/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { ref } from "vue";

const user = ref(fireAuth.currentUser);

onAuthStateChanged(fireAuth, (_user) => {
  if (_user) user.value = _user;
});

const getProfile = () => {
  return {
    user,
  };
};

export const useProfile = () => {
  return {
    getProfile,
  };
};
