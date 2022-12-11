import moment from "moment";

const useSubscription = () => {
  const storagedUser = JSON.parse(localStorage.getItem("user"));

  const today = moment();
  const subscriptionStart = moment(storagedUser.subscriptionStart);
  const subscriptionEnd = subscriptionStart.add(30, "days");
  const subscriptionRemainingInDays = subscriptionEnd.diff(today, "days", false);

  return {
    today,
    subscriptionStart,
    subscriptionEnd,
    subscriptionRemainingInDays,
  };
};

export default useSubscription;
