import moment from "moment";

const useSubscription = () => {
  const storagedUser = JSON.parse(localStorage.getItem("user"));

  const subscriptionStart = moment(storagedUser.subscriptionStart);
  const subscriptionEnd = subscriptionStart.add(30, "days");
  const subscriptionRemainingInDays = subscriptionEnd.diff(moment(), "days", false);

  return {
    subscriptionStart,
    subscriptionEnd,
    subscriptionRemainingInDays,
  };
};

export default useSubscription;
