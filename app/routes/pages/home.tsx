import type { Route } from "../pages/+types/home";
import Banner from "~/components/sections/Banner";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "MRiDuL-ICE - Personal Portfolio" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <Banner />;
}
