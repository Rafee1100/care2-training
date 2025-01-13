"use client";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

export default function NProgressBar() {
  return (
    <ProgressBar
      height="2px"
      color="#38D6EF"
      options={{ showSpinner: false }}
      shallowRouting
    />
  );
}
