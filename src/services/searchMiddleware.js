export default function searchMiddleWare(res) {
    const { data } = res;
    return {
        results: data.results,
        total: data.total,
    }
}