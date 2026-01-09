export async function generateMetadata({ params }) {
  const { id } = await params;

  return {
    title: `Anime #${id} | FE Test - Rizieq`,
    description: `View details of anime #${id}`,
  };
}

export default function Layout({ children }) {
  return children;
}
