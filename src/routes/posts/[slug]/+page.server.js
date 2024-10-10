import { posts } from '$lib/posts.js';
import { error } from '@sveltejs/kit';

export function load({ params }) {
    const { slug } = params;
    const post = posts.find(function(postItem) {
        return postItem.slug === slug;
    });

    if (!post) {
        throw error(404, 'Deze pagina bestaat niet');
    }

    return {
        post
    };
}