import { Center } from '@mantine/core';
import { useFocusTrap } from '@mantine/hooks';
import {SearchBar} from  '../inputs/searchbar';

export const SearchContainer = () => {
    const focusTrapRef = useFocusTrap();
    return (
        <Center ref={focusTrapRef} h= '97dvh'>
            <SearchBar/>
        </Center>
    );
}
