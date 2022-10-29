import axios from "axios";

export const getRandomActivity = async () => {
  const { data } = await axios.get('http://www.boredapi.com/api/activity/')
  return data
}

export const getActivityByType = async (type) => {
  const { data } = await axios.get(`http://www.boredapi.com/api/activity?type=${type}/`)
  return data
}