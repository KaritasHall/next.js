// import { FetchComic } from "./api/comic.js";

export default function Comic({ results }) {
  console.log(results);
  return (
    <div>
      <p>testing</p>
      {results && results.comic?.map((comic) => <h2>{comic.title}</h2>)}
    </div>
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
