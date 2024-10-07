import { WidgetGrid } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Main",
  description: "Generated main page",
};

const MainPage = () => {
  return (
    <div className="text-center text-black">
      <h1 className="text-5xl mt-3">Dashboard</h1>
      <span>Informacion general</span>
      <WidgetGrid />
    </div>
  );
};

export default MainPage;
