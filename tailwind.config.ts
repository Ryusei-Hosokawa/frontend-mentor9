import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  safelist: [
    /^bg-\[/,  // 正規表現を使って、bg-[...] 形式のクラスを安全リストに追加
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // その他の色設定
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        // キーフレームの設定
      },
      animation: {
        // アニメーションの設定
      },
      fontFamily: {
        Rubik: ['Rubik', 'sans-serif']
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config;
