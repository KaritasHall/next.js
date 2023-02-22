import Layout from "../components/layout";

export default function Comic({ results }) {
  console.log(results);
  return (
    <Layout>
      <p>
        {results.day}.{results.month}.{results.year}
      </p>
      <h2>{results.title}</h2>
      <img src={results.img} alt={results.alt} />
    </Layout>
  );
}

// This function runs only on the server side
export async function getServerSideProps() {
  console.log("Hello!!!");

  const response = await fetch("https://xkcd.com/info.0.json");
  const data = await response.json();
  console.log(data);

  return {
    props: { results: data },
  };
}
