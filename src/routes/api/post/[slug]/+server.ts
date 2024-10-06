import { error, json } from '@sveltejs/kit';

export async function GET({ params }) {
	try {
		const post = await import(`../../../../posts/${params.slug}.md`);
		const content = post.default;

		return json([
			{
				content: content.render(),
				...post.metadata,
				slug: params.slug
			}
		]);
	} catch (e) {
		error(404, `Could not find ${params.slug}`);
	}
}
