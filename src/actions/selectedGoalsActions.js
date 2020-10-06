export const selectedGoals = (goals, kidId) => {
  // const { name, totalPoint, id } = kidData;
  return {
    type: "SELECTED_GOALS",
    goals: {...goals}
  }
}