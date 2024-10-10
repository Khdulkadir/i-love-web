<script>
    export let data;
</script>


<ul>
    {#each data.posts as post}
        <li>
            <h2><a href={`/posts/${post.slug}`}>{post.title}</a></h2>
            <p>{post.date}</p>
        </li>
    {/each}
</ul>