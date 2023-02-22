## Next.js Blog site

This project is based on a starter template for [Learn Next.js](https://nextjs.org/learn).

I have two blog posts that are stored locally as md files. In /lib/post.js the blog posts get an id, are sorted by date and the markdown converted into HTML. Each blog post has a dynamic route based on id (see [id].js ). Finally the posts are rendered on index.js, there I use getStaticProps to get the data from lib/post.js before passing it as props to the JSX.

I really wanted to try to use an external api with next.js and make use of getServerSideProps(). I made a page that fetches and displays the current xkcd comic (there is a new one 3x a week) You can see that in dailycomic.js.
