import { GetStaticPaths, GetStaticProps } from "next"

export default function BlogPost({ date }) {
  return (
    <>
      <h1>Hello from the blog</h1>
      <p>It is {date}</p>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      date: new Date().toISOString()
    },
    revalidate: 5 // 5 seconds
  }
}