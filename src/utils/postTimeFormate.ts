import {
	differenceInHours,
	differenceInDays,
	differenceInSeconds,
	differenceInWeeks,
	differenceInMinutes,
	differenceInYears,
	differenceInMonths,
} from "date-fns";

export function postTimeFormate(timeStamp: Date) {
	const now = new Date();
	const secondsDiff = differenceInSeconds(now, timeStamp);
	const minutesDiff = differenceInMinutes(now, timeStamp);
	const hoursDiff = differenceInHours(now, timeStamp);
	const daysDiff = differenceInDays(now, timeStamp);
	const weeksDiff = differenceInWeeks(now, timeStamp);
	const monthsDiff = differenceInMonths(now, timeStamp);
	const yearsDiff = differenceInYears(now, timeStamp);

	if (secondsDiff < 60) {
		return `${secondsDiff}s ago`;
	} else if (minutesDiff < 60) {
		return `${minutesDiff}m ago`;
	} else if (hoursDiff < 24) {
		return `${hoursDiff}h ago`;
	} else if (daysDiff < 2) {
		return `${daysDiff}day ago`;
	} else if (daysDiff < 7) {
		return `${daysDiff}days ago`;
	} else if (weeksDiff < 2) {
		return `${weeksDiff}week ago`;
	} else if (weeksDiff < 8) {
		return `${weeksDiff}weeks ago`;
	} else if (monthsDiff < 2) {
		return `${monthsDiff}month ago`;
	} else if (monthsDiff <= 12) {
		return `${monthsDiff}months ago`;
	} else {
		return `${yearsDiff}years ago`;
	}
}
