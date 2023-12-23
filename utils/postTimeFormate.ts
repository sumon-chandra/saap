import {
   differenceInHours,
   differenceInDays,
   differenceInSeconds,
   differenceInWeeks,
   differenceInMinutes,
   differenceInYears
} from "date-fns"

export function postTimeFormate(timeStamp: Date) {
   const now = new Date()
   const secondsDiff = differenceInSeconds(now, timeStamp)
   const minutesDiff = differenceInMinutes(now, timeStamp)
   const hoursDiff = differenceInHours(now, timeStamp)
   const daysDiff = differenceInDays(now, timeStamp)
   const weeksDiff = differenceInWeeks(now, timeStamp)
   const yearsDiff = differenceInYears(now, timeStamp)

   if (secondsDiff < 60) {
      return `${secondsDiff} s ago`
   } else if (minutesDiff < 60) {
      return `${minutesDiff} m ago`
   } else if (hoursDiff < 24) {
      return `${hoursDiff} h ago`
   } else if (daysDiff < 7) {
      return `${daysDiff} days ago`
   } else if (weeksDiff < 30) {
      return `${weeksDiff} weeks ago`
   } else {
      return `${yearsDiff} years ago`
   }

}