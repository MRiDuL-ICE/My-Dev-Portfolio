import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    // index("./components/layout/MainLayout.tsx"),
    route('', "./components/layout/MainLayout.tsx", [
        index("./routes/pages/home.tsx")
    ])
] satisfies RouteConfig;
