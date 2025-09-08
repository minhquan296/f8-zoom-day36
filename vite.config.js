import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
	plugins: [react()],
	base: "/f8-zoom-day36/", // Tên repo của bạn
});
