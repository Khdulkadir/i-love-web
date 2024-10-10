import { posts } from '$lib/posts.js';

export async function load() {
	return {
		posts
	};
}
