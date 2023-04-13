/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
        container: {
            center: true,
            padding: "1.5rem",
            screens: {
                "2xl": "1440px"
            }
        },
        extend: {}
    },
    plugins: []
};
