import { db } from "~/server/db";

const MOCK_URLS = [
  "https://utfs.io/f/ff5b0949-71cf-4809-903c-a24822e47977-1d.png",
  "https://utfs.io/f/4043c822-120f-4fc3-abad-6d128fda5c18-1e.jpeg",
  "https://utfs.io/f/e439e5ea-9586-4bca-8b9b-fd2d9cbdd55c-1f.png",
  "https://utfs.io/f/afb928a4-64b4-4767-b062-39ed1c371750-1g.jpeg",
];

const MOCK_IMAGES = [...MOCK_URLS, ...MOCK_URLS, ...MOCK_URLS].map(
  (url, index) => ({
    id: index + 1,
    url,
  }),
);

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id} className="w-48 p-4">
            <div>{post.name}</div>
          </div>
        ))}
        {MOCK_IMAGES.map((image) => (
          <div key={image.id} className="w-48 p-4">
            <img src={image.url} alt="mock" />
          </div>
        ))}
      </div>
    </main>
  );
}
