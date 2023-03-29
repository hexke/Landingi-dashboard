
import { useCallback, useState } from "react";

const useFilter = <T>(items: T[]): [T[], (filterFn: (item: T) => boolean) => void] => {
    const [filteredItems, setFilteredItems] = useState<T[]>(items);

    const filter = useCallback((filterFn: (item: T) => boolean) => {
        const newFilteredItems = items.filter(filterFn);

        setFilteredItems(newFilteredItems);
    }, [items]);

    return [filteredItems, filter];
}

export default useFilter;