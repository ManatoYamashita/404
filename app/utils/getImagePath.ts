export const getImagePath = (imagePath: string) => {
    const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
    return `${process.env.NEXT_PUBLIC_BASE_PATH}/${cleanPath}`;
};
