// create slug
export const createSlug = (String) => {
    const slug = String.toLowerCase().replace(/[^\w]/g, "-");
    return slug;
}