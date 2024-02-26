import useData from "./useData";

export interface Platform {
    id: number;
    name: string;
    slug: string;
    platforms: Platform[];
}

const usePlatform = () => useData<Platform>("platforms/lists/parents");

export default usePlatform;