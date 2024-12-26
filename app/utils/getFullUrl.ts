export const getFullUrl = (path: string) => {
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return `https://manapuraza.com${process.env.NEXT_PUBLIC_BASE_PATH}/${cleanPath}`;
};
