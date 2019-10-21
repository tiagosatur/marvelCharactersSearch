import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import Input from '../Input';
import { useForm, useAction, useDebounce } from '../../hooks';
import _ from 'lodash';

import styles from './style';

const Header = () => {

    const {
        search: {
            total,
        }
    } = useSelector(state => state);



    const { searchTermAction } = useAction();

    function validateForm() {
        if(!values.searchTerm) errors.searchTerm = 'Campo requerido'
    }

    const { values, errors, handleInputChange, handleSubmit } = useForm({
        searchTerm: '',
    },
        handleSearchSubmit,
        validateForm
    );

    const debouncedSearchTerm = useDebounce(values.searchTerm, 800);

    useEffect(() => {
        if(debouncedSearchTerm && debouncedSearchTerm.length > 1) {
            searchTermAction(debouncedSearchTerm)
        }
    }, [debouncedSearchTerm]);

    
    function handleSearchTerm(text) {
        handleInputChange('searchTerm', text)
    }

    function handleSearchSubmit() {
        searchTermAction(values.searchTerm);
    }

    return(
        <View>
            <View style={styles.container}>
                <View style={styles.heading}>
                    <View style={styles.titleRelative}>
                        <Text style={styles.title}>BUSCA MARVEL</Text>
                        <View style={styles.titleUnderline}></View>
                    </View>
                    <Text style={styles.subtitle}>HERÓI FAVORITO</Text>
                </View>
                <View >
                    <Text style={styles.label}>Nome do personagem</Text>
                </View>
                <View style={styles.searchBox}>
                    <Input
                        name='searchTerm'
                        value={values.searchTerm}
                        onChangeText={handleSearchTerm}
                        placeholder=''

                    />
                </View>
            </View>

            <View style={styles.bottomHeader}>
                {
                    (debouncedSearchTerm !== '' 
                        && debouncedSearchTerm.length > 1) 
                    && (total !== null && total > 1) 

                    ? <Text style={styles.bottomText}>
                        Encontramos { total } { total === 1 ? 'resultado' : 'resultados'} para o termo { debouncedSearchTerm }
                    </Text>
                    : null
                }
                    
               

            </View>
        </View>
    );
}

export default Header;