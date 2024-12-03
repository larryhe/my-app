import { format } from "date-fns";

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export function formatDollar(amount: number) {
  return currency.format(amount);
}

export function formatDate(date: string) {
  return format(new Date(date), "MMMM dd, yyyy");
}
