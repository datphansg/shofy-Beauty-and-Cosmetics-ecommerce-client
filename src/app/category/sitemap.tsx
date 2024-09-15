import { MetadataRoute } from 'next';
import slugify from 'slugify';

async function fetchAllCategories() {
  const response = await fetch(`https://app-api.selly.vn/product-categories`);
  if (!response.ok) {
    throw new Error('Failed to fetch categories data');
  }
  // Correct way to extract JSON data
  return response.json();
}


export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Fetch all categories
  const categoriesJson = await fetchAllCategories();
  const categories = categoriesJson?.data?.categories;
  let postEntries: MetadataRoute.Sitemap = [];
  // Loop through each category and fetch its posts
  const categoryEntries = categories.map((post: any) => ({
    url: `${process.env.NEXT_PUBLIC_URL}/category/${slugify(post.name, { lower: true })}/${post._id}`,
    lastModified: new Date(),
  }));

  postEntries = [...postEntries, ...categoryEntries];

  return postEntries;
}
