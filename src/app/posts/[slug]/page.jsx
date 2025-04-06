export default async function Posts({ params }){

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.slug}`);
    const post = res => res.json();

    return <div>
        <div>{ post.title }</div>
        <div>{ post.body }</div>
    </div>
}

// export async function getStaticProps({ params }){
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.slug}`);
//     const data = res.json();

//     return {
//         props: {
//             post: data
//         }
//     }
// }

// export async function getStaticPaths(params) {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//     const data = res.json();

//     const paths = data.map((post) => ({
//         params: {id: post.id.toString()}
//     }))

//     return {paths, fallback:true}

// }

// export async function getServerSideProps(context)
// {
//     const res = await fetch(
//         "https://jsonplaceholder.typicode.com/posts");
//     const posts = await res.json();

//     return {
//         props : {posts},
//     };
// }