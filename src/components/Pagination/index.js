import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { generatePagination } from '../../utils';
import CircleButton from './CircleButton';
import styles from './style';

const Pagination = ({
    total,
    itemsPerPage,
    handlePageRequest,
    isLoading,
}) => {
    const numberOfPages = Math.round(total / itemsPerPage);

    const [currentPage, setCurrentPage ] = useState(1);
    const [pageList, setPageList ] = useState([]);


    useEffect(() => {
        setPageList(generatePagination(numberOfPages, currentPage))
    }, [total]);

    function calcOffset(currPage) {
        return currPage === 1 ? 0 : (currPage * itemsPerPage) - (itemsPerPage -1);  
    }

    function goToPage(pageNumber) {
        setCurrentPage(pageNumber);
        setPageList(generatePagination(numberOfPages, pageNumber))
        
        let offset = calcOffset(pageNumber)
        
        return { offset, itemsPerPage }
    }
    

    return(
        <View style={styles.container}>
                {
                    pageList && pageList.map((item) => { 
                        return (
                            <CircleButton
                                value={ item }
                                handlePress={() =>  handlePageRequest(goToPage(item))}
                                key={item}
                                active={currentPage === item}
                            />
                        )
                    })
                }
        </View>
    );
}



export default Pagination;