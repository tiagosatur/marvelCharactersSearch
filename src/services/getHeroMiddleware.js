export default function getHeroMiddleware(res) {
    const { data: { results } } = res;
    return results[0]
}