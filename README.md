# Next.js Locale Data Fetching Bug

This repository demonstrates a potential bug in Next.js applications when using `getStaticProps` or `getStaticPaths` with localized data fetching. The issue arises when the data fetching logic doesn't explicitly account for the current locale, leading to inconsistencies in the displayed data.

## Bug Description

The bug occurs when fetching data that depends on the locale (e.g., localized product names). If the locale is not properly handled within the data fetching function (`getStaticProps` or `getStaticPaths`), the application may fetch data for the default locale regardless of the user's selected locale.  This will result in incorrect data being displayed for users in locales other than the default. 

## Solution

The solution involves ensuring that the locale is explicitly included in all data fetching queries. This ensures the correct data is fetched for each locale. The `bugSolution.js` file provides a corrected implementation.

## How to Reproduce

1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Navigate to different locale paths (e.g., `/en`, `/es`) to observe the inconsistent data (in the `bug.js` file) versus consistent data (in the `bugSolution.js` file).