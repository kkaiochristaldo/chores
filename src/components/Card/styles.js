
    import styled from 'styled-components';
    
    export const Container = styled.div`
        position: relative;
        background-color: var(--black-primary);
        color: #fff;
        border-radius: 5px;
        margin-bottom: 10px;
        padding: 15px;
        box-shadow: 0 1px 2px 0 rgba(192, 208, 230, 0.2);
        cursor: grab;
        
        header {
            
        }
        p {
            font-weight: 500;
            line-height: 20px;
        }
        img {
            width: 24px;
            height: 24px;
            border-radius: 2px;
            margin-top: 5px;

        }
    `;

    export const Label = styled.span`

        width: 45px;
        height: 10px;
        border-radius: 50px;
        display: inline-block;
        background-color: ${props => props.color} ;
    `;
    