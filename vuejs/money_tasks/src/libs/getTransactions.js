import { ref } from "vue";

const getTransactions = () => {
  const txList = ref([]);
  const err = ref("");

  const fetchAllTx = async () => {
    try {
      const response = await fetch("http://localhost:3000/transactions");
      if (!response.ok) throw new Error("Something is wrong...");
      txList.value = await response.json();
    } catch (error) {
      err.value = error;
    }
  };

  return { txList, err, fetchAllTx };
};

export default getTransactions;
