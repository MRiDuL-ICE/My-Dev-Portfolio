import Welcome from "~/welcome/welcome";
import type { Route } from "../pages/+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "MRiDuL-ICE" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <Welcome></Welcome>;
}
