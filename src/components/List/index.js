
    import React from 'react';

    import Card from '../Card';
    import { Container } from './styles';

    import { MdAdd } from "react-icons/md";
    
    export default function List() {
        return (
            <Container>
                <header>
                    <h2>Tarefas</h2>
                    <button> 
                        <MdAdd size={24} color="#fff" /> 
                    </button>
                </header>
                <ul>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    
                    
                </ul>
            </Container>
        );
    }