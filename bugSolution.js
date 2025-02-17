// bugSolution.js
import { useRouter } from 'next/router';

export async function getStaticProps(context) {
  const { locale } = context;
  // Fetch data based on the locale
  const data = await fetchData(locale);
  return { props: { data } };
}

async function fetchData(locale) {
  // Replace with your actual data fetching logic
  // Example: Fetching localized product names
  const products = await fetch(`/api/products?locale=${locale}`).then(res => res.json());
  return { products };
}

function MyComponent({ data }) {
  const router = useRouter();
  const locale = router.locale;
  return (
    <div>
      <h1>Products ({locale})</h1>
      <ul>
        {data.products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default MyComponent; 