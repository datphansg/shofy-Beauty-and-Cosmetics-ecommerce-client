import { MetadataRoute } from 'next';
import slugify from 'slugify';

// Function to fetch all categories
async function fetchAllCategories() {
  const response = await fetch(`https://app-api.selly.vn/product-categories`);
  if (!response.ok) {
    throw new Error('Failed to fetch categories data');
  }
  //const data = await response.json();
  return response.json(); // Assuming the API returns a `categories` field
}

// Function to fetch brands by category ID
async function getBrandByCategoryId(categoryId: string) {
  const response = await fetch(
    `https://app-api.selly.vn/brands?category=${categoryId}`
  );
  if (!response.ok) {
    throw new Error(`Failed to fetch brands for category ${categoryId}`);
  }
  return response.json();
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Fetch all categories
  const categoriesJson = await fetchAllCategories();
  const categories = categoriesJson.data.categories;
  let brandEntries: MetadataRoute.Sitemap = [];
  // Loop through each category and fetch its brands
  for (const category of categories) {
    const brandsJson = await getBrandByCategoryId(category._id);
    const brands = brandsJson.data.brands;
    // Generate a sitemap entry for each brand in the category
    const categoryBrandEntries = brands.map((brand: any) => ({
      url: `${process.env.NEXT_PUBLIC_URL}/brand/${slugify(brand.name, { lower: true })}/${brand._ids}`,
      lastModified: new Date(),
    }));

    // Add the brand entries to the main sitemap array
    brandEntries = [...brandEntries, ...categoryBrandEntries];
  }

  return brandEntries;
}
